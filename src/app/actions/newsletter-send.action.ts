"use server"

import { Resend } from "resend"
import { cookies, headers } from "next/headers"
import { adminClient } from "@/lib/supabase/admin"
import { createClient } from "@/lib/supabase/server"
import {
  buildNewsletterHtml,
  buildNewsletterText,
} from "./_newsletter-template"

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ??
  "Fuerza del Pueblo <info@fuerzadelpuebloveronpuntacana.com>"

const REPLY_TO_EMAIL =
  process.env.NEWSLETTER_REPLY_TO ?? "info@fuerzadelpuebloveronpuntacana.com"

const FREE_PLAN_DAILY_LIMIT = 100
const RESEND_BATCH_LIMIT = 100
const BETWEEN_BATCH_DELAY_MS = 600

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

type SendResult = {
  success: boolean
  message: string
  sentCount?: number
  failedCount?: number
}

async function getSiteUrl(): Promise<string> {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "")
  }
  const h = await headers()
  const host = h.get("x-forwarded-host") ?? h.get("host")
  const proto = h.get("x-forwarded-proto") ?? "https"
  if (host) return `${proto}://${host}`
  return "https://www.fuerzadelpuebloveronpuntacana.com"
}

function buildUnsubscribeUrl(base: string, token: string): string {
  return `${base}/api/newsletter/unsubscribe?token=${token}`
}

function buildTestUnsubscribeUrl(base: string): string {
  return `${base}/api/newsletter/unsubscribe?test=1`
}

function unsubscribeHeaders(url: string) {
  return {
    "List-Unsubscribe": `<${url}>, <mailto:${REPLY_TO_EMAIL}?subject=unsubscribe>`,
    "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getAdminEmail(): Promise<string | null> {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user?.email ?? null
}

function validateInput(subject: string, body: string): string | null {
  if (!subject?.trim()) return "El asunto es obligatorio."
  if (subject.trim().length > 200) return "El asunto es demasiado largo."
  if (!body?.trim()) return "El contenido del correo es obligatorio."
  const stripped = body
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim()
  if (stripped.length === 0) return "El contenido del correo es obligatorio."
  return null
}

export async function sendNewsletterTest({
  subject,
  body,
}: {
  subject: string
  body: string
}): Promise<SendResult> {
  const adminEmail = await getAdminEmail()
  if (!adminEmail) {
    return { success: false, message: "No autorizado." }
  }

  const validation = validateInput(subject, body)
  if (validation) return { success: false, message: validation }

  const baseUrl = await getSiteUrl()
  const unsubscribeUrl = buildTestUnsubscribeUrl(baseUrl)

  const html = buildNewsletterHtml({ subject, body, unsubscribeUrl })
  const text = buildNewsletterText({ subject, body, unsubscribeUrl })

  const result = await resend.emails.send({
    from: FROM_EMAIL,
    to: adminEmail,
    replyTo: REPLY_TO_EMAIL,
    subject: `[PRUEBA] ${subject}`,
    html,
    text,
    headers: unsubscribeHeaders(unsubscribeUrl),
  })

  if (result.error) {
    console.error("[NewsletterSend] test send error:", result.error)
    return {
      success: false,
      message: `Error al enviar la prueba: ${result.error.message ?? "desconocido"}`,
    }
  }

  return {
    success: true,
    message: `Prueba enviada a ${adminEmail}.`,
  }
}

export async function sendNewsletter({
  subject,
  body,
}: {
  subject: string
  body: string
}): Promise<SendResult> {
  const adminEmail = await getAdminEmail()
  if (!adminEmail) {
    return { success: false, message: "No autorizado." }
  }

  const validation = validateInput(subject, body)
  if (validation) return { success: false, message: validation }

  const { data: subscribers, error: loadError } = await adminClient
    .from("newsletter_subscribers")
    .select("email, unsubscribe_token")
    .is("unsubscribed_at", null)

  if (loadError) {
    console.error("[NewsletterSend] load subscribers error:", loadError)
    return {
      success: false,
      message: "Error al cargar los suscriptores.",
    }
  }

  const list = subscribers ?? []

  if (list.length === 0) {
    return {
      success: false,
      message: "No hay suscriptores activos para enviar.",
    }
  }

  if (list.length > FREE_PLAN_DAILY_LIMIT) {
    return {
      success: false,
      message: `Tienes ${list.length} suscriptores activos. El plan gratuito de Resend permite ${FREE_PLAN_DAILY_LIMIT} envíos al día. Actualiza el plan o reduce destinatarios antes de enviar.`,
    }
  }

  const baseUrl = await getSiteUrl()

  const { data: newsletterRow, error: insertError } = await adminClient
    .from("newsletters")
    .insert({
      subject: subject.trim(),
      body_text: body,
      html: buildNewsletterHtml({
        subject,
        body,
        unsubscribeUrl: buildUnsubscribeUrl(baseUrl, "PREVIEW"),
      }),
      sent_by: adminEmail,
    })
    .select("id")
    .single()

  if (insertError || !newsletterRow) {
    console.error("[NewsletterSend] insert newsletter error:", insertError)
    return {
      success: false,
      message: "Error al registrar el envío en la base de datos.",
    }
  }

  let sentCount = 0
  let failedCount = 0

  // Filter and build per-recipient payload
  const validSubs = list.filter(s => s.email && s.unsubscribe_token)
  failedCount += list.length - validSubs.length

  const trimmedSubject = subject.trim()
  const emailPayloads = validSubs.map(sub => {
    const unsubscribeUrl = buildUnsubscribeUrl(baseUrl, sub.unsubscribe_token!)
    return {
      from: FROM_EMAIL,
      to: sub.email!,
      replyTo: REPLY_TO_EMAIL,
      subject: trimmedSubject,
      html: buildNewsletterHtml({ subject, body, unsubscribeUrl }),
      text: buildNewsletterText({ subject, body, unsubscribeUrl }),
      headers: unsubscribeHeaders(unsubscribeUrl),
    }
  })

  const batches = chunk(emailPayloads, RESEND_BATCH_LIMIT)

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batchPayload = batches[batchIndex]
    const batchSubs = validSubs.slice(
      batchIndex * RESEND_BATCH_LIMIT,
      batchIndex * RESEND_BATCH_LIMIT + batchPayload.length,
    )

    try {
      const result = await resend.batch.send(batchPayload, {
        idempotencyKey: `newsletter-${newsletterRow.id}-batch-${batchIndex}`,
        batchValidation: "permissive",
      })

      if (result.error) {
        failedCount += batchPayload.length
        console.error(
          `[NewsletterSend] batch ${batchIndex} error:`,
          result.error,
        )
      } else {
        const data = result.data
        const sentIds = data?.data ?? []
        const errors =
          (data as { errors?: { index: number; message: string }[] })?.errors ??
          []

        sentCount += sentIds.length
        failedCount += errors.length

        for (const err of errors) {
          const sub = batchSubs[err.index]
          console.error(
            `[NewsletterSend] batch ${batchIndex} item ${err.index} (${sub?.email ?? "?"}) failed:`,
            err.message,
          )
        }
      }
    } catch (err) {
      failedCount += batchPayload.length
      console.error(`[NewsletterSend] batch ${batchIndex} exception:`, err)
    }

    if (batchIndex < batches.length - 1) {
      await sleep(BETWEEN_BATCH_DELAY_MS)
    }
  }

  await adminClient
    .from("newsletters")
    .update({ sent_count: sentCount, failed_count: failedCount })
    .eq("id", newsletterRow.id)

  return {
    success: failedCount === 0,
    message:
      failedCount === 0
        ? `Newsletter enviada a ${sentCount} suscriptor${sentCount === 1 ? "" : "es"}.`
        : `Enviada a ${sentCount}, fallaron ${failedCount}. Revisa los logs del servidor.`,
    sentCount,
    failedCount,
  }
}

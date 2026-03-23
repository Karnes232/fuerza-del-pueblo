// app/actions/contact.action.ts
"use server"

import { Resend } from "resend"
import type { ContactFormData } from "@/types/contact.types"

const resend = new Resend(process.env.RESEND_API_KEY)

// The inbox that receives contact form submissions
const RECIPIENT_EMAIL =
  process.env.CONTACT_RECIPIENT_EMAIL ?? "info@fuerzadelpueblo.do"

// The "from" address — must be a verified domain in your Resend account
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "noreply@fuerzadelpueblo.do"

const GENERIC_SEND_FAILURE =
  "Ocurrió un error al enviar el mensaje. Por favor inténtalo de nuevo o contáctanos directamente."

/** Surface Resend API details locally (never in production unless explicitly enabled). */
const SHOW_RESEND_ERROR_DETAILS =
  process.env.NODE_ENV === "development" ||
  process.env.CONTACT_DEBUG_RESEND === "true"

function resendErrorMessage(error: unknown): string {
  if (error == null) return "Unknown Resend error"
  if (typeof error === "string") return error
  if (typeof error === "object" && "message" in error) {
    const m = (error as { message?: unknown }).message
    if (typeof m === "string" && m.trim()) return m
    if (Array.isArray(m) && m.length > 0) {
      const first = m[0]
      if (typeof first === "string") return first
      if (first && typeof first === "object" && "message" in first) {
        const inner = (first as { message?: unknown }).message
        if (typeof inner === "string") return inner
      }
    }
  }
  try {
    return JSON.stringify(error)
  } catch {
    return String(error)
  }
}

export async function sendContactEmail(data: ContactFormData): Promise<{
  success: boolean
  message: string
}> {
  // Server-side validation
  if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
    return {
      success: false,
      message: "Por favor completa todos los campos requeridos.",
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return {
      success: false,
      message: "Por favor ingresa un correo electrónico válido.",
    }
  }

  try {
    // Resend returns { data, error } — it does not throw on API errors.
    // ── 1. Notification to the party ─────────────────────────────────────────
    const internal = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: data.email,
      subject: `[Contacto Web] ${data.subject}`,
      html: buildInternalEmailHtml(data),
    })
    if (internal.error) {
      const detail = resendErrorMessage(internal.error)
      console.error("[ContactAction] Resend (internal):", detail, internal.error)
      return {
        success: false,
        message: SHOW_RESEND_ERROR_DETAILS
          ? `[Desarrollo] Resend: ${detail}`
          : GENERIC_SEND_FAILURE,
      }
    }

    // ── 2. Auto-reply confirmation to the sender ──────────────────────────────
    const confirmation = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Recibimos tu mensaje — Fuerza del Pueblo",
      html: buildConfirmationEmailHtml(data),
    })
    if (confirmation.error) {
      const detail = resendErrorMessage(confirmation.error)
      console.error(
        "[ContactAction] Resend (confirmation):",
        detail,
        confirmation.error
      )
      return {
        success: false,
        message: SHOW_RESEND_ERROR_DETAILS
          ? `[Desarrollo] Resend (confirmación): ${detail}`
          : "Tu mensaje pudo haberse registrado, pero no pudimos enviar la confirmación por correo. Si no recibes noticias, contáctanos directamente.",
      }
    }

    return {
      success: true,
      message: "¡Mensaje enviado! Nos pondremos en contacto contigo pronto.",
    }
  } catch (error) {
    console.error("[ContactAction] Resend error:", error)
    return {
      success: false,
      message: GENERIC_SEND_FAILURE,
    }
  }
}

// ─── Email Templates ──────────────────────────────────────────────────────────

function buildInternalEmailHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#F4F4F4;font-family:'Open Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F4F4;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#1F4D2B,#00A651);padding:32px 40px;text-align:center;">
              <p style="margin:0;color:rgba(255,255,255,0.7);font-size:13px;letter-spacing:2px;text-transform:uppercase;">Fuerza del Pueblo</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:700;">Nuevo Mensaje de Contacto</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;">
              ${emailField("Nombre", escapeHtml(data.name))}
              ${emailField("Correo Electrónico", '<a href="mailto:' + data.email + '" style="color:#00A651;">' + data.email + "</a>")}
              ${data.phone ? emailField("Teléfono", '<a href="tel:' + data.phone + '" style="color:#00A651;">' + escapeHtml(data.phone) + "</a>") : ""}
              ${emailField("Asunto", escapeHtml(data.subject))}
              <div style="margin-bottom:20px;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;">Mensaje</p>
                <div style="background:#F4F4F4;border-radius:8px;padding:16px;font-size:15px;color:#111;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#F4F4F4;padding:20px 40px;text-align:center;border-top:1px solid #e5e5e5;">
              <p style="margin:0;font-size:12px;color:#999;">Enviado desde el formulario de contacto de <strong>fuerzadelpueblo.do</strong></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function buildConfirmationEmailHtml(data: ContactFormData): string {
  const whatsapp = process.env.WHATSAPP_NUMBER ?? "18095551234"
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#F4F4F4;font-family:'Open Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F4F4;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#1F4D2B,#00A651);padding:40px;text-align:center;">
              <div style="width:64px;height:64px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 16px;line-height:64px;font-size:30px;">&#10003;</div>
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">&#161;Mensaje Recibido!</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:15px;">Fuerza del Pueblo &#8212; Ver&#243;n&#8211;Punta Cana</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 16px;font-size:16px;color:#111;line-height:1.6;">Hola <strong>${escapeHtml(data.name)}</strong>,</p>
              <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.7;">Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad posible. Nuestro equipo revisa todos los mensajes durante horario de oficina.</p>
              <p style="margin:0 0 32px;font-size:15px;color:#555;line-height:1.7;">Si necesitas asistencia inmediata, escr&#237;benos por WhatsApp.</p>
              <div style="text-align:center;margin-bottom:32px;">
                <a href="https://wa.me/${whatsapp}" style="display:inline-block;background:#00A651;color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 32px;border-radius:8px;">Contactar por WhatsApp</a>
              </div>
              <hr style="border:none;border-top:1px solid #eee;margin:0 0 24px;" />
              <p style="margin:0;font-size:13px;color:#999;text-align:center;line-height:1.6;">
                Fuerza del Pueblo &middot; Ver&#243;n&#8211;Punta Cana<br/>
                <a href="https://www.fuerzadelpueblo.do" style="color:#00A651;text-decoration:none;">www.fuerzadelpueblo.do</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function emailField(label: string, value: string): string {
  return (
    '<div style="margin-bottom:20px;">' +
    '<p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;">' + label + "</p>" +
    '<p style="margin:0;font-size:15px;color:#111;">' + value + "</p>" +
    "</div>"
  )
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
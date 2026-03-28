"use server"

import { Resend } from "resend"
import type { JoinFormData } from "@/types/unete.types"
import { createClient } from "@/lib/supabase/client"
import { addNewsletterSubscriber } from "@/app/actions/newsletter.action"

const resend = new Resend(process.env.RESEND_API_KEY)

const RECIPIENT_EMAIL =
  process.env.CONTACT_RECIPIENT_EMAIL ??
  "info@fuerzadelpuebloveronpuntacana.com"

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "info@fuerzadelpuebloveronpuntacana.com"

const GENERIC_SEND_FAILURE =
  "Ocurrió un error al procesar tu solicitud. Por favor inténtalo de nuevo o contáctanos directamente."

const SHOW_RESEND_ERROR_DETAILS =
  process.env.NODE_ENV === "development" ||
  process.env.CONTACT_DEBUG_RESEND === "true"

const MEMBERSHIP_LABELS: Record<string, string> = {
  simpatizante: "Simpatizante",
  militante: "Militante",
  voluntario: "Voluntario",
}

export async function submitJoinForm(data: JoinFormData): Promise<{
  success: boolean
  message: string
}> {
  if (
    !data.firstName?.trim() ||
    !data.lastName?.trim() ||
    !data.email?.trim() ||
    !data.phone?.trim() ||
    !data.dateOfBirth?.trim() ||
    !data.address?.trim() ||
    !data.city?.trim() ||
    !data.membershipType
  ) {
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

  // ── 1. Save to Supabase ───────────────────────────────────────────────────────
  try {
    const supabase = createClient()
    const normalizedEmail = data.email.trim().toLowerCase()

    const { data: existing, error: checkError } = await supabase
      .from("member_applications")
      .select("id")
      .eq("email", normalizedEmail)
    
    if (checkError) {
      console.error("[JoinAction] Supabase check error:", checkError.message)
      return {
        success: false,
        message: "Error al verificar si el correo ya está registrado",
      }
    }
    if (existing && existing.length > 0) {
      return {
        success: false,
        message:
          "Ya existe una solicitud registrada con este correo electrónico. Si crees que es un error, contáctanos directamente.",
      }
    }

    const { error: dbError } = await supabase
      .from("member_applications")
      .insert({
        first_name: data.firstName.trim(),
        last_name: data.lastName.trim(),
        email: normalizedEmail,
        phone: data.phone.trim(),
        date_of_birth: data.dateOfBirth,
        address: data.address.trim(),
        city: data.city.trim(),
        membership_type: data.membershipType,
        interests: data.interests,
        availability: data.availability,
        motivation: data.motivation?.trim() || null,
        receive_updates: data.receiveUpdates,
        status: "new",
      })

    if (dbError) {
      console.error("[JoinAction] Supabase insert error:", dbError.message)
    } else if (data.receiveUpdates) {
      await addNewsletterSubscriber(normalizedEmail)
    }
  } catch (dbException) {
    console.error("[JoinAction] Supabase exception:", dbException)
  }

  // ── 2. Send emails ────────────────────────────────────────────────────────────
  try {
    const internal = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: data.email,
      subject: `[Nueva Solicitud] ${MEMBERSHIP_LABELS[data.membershipType] ?? data.membershipType} — ${data.firstName} ${data.lastName}`,
      html: buildInternalEmailHtml(data),
    })

    if (internal.error) {
      console.error("[JoinAction] Resend (internal):", internal.error)
      return {
        success: false,
        message: SHOW_RESEND_ERROR_DETAILS
          ? `[Desarrollo] Resend: ${internal.error.message}`
          : GENERIC_SEND_FAILURE,
      }
    }

    const confirmation = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Tu solicitud fue recibida — Fuerza del Pueblo",
      html: buildConfirmationEmailHtml(data),
    })

    if (confirmation.error) {
      console.error("[JoinAction] Resend (confirmation):", confirmation.error)
      return {
        success: false,
        message: SHOW_RESEND_ERROR_DETAILS
          ? `[Desarrollo] Resend (confirmación): ${confirmation.error.message}`
          : "Tu solicitud pudo haberse registrado, pero no pudimos enviar la confirmación por correo. Si no recibes noticias, contáctanos directamente.",
      }
    }

    return {
      success: true,
      message:
        "¡Registro exitoso! Te hemos enviado un correo de confirmación. ¡Bienvenido a Fuerza del Pueblo!",
    }
  } catch (error) {
    console.error("[JoinAction] Resend error:", error)
    return { success: false, message: GENERIC_SEND_FAILURE }
  }
}

// ─── Email Templates ──────────────────────────────────────────────────────────

function buildInternalEmailHtml(data: JoinFormData): string {
  const fullName = `${data.firstName} ${data.lastName}`
  const tierLabel =
    MEMBERSHIP_LABELS[data.membershipType] ?? data.membershipType

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
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:700;">Nueva Solicitud de Membresía</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;">
              ${emailField("Nombre Completo", escapeHtml(fullName))}
              ${emailField("Correo Electrónico", `<a href="mailto:${data.email}" style="color:#00A651;">${escapeHtml(data.email)}</a>`)}
              ${emailField("Teléfono", `<a href="tel:${data.phone}" style="color:#00A651;">${escapeHtml(data.phone)}</a>`)}
              ${emailField("Fecha de Nacimiento", escapeHtml(data.dateOfBirth))}
              ${emailField("Ciudad", escapeHtml(data.city))}
              ${emailField("Dirección", escapeHtml(data.address))}
              ${emailField("Tipo de Membresía", `<strong style="color:#00A651;">${escapeHtml(tierLabel)}</strong>`)}
              ${data.interests.length > 0 ? emailField("Áreas de Interés", escapeHtml(data.interests.join(", "))) : ""}
              ${data.availability.length > 0 ? emailField("Disponibilidad", escapeHtml(data.availability.join(", "))) : ""}
              ${
                data.motivation
                  ? `<div style="margin-bottom:20px;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;">Motivación</p>
                <div style="background:#F4F4F4;border-radius:8px;padding:16px;font-size:15px;color:#111;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.motivation)}</div>
              </div>`
                  : ""
              }
              ${emailField("Desea Recibir Actualizaciones", data.receiveUpdates ? "Sí" : "No")}
            </td>
          </tr>
          <tr>
            <td style="background:#F4F4F4;padding:20px 40px;text-align:center;border-top:1px solid #e5e5e5;">
              <p style="margin:0;font-size:12px;color:#999;">Enviado desde el formulario de membresía de <strong>fuerzadelpuebloveronpuntacana.com</strong></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function buildConfirmationEmailHtml(data: JoinFormData): string {
  const whatsapp = process.env.WHATSAPP_NUMBER ?? "18299328036"
  const tierLabel =
    MEMBERSHIP_LABELS[data.membershipType] ?? data.membershipType

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
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">&#161;Solicitud Recibida!</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:15px;">Fuerza del Pueblo &#8212; Ver&#243;n&#8211;Punta Cana</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 16px;font-size:16px;color:#111;line-height:1.6;">Hola <strong>${escapeHtml(data.firstName)}</strong>,</p>
              <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.7;">Hemos recibido tu solicitud de membresía como <strong>${escapeHtml(tierLabel)}</strong>. Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo a la brevedad posible.</p>
              <p style="margin:0 0 32px;font-size:15px;color:#555;line-height:1.7;">Si tienes alguna pregunta, no dudes en escribirnos por WhatsApp.</p>
              <div style="text-align:center;margin-bottom:32px;">
                <a href="https://wa.me/${whatsapp}" style="display:inline-block;background:#00A651;color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 32px;border-radius:8px;">Contactar por WhatsApp</a>
              </div>
              <hr style="border:none;border-top:1px solid #eee;margin:0 0 24px;" />
              <p style="margin:0;font-size:13px;color:#999;text-align:center;line-height:1.6;">
                Fuerza del Pueblo &middot; Ver&#243;n&#8211;Punta Cana<br/>
                <a href="https://www.fuerzadelpuebloveronpuntacana.com" style="color:#00A651;text-decoration:none;">www.fuerzadelpuebloveronpuntacana.com</a>
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
    '<p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;">' +
    label +
    "</p>" +
    '<p style="margin:0;font-size:15px;color:#111;">' +
    value +
    "</p>" +
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

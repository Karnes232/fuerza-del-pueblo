export function buildNewsletterText({
  subject,
  body,
  unsubscribeUrl,
}: {
  subject: string
  body: string
  unsubscribeUrl: string
}): string {
  const cleaned = body
    .replace(/\r\n/g, "\n")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, "$1 ($2)")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .trim()

  return `${subject}

${cleaned}

—
Fuerza del Pueblo · Verón–Punta Cana
https://www.fuerzadelpuebloveronpuntacana.com

Cancelar suscripción: ${unsubscribeUrl}
`
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function renderInline(text: string): string {
  let html = escapeHtml(text)
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    (_m, label, url) =>
      `<a href="${url}" style="color:#00A651;text-decoration:underline;">${label}</a>`,
  )
  html = html.replace(
    /\*\*([^*]+)\*\*/g,
    (_m, inner) => `<strong>${inner}</strong>`,
  )
  return html
}

function renderBody(body: string): string {
  const blocks = body
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map(b => b.trim())
    .filter(Boolean)

  return blocks
    .map(block => {
      const lines = block.split("\n").map(renderInline).join("<br/>")
      return `<p style="margin:0 0 16px;font-size:15px;color:#111;line-height:1.7;">${lines}</p>`
    })
    .join("")
}

export function buildNewsletterHtml({
  subject,
  body,
  unsubscribeUrl,
}: {
  subject: string
  body: string
  unsubscribeUrl: string
}): string {
  const safeSubject = escapeHtml(subject)
  const bodyHtml = renderBody(body)

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${safeSubject}</title>
</head>
<body style="margin:0;padding:0;background:#F4F4F4;font-family:'Open Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F4F4;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#1F4D2B;padding:20px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">${safeSubject}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="background:#F4F4F4;padding:20px 40px;text-align:center;border-top:1px solid #e5e5e5;">
              <p style="margin:0 0 8px;font-size:12px;color:#999;">Fuerza del Pueblo &middot; Ver&#243;n&#8211;Punta Cana</p>
              <p style="margin:0;font-size:12px;color:#999;">
                Recibiste este correo porque te suscribiste en
                <a href="https://www.fuerzadelpuebloveronpuntacana.com" style="color:#00A651;text-decoration:none;">fuerzadelpuebloveronpuntacana.com</a>.
                <br/>
                <a href="${unsubscribeUrl}" style="color:#00A651;text-decoration:underline;">Cancelar suscripci&#243;n</a>
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

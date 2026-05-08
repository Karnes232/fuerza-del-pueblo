import sanitizeHtml from "sanitize-html"

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

const ALLOWED_TAGS = [
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "h1",
  "h2",
  "h3",
  "ul",
  "ol",
  "li",
  "a",
]

function sanitizeBody(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      a: ["href", "target", "rel"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: (_tagName, attribs) => ({
        tagName: "a",
        attribs: {
          href: attribs.href ?? "",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),
    },
  })
}

const TAG_STYLES: Record<string, string> = {
  p: "margin:0 0 16px;font-size:15px;color:#111;line-height:1.7;",
  h1: "margin:0 0 16px;color:#1F4D2B;font-size:24px;font-weight:700;line-height:1.3;",
  h2: "margin:0 0 14px;color:#1F4D2B;font-size:20px;font-weight:700;line-height:1.3;",
  h3: "margin:0 0 12px;color:#1F4D2B;font-size:17px;font-weight:700;line-height:1.3;",
  ul: "margin:0 0 16px;padding-left:24px;font-size:15px;color:#111;line-height:1.7;",
  ol: "margin:0 0 16px;padding-left:24px;font-size:15px;color:#111;line-height:1.7;",
  li: "margin:4px 0;",
  a: "color:#00A651;text-decoration:underline;",
}

function injectInlineStyles(html: string): string {
  let out = html
  for (const tag of Object.keys(TAG_STYLES)) {
    const style = TAG_STYLES[tag]
    const openTagRe = new RegExp(`<${tag}(\\s[^>]*)?>`, "gi")
    out = out.replace(openTagRe, (_match, attrs) => {
      const existing = (attrs ?? "").trim()
      if (/style\s*=/.test(existing)) {
        return `<${tag}${attrs}>`
      }
      const sep = existing ? " " + existing : ""
      return `<${tag}${sep} style="${style}">`
    })
  }
  return out
}

function transformEditorHtmlForEmail(html: string): string {
  if (!html) return ""
  const sanitized = sanitizeBody(html)
  return injectInlineStyles(sanitized)
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
  const bodyHtml = transformEditorHtmlForEmail(body)

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

function decodeEntities(str: string): string {
  return str
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
}

function htmlToText(html: string): string {
  if (!html) return ""

  let s = html

  // Convert <a href="X">Y</a> → Y (X)
  s = s.replace(
    /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (_m, href, label) => `${label} (${href})`,
  )

  // Block-level closers → blank line
  s = s.replace(/<\/(p|h1|h2|h3|ul|ol)>/gi, "\n\n")
  // List items → newline with bullet/number marker is hard; just use "- " before each <li>
  s = s.replace(/<li[^>]*>/gi, "- ")
  s = s.replace(/<\/li>/gi, "\n")
  // <br> → newline
  s = s.replace(/<br\s*\/?>/gi, "\n")

  // Strip any remaining tags
  s = sanitizeHtml(s, { allowedTags: [], allowedAttributes: {} })

  s = decodeEntities(s)

  // Collapse 3+ newlines and trim
  s = s.replace(/\n{3,}/g, "\n\n").trim()

  return s
}

export function buildNewsletterText({
  subject,
  body,
  unsubscribeUrl,
}: {
  subject: string
  body: string
  unsubscribeUrl: string
}): string {
  const cleaned = htmlToText(body)

  return `${subject}

${cleaned}

—
Fuerza del Pueblo · Verón–Punta Cana
https://www.fuerzadelpuebloveronpuntacana.com

Cancelar suscripción: ${unsubscribeUrl}
`
}

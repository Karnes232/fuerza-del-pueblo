import { NextRequest, NextResponse } from "next/server"
import { adminClient } from "@/lib/supabase/admin"

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

async function processUnsubscribe(
  token: string | null,
): Promise<"ok" | "already" | "invalid" | "error"> {
  if (!token || !UUID_RE.test(token)) return "invalid"

  const { data: existing, error: lookupError } = await adminClient
    .from("newsletter_subscribers")
    .select("email, unsubscribed_at")
    .eq("unsubscribe_token", token)
    .maybeSingle()

  if (lookupError) {
    console.error("[Unsubscribe] lookup error:", lookupError)
    return "error"
  }
  if (!existing) return "invalid"
  if (existing.unsubscribed_at) return "already"

  const { error: updateError } = await adminClient
    .from("newsletter_subscribers")
    .update({ unsubscribed_at: new Date().toISOString() })
    .eq("unsubscribe_token", token)

  if (updateError) {
    console.error("[Unsubscribe] update error:", updateError)
    return "error"
  }
  return "ok"
}

function htmlPage(title: string, message: string, isError = false) {
  const accent = isError ? "#b91c1c" : "#00A651"
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — Fuerza del Pueblo</title>
  <style>
    body { margin:0; padding:0; background:#F4F4F4; font-family:'Open Sans',Arial,sans-serif; }
    .wrap { min-height:100vh; display:flex; align-items:center; justify-content:center; padding:24px; }
    .card { background:#fff; border-radius:12px; padding:40px; max-width:480px; width:100%; box-shadow:0 4px 24px rgba(0,0,0,0.08); text-align:center; }
    h1 { color:${accent}; font-size:22px; margin:0 0 12px; }
    p { color:#333; font-size:15px; line-height:1.6; margin:0 0 8px; }
    a { color:#00A651; text-decoration:none; font-weight:600; }
    .brand { margin-top:24px; font-size:12px; color:#999; text-transform:uppercase; letter-spacing:2px; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <h1>${title}</h1>
      <p>${message}</p>
      <p><a href="https://www.fuerzadelpuebloveronpuntacana.com">Volver al sitio</a></p>
      <p class="brand">Fuerza del Pueblo · Verón–Punta Cana</p>
    </div>
  </div>
</body>
</html>`
}

export async function GET(request: NextRequest) {
  if (request.nextUrl.searchParams.get("test") === "1") {
    return new NextResponse(
      htmlPage(
        "Vista previa",
        "Este es un correo de prueba — no hay ninguna suscripción real que cancelar. En envíos reales, este enlace daría de baja al destinatario.",
      ),
      {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      },
    )
  }

  const token = request.nextUrl.searchParams.get("token")
  const result = await processUnsubscribe(token)

  let title: string
  let message: string
  let isError = false
  let status = 200

  switch (result) {
    case "ok":
      title = "Suscripción cancelada"
      message =
        "Te hemos eliminado de nuestra lista. No recibirás más correos de la newsletter."
      break
    case "already":
      title = "Ya estabas dado de baja"
      message = "Tu correo ya no está en nuestra lista de suscriptores."
      break
    case "invalid":
      title = "Enlace inválido"
      message =
        "El enlace de cancelación no es válido o ya expiró. Si necesitas ayuda, escríbenos."
      isError = true
      status = 400
      break
    case "error":
    default:
      title = "Error"
      message = "Ocurrió un error al procesar tu solicitud. Inténtalo de nuevo más tarde."
      isError = true
      status = 500
  }

  return new NextResponse(htmlPage(title, message, isError), {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  })
}

export async function POST(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token")
  const result = await processUnsubscribe(token)

  if (result === "ok" || result === "already") {
    return new NextResponse(null, { status: 200 })
  }
  return new NextResponse(null, {
    status: result === "invalid" ? 400 : 500,
  })
}

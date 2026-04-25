import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createClient } from "@/lib/supabase/server"
import { ALLOWED_EMAILS } from "@/config/admin.config"

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") ?? "/admin"

  if (code) {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error && data.session) {
      const email = data.session.user.email?.toLowerCase() ?? ""

      if (!ALLOWED_EMAILS.includes(email)) {
        await supabase.auth.signOut()
        return NextResponse.redirect(
          `${origin}/admin/login?error=no-autorizado`,
        )
      }

      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  return NextResponse.redirect(`${origin}/admin/login?error=no-autorizado`)
}

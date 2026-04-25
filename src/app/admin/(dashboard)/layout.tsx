import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { signOut } from "@/app/actions/auth.action"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  return (
    <div className="flex min-h-screen bg-lightGray">
      <aside className="w-64 bg-darkGreen text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10">
          <p className="text-xs uppercase tracking-widest text-white/50 mb-1">
            Administración
          </p>
          <p className="font-bold text-lg leading-tight">Fuerza del Pueblo</p>
          <p className="text-xs text-white/60 mt-0.5">Verón–Punta Cana</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <NavLink href="/admin">Dashboard</NavLink>
          <NavLink href="/admin/solicitudes">Solicitudes</NavLink>
          <NavLink href="/admin/contactos">Contactos</NavLink>
          <NavLink href="/admin/rsvps">RSVPs</NavLink>
        </nav>

        <div className="p-4 border-t border-white/10">
          <p className="text-xs text-white/50 truncate mb-3">{user.email}</p>
          <form action={signOut}>
            <button
              type="submit"
              className="w-full text-left text-sm text-white/70 hover:text-white transition-colors py-1"
            >
              Cerrar sesión →
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
    >
      {children}
    </Link>
  )
}

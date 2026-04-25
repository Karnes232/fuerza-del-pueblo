"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { signOut } from "@/app/actions/auth.action"

export default function AdminSidebar({ email }: { email: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 h-14 bg-darkGreen text-white flex items-center px-4 shadow-md">
        <button
          onClick={() => setOpen(true)}
          className="p-2 -ml-1 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Abrir menú"
        >
          <Menu size={22} />
        </button>
        <span className="ml-2 font-bold text-sm tracking-tight">
          Fuerza del Pueblo
        </span>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          "fixed lg:static inset-y-0 left-0 z-50",
          "w-64 bg-darkGreen text-white flex flex-col shrink-0",
          "transition-transform duration-200 ease-out",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
      >
        <div className="p-6 border-b border-white/10 flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50 mb-1">
              Administración
            </p>
            <p className="font-bold text-lg leading-tight">Fuerza del Pueblo</p>
            <p className="text-xs text-white/60 mt-0.5">Verón–Punta Cana</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden p-2 -mr-1 -mt-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Cerrar menú"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-0.5">
          <NavLink href="/admin" onClick={() => setOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink href="/admin/solicitudes" onClick={() => setOpen(false)}>
            Solicitudes
          </NavLink>
          <NavLink href="/admin/contactos" onClick={() => setOpen(false)}>
            Contactos
          </NavLink>
          <NavLink href="/admin/rsvps" onClick={() => setOpen(false)}>
            RSVPs
          </NavLink>
        </nav>

        <div className="p-4 border-t border-white/10">
          <p className="text-xs text-white/50 truncate mb-3">{email}</p>
          <form action={signOut}>
            <button
              type="submit"
              className="w-full text-left text-sm text-white/70 hover:text-white transition-colors flex items-center min-h-[44px]"
            >
              Cerrar sesión →
            </button>
          </form>
        </div>
      </aside>
    </>
  )
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center min-h-[44px] px-3 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
    >
      {children}
    </Link>
  )
}

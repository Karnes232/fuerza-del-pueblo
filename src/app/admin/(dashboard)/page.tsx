import { adminClient } from "@/lib/supabase/admin"

export const metadata = {
  title: "Dashboard — Admin",
  robots: "noindex",
}

async function getCounts() {
  const [solicitudes, contactos, rsvps] = await Promise.all([
    adminClient.from("member_applications").select("id", { count: "exact", head: true }),
    adminClient.from("contact_submissions").select("id", { count: "exact", head: true }),
    adminClient.from("event_rsvps").select("id", { count: "exact", head: true }),
  ])

  return {
    solicitudes: solicitudes.count ?? 0,
    contactos: contactos.count ?? 0,
    rsvps: rsvps.count ?? 0,
  }
}

async function getRecentSolicitudes() {
  const { data } = await adminClient
    .from("member_applications")
    .select("id, first_name, last_name, email, membership_type, status, created_at")
    .order("created_at", { ascending: false })
    .limit(5)
  return data ?? []
}

export default async function AdminDashboardPage() {
  const [counts, recent] = await Promise.all([getCounts(), getRecentSolicitudes()])

  return (
    <div>
      <h1 className="text-2xl font-bold text-charcoal mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Solicitudes de membresía" value={counts.solicitudes} href="/admin/solicitudes" />
        <StatCard label="Mensajes de contacto" value={counts.contactos} href="/admin/contactos" />
        <StatCard label="RSVPs de eventos" value={counts.rsvps} href="/admin/rsvps" />
      </div>

      <div className="bg-pureWhite rounded-xl shadow-sm p-6">
        <h2 className="text-base font-semibold text-charcoal mb-4">
          Últimas solicitudes
        </h2>
        {recent.length === 0 ? (
          <p className="text-sm text-gray-400">No hay solicitudes aún.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-100">
                <th className="pb-2 pr-4 font-medium">Nombre</th>
                <th className="pb-2 pr-4 font-medium">Correo</th>
                <th className="pb-2 pr-4 font-medium">Tipo</th>
                <th className="pb-2 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recent.map((row) => (
                <tr key={row.id}>
                  <td className="py-2 pr-4 text-charcoal">
                    {row.first_name} {row.last_name}
                  </td>
                  <td className="py-2 pr-4">
                    {row.email ? (
                      <a
                        href={`mailto:${row.email}`}
                        className="text-darkGreen hover:underline"
                      >
                        {row.email}
                      </a>
                    ) : (
                      <span className="text-gray-500">—</span>
                    )}
                  </td>
                  <td className="py-2 pr-4 capitalize text-gray-500">
                    {row.membership_type}
                  </td>
                  <td className="py-2">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

function StatCard({
  label,
  value,
  href,
}: {
  label: string
  value: number
  href: string
}) {
  return (
    <a
      href={href}
      className="bg-pureWhite rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow block"
    >
      <p className="text-3xl font-bold text-darkGreen">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </a>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: "bg-blue-50 text-blue-700",
    approved: "bg-green-50 text-green-700",
    rejected: "bg-red-50 text-red-700",
  }
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${styles[status] ?? "bg-gray-100 text-gray-600"}`}
    >
      {status}
    </span>
  )
}

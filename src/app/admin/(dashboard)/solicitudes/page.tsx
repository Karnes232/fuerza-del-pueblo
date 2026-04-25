import { adminClient } from "@/lib/supabase/admin"

export const metadata = {
  title: "Solicitudes — Admin",
  robots: "noindex",
}

export default async function SolicitudesPage() {
  const { data, error } = await adminClient
    .from("member_applications")
    .select(
      "id, first_name, last_name, email, phone, membership_type, status, created_at",
    )
    .order("created_at", { ascending: false })

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const rows = data ?? []

  return (
    <div>
      <h1 className="text-2xl font-bold text-charcoal mb-6">
        Solicitudes de membresía
        <span className="ml-3 text-base font-normal text-gray-400">
          ({rows.length})
        </span>
      </h1>

      <div className="bg-pureWhite rounded-xl shadow-sm overflow-hidden">
        {rows.length === 0 ? (
          <p className="p-6 text-sm text-gray-400">No hay solicitudes aún.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-lightGray">
              <tr className="text-left text-gray-500">
                <Th>Nombre</Th>
                <Th>Correo</Th>
                <Th>Teléfono</Th>
                <Th>Tipo</Th>
                <Th>Estado</Th>
                <Th>Fecha</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <Td>
                    {row.first_name} {row.last_name}
                  </Td>
                  <Td>{row.email}</Td>
                  <Td>{row.phone}</Td>
                  <Td className="capitalize">{row.membership_type}</Td>
                  <Td>
                    <StatusBadge status={row.status} />
                  </Td>
                  <Td>{formatDate(row.created_at)}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide">
      {children}
    </th>
  )
}

function Td({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <td className={`px-4 py-3 text-charcoal ${className ?? ""}`}>{children}</td>
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

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="p-6 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
      Error al cargar los datos: {message}
    </div>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-DO", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

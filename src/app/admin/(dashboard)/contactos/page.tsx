import { adminClient } from "@/lib/supabase/admin"

export const metadata = {
  title: "Contactos — Admin",
  robots: "noindex",
}

export default async function ContactosPage() {
  const { data, error } = await adminClient
    .from("contact_submissions")
    .select("id, name, email, phone, subject, message, status, created_at")
    .order("created_at", { ascending: false })

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const rows = data ?? []

  return (
    <div>
      <h1 className="text-2xl font-bold text-charcoal mb-6">
        Mensajes de contacto
        <span className="ml-3 text-base font-normal text-gray-400">
          ({rows.length})
        </span>
      </h1>

      <div className="bg-pureWhite rounded-xl shadow-sm overflow-hidden">
        {rows.length === 0 ? (
          <p className="p-6 text-sm text-gray-400">No hay mensajes aún.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-lightGray">
              <tr className="text-left text-gray-500">
                <Th>Nombre</Th>
                <Th>Correo</Th>
                <Th>Asunto</Th>
                <Th>Mensaje</Th>
                <Th>Estado</Th>
                <Th>Fecha</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <Td>{row.name}</Td>
                  <Td>
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
                  </Td>
                  <Td>{row.subject}</Td>
                  <Td className="max-w-xs">
                    <span
                      className="block truncate text-gray-500"
                      title={row.message}
                    >
                      {row.message}
                    </span>
                  </Td>
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
    read: "bg-gray-100 text-gray-600",
    replied: "bg-green-50 text-green-700",
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

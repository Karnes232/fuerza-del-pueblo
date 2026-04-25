import { phoneToWhatsAppUrl } from "@/lib/phoneToWhatsAppUrl"
import { adminClient } from "@/lib/supabase/admin"

export const metadata = {
  title: "RSVPs — Admin",
  robots: "noindex",
}

export default async function RsvpsPage() {
  const { data, error } = await adminClient
    .from("event_rsvps")
    .select("id, event_id, name, email, phone, guests, comments, created_at")
    .order("created_at", { ascending: false })

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const rows = data ?? []

  return (
    <div>
      <h1 className="text-2xl font-bold text-charcoal mb-6">
        RSVPs de eventos
        <span className="ml-3 text-base font-normal text-gray-400">
          ({rows.length})
        </span>
      </h1>

      <div className="bg-pureWhite rounded-xl shadow-sm overflow-hidden">
        {rows.length === 0 ? (
          <p className="p-6 text-sm text-gray-400">No hay RSVPs aún.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-lightGray">
              <tr className="text-left text-gray-500">
                <Th>Nombre</Th>
                <Th>Correo</Th>
                <Th>Teléfono</Th>
                <Th>Invitados</Th>
                <Th>Evento (ID)</Th>
                <Th>Fecha</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row) => {
                const waUrl = phoneToWhatsAppUrl(row.phone)
                return (
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
                    <Td>
                      {waUrl && row.phone ? (
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-darkGreen hover:underline"
                        >
                          {row.phone}
                        </a>
                      ) : (
                        <span className="text-gray-500">—</span>
                      )}
                    </Td>
                    <Td>{row.guests}</Td>
                    <Td className="max-w-[160px]">
                      <span
                        className="block truncate text-gray-400 font-mono text-xs"
                        title={row.event_id}
                      >
                        {row.event_id}
                      </span>
                    </Td>
                    <Td>{formatDate(row.created_at)}</Td>
                  </tr>
                )
              })}
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

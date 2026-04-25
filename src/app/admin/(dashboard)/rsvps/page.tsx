import { phoneToWhatsAppUrl } from "@/lib/phoneToWhatsAppUrl"
import { adminClient } from "@/lib/supabase/admin"
import Link from "next/link"

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
      <h1 className="text-xl lg:text-2xl font-bold text-charcoal mb-4 lg:mb-6">
        RSVPs de eventos
        <span className="ml-3 text-base font-normal text-gray-400">
          ({rows.length})
        </span>
      </h1>

      <div className="bg-pureWhite rounded-xl shadow-sm overflow-hidden">
        {rows.length === 0 ? (
          <p className="p-6 text-sm text-gray-400">No hay RSVPs aún.</p>
        ) : (
          <>
            {/* Mobile cards */}
            <div className="lg:hidden divide-y divide-gray-100">
              {rows.map(row => {
                const waUrl = phoneToWhatsAppUrl(row.phone)
                return (
                  <div key={row.id} className="p-4 space-y-1.5">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold text-charcoal text-sm">
                        {row.name}
                      </p>
                      <span className="shrink-0 inline-block px-2 py-0.5 rounded text-xs font-medium bg-darkGreen/10 text-darkGreen">
                        {row.guests}{" "}
                        {row.guests === 1 ? "invitado" : "invitados"}
                      </span>
                    </div>
                    {row.email && (
                      <a
                        href={`mailto:${row.email}`}
                        className="block text-sm text-darkGreen"
                      >
                        {row.email}
                      </a>
                    )}
                    {waUrl && row.phone && (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-darkGreen"
                      >
                        {row.phone}
                      </a>
                    )}
                    {row.event_id && (
                      <p
                        className="text-xs text-gray-400 font-mono truncate"
                        title={row.event_id}
                      >
                        {row.event_id}
                      </p>
                    )}
                    <p className="text-xs text-gray-400">
                      {formatDate(row.created_at)}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Desktop table */}
            <div className="hidden lg:block">
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
                  {rows.map(row => {
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
                          <Link href={`/eventos/${row.event_id}`}>
                            <span
                              className="block truncate text-gray-400 font-mono text-xs"
                              title={row.event_id}
                            >
                              {row.event_id}
                            </span>
                          </Link>
                        </Td>
                        <Td>{formatDate(row.created_at)}</Td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide whitespace-nowrap">
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
    <td
      className={`px-4 py-3 text-charcoal whitespace-nowrap ${className ?? ""}`}
    >
      {children}
    </td>
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

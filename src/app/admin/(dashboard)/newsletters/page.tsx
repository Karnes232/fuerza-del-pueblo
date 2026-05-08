import { adminClient } from "@/lib/supabase/admin"
import NewsletterComposer from "./NewsletterComposer"

export const metadata = {
  title: "Newsletters — Admin",
  robots: "noindex",
}

export const dynamic = "force-dynamic"

export default async function NewslettersPage() {
  const [activeRes, totalRes, historyRes] = await Promise.all([
    adminClient
      .from("newsletter_subscribers")
      .select("*", { count: "exact", head: true })
      .is("unsubscribed_at", null),
    adminClient
      .from("newsletter_subscribers")
      .select("*", { count: "exact", head: true }),
    adminClient
      .from("newsletters")
      .select("id, subject, sent_at, sent_count, failed_count, sent_by")
      .order("sent_at", { ascending: false })
      .limit(20),
  ])

  const activeCount = activeRes.count ?? 0
  const totalCount = totalRes.count ?? 0
  const unsubscribedCount = totalCount - activeCount
  const history = historyRes.data ?? []
  const historyError = historyRes.error?.message

  return (
    <div className="space-y-6 lg:space-y-8">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-charcoal mb-2">
          Newsletters
        </h1>
        <p className="text-sm text-gray-500">
          Compón y envía un correo a todos los suscriptores activos.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        <StatCard label="Suscriptores activos" value={activeCount} accent />
        <StatCard label="Cancelaron" value={unsubscribedCount} />
        <StatCard
          label="Cuota Resend (gratis)"
          value="100/día"
          subtle="3,000/mes"
        />
      </div>

      <NewsletterComposer activeSubscribers={activeCount} />

      <section className="bg-pureWhite rounded-xl shadow-sm overflow-hidden">
        <div className="px-4 lg:px-6 py-4 border-b border-gray-100">
          <h2 className="text-base lg:text-lg font-semibold text-charcoal">
            Envíos recientes
          </h2>
        </div>

        {historyError ? (
          <p className="p-6 text-sm text-red-700">
            Error al cargar el historial: {historyError}
          </p>
        ) : history.length === 0 ? (
          <p className="p-6 text-sm text-gray-400">
            Aún no se ha enviado ninguna newsletter.
          </p>
        ) : (
          <>
            <div className="lg:hidden divide-y divide-gray-100">
              {history.map(row => (
                <div key={row.id} className="p-4 space-y-1">
                  <p className="font-semibold text-charcoal text-sm">
                    {row.subject}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate(row.sent_at)} · {row.sent_count} enviados
                    {row.failed_count > 0 && `, ${row.failed_count} fallidos`}
                  </p>
                  {row.sent_by && (
                    <p className="text-xs text-gray-400">por {row.sent_by}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <table className="w-full text-sm">
                <thead className="bg-lightGray">
                  <tr className="text-left text-gray-500">
                    <Th>Asunto</Th>
                    <Th>Fecha</Th>
                    <Th>Enviados</Th>
                    <Th>Fallidos</Th>
                    <Th>Enviado por</Th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {history.map(row => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      <Td>{row.subject}</Td>
                      <Td>{formatDate(row.sent_at)}</Td>
                      <Td>{row.sent_count}</Td>
                      <Td
                        className={
                          row.failed_count > 0
                            ? "text-red-600 font-medium"
                            : "text-gray-500"
                        }
                      >
                        {row.failed_count}
                      </Td>
                      <Td className="text-gray-500">{row.sent_by ?? "—"}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </div>
  )
}

function StatCard({
  label,
  value,
  subtle,
  accent,
}: {
  label: string
  value: number | string
  subtle?: string
  accent?: boolean
}) {
  return (
    <div className="bg-pureWhite rounded-xl shadow-sm p-4 lg:p-5">
      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
        {label}
      </p>
      <p
        className={`text-2xl lg:text-3xl font-bold ${
          accent ? "text-darkGreen" : "text-charcoal"
        }`}
      >
        {value}
      </p>
      {subtle && <p className="text-xs text-gray-400 mt-1">{subtle}</p>}
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

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("es-DO", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

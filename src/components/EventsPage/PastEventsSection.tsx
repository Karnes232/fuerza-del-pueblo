"use client"

import { useState } from "react"
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { PastEventCard } from "@/components/EventsPage/PastEventCard"
import { PastEventsSectionProps } from "@/types/events.types"
import { ChevronLeft, ChevronRight } from "lucide-react"

const EVENTS_PER_PAGE = 3

export const PastEventsSection = ({
  title,
  subtitle,
  events,
}: PastEventsSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1)

  if (events.length === 0) return null

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE)
  const start = (currentPage - 1) * EVENTS_PER_PAGE
  const paginatedEvents = events.slice(start, start + EVENTS_PER_PAGE)

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  const pageNumbers = (() => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages: (number | "ellipsis")[] = []
    if (currentPage <= 3) {
      pages.push(1, 2, 3, "ellipsis", totalPages)
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "ellipsis", totalPages - 2, totalPages - 1, totalPages)
    } else {
      pages.push(1, "ellipsis", currentPage, "ellipsis", totalPages)
    }
    return pages
  })()

  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedEvents.map(event => (
            <PastEventCard
              key={event._listKey ?? event.slug.current}
              event={event}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
            aria-label="Paginación de eventos pasados"
          >
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 rounded-lg border border-darkGreen/30 bg-white px-3 py-2 text-sm font-medium text-darkGreen transition-colors hover:bg-darkGreen/5 disabled:pointer-events-none disabled:opacity-50"
              aria-label="Página anterior"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </button>

            <div className="flex items-center gap-1">
              {pageNumbers.map((page, i) =>
                page === "ellipsis" ? (
                  <span key={`ellipsis-${i}`} className="px-2 text-gray-400">
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className="min-w-9 rounded-lg border border-darkGreen/30 bg-white px-3 py-2 text-sm font-medium text-darkGreen transition-colors hover:bg-darkGreen/5 aria-[current=page]:border-primaryGreen aria-[current=page]:bg-primaryGreen aria-[current=page]:text-white"
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 rounded-lg border border-darkGreen/30 bg-white px-3 py-2 text-sm font-medium text-darkGreen transition-colors hover:bg-darkGreen/5 disabled:pointer-events-none disabled:opacity-50"
              aria-label="Página siguiente"
            >
              Siguiente
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        )}
      </Container>
    </section>
  )
}

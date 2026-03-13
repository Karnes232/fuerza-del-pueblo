// sections/UpcomingEventsSection.tsx
"use client"

import { useState, useMemo, useEffect } from "react"
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { EventCard } from "@/components/HomePage/EventCard"
import { EventFilter } from "@/components/EventsPage/EventFilter"
import { UpcomingEventsSectionProps, EventCategory } from "@/types/events.types"
// import { eventCategories } from "@/config/events.config"

const EVENTS_PER_PAGE = 6

export const UpcomingEventsSection = ({
  title,
  subtitle,
  events,
  categories,
}: UpcomingEventsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<
    EventCategory | "all"
  >("all")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter events by category
  const filteredEvents = useMemo(() => {
    if (selectedCategory === "all") {
      return events.filter(e => !e.featured) // Exclude featured event
    }
    return events.filter(
      e => e.category.name === selectedCategory && !e.featured,
    )
  }, [events, selectedCategory])

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE) || 1
  const paginatedEvents = useMemo(() => {
    const start = (currentPage - 1) * EVENTS_PER_PAGE
    return filteredEvents.slice(start, start + EVENTS_PER_PAGE)
  }, [filteredEvents, currentPage])

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        {/* Filter */}
        <div className="mb-12">
          <EventFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedEvents.map(event => (
                <EventCard key={event.slug.current} event={event} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav
                className="mt-12 flex items-center justify-center gap-2"
                aria-label="Paginación de eventos"
              >
                <button
                  type="button"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Anterior
                </button>
                <span className="px-4 py-2 text-gray-600 text-sm font-medium">
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage(p => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Siguiente
                </button>
              </nav>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay eventos en esta categoría próximamente.
            </p>
          </div>
        )}
      </Container>
    </section>
  )
}

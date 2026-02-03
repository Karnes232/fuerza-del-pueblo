// sections/UpcomingEventsSection.tsx
"use client"

import { useState, useMemo } from "react"
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { EventCard } from "@/components/HomePage/EventCard"
import { EventFilter } from "@/components/EventsPage/EventFilter"
import { UpcomingEventsSectionProps, EventCategory } from "@/types/events.types"
import { eventCategories } from "@/config/events.config"

export const UpcomingEventsSection = ({
  title,
  subtitle,
  events,
}: UpcomingEventsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<
    EventCategory | "all"
  >("all")

  // Filter events by category
  const filteredEvents = useMemo(() => {
    if (selectedCategory === "all") {
      return events.filter(e => !e.featured) // Exclude featured event
    }
    return events.filter(e => e.category === selectedCategory && !e.featured)
  }, [events, selectedCategory])

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        {/* Filter */}
        <div className="mb-12">
          <EventFilter
            categories={eventCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
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

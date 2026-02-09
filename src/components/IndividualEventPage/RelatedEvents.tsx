// components/EventPage/RelatedEvents.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { EventCard } from "@/components/HomePage/EventCard"
import { RelatedEventsProps } from "@/types/event.types"

export const RelatedEvents = ({ title, events }: RelatedEventsProps) => {
  if (events.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <SectionHeader title={title} align="left" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  )
}

// sections/PastEventsSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { PastEventCard } from "@/components/EventsPage/PastEventCard"
import { PastEventsSectionProps } from "@/types/events.types"

export const PastEventsSection = ({
  title,
  subtitle,
  events,
}: PastEventsSectionProps) => {
  if (events.length === 0) return null

  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <PastEventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  )
}

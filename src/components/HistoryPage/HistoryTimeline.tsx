// components/HistoryPage/HistoryTimeline.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { TimelineEventCard } from "@/components/HistoryPage/TimelineEventCard"
import { HistoryTimelineProps } from "@/types/history.types"

export const HistoryTimeline = ({
  title,
  subtitle,
  events,
}: HistoryTimelineProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primaryGreen/30 transform md:-translate-x-1/2 z-0" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {events.map((event, index) => (
                <TimelineEventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// sections/EventsSection.tsx
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { EventCard } from "@/components/HomePage/EventCard"
import { EventsSectionProps } from "@/types/home.types"

export const EventsSection = ({
  title,
  subtitle,
  events,
  viewAllLink,
}: EventsSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 text-[#00A651] hover:text-[#008d45] font-semibold text-lg transition-colors group"
          >
            Ver todos los eventos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

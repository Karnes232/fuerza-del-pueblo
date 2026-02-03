// sections/FeaturedEventSection.tsx
import { Container } from "@/components/HomePage/Container"
import { FeaturedEventCard } from "@/components/EventsPage/FeaturedEventCard"
import { FeaturedEventSectionProps } from "@/types/events.types"

export const FeaturedEventSection = ({ event }: FeaturedEventSectionProps) => {
  if (!event) return null

  return (
    <section className="py-16 md:py-20 bg-[#F4F4F4]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F4D2B] mb-4">
            Próximo Evento Importante
          </h2>
          <p className="text-lg text-gray-600">
            No te pierdas nuestra próxima actividad destacada
          </p>
        </div>
        <FeaturedEventCard event={event} />
      </Container>
    </section>
  )
}

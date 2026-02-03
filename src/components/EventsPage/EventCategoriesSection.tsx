// sections/EventCategoriesSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { EventCategoryCard } from "@/components/EventsPage/EventCategoryCard"
import { EventCategoriesSectionProps } from "@/types/events.types"

export const EventCategoriesSection = ({
  title,
  subtitle,
  categories,
}: EventCategoriesSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <EventCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  )
}

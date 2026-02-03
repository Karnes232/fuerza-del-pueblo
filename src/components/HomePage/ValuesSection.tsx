// sections/ValuesSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { ValueCard } from "@/components/HomePage/ValueCard"
import { ValuesSectionProps } from "@/types/home.types"

export const ValuesSection = ({
  title,
  subtitle,
  values,
}: ValuesSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map(value => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </Container>
    </section>
  )
}

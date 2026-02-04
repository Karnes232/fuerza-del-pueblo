// components/MissionPage/CoreValuesSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { CoreValueCard } from "@/components/MissionPage/CoreValueCard"
import { CoreValuesProps } from "@/types/mission.types"

export const CoreValuesSection = ({
  title,
  subtitle,
  values,
}: CoreValuesProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 gap-8">
          {values.map(value => (
            <CoreValueCard key={value.id} value={value} />
          ))}
        </div>
      </Container>
    </section>
  )
}

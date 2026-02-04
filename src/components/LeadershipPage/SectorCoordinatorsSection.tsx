// components/LeadershipPage/SectorCoordinatorsSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { SectorCoordinatorCard } from "@/components/LeadershipPage/SectorCoordinatorCard"
import { SectorCoordinatorsProps } from "@/types/leadership.types"

export const SectorCoordinatorsSection = ({
  title,
  subtitle,
  sectors,
}: SectorCoordinatorsProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map(sector => (
            <SectorCoordinatorCard key={sector.id} sector={sector} />
          ))}
        </div>
      </Container>
    </section>
  )
}

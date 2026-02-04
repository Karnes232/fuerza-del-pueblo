// components/MissionPage/PillarsSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { PillarCard } from "@/components/MissionPage/PillarCard"
import { PillarsProps } from "@/types/mission.types"

export const PillarsSection = ({ title, subtitle, pillars }: PillarsProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map(pillar => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </Container>
    </section>
  )
}

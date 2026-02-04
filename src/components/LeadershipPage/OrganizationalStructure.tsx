// components/LeadershipPage/OrganizationalStructure.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { OrganizationalLevelCard } from "@/components/LeadershipPage/OrganizationalLevelCard"
import { OrganizationalStructureProps } from "@/types/leadership.types"

export const OrganizationalStructure = ({
  title,
  subtitle,
  levels,
}: OrganizationalStructureProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="max-w-4xl mx-auto space-y-8">
          {levels.map((level, index) => (
            <OrganizationalLevelCard
              key={level.id}
              level={level}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

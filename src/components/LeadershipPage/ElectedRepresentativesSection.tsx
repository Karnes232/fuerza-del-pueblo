// components/LeadershipPage/ElectedRepresentativesSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { ElectedRepresentativeCard } from "@/components/LeadershipPage/ElectedRepresentativeCard"
import { ElectedRepresentativesProps } from "@/types/leadership.types"

export const ElectedRepresentativesSection = ({
  title,
  subtitle,
  representatives,
}: ElectedRepresentativesProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {representatives.map(representative => (
            <ElectedRepresentativeCard
              key={representative.id}
              representative={representative}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

// components/MissionPage/CommitmentsSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { CommitmentCard } from "@/components/MissionPage/CommitmentCard"
import { CommitmentsProps } from "@/types/mission.types"

export const CommitmentsSection = ({
  title,
  subtitle,
  commitments,
}: CommitmentsProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map(commitment => (
            <CommitmentCard key={commitment.id} commitment={commitment} />
          ))}
        </div>
      </Container>
    </section>
  )
}
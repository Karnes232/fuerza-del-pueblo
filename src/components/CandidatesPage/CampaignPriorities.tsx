// components/CandidatesPage/CampaignPriorities.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { PriorityCard } from "@/components/CandidatesPage/PriorityCard"
import { CampaignPrioritiesProps } from "@/types/candidates.types"

export const CampaignPriorities = ({
  title,
  subtitle,
  priorities,
}: CampaignPrioritiesProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {priorities.map((priority, index) => (
            <PriorityCard key={priority.id} priority={priority} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

// components/HistoryPage/MilestonesSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { MilestoneCard } from "@/components/HistoryPage/MilestoneCard"
import { MilestonesProps } from "@/types/history.types"

export const MilestonesSection = ({
  title,
  subtitle,
  milestones,
}: MilestonesProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map(milestone => (
            <MilestoneCard key={milestone.id} milestone={milestone} />
          ))}
        </div>
      </Container>
    </section>
  )
}

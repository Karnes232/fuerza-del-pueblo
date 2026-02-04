// components/LeadershipPage/WingsSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { WingCard } from "@/components/LeadershipPage/WingCard"
import { WingsProps } from "@/types/leadership.types"

export const WingsSection = ({ title, subtitle, wings }: WingsProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {wings.map(wing => (
            <WingCard key={wing.id} wing={wing} />
          ))}
        </div>
      </Container>
    </section>
  )
}

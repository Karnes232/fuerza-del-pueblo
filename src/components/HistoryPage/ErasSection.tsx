// components/HistoryPage/ErasSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { EraCard } from "@/components/HistoryPage/EraCard"
import { ErasProps } from "@/types/history.types"

export const ErasSection = ({ title, subtitle, eras }: ErasProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 gap-8">
          {eras.map((era, index) => (
            <EraCard key={era.id} era={era} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

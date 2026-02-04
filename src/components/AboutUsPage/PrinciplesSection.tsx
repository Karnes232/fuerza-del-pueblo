// components/AboutPage/PrinciplesSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { PrincipleCard } from "@/components/AboutUsPage/PrincipleCard"
import { PrinciplesProps } from "@/types/about.types"

export const PrinciplesSection = ({
  title,
  subtitle,
  principles,
}: PrinciplesProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map(principle => (
            <PrincipleCard key={principle.id} principle={principle} />
          ))}
        </div>
      </Container>
    </section>
  )
}

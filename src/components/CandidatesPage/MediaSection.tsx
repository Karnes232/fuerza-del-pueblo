// components/CandidatesPage/MediaSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { MediaAppearanceCard } from "@/components/CandidatesPage/MediaAppearanceCard"
import { MediaSectionProps } from "@/types/candidates.types"

export const MediaSection = ({
  title,
  subtitle,
  appearances,
}: MediaSectionProps) => {
  if (appearances.length === 0) return null

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appearances.map(appearance => (
            <MediaAppearanceCard key={appearance.id} appearance={appearance} />
          ))}
        </div>
      </Container>
    </section>
  )
}

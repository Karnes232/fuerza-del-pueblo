// sections/MembershipTiersSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { MembershipTierCard } from "@/components/JoinPage/MembershipTierCard"
import { MembershipTiersSectionProps } from "@/types/unete.types"

export const MembershipTiersSection = ({
  title,
  subtitle,
  tiers,
}: MembershipTiersSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map(tier => (
            <MembershipTierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </Container>
    </section>
  )
}

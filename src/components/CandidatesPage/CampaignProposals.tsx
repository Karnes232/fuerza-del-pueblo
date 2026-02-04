// components/CandidatesPage/CampaignProposals.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { ProposalCard } from "@/components/CandidatesPage/ProposalCard"
import { CampaignProposalsProps } from "@/types/candidates.types"

export const CampaignProposals = ({
  title,
  subtitle,
  proposals,
}: CampaignProposalsProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proposals.map(proposal => (
            <ProposalCard key={proposal.id} proposal={proposal} />
          ))}
        </div>
      </Container>
    </section>
  )
}

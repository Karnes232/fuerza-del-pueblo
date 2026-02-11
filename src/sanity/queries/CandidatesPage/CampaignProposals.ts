import { client } from "@/sanity/lib/client"
import { CampaignProposal } from "@/types/candidates.types"

export interface CampaignProposalsSection {
  title: string
  subtitle: string
  proposals: CampaignProposal[]
}

export const campaignProposalsSectionQuery = `*[_type == "campaignProposalsSection"][0] {
  title,
  subtitle,
  proposals[] {
    id,
    category,
    title,
    description,
    icon,
    objectives,
  },
}
`

export const getCampaignProposalsSection =
  async (): Promise<CampaignProposalsSection> => {
    const campaignProposalsSection = await client.fetch(
      campaignProposalsSectionQuery,
    )
    return campaignProposalsSection
  }

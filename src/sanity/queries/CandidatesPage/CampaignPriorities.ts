import { client } from "@/sanity/lib/client"
import { CampaignPriority } from "@/types/candidates.types"

export interface CampaignPrioritiesSection {
  title: string
  subtitle: string
  priorities: CampaignPriority[]
}

export const campaignPrioritiesSectionQuery = `*[_type == "campaignPrioritiesSection"][0] {
  title,
  subtitle,
  priorities[] {    
    id,
    title,
    description,
    icon,
    actions[],
  },
}
`

export const getCampaignPrioritiesSection =
  async (): Promise<CampaignPrioritiesSection> => {
    const campaignPrioritiesSection = await client.fetch(
      campaignPrioritiesSectionQuery,
    )
    return campaignPrioritiesSection
  }

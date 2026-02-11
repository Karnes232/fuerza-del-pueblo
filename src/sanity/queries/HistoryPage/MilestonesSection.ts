import { client } from "@/sanity/lib/client"
import { Milestone } from "@/types/history.types"

export interface MilestonesSection {
  title: string
  subtitle: string
  milestones: Milestone[]
}

export const milestonesSectionQuery = `*[_type == "milestonesSection"][0] {
  title,
  subtitle,
  milestones[] {    
    id,
    year,
    title,
    description,
    icon,
    impact,
  }[]
}`

export const getMilestonesSection = async (): Promise<MilestonesSection> => {
  const milestonesSection = await client.fetch(milestonesSectionQuery)
  return milestonesSection
}

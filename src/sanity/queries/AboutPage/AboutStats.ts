import { client } from "@/sanity/lib/client"

export interface AboutStatsSection {
  stats: {
    id: string
    value: string
    label: string
    icon: string
  }[]
}

export const aboutStatsSectionQuery = `*[_type == "aboutStatsSection"][0] {
  stats[] {
    id,
    value,
    label,
    icon,
  }
}`

export const getAboutStatsSection = async (): Promise<AboutStatsSection> => {
  const aboutStatsSection = await client.fetch(aboutStatsSectionQuery)
  return aboutStatsSection
}

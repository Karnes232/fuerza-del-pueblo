import { client } from "@/sanity/lib/client"

export interface PillarsSection {
  title: string
  subtitle: string
  pillars: {
    id: string
    title: string
    description: string
    icon: string
    keyPoints: string[]
  }[]
}

export const pillarsSectionQuery = `*[_type == "pillarsSection"][0] {
  title,
  subtitle,
  pillars {
    id,
    title,
    description,
    icon,
    keyPoints[]
  }[]
}`

export const getPillarsSection = async (): Promise<PillarsSection> => {
  const pillarsSection = await client.fetch(pillarsSectionQuery)
  return pillarsSection
}

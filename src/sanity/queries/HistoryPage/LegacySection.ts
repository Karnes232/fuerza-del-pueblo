import { client } from "@/sanity/lib/client"
import { LegacyItem } from "@/types/history.types"

export interface LegacySection {
  title: string
  subtitle: string
  content: string
  items: LegacyItem[]
}

export const legacySectionQuery = `*[_type == "legacySection"][0] {
  title,
  subtitle,
  content,
  items[] {
    id,
    title,
    description,
    icon,
  }[]
}`

export const getLegacySection = async (): Promise<LegacySection> => {
  const legacySection = await client.fetch(legacySectionQuery)
  return legacySection
}

import { client } from "@/sanity/lib/client"

export interface WingsSection {
  title: string
  subtitle: string
  wings: {
    id: string
    name: string
    description: string
    icon: string
    coordinator: string
    focus: string[]
  }[]
}

export const wingsSectionQuery = `*[_type == "wingsSection"][0] {
  title,
  subtitle,
  wings {
    id,
    name,
    description,
    icon,
    coordinator,
    focus[]
  }[]
}`

export const getWingsSection = async (): Promise<WingsSection> => {
  const wingsSection = await client.fetch(wingsSectionQuery)
  return wingsSection
}

import { client } from "@/sanity/lib/client"

export interface PrinciplesSection {
  title: string
  subtitle: string
  principles: {
    id: string
    title: string
    description: string
    icon: string
  }[]
}

export const principlesSectionQuery = `*[_type == "principlesSection"][0] {
  title,
  subtitle,
  principles[] {
    id,
    title,
    description,
    icon,
  }
}`

export const getPrinciplesSection = async (): Promise<PrinciplesSection> => {
  const principlesSection = await client.fetch(principlesSectionQuery)
  return principlesSection
}

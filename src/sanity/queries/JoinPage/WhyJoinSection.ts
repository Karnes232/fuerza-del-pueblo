import { client } from "@/sanity/lib/client"

export interface WhyJoinSection {
  title: string
  subtitle: string
  benefits: {
    id: string
    title: string
    description: string
    icon: string
  }[]
}

export const whyJoinSectionQuery = `*[_type == "whyJoinSection"][0] { 
  title,
  subtitle,
  benefits[] {
    id,
    title,
    description,
    icon,
  }
}`

export const getWhyJoinSection = async (): Promise<WhyJoinSection> => {
  const data = await client.fetch(whyJoinSectionQuery)
  return data
}

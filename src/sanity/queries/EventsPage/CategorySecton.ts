import { client } from "@/sanity/lib/client"

export interface EventCategorySection {
  title: string
  subtitle: string
  categories: {
    id: string
    name: string
    description: string
    icon: string
    color: string
  }[]
}

export const eventCategorySectionQuery = `*[_type == "eventCategorySection"][0] {
  title,
  subtitle,
  categories[]->{
    id,
    name,
    description,
    icon,
    color,
  }
}`

export const getEventCategorySection =
  async (): Promise<EventCategorySection> => {
    const data = await client.fetch(eventCategorySectionQuery)
    return data
  }

import { client } from "@/sanity/lib/client"

export interface GoalsSection {
  title: string
  subtitle: string
  goals: {
    id: string
    category: string
    title: string
    description: string
    icon: string
  }[]
}

export const goalsSectionQuery = `*[_type == "goalsSection"][0] {
  title,
  subtitle,
  goals {
    id,
    category,
    title,
    description,
    icon,
  }[]
}`

export const getGoalsSection = async (): Promise<GoalsSection> => {
  const goalsSection = await client.fetch(goalsSectionQuery)
  return goalsSection
}

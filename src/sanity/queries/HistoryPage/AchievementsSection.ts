import { client } from "@/sanity/lib/client"
import { Achievement } from "@/types/history.types"

export interface AchievementsSection {
  title: string
  subtitle: string
  achievements: Achievement[]
}

export const achievementsSectionQuery = `*[_type == "achievementsSection"][0] {
  title,
  subtitle,
  achievements[] {
    id,
    title,
    description,
    date,
    category,
    icon,
  }[]
}`

export const getAchievementsSection =
  async (): Promise<AchievementsSection> => {
    const achievementsSection = await client.fetch(achievementsSectionQuery)
    return achievementsSection
  }

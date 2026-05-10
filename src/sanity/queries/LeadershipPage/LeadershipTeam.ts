import { client } from "@/sanity/lib/client"

export interface LeadershipTeam {
  title: string
  subtitle: string
  leaders: {
    id: string
    name: string
    position: string
    bio: string
    responsibilities: string[]
    image: {
      alt: string
      asset: {
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
      }
      hotspot?: { x: number; y: number }
      crop?: { top: number; bottom: number; left: number; right: number }
    }
  }[]
}

export const leadershipTeamQuery = `*[_type == "leadershipTeam"][0] {
  title,
  subtitle,
  leaders {
    id,
    name,
    position,
    bio,
    responsibilities[],
    image {
      alt,
      hotspot,
      crop,
      asset -> {
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    }
  }[]
}`

export const getLeadershipTeam = async (): Promise<LeadershipTeam> => {
  const leadershipTeam = await client.fetch(leadershipTeamQuery)
  return leadershipTeam
}

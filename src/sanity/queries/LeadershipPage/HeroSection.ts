import { client } from "@/sanity/lib/client"

export interface LeadershipPageHeroSection {
  title: string
  subtitle: string
  description: string
  backgroundImage: {
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
  }
}

export const leadershipPageHeroSectionQuery = `*[_type == "leadershipPageHeroSection"][0] {
  title,
  subtitle,
  description,
  backgroundImage {
    alt,
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
}`

export const getLeadershipPageHeroSection =
  async (): Promise<LeadershipPageHeroSection> => {
    const leadershipPageHeroSection = await client.fetch(
      leadershipPageHeroSectionQuery,
    )
    return leadershipPageHeroSection
  }

import { client } from "@/sanity/lib/client"

export interface MissionPageHeroSection {
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
    hotspot?: { x: number; y: number }
    crop?: { top: number; bottom: number; left: number; right: number }
  }
}

export const missionPageHeroSectionQuery = `*[_type == "missionPageHeroSection"][0] {
  title,
  subtitle,
  description,
  backgroundImage {
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
}`

export const getMissionPageHeroSection =
  async (): Promise<MissionPageHeroSection> => {
    const missionPageHeroSection = await client.fetch(
      missionPageHeroSectionQuery,
    )
    return missionPageHeroSection
  }

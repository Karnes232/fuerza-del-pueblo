import { client } from "@/sanity/lib/client"

export interface HistoryPageHeroSection {
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

export const historyPageHeroSectionQuery = `*[_type == "historyPageHeroSection"][0] {
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

export const getHistoryPageHeroSection =
  async (): Promise<HistoryPageHeroSection> => {
    const historyPageHeroSection = await client.fetch(
      historyPageHeroSectionQuery,
    )
    return historyPageHeroSection
  }

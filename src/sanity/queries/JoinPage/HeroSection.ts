import { client } from "@/sanity/lib/client"

export interface JoinPageHeroSection {
  title: string
  subtitle: string
  description: string
  benefits: string[]
  ctaText: string
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

export const joinPageHeroSectionQuery = `*[_type == "joinPageHeroSection"][0] {
  title,
  subtitle,
  description,
  benefits[],
  ctaText,
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

export const getJoinPageHeroSection =
  async (): Promise<JoinPageHeroSection> => {
    const data = await client.fetch(joinPageHeroSectionQuery)
    return data
  }

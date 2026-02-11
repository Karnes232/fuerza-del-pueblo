import { client } from "@/sanity/lib/client"

export interface CandidatesPageHeroSection {
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

export const candidatesPageHeroSectionQuery = `*[_type == "candidatesPageHeroSection"][0] {
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

export const getCandidatesPageHeroSection =
  async (): Promise<CandidatesPageHeroSection> => {
    const candidatesPageHeroSection = await client.fetch(
      candidatesPageHeroSectionQuery,
    )
    return candidatesPageHeroSection
  }

import { client } from "@/sanity/lib/client"

export interface AboutPageHeroSection {
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

export const aboutPageHeroSectionQuery = `*[_type == "aboutPageHeroSection"][0] {
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

export const getAboutPageHeroSection =
  async (): Promise<AboutPageHeroSection> => {
    const aboutPageHeroSection = await client.fetch(aboutPageHeroSectionQuery)
    return aboutPageHeroSection
  }

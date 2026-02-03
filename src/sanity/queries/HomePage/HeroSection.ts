import { client } from "@/sanity/lib/client"

export interface HeroSection {
  title: string
  subtitle: string
  slogan: string
  ctaText: string
  ctaLink: string
  secondaryCtaText: string
  secondaryCtaLink: string
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

export const heroSectionQuery = `*[_type == "heroSection"][0] {
  title,
  subtitle,
  slogan,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
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

export const getHeroSection = async (): Promise<HeroSection> => {
  const data = await client.fetch(heroSectionQuery)
  return data
}

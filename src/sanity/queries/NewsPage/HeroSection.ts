import { client } from "@/sanity/lib/client"

export interface NewsPageHeroSection {
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
  featuredArticle: {
    _id: string
    title: string
    slug: {
      current: string
    }
    category: string
    excerpt: string
    date: string
    featuredImage: {
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
}

export const newsPageHeroSectionQuery = `*[_type == "newsPageHeroSection"][0] {
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
  },
  featuredArticle -> {
    _id,
    title,
    slug,
    category,
    excerpt,
    date,
    featuredImage {
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
  }
}`

export const getNewsPageHeroSection =
  async (): Promise<NewsPageHeroSection> => {
    const data = await client.fetch(newsPageHeroSectionQuery)
    return data
  }

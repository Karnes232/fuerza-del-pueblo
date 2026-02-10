import { client } from "@/sanity/lib/client"

export interface ContactPageHeroSection {
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

export const contactPageHeroSectionQuery = `*[_type == "contactPageHeroSection"][0] {
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

export const getContactPageHeroSection =
  async (): Promise<ContactPageHeroSection> => {
    const data = await client.fetch(contactPageHeroSectionQuery)
    return data
  }

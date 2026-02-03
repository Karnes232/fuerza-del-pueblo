import { client } from "@/sanity/lib/client"

export interface AboutSection {
  title: string
  content: string
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
  }
  ctaText: string
  ctaLink: string
}

export const aboutSectionQuery = `*[_type == "aboutSection"][0] {
  title,
  content,
  image {
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
  ctaText,
  ctaLink,
}`

export const getAboutSection = async (): Promise<AboutSection> => {
  const data = await client.fetch(aboutSectionQuery)
  return data
}

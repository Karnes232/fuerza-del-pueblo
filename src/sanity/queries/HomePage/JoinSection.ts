import { client } from "@/sanity/lib/client"

export interface JoinSection {
  title: string
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

export const joinSectionQuery = `*[_type == "joinSection"][0] {
  title,
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

export const getJoinSection = async (): Promise<JoinSection> => {
  const joinSection = await client.fetch(joinSectionQuery)
  return joinSection
}

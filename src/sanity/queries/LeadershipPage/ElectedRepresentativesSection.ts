import { client } from "@/sanity/lib/client"

export interface ElectedRepresentative {
  id: string
  name: string
  position: string
  bio: string
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
}

export interface ElectedRepresentativesSection {
  title: string
  subtitle: string
  representatives: ElectedRepresentative[]
}

export const electedRepresentativesSectionQuery = `*[_type == "electedRepresentativesSection"][0] {
  title,
  subtitle,
  representatives[] {
    id,
    name,
    position,
    bio,
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
    }
  }
}`

export const getElectedRepresentativesSection =
  async (): Promise<ElectedRepresentativesSection> => {
    const section = await client.fetch(electedRepresentativesSectionQuery)
    return section
  }

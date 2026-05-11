import { client } from "@/sanity/lib/client"

export interface WingsSection {
  title: string
  subtitle: string
  wings: {
    id: string
    name: string
    description: string
    icon: string
    coordinator: string
    focus: string[]
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
  }[]
}

export const wingsSectionQuery = `*[_type == "wingsSection"][0] {
  title,
  subtitle,
  wings {
    id,
    name,
    description,
    icon,
    coordinator,
    focus[],
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
  }[]
}`

export const getWingsSection = async (): Promise<WingsSection> => {
  const wingsSection = await client.fetch(wingsSectionQuery)
  return wingsSection
}

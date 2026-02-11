import { client } from "@/sanity/lib/client"
import { Era } from "@/types/history.types"

export interface ErasSection {
  title: string
  subtitle: string
  eras: Era[]
}

export const erasSectionQuery = `*[_type == "erasSection"][0] {
  title,
  subtitle,
  eras[] {
    id,
    period,
    title,
    description,
    keyEvents,
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

export const getErasSection = async (): Promise<ErasSection> => {
  const erasSection = await client.fetch(erasSectionQuery)
  return erasSection
}

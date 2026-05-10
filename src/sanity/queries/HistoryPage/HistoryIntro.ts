import { client } from "@/sanity/lib/client"

export interface HistoryIntroSection {
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
    hotspot?: { x: number; y: number }
    crop?: { top: number; bottom: number; left: number; right: number }
  }
}

export const historyIntroSectionQuery = `*[_type == "historyIntroSection"][0] {
  title,
  content,
  image {
    alt,
    hotspot,
    crop,
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

export const getHistoryIntroSection =
  async (): Promise<HistoryIntroSection> => {
    const historyIntroSection = await client.fetch(historyIntroSectionQuery)
    return historyIntroSection
  }

import { client } from "@/sanity/lib/client"

export interface VisionStatement {
  title: string
  statement: string
  description: string
  icon: string
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

export const visionStatementQuery = `*[_type == "visionStatement"][0] {
  title,
  statement,
  description,
  icon,
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

export const getVisionStatement = async (): Promise<VisionStatement> => {
  const visionStatement = await client.fetch(visionStatementQuery)
  return visionStatement
}

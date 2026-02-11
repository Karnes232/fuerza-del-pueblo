import { client } from "@/sanity/lib/client"
import { VisionItem } from "@/types/candidates.types"

export interface VisionData {
  title: string
  subtitle: string
  content: string
  items: VisionItem[]
}

export const visionDataQuery = `*[_type == "visionDataSection"][0] {
  title,
  subtitle,
  content,
  items[] {
    id,
    title,
    description,
    icon,
  },
}
`

export const getVisionData = async (): Promise<VisionData> => {
  const visionData = await client.fetch(visionDataQuery)
  return visionData
}

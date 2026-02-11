import { client } from "@/sanity/lib/client"
import { MediaAppearance } from "@/types/candidates.types"

export interface MediaSection {
  title: string
  subtitle: string
  appearances: MediaAppearance[]
}

export const mediaSectionQuery = `*[_type == "mediaSection"][0] {
  title,
  subtitle,
  appearances[] {
    id,
    title,
    date,
    media,
    type,
    url,
    description,
  },
}
`

export const getMediaSection = async (): Promise<MediaSection> => {
  const mediaSection = await client.fetch(mediaSectionQuery)
  return mediaSection
}

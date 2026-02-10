import { client } from "@/sanity/lib/client"

export interface MissionStatement {
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
  }
}

export const missionStatementQuery = `*[_type == "missionStatement"][0] {
  title,
  statement,
  description,
  icon,
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
}`

export const getMissionStatement = async (): Promise<MissionStatement> => {
  const missionStatement = await client.fetch(missionStatementQuery)
  return missionStatement
}

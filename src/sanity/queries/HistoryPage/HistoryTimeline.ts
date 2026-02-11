import { client } from "@/sanity/lib/client"
import { TimelineEvent } from "@/types/history.types"

export interface HistoryTimeline {
  title: string
  subtitle: string
  events: TimelineEvent[]
}

export const historyTimelineQuery = `*[_type == "historyTimeline"][0] {
  title,
  subtitle,
  "events": historyTimelineData[] {
    id,
    date,
    title,
    description,
    category,
    highlights[],
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

export const getHistoryTimeline = async (): Promise<HistoryTimeline> => {
  const historyTimeline = await client.fetch(historyTimelineQuery)
  return historyTimeline
}

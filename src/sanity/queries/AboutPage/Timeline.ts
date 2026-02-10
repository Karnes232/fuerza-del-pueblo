import { client } from "@/sanity/lib/client"

export interface TimelineSection {
  title: string
  subtitle: string
  historyTimelineData: {
    id: string
    year: string
    title: string
    description: string
  }[]
}

export const timelineSectionQuery = `*[_type == "timelineSection"][0] {
  title,
  subtitle,
  historyTimelineData[] {
    id,
    year,
    title,
    description,
  }
}`

export const getTimelineSection = async (): Promise<TimelineSection> => {
  const timelineSection = await client.fetch(timelineSectionQuery)
  return timelineSection
}

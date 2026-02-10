import { client } from "@/sanity/lib/client"

export interface JoinPageFaqsSection {
  title: string
  subtitle: string
  faqs: {
    id: string
    question: string
    answer: string
  }[]
}

export const joinPageFaqsSectionQuery = `*[_type == "joinPageFaqsSection"][0] {
  title,
  subtitle,
  faqs[] {
    id,
    question,
    answer,
  }
}`

export const getJoinPageFaqsSection =
  async (): Promise<JoinPageFaqsSection> => {
    const data = await client.fetch(joinPageFaqsSectionQuery)
    return data
  }

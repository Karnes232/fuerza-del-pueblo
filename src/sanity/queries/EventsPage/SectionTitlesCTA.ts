import { client } from "@/sanity/lib/client"

export interface SectionTitlesCTA {
  upcomingEventsTitle: string
  upcomingEventsSubtitle: string
  pastEventsTitle: string
  pastEventsSubtitle: string
  ctaTitle: string
  ctaDescription: string
  ctaActions: {
    title: string
    description: string
    icon: string
    href: string
  }[]
}

export const sectionTitlesCTAQuery = `*[_type == "sectionTitlesCTA"][0] {
  upcomingEventsTitle,
  upcomingEventsSubtitle,
  pastEventsTitle,
  pastEventsSubtitle,
  ctaTitle,
  ctaDescription,
  ctaActions[] {
    title,
    description,
    icon,
    href,
  }
}`

export const getSectionTitlesCTA = async (): Promise<SectionTitlesCTA> => {
  const data = await client.fetch(sectionTitlesCTAQuery)
  return data
}

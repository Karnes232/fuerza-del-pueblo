import { client } from "@/sanity/lib/client"

export interface SectionHeaders {
  newsTitle: string
  newsSubtitle: string
  eventsTitle: string
  eventsSubtitle: string
  contactTitle: string
  contactDescription: string
}

export const sectionHeadersQuery = `*[_type == "sectionHeaders"][0] {
  newsTitle,
  newsSubtitle,
  eventsTitle,
  eventsSubtitle,
  contactTitle,
  contactDescription,
}`

export const getSectionHeaders = async (): Promise<SectionHeaders> => {
  const data = await client.fetch(sectionHeadersQuery)
  return data
}

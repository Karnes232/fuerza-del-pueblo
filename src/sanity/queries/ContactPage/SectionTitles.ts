import { client } from "@/sanity/lib/client"

export interface SectionTitles {
  contactInformationTitle: string
  contactFormTitle: string
  contactFormSubtitle: string
  locationMapTitle: string
  socialLinksTitle: string
  socialLinksSubtitle: string
}

export const sectionTitlesQuery = `*[_type == "sectionTitles"][0] {
  contactInformationTitle,
  contactFormTitle,
  contactFormSubtitle,
  locationMapTitle,
  socialLinksTitle,
  socialLinksSubtitle,
} `

export const getSectionTitles = async (): Promise<SectionTitles> => {
  const data = await client.fetch(sectionTitlesQuery)
  return data
}

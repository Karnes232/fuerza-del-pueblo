import { client } from "@/sanity/lib/client"

export interface NationalConnectionSection {
  title: string
  content: string
  ctaText: string
  ctaLink: string
}

export const nationalConnectionSectionQuery = `*[_type == "nationalConnectionSection"][0] {
  title,
  content,
  ctaText,
  ctaLink,
}`

export const getNationalConnectionSection =
  async (): Promise<NationalConnectionSection> => {
    const nationalConnectionSection = await client.fetch(
      nationalConnectionSectionQuery,
    )
    return nationalConnectionSection
  }

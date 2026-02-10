import { client } from "@/sanity/lib/client"

export interface JoinPageFormSection {
  title: string
  subtitle: string
  interestAreas: string[]
  availabilityOptions: string[]
}

export const joinPageFormSectionQuery = `*[_type == "joinPageFormSection"][0] {
  title,
  subtitle,
  interestAreas,
  availabilityOptions,
}`

export const getJoinPageFormSection =
  async (): Promise<JoinPageFormSection> => {
    const data = await client.fetch(joinPageFormSectionQuery)
    return data
  }

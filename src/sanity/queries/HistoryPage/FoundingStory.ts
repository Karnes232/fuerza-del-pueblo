import { client } from "@/sanity/lib/client"

export interface FoundingStory {
  title: string
  subtitle: string
  year: string
  context: string
  founders: string[]
  objectives: string[]
}

export const foundingStorySectionQuery = `*[_type == "foundingStorySection"][0] {
  title,
  subtitle,
  year,
  context,
  founders,
  objectives
}`

export const getFoundingStorySection = async (): Promise<FoundingStory> => {
  const foundingStorySection = await client.fetch(foundingStorySectionQuery)
  return foundingStorySection
}

import { client } from "@/sanity/lib/client"

export interface CommitmentsSection {
  title: string
  subtitle: string
  commitments: {
    id: string
    title: string
    description: string
    icon: string
  }[]
}

export const commitmentsSectionQuery = `*[_type == "commitmentsSection"][0] {
  title,
  subtitle,
  commitments {
    id,
    title,
    description,
    icon,
  }[]
}`

export const getCommitmentsSection = async (): Promise<CommitmentsSection> => {
  const commitmentsSection = await client.fetch(commitmentsSectionQuery)
  return commitmentsSection
}

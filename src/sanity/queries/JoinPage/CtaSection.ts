import { client } from "@/sanity/lib/client"

export interface JoinPageCtaSection {
  title: string
  description: string
  actions: {
    title: string
    description: string
    icon: string
    href: string
  }[]
}

export const joinPageCtaSectionQuery = `*[_type == "joinPageCtaSection"][0] {   
  title,
  description,
  actions[] {
    title,
    description,
    icon,
    href,
  }
}`

export const getJoinPageCtaSection = async (): Promise<JoinPageCtaSection> => {
  const data = await client.fetch(joinPageCtaSectionQuery)
  return data
}

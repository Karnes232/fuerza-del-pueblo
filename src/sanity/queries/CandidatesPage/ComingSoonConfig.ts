import { client } from "@/sanity/lib/client"

export interface ComingSoonConfig {
  enabled: boolean
  title: string
  message: string
  expectedDate: string
  notifyEnabled: boolean
}

export const comingSoonConfigQuery = `*[_type == "comingSoonConfig"][0] {
  enabled,
  title,
  message,
  expectedDate,
  notifyEnabled,
}`

export const getComingSoonConfig = async (): Promise<ComingSoonConfig> => {
  const comingSoonConfig = await client.fetch(comingSoonConfigQuery)
  return comingSoonConfig
}

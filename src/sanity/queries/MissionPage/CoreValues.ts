import { client } from "@/sanity/lib/client"

export interface CoreValues {
  title: string
  subtitle: string
  values: {
    id: string
    title: string
    description: string
    icon: string
    details: string[]
  }[]
}

export const coreValuesQuery = `*[_type == "coreValues"][0] {
  title,
  subtitle,
  values {
    id,
    title,
    description,
    icon,
    details[]
  }[]
}`

export const getCoreValues = async (): Promise<CoreValues> => {
  const coreValues = await client.fetch(coreValuesQuery)
  return coreValues
}

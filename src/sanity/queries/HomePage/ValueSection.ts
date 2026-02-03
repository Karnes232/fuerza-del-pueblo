import { client } from "@/sanity/lib/client"
import { Value } from "@/types/home.types"

export interface ValuesSection {
  title: string
  subtitle: string
  values: Value[]
}

export const valuesSectionQuery = `*[_type == "valuesSection"][0] {
  title,
  subtitle,
  values[] {
    title,
    description,
    icon,
  }
}`

export const getValuesSection = async (): Promise<ValuesSection> => {
  const data = await client.fetch(valuesSectionQuery)
  return data
}

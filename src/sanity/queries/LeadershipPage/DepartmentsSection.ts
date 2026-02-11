import { client } from "@/sanity/lib/client"

export interface DepartmentsSection {
  title: string
  subtitle: string
  departments: {
    id: string
    name: string
    description: string
    icon: string
    coordinator: string
    responsibilities: string[]
  }[]
}

export const departmentsSectionQuery = `*[_type == "departmentsSection"][0] {
  title,
  subtitle,
  departments {
    id,
    name,
    description,
    icon,
    coordinator,
    responsibilities[]
  }[]
}`

export const getDepartmentsSection = async (): Promise<DepartmentsSection> => {
  const departmentsSection = await client.fetch(departmentsSectionQuery)
  return departmentsSection
}

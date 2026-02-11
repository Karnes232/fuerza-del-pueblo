import { client } from "@/sanity/lib/client"

export interface OrganizationalStructure {
  title: string
  subtitle: string
  organizationalLevels: {
    id: string
    title: string
    description: string
    icon: string
    positions: string[]
  }[]
}

export const organizationalStructureQuery = `*[_type == "organizationalStructure"][0] {
  title,
  subtitle,
  organizationalLevels {
    id,
    title,
    description,
    icon,
    positions[]
  }[]
}`

export const getOrganizationalStructure =
  async (): Promise<OrganizationalStructure> => {
    const organizationalStructure = await client.fetch(
      organizationalStructureQuery,
    )
    return organizationalStructure
  }

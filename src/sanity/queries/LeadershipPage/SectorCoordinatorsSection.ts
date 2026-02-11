import { client } from "@/sanity/lib/client"

export interface SectorCoordinatorsSection {
  title: string
  subtitle: string
  sectors: {
    id: string
    sector: string
    coordinator: string
    description: string
  }[]
}

export const sectorCoordinatorsSectionQuery = `*[_type == "sectorCoordinatorsSection"][0] {
  title,
  subtitle,
  sectors {
    id,
    sector,
    coordinator,
    description
  }[]
}`

export const getSectorCoordinatorsSection =
  async (): Promise<SectorCoordinatorsSection> => {
    const sectorCoordinatorsSection = await client.fetch(
      sectorCoordinatorsSectionQuery,
    )
    return sectorCoordinatorsSection
  }

import { client } from "@/sanity/lib/client"

export interface MemberShipTierSection {
  title: string
  subtitle: string
  tiers: {
    id: string
    name: string
    description: string
    price: string
    benefits: string[]
    requirements: string[]
    color: string
    recommended: boolean
  }[]
}

export const memberShipTierSectionQuery = `*[_type == "memberShipTierSection"][0] { 
  title,
  subtitle,
  tiers[] {
    id,
    name,
    description,
    price,
    benefits,
    requirements,
    color,
    recommended,
  }
}`

export const getMemberShipTierSection =
  async (): Promise<MemberShipTierSection> => {
    const data = await client.fetch(memberShipTierSectionQuery)
    return data
  }

export interface MembershipTierForm {
  tiers: {
    id: string
    name: string
    description: string
  }[]
}

export const membershipTierFormQuery = `*[_type == "memberShipTierSection"][0] {
  tiers[] {
    id,
    name,
    description,
  }
}`

export const getMembershipTierForm = async (): Promise<MembershipTierForm> => {
  const data = await client.fetch(membershipTierFormQuery)
  return data
}

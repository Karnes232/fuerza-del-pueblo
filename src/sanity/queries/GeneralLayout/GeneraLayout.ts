import { client } from "@/sanity/lib/client"

export interface GeneralLayout {
  name: string
  tagline: string
  address: string
  description: string
  email: string
  telephone: string
  socialLinks: {
    _key: string
    platform: string
    href: string
    icon: string
    ariaLabel: string
  }[]
  logo: {
    alt: string
    asset: {
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
  }
}

export const generalLayoutQuery = `*[_type == "generalLayout"][0] {
  name,
  tagline,
  address,
  description,
  email,
  telephone,
  socialLinks,
  logo {
    alt,
    asset -> {
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  }
}`

export const getGeneralLayout = async (): Promise<GeneralLayout> => {
  const generalLayout = await client.fetch(generalLayoutQuery)
  return generalLayout
}

export interface contactMethods {
  address: string
  email: string
  telephone: string
}

export const contactMethodsQuery = `*[_type == "generalLayout"][0] {
  address,
  email,
  telephone,
}`

export const getContactMethods = async (): Promise<contactMethods> => {
  const contactMethods = await client.fetch(contactMethodsQuery)
  return contactMethods
}
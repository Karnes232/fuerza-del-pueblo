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

export interface contactData {
  address: string
  email: string
  telephone: string
}

export interface socialLinks {
  socialLinks: {
    _key: string
    platform: string
    href: string
    icon: string
    ariaLabel: string
  }[]
}

export const socialLinksQuery = `*[_type == "generalLayout"][0] {
  socialLinks[] {
    _key,
    platform,
    href,
    icon,
    ariaLabel
  }
} `

export const getSocialLinks = async (): Promise<socialLinks> => {
  const socialLinks = await client.fetch(socialLinksQuery)
  return socialLinks
}

export interface mapData {
  mapUrl: string
  embedUrl: string
}

export const mapDataQuery = `*[_type == "generalLayout"][0] {
  mapUrl,
  embedUrl,
} `

export const getMapData = async (): Promise<mapData> => {
  const mapData = await client.fetch(mapDataQuery)
  return mapData
}

export interface logoData {
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

export const logoDataQuery = `*[_type == "generalLayout"][0] {
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
} `

export const getLogoData = async (): Promise<logoData> => {
  const logoData = await client.fetch(logoDataQuery)
  return logoData
}

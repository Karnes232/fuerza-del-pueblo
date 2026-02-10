import { client } from "@/sanity/lib/client"

export interface AboutContentSection {
  title: string
  content: string
  sections: {
    id: string
    title: string
    content: string
  }[]
  image: {
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

export const aboutContentSectionQuery = `*[_type == "aboutContentSection"][0] {
  title,
  content,
  sections[] {
    id,
    title,
    content,
  },
  image {
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

export const getAboutContentSection =
  async (): Promise<AboutContentSection> => {
    const aboutContentSection = await client.fetch(aboutContentSectionQuery)
    return aboutContentSection
  }

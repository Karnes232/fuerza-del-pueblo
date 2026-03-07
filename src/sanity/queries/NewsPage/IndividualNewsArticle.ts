import { client } from "@/sanity/lib/client"
import { PortableTextBlock } from "sanity"

export interface IndividualNewsArticle {
  title: string
  category: string
  date: string
  slug: string
  author: {
    name: string
    role: string
  }
  readTime: number
  featuredImage: {
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
  content: PortableTextBlock[]
  images: {
    _key: string
    asset: {
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
    caption: string
  }[]
}

export const individualNewsArticleQuery = `*[_type == "individualNewsArticle" && slug.current == $slug][0] {
  title,
  category,
  date,
  slug,
  author,
  readTime,
  featuredImage {
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
  },
  content,
  images {
    _key,
    asset -> {
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    },
    caption
  }[]
}`

export const getIndividualNewsArticle = async (
  slug: string,
): Promise<IndividualNewsArticle | null> => {
  const article = await client.fetch(individualNewsArticleQuery, { slug })
  return article
}

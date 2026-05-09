import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { PortableTextBlock } from "sanity"

export interface IndividualNewsArticle {
  _id: string
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
  seo: {
    structuredData: {
      jsonLd: string
    }
  }
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
  }[],
  seo {
    structuredData {
      jsonLd
    }
  }

}`

export const getIndividualNewsArticle = async (
  slug: string,
): Promise<IndividualNewsArticle | null> => {
  const article = await client.fetch(individualNewsArticleQuery, { slug })
  return article
}

export interface IndividualNewsArticleSeo {
  meta: {
    title: string
    description: string
    keywords: string[]
  }
  openGraph: {
    title?: string
    description?: string
    imageUrl?: string
  }
  noIndex: boolean
  noFollow: boolean
}

export const individualNewsArticleSeoQuery = `*[_type == "individualNewsArticle" && slug.current == $slug][0] {
  "seo": seo {
    meta {
      title,
      description,
      keywords
    },
    openGraph {
      title,
      description,
      image
    },
    "noIndex": coalesce(noIndex, false),
    "noFollow": coalesce(noFollow, false)
  },
  featuredImage
}`

type IndividualNewsArticleSeoQueryResult = {
  seo: {
    meta: {
      title: string
      description: string
      keywords: string[]
    }
    openGraph: {
      title?: string
      description?: string
      image?: unknown
    }
    noIndex: boolean
    noFollow: boolean
  } | null
  featuredImage?: unknown
}

export const getIndividualNewsArticleSeo = async (
  slug: string,
): Promise<IndividualNewsArticleSeo | null> => {
  const result =
    await client.fetch<IndividualNewsArticleSeoQueryResult | null>(
      individualNewsArticleSeoQuery,
      { slug },
    )
  if (!result?.seo) return null

  const seoImage = result.seo.openGraph?.image
  const fallback = result.featuredImage
  const source = seoImage ?? fallback
  const imageUrl = source
    ? urlFor(source).width(1200).height(630).url()
    : undefined

  return {
    meta: result.seo.meta,
    openGraph: {
      title: result.seo.openGraph?.title,
      description: result.seo.openGraph?.description,
      ...(imageUrl && { imageUrl }),
    },
    noIndex: result.seo.noIndex,
    noFollow: result.seo.noFollow,
  }
}

export interface IndividualNewsArticleRelatedArticles {
  _id: string
  title: string
  slug: {
    current: string
  }
  category: string
  excerpt: string
  date: string
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
}

export const individualNewsArticleRelatedArticlesQuery = `*[_type == "individualNewsArticle" && category == $category && slug.current != $slug] | order(date desc) {
  _id,
  title,
  slug,
  category,
  excerpt,
  date,
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
  }
}`

export const getIndividualNewsArticleRelatedArticles = async (
  category: string,
  slug: string,
): Promise<IndividualNewsArticleRelatedArticles[] | null> => {
  const relatedArticles = await client.fetch<
    IndividualNewsArticleRelatedArticles[] | null
  >(individualNewsArticleRelatedArticlesQuery, { category, slug })
  return relatedArticles
}

export interface IndividualNewsArticlePreviousNextArticles {
  title: string
  date: string
  slug: {
    current: string
  }
}

export const individualNewsArticleNextArticlesQuery = `*[_type == "individualNewsArticle" && date > $date] | order(date asc) [0] {
  title,
  date,
  slug {
    current
  }
}`

export const getIndividualNewsArticleNextArticles = async (
  date: string,
): Promise<IndividualNewsArticlePreviousNextArticles | null> => {
  const nextArticle =
    await client.fetch<IndividualNewsArticlePreviousNextArticles | null>(
      individualNewsArticleNextArticlesQuery,
      { date },
    )
  return nextArticle
}

export const individualNewsArticlePreviousArticlesQuery = `*[_type == "individualNewsArticle" && date < $date] | order(date desc) [0] {
  title,
  date,
  slug {
    current
  }
}`

export const getIndividualNewsArticlePreviousArticles = async (
  date: string,
): Promise<IndividualNewsArticlePreviousNextArticles | null> => {
  const previousArticle =
    await client.fetch<IndividualNewsArticlePreviousNextArticles | null>(
      individualNewsArticlePreviousArticlesQuery,
      { date },
    )
  return previousArticle
}

export interface NewsArticles {
  _id: string
  title: string
  slug: {
    current: string
  }
  category: string
  excerpt: string
  date: string
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
}

export const newsArticlesQuery = `*[_type == "individualNewsArticle"] | order(date desc) {
  _id,
  title,
  slug,
  category,
  excerpt,
  date,
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
  }
}`

export const getNewsArticles = async (): Promise<NewsArticles[] | null> => {
  const newsArticles = await client.fetch<NewsArticles[] | null>(
    newsArticlesQuery,
  )
  return newsArticles
}

export const threeLatestNewsArticlesQuery = `*[_type == "individualNewsArticle"] | order(date desc) [0..2] {
  _id,
  title,
  slug,
  category,
  excerpt,
  date,
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
  }
}`

export const getThreeLatestNewsArticles = async (): Promise<
  NewsArticles[] | null
> => {
  const newsArticles = await client.fetch<NewsArticles[] | null>(
    threeLatestNewsArticlesQuery,
  )
  return newsArticles
}

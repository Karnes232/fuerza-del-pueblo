import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

export interface PageSeo {
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

export const seoQuery = `*[_type == "pageSeo" && pageName == $pageName][0].seo {
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
  noIndex,
  noFollow
}`

type SeoQueryResult = Omit<PageSeo, "openGraph"> & {
  openGraph: {
    title?: string
    description?: string
    image?: unknown
  }
}

export const getPageSeo = async (pageName: string): Promise<PageSeo | null> => {
  const seo = await client.fetch<SeoQueryResult | null>(seoQuery, { pageName })
  if (!seo) return null

  const imageUrl = seo.openGraph?.image
    ? urlFor(seo.openGraph.image).width(1200).height(630).url()
    : undefined

  return {
    ...seo,
    openGraph: {
      title: seo.openGraph?.title,
      description: seo.openGraph?.description,
      ...(imageUrl && { imageUrl }),
    },
  }
}

export interface StructuredData {
  jsonLd: string
}

export const structuredDataQuery = `*[_type == "pageSeo" && pageName == $pageName][0].seo.structuredData {
  jsonLd
}`

export const getStructuredData = async (
  pageName: string,
): Promise<StructuredData | null> => {
  const structuredData = await client.fetch<StructuredData | null>(
    structuredDataQuery,
    { pageName },
  )
  if (!structuredData) return null
  return structuredData
}

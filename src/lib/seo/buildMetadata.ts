import type { Metadata } from "next"
import type { PageSeo } from "@/sanity/queries/SEO/seo"

export const SITE_URL = "https://www.fuerzadelpuebloveronpuntacana.com"
export const SITE_NAME = "Fuerza del Pueblo"
export const DEFAULT_OG_IMAGE = "/og-default.jpg"

type BuildMetadataInput = {
  seo: PageSeo | null
  canonicalPath?: string
  fallbackImageUrl?: string
  fallbackImageAlt?: string
  ogType?: "website" | "article"
  publishedTime?: string
}

export function buildMetadata({
  seo,
  canonicalPath,
  fallbackImageUrl,
  fallbackImageAlt,
  ogType = "website",
  publishedTime,
}: BuildMetadataInput): Metadata {
  if (!seo) return {}

  const canonicalUrl = canonicalPath ? `${SITE_URL}${canonicalPath}` : undefined

  const title = seo.openGraph?.title ?? seo.meta.title
  const description = seo.openGraph?.description ?? seo.meta.description
  const imageUrl = seo.openGraph?.imageUrl ?? fallbackImageUrl
  const imageAlt = title ?? fallbackImageAlt ?? SITE_NAME

  const images = imageUrl
    ? [{ url: imageUrl, width: 1200, height: 630, alt: imageAlt }]
    : undefined

  return {
    title: seo.meta.title,
    description: seo.meta.description,
    keywords: seo.meta.keywords,
    ...(canonicalUrl && {
      alternates: { canonical: canonicalUrl },
    }),
    openGraph: {
      type: ogType,
      locale: "es_DO",
      siteName: SITE_NAME,
      title,
      description,
      ...(canonicalUrl && { url: canonicalUrl }),
      ...(images && { images }),
      ...(ogType === "article" && publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images && { images: images.map((i) => i.url) }),
    },
    robots: {
      index: !seo.noIndex,
      follow: !seo.noFollow,
    },
  }
}

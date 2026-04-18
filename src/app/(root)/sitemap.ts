import type { MetadataRoute } from "next"

import { client } from "@/sanity/lib/client"

/** Matches `src/app/robots.ts` */
const SITE_URL = "https://www.fuerzadelpuebloveronpuntacana.com"

export const revalidate = 3600

const sitemapNewsSlugsQuery = `*[_type == "individualNewsArticle" && defined(slug.current)] {
  "slug": slug.current,
  date
}`

const sitemapEventSlugsQuery = `*[_type == "individualEvent" && defined(slug.current)] {
  "slug": slug.current,
  date
}`

type SlugRow = { slug: string; date?: string }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [newsRows, eventRows] = await Promise.all([
    client.fetch<SlugRow[]>(sitemapNewsSlugsQuery),
    client.fetch<SlugRow[]>(sitemapEventSlugsQuery),
  ])

  const staticEntries: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/contacto`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/unete`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/noticias`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/eventos`, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${SITE_URL}/partido/quienes-somos`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/partido/mision-vision-valores`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/partido/historia`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/partido/liderazgo`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/partido/candidatos`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/terminos-y-condiciones`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politica-de-privacidad`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const newsEntries: MetadataRoute.Sitemap = newsRows.map(row => ({
    url: `${SITE_URL}/noticias/${row.slug}`,
    lastModified: row.date ? new Date(row.date) : undefined,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const eventEntries: MetadataRoute.Sitemap = eventRows.flatMap(row => {
    const lastModified = row.date ? new Date(row.date) : undefined
    return [
      {
        url: `${SITE_URL}/eventos/${row.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.75,
      },
      {
        url: `${SITE_URL}/eventos/${row.slug}/rsvp`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.65,
      },
    ]
  })

  return [...staticEntries, ...newsEntries, ...eventEntries]
}

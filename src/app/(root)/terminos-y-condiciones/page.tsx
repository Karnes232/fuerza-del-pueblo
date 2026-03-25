import { getPageSeo } from "@/sanity/queries/SEO/seo"

export default function Terminos() {
  return (
    <div>
      <h1>Términos y Condiciones</h1>
    </div>
  )
}

export async function generateMetadata() {
  const pageSeo = await getPageSeo("terminos-y-condiciones")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpuebloveronpuntacana.com/terminos-y-condiciones`
  return {
    canonical: canonicalUrl,
    title: pageSeo.meta.title,
    description: pageSeo.meta.description,
    keywords: pageSeo.meta.keywords,
    openGraph: {
      url: canonicalUrl,
      title: pageSeo.openGraph.title,
      description: pageSeo.openGraph.description,
      image: pageSeo.openGraph.imageUrl,
    },
    robots: {
      index: !pageSeo.noIndex,
      follow: !pageSeo.noFollow,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

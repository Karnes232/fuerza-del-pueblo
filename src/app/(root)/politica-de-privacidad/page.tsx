import SanityBlogBody from "@/components/BlockContent/SanityBlogBody"
import { legalDocumentQuery } from "@/sanity/queries/LegalDocuments/LegalDocuments"
import { getPageSeo } from "@/sanity/queries/SEO/seo"

export default async function Privacidad() {
  const legalDocument = await legalDocumentQuery("politica-de-privacidad")
  return (
    <main className="py-12">
      <SanityBlogBody content={legalDocument.legalDocument} />
    </main>
  )
}

export async function generateMetadata() {
  const pageSeo = await getPageSeo("politica-de-privacidad")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpuebloveronpuntacana.com/politica-de-privacidad`
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

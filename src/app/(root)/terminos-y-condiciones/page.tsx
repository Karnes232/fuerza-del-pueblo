import { getPageSeo } from "@/sanity/queries/SEO/seo"
import { legalDocumentQuery } from "@/sanity/queries/LegalDocuments/LegalDocuments"
import SanityBlogBody from "@/components/BlockContent/SanityBlogBody"

export default async function Terminos() {
  const legalDocument = await legalDocumentQuery("terminos-y-condiciones")

  return (
    <main className="py-12">
      <SanityBlogBody content={legalDocument.legalDocument} />
    </main>
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

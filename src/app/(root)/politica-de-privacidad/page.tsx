import SanityBlogBody from "@/components/BlockContent/SanityBlogBody"
import { legalDocumentQuery } from "@/sanity/queries/LegalDocuments/LegalDocuments"
import { getPageSeo } from "@/sanity/queries/SEO/seo"
import { buildMetadata } from "@/lib/seo/buildMetadata"

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
  return buildMetadata({
    seo: pageSeo,
    canonicalPath: "/politica-de-privacidad",
  })
}

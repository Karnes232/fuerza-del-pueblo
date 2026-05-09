import { getPageSeo } from "@/sanity/queries/SEO/seo"
import { legalDocumentQuery } from "@/sanity/queries/LegalDocuments/LegalDocuments"
import SanityBlogBody from "@/components/BlockContent/SanityBlogBody"
import { buildMetadata } from "@/lib/seo/buildMetadata"

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
  return buildMetadata({
    seo: pageSeo,
    canonicalPath: "/terminos-y-condiciones",
  })
}

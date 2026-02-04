import { FeaturedArticleSection } from "@/components/NewsPage/FeaturedArticleSection"
import { NewsFilterClient } from "@/components/NewsPage/NewsFilterClient"
import { NewsHero } from "@/components/NewsPage/NewsHero"
import { NewsletterCTA } from "@/components/NewsPage/NewsletterCTA"
import {
  newsHeroData,
  featuredArticle,
  newsArticles,
  newsCategories,
  newsletterCTAData,
} from "@/config/news.config"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"

export default async function NoticiasPage() {
  const [structuredData] = await Promise.all([getStructuredData("noticias")])
  return (
    <>
      <Script
        id="structured-data"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData?.jsonLd || "" }}
      />
      <main>
        {/* Hero Section */}
        <NewsHero
          title={newsHeroData.title}
          subtitle={newsHeroData.subtitle}
          description={newsHeroData.description}
          showSearch={newsHeroData.showSearch}
        />

        {/* Featured Article Section */}
        <FeaturedArticleSection article={featuredArticle} />

        {/* Filter & Grid - Client Component for interactivity */}
        <NewsFilterClient articles={newsArticles} categories={newsCategories} />

        {/* Newsletter CTA Section */}
        <NewsletterCTA
          title={newsletterCTAData.title}
          description={newsletterCTAData.description}
        />
      </main>
    </>
  )
}

export async function generateMetadata() {
  const pageSeo = await getPageSeo("noticias")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do/noticias`
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

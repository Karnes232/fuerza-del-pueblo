import { FeaturedArticleSection } from "@/components/NewsPage/FeaturedArticleSection"
import { NewsFilterClient } from "@/components/NewsPage/NewsFilterClient"
import { NewsletterCTA } from "@/components/NewsPage/NewsletterCTA"
import {
  featuredArticle,
  newsCategories,
  newsletterCTAData,
} from "@/config/news.config"
import { NewsArticle } from "@/types/news.types"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import {
  getNewsArticles,
  type NewsArticles,
} from "@/sanity/queries/NewsPage/IndividualNewsArticle"
import Script from "next/script"
import { getNewsPageHeroSection } from "@/sanity/queries/NewsPage/HeroSection"
import { AboutHero } from "@/components/AboutUsPage/AboutHero"

function toNewsArticle(row: NewsArticles): NewsArticle {
  return {
    _id: row._id,
    title: row.title,
    excerpt: row.excerpt,
    date: row.date,
    slug: row.slug,
    category: row.category as NewsArticle["category"],
    image: row.featuredImage?.asset?.url,
  }
}

export default async function NoticiasPage() {
  const [structuredData, rawArticles, newsPageHeroSection] = await Promise.all([
    getStructuredData("noticias"),
    getNewsArticles(),
    getNewsPageHeroSection(),
  ])
  const articles: NewsArticle[] = (rawArticles ?? []).map(toNewsArticle)

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
        <AboutHero
          title={newsPageHeroSection.title}
          subtitle={newsPageHeroSection.subtitle}
          description={newsPageHeroSection.description}
          backgroundImage={newsPageHeroSection.backgroundImage}
        />

        {/* Featured Article Section */}
        <FeaturedArticleSection
          article={toNewsArticle(newsPageHeroSection.featuredArticle)}
        />

        {/* Filter & Grid - Client Component for interactivity */}
        <NewsFilterClient articles={articles} categories={newsCategories} />

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

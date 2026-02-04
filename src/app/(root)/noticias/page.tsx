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

export default function NoticiasPage() {
  return (
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
  )
}

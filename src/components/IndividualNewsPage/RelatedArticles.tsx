// components/ArticlePage/RelatedArticles.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { NewsCard } from "@/components/HomePage/NewsCard"
import { NewsArticle } from "@/types/home.types"
import { IndividualNewsArticleRelatedArticles } from "@/sanity/queries/NewsPage/IndividualNewsArticle"

function toNewsArticle(
  article: IndividualNewsArticleRelatedArticles,
): NewsArticle {
  return {
    id: article._id,
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    image: article.featuredImage?.asset?.url,
    slug: article.slug,
    category: article.category,
  }
}

export interface RelatedArticlesProps {
  title: string
  articles: IndividualNewsArticleRelatedArticles[]
}

export const RelatedArticles = ({ title, articles }: RelatedArticlesProps) => {
  if (articles.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <SectionHeader title={title} align="left" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <NewsCard key={article._id} article={toNewsArticle(article)} />
          ))}
        </div>
      </Container>
    </section>
  )
}

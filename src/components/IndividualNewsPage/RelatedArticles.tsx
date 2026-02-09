// components/ArticlePage/RelatedArticles.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { NewsCard } from "@/components/HomePage/NewsCard"
import { RelatedArticlesProps } from "@/types/article.types"

export const RelatedArticles = ({ title, articles }: RelatedArticlesProps) => {
  if (articles.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <SectionHeader title={title} align="left" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  )
}

// sections/FeaturedArticleSection.tsx
import { Container } from "@/components/HomePage/Container"
import { FeaturedArticleCard } from "@/components/NewsPage/FeaturedArticleCard"
import { FeaturedArticleSectionProps } from "@/types/news.types"

export const FeaturedArticleSection = ({
  article,
}: FeaturedArticleSectionProps) => {
  if (!article) return null

  return (
    <section className="py-16 md:py-20 bg-lightGreen">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-darkGreen">
            Artículo Destacado
          </h2>
        </div>
        <FeaturedArticleCard article={article} />
      </Container>
    </section>
  )
}

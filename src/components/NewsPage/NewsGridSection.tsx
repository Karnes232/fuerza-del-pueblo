// sections/NewsGridSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { NewsCard } from "@/components/HomePage/NewsCard"
import { NewsGridSectionProps } from "@/types/news.types"

export const NewsGridSection = ({
  title,
  articles,
  loading = false,
}: NewsGridSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-lightGreen">
      <Container>
        {title && <SectionHeader title={title} />}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-primaryGreen border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 mt-4">Cargando artículos...</p>
          </div>
        ) : articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron artículos con los criterios seleccionados.
            </p>
          </div>
        )}
      </Container>
    </section>
  )
}

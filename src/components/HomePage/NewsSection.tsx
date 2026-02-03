// sections/NewsSection.tsx
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { NewsCard } from "@/components/HomePage/NewsCard"
import { NewsSectionProps } from "@/types/home.types"

export const NewsSection = ({
  title,
  subtitle,
  articles,
  viewAllLink,
}: NewsSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {articles.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 text-[#00A651] hover:text-[#008d45] font-semibold text-lg transition-colors group"
          >
            Ver todas las noticias
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

// components/ArticlePage/ArticleNavigation.tsx
import Link from "next/link"
import { Container } from "@/components/HomePage/Container"
import { ArticleNavigationProps } from "@/types/article.types"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const ArticleNavigation = ({
  previousArticle,
  nextArticle,
}: ArticleNavigationProps) => {
  if (!previousArticle && !nextArticle) return null

  return (
    <section className="py-8! border-t border-gray-200 bg-[#F4F4F4]">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Previous Article */}
            {previousArticle ? (
              <Link
                href={`/noticias/${previousArticle.slug}`}
                className="flex items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow group"
              >
                <div className="w-10 h-10 bg-primaryGreen/10 rounded-full flex items-center justify-center group-hover:bg-primaryGreen group-hover:text-white transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-charcoal/60 uppercase tracking-wide mb-1">
                    Anterior
                  </p>
                  <p className="font-semibold text-charcoal group-hover:text-primaryGreen transition-colors line-clamp-2">
                    {previousArticle.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Next Article */}
            {nextArticle ? (
              <Link
                href={`/noticias/${nextArticle.slug}`}
                className="flex items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow group"
              >
                <div className="flex-1 text-right">
                  <p className="text-xs text-charcoal/60 uppercase tracking-wide mb-1">
                    Siguiente
                  </p>
                  <p className="font-semibold text-charcoal group-hover:text-primaryGreen transition-colors line-clamp-2">
                    {nextArticle.title}
                  </p>
                </div>
                <div className="w-10 h-10 bg-primaryGreen/10 rounded-full flex items-center justify-center group-hover:bg-primaryGreen group-hover:text-white transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

// components/ArticlePage/ArticleHero.tsx
import Image from "next/image"
import { Container } from "@/components/HomePage/Container"
import { ArticleHeroProps } from "@/types/article.types"
import { Calendar, Clock, User } from "lucide-react"

export const ArticleHero = ({
  title,
  category,
  date,
  author,
  featuredImage,
  readTime,
}: ArticleHeroProps) => {
  const formattedDate = new Date(date).toLocaleDateString("es-DO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primaryGreen text-white text-sm font-semibold rounded-full">
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
            {title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-charcoal/70">
            {/* Date */}
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primaryGreen" />
              <time dateTime={date}>{formattedDate}</time>
            </div>

            {/* Read Time */}
            {readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primaryGreen" />
                <span>{readTime} min de lectura</span>
              </div>
            )}

            {/* Author */}
            {author && (
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primaryGreen" />
                <span>{author.name}</span>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {featuredImage && (
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl mb-8">
              <Image
                src={featuredImage.asset.url}
                alt={featuredImage.alt || title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

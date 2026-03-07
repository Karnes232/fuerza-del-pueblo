"use client"

// components/ArticlePage/ArticleContent.tsx
import { Container } from "@/components/HomePage/Container"
import { ArticleContentProps } from "@/types/article.types"
import SanityBlogBody from "@/components/BlockContent/SanityBlogBody"
import { ArticleImageCarousel } from "./ArticleImageCarousel"

export const ArticleContent = ({ content, images }: ArticleContentProps) => {
  console.log(images)
  return (
    <section className="py-8 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <SanityBlogBody content={content} />
          </div>

          {images && images.length > 0 && (
            <ArticleImageCarousel images={images} />
          )}
        </div>
      </Container>
    </section>
  )
}

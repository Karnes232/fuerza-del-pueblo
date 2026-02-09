// components/ArticlePage/ArticleContent.tsx
import Image from "next/image"
import { Container } from "@/components/HomePage/Container"
import { ArticleContentProps } from "@/types/article.types"

export const ArticleContent = ({ content, images }: ArticleContentProps) => {
  return (
    <section className="py-8 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Main Content - This would typically use a rich text renderer */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-charcoal/80 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* Additional Images Gallery (if provided) */}
          {images && images.length > 0 && (
            <div className="mt-12 space-y-8">
              {images.map(image => (
                <figure key={image.id} className="space-y-3">
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image.asset.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="text-sm text-charcoal/60 text-center italic">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

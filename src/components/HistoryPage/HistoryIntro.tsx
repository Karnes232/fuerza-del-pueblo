// components/HistoryPage/HistoryIntro.tsx
import Image from "next/image"
import { Container } from "@/components/HomePage/Container"
import { HistoryIntroProps } from "@/types/history.types"
import { BookOpen } from "lucide-react"

export const HistoryIntro = ({ title, content, image }: HistoryIntroProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image or Illustration */}
            <div className="relative order-2 md:order-1">
              {image ? (
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={image?.asset?.url}
                    alt={image?.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primaryGreen/20 to-darkGreen/20 flex items-center justify-center border-4 border-primaryGreen/30">
                  <div className="text-center p-8">
                    <BookOpen className="w-32 h-32 text-primaryGreen/40 mx-auto mb-4" />
                    <p className="text-2xl font-bold text-primaryGreen">
                      Nuestra Historia
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                {title}
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                {content}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

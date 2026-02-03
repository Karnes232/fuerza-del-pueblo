// sections/AboutSection.tsx
import Image from "next/image"
import { Container } from "@/components/HomePage/Container"
import { CTAButton } from "@/components/HomePage/CTAButton"
import { AboutSectionProps } from "@/types/home.types"

export const AboutSection = ({
  title,
  content,
  image,
  ctaText,
  ctaLink,
}: AboutSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              {title}
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">{content}</p>
            {ctaText && ctaLink && (
              <div className="pt-4">
                <CTAButton
                  text={ctaText}
                  href={ctaLink}
                  variant="primary"
                  icon="ArrowRight"
                />
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative">
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
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-linear-to-br from-primaryGreen to-darkGreen flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-bold mb-4 opacity-50">FDP</div>
                  <p className="text-xl font-semibold opacity-75">
                    Fuerza del Pueblo
                  </p>
                  <p className="text-sm opacity-60 mt-2">Verón - Punta Cana</p>
                </div>
              </div>
            )}
    
          </div>
        </div>
      </Container>
    </section>
  )
}

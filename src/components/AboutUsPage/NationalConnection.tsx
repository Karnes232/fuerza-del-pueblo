// components/AboutPage/NationalConnection.tsx
import Image from "next/image"
import { Container } from "@/components/HomePage/Container"
import { CTAButton } from "@/components/HomePage/CTAButton"
import { NationalConnectionProps } from "@/types/about.types"
import { Link2 } from "lucide-react"

export const NationalConnection = ({
  title,
  content,
  logoUrl,
  leaderName,
  leaderTitle,
  leaderImage,
  ctaText,
  ctaLink,
}: NationalConnectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-darkGreen to-primaryGreen text-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Icon/Badge */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Link2 className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {title}
          </h2>

          {/* Content */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center mb-12">
            {content}
          </p>

          {/* Leader Info (if provided) */}
          {leaderName && leaderTitle && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 p-8 bg-white/10 rounded-lg backdrop-blur-sm">
              {leaderImage && (
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/30">
                  <Image
                    src={leaderImage?.asset?.url}
                    alt={leaderImage?.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold">{leaderName}</h3>
                <p className="text-white/80">{leaderTitle}</p>
              </div>
            </div>
          )}

          {/* Logo (if provided) */}
          {logoUrl && (
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-24">
                <Image
                  src={logoUrl}
                  alt="Fuerza del Pueblo Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {/* CTA Button */}
          {ctaText && ctaLink && (
            <div className="flex justify-center">
              <CTAButton
                text={ctaText}
                href={ctaLink}
                variant="primary"
                size="lg"
                icon="ExternalLink"
                className="bg-white text-primaryGreen! hover:bg-gray-100! hover:text-darkGreen! shadow-xl"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

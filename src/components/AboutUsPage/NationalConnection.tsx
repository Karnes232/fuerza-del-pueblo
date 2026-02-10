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
  ctaText,
  ctaLink,
}: NationalConnectionProps) => {
  console.log(logoUrl)
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

          {/* Logo (if provided) */}
          {logoUrl && (
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-32 md:w-80 md:h-40">
                <Image
                  src={logoUrl.asset.url}
                  alt={logoUrl.alt}
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

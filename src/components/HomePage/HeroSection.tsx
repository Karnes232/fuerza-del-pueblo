// sections/HeroSection.tsx
import Image from "next/image"
import { Container } from "@/components/HomePage/Container"
import { CTAButton } from "@/components/HomePage/CTAButton"
import { HeroSectionProps } from "@/types/home.types"


export const HeroSection = ({
  title,
  subtitle,
  slogan,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroSectionProps) => {
  return (
    <section className="relative bg-linear-to-br from-darkGreen to-charcoal text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={backgroundImage?.asset?.url}
            alt={backgroundImage?.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-primaryGreen) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Subtitle */}
          {subtitle && (
            <p className={`text-primaryGreen font-semibold text-lg md:text-xl uppercase tracking-wide font-body`}>
              {subtitle}
            </p>
          )}

          {/* Title */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`}>
            {title}
          </h1>

          {/* Slogan */}
          <p className={`text-2xl md:text-3xl font-semibold text-primaryGreen italic`}>
            "{slogan}"
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <CTAButton
              text={ctaText}
              href={ctaLink}
              variant="primary"
              size="lg"
              icon="ArrowRight"
            />
            {secondaryCtaText && secondaryCtaLink && (
              <CTAButton
                text={secondaryCtaText}
                href={secondaryCtaLink}
                variant="outline"
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-darkGreen!"
              />
            )}
          </div>
        </div>
      </Container>

      {/* Bottom Wave */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

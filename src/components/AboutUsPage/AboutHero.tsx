// components/AboutPage/AboutHero.tsx
import Image from "next/image"
import { Container } from "@/components/HomePage/Container"
import { AboutHeroProps } from "@/types/about.types"

export const AboutHero = ({
  title,
  subtitle,
  description,
  backgroundImage,
}: AboutHeroProps) => {
  return (
    <section className="relative bg-linear-to-br from-darkGreen to-primaryGreen text-white py-16 md:py-24 overflow-hidden">
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={backgroundImage?.asset?.url}
            alt={backgroundImage?.alt || "About Hero Background Image"}
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
              "radial-gradient(circle, var(--color-white) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Subtitle */}
          {subtitle && (
            <p className="text-white/80 font-semibold text-lg uppercase tracking-wide">
              {subtitle}
            </p>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </Container>
    </section>
  )
}

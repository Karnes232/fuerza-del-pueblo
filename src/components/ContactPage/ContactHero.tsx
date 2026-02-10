// sections/ContactHero.tsx
import { Container } from "@/components/HomePage/Container"
import { ContactHeroProps } from "@/types/contact.types"
import Image from "next/image"

export const ContactHero = ({
  title,
  subtitle,
  description,
  backgroundImage,
}: ContactHeroProps) => {
  return (
    <section className="relative bg-linear-to-br from-darkGreen to-charcoal text-white py-16 md:py-20">
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
      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          {subtitle && (
            <p className="text-primaryGreen font-semibold text-lg uppercase tracking-wide">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="text-xl text-white/90">{description}</p>
        </div>
      </Container>
    </section>
  )
}

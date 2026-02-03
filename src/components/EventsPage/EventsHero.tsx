// sections/EventsHero.tsx
import { Container } from "@/components/HomePage/Container"
import { CTAButton } from "@/components/HomePage/CTAButton"
import { EventsHeroProps } from "@/types/events.types"

export const EventsHero = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
}: EventsHeroProps) => {
  return (
    <section className="bg-linear-to-br from-darkGreen to-charcoal text-white py-16 md:py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {subtitle && (
            <p className="text-primaryGreen font-semibold text-lg uppercase tracking-wide">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="text-xl text-white/90 leading-relaxed">{description}</p>
          {ctaText && ctaLink && (
            <div className="pt-4">
              <CTAButton
                text={ctaText}
                href={ctaLink}
                variant="primary"
                icon="MessageSquarePlus"
                className="bg-primaryGreen hover:bg-primaryGreen/80"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

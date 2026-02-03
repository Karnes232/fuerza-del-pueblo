// sections/ContactHero.tsx
import { Container } from "@/components/HomePage/Container"
import { ContactHeroProps } from "@/types/contact.types"

export const ContactHero = ({
  title,
  subtitle,
  description,
}: ContactHeroProps) => {
  return (
    <section className="bg-linear-to-br from-darkGreen to-charcoal text-white py-16 md:py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4">
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

// sections/UneteHero.tsx
import { Check, ArrowDown } from "lucide-react"
import { Container } from "@/components/HomePage/Container"
import { UneteHeroProps } from "@/types/unete.types"

export const UneteHero = ({
  title,
  subtitle,
  description,
  benefits,
  ctaText,
}: UneteHeroProps) => {
  return (
    <section className="bg-linear-to-br from-darkGreen to-charcoal text-white py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {subtitle && (
            <p className="text-primaryGreen font-semibold text-lg uppercase tracking-wide">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {title}
          </h1>

          <p className="text-xl text-white/90 leading-relaxed">{description}</p>

          {/* Benefits List */}
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primaryGreen shrink-0 mt-0.5" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="#registro"
              className="inline-flex items-center justify-center gap-2 bg-primaryGreen text-white px-8 py-4 rounded-lg font-semibold hover:bg-primaryGreen/80 transition-colors shadow-lg text-lg"
            >
              {ctaText}
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

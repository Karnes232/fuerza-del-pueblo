// sections/JoinSection.tsx
import Image from "next/image"
import { Check } from "lucide-react"
import { Container } from "@/components/HomePage/Container"
import { CTAButton } from "@/components/HomePage/CTAButton"
import { JoinSectionProps } from "@/types/home.types"

export const JoinSection = ({
  title,
  description,
  benefits,
  ctaText,
  ctaLink,
  backgroundImage,
}: JoinSectionProps) => {
  return (
    <section className="relative py-16 md:py-24 bg-linear-to-r from-darkGreen to-primaryGreen text-white overflow-hidden">
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={backgroundImage}
            alt="Join background"
            fill
            className="object-cover"
          />
        </div>
      )}

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {title}
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90">{description}</p>

          {/* Benefits List */}
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto py-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <CTAButton
              text={ctaText}
              href={ctaLink}
              variant="primary"
              size="lg"
              icon="UserPlus"
              className="bg-white text-primaryGreen! hover:bg-gray-100! hover:text-darkGreen! shadow-xl"
            />
          </div>
        </div>
      </Container>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
    </section>
  )
}

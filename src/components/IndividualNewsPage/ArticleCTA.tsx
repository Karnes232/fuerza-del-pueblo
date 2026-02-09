// components/ArticlePage/ArticleCTA.tsx
import { Container } from "@/components/HomePage/Container"
import { CTAButton } from "@/components/HomePage/CTAButton"
import { ArticleCallToActionProps } from "@/types/article.types"

export const ArticleCTA = ({
  title,
  description,
  buttonText,
  buttonLink,
}: ArticleCallToActionProps) => {
  return (
    <section className="py-12 bg-linear-to-r from-primaryGreen to-darkGreen text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <p className="text-lg text-white/90">{description}</p>
          <div className="pt-4">
            <CTAButton
              text={buttonText}
              href={buttonLink}
              variant="primary"
              size="lg"
              icon="ArrowRight"
              className="bg-white text-primaryGreen! hover:bg-gray-100! hover:text-darkGreen! shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

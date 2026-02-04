// sections/NewsletterCTA.tsx
import { FooterNewsletter } from "@/components/layout/Footer/FooterNewsletter"
import { Container } from "@/components/HomePage/Container"
import { NewsletterCTAProps } from "@/types/news.types"

export const NewsletterCTA = ({
  title,
  description,
  onSubmit,
}: NewsletterCTAProps) => {
  return (
    <section className="py-16 md:py-24 bg-darkGreen">
      <Container size="md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-white/80">{description}</p>
        </div>
        <div className="max-w-xl mx-auto">
          <FooterNewsletter onSubmit={onSubmit} />
        </div>
      </Container>
    </section>
  )
}

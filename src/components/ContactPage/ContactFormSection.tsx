// sections/ContactFormSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { ContactForm } from "@/components/ContactPage/ContactForm"
import { ContactFormSectionProps } from "@/types/contact.types"

export const ContactFormSection = ({
  title,
  subtitle,
  onSubmit,
}: ContactFormSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container size="md">
        <SectionHeader title={title} subtitle={subtitle} align="center" />

        <div className="max-w-2xl mx-auto">
          <ContactForm onSubmit={onSubmit} />
        </div>
      </Container>
    </section>
  )
}

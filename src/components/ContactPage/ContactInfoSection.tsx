// sections/ContactInfoSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { ContactCard } from "@/components/ContactPage/ContactCard"
import { ContactInfoSectionProps } from "@/types/contact.types"

export const ContactInfoSection = ({
  title,
  contacts,
}: ContactInfoSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} align="center" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </Container>
    </section>
  )
}

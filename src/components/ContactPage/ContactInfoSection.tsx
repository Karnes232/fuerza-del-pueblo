// sections/ContactInfoSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { ContactInfoSectionProps } from "@/types/contact.types"
import { ContactCard } from "@/components/ContactPage/ContactCard"

function normalizePhone(value: string): string {
  return value.replace(/\D/g, "")
}

function formatPhoneDisplay(value: string): string {
  const digits = normalizePhone(value)
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`
  }
  if (digits.length > 10) {
    return `+${digits.slice(0, digits.length - 10)} (${digits.slice(-10, -7)}) ${digits.slice(-7, -4)}-${digits.slice(-4)}`
  }
  // Fallback: group in threes
  return digits.replace(/(\d{3})(?=\d)/g, "$1 ").trim()
}

export const ContactInfoSection = ({
  title,
  contactMethods,
}: ContactInfoSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} align="center" />
        <div className="grid sm:grid-cols-2  gap-6">
          <ContactCard
            icon="Phone"
            contact={formatPhoneDisplay(contactMethods.telephone)}
            contactType="Teléfono"
            description="Llámanos de lunes a viernes, 9:00 AM - 6:00 PM"
            href={`tel:${contactMethods.telephone}`}
          />
          <ContactCard
            icon="Mail"
            contact={contactMethods.email}
            contactType="Correo Electrónico"
            description="Respuesta en 24-48 horas"
            href={`mailto:${contactMethods.email}`}
          />

          <ContactCard
            icon="MessageCircle"
            contact={formatPhoneDisplay(contactMethods.telephone)}
            contactType="WhatsApp"
            description="Mensajes directos disponibles"
            href={`https://wa.me/${contactMethods.telephone}`}
          />
          <ContactCard
            icon="MapPin"
            contact={contactMethods.address}
            contactType="Dirección"
            description="República Dominicana"
          />
        </div>
      </Container>
    </section>
  )
}

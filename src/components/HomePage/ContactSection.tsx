// sections/ContactSection.tsx
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { CTAButton } from "@/components/HomePage/CTAButton"
import { ContactSectionProps } from "@/types/home.types"

function normalizePhone(value: string): string {
    return value.replace(/\D/g, "")
  }
  
  /** Format for display, e.g. (809) 555-1234 or +1 (809) 555-1234 */
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


export const ContactSection = ({
  title,
  description,
  contactMethods,
}: ContactSectionProps) => {
  console.log(contactMethods)
  const contactMethodsList = [
    {
      icon: Phone,
      label: 'Llámanos',
      value: formatPhoneDisplay(contactMethods.telephone),
      href: `tel:${contactMethods.telephone}`,
    },
    {
      icon: Mail,
      label: 'Escríbenos',
      value: contactMethods.email,
      href: `mailto:${contactMethods.email}`,
    },
    {
      icon: MapPin,
      label: 'Visítanos',
      value: contactMethods.address,
      href: '/contacto',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: formatPhoneDisplay(contactMethods.telephone),
      href: `https://wa.me/${contactMethods.telephone}`,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={description} />
        
        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {contactMethodsList.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="flex flex-col items-center text-center p-6 bg-[#F4F4F4] rounded-lg hover:bg-[#00A651]/10 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#00A651] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <method.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F4D2B] mb-2">
                {method.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* CTA to Full Contact Page */}
        <div className="text-center">
          <CTAButton
            text="Ir a Página de Contacto"
            href="/contacto"
            variant="outline"
            icon="ArrowRight"
          />
        </div>
      </Container>
    </section>
  );
};
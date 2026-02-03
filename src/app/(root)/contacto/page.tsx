import { ContactFormSection } from "@/components/ContactPage/ContactFormSection"
import { ContactHero } from "@/components/ContactPage/ContactHero"
import { ContactInfoSection } from "@/components/ContactPage/ContactInfoSection"
import { LocationMapSection } from "@/components/ContactPage/LocationMapSection"
import { SocialLinksSection } from "@/components/ContactPage/SocialLinksSection"
import {
  contactHeroData,
  contactInfoData,
  contactFormData,
  locationMapData,
  socialLinksData,
} from "@/config/contact.config"

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <ContactHero
        title={contactHeroData.title}
        subtitle={contactHeroData.subtitle}
        description={contactHeroData.description}
      />

      {/* Contact Information */}
      <ContactInfoSection
        title={contactInfoData.title}
        contacts={contactInfoData.contacts}
      />

      {/* Contact Form */}
      <ContactFormSection
        title={contactFormData.title}
        subtitle={contactFormData.subtitle}
      />

      {/* Location Map */}
      <LocationMapSection
        title={locationMapData.title}
        address={locationMapData.address}
        mapUrl={locationMapData.mapUrl}
        embedUrl={locationMapData.embedUrl}
      />

      {/* Social Media Links */}
      <SocialLinksSection
        title={socialLinksData.title}
        subtitle={socialLinksData.subtitle}
        socials={socialLinksData.socials}
      />
    </main>
  )
}

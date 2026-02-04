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
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"

export default async function ContactPage() {
  const [structuredData] = await Promise.all([getStructuredData("contacto")])

  return (
    <>
      <Script
        id="structured-data"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData?.jsonLd || "" }}
      />
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
    </>
  )
}

export async function generateMetadata() {
  const pageSeo = await getPageSeo("contacto")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do/contacto`
  return {
    canonical: canonicalUrl,
    title: pageSeo.meta.title,
    description: pageSeo.meta.description,
    keywords: pageSeo.meta.keywords,
    openGraph: {
      url: canonicalUrl,
      title: pageSeo.openGraph.title,
      description: pageSeo.openGraph.description,
      image: pageSeo.openGraph.imageUrl,
    },
    robots: {
      index: !pageSeo.noIndex,
      follow: !pageSeo.noFollow,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

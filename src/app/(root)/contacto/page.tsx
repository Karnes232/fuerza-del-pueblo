import { ContactFormSection } from "@/components/ContactPage/ContactFormSection"
import { ContactHero } from "@/components/ContactPage/ContactHero"
import { ContactInfoSection } from "@/components/ContactPage/ContactInfoSection"
import { LocationMapSection } from "@/components/ContactPage/LocationMapSection"
import { SocialLinksSection } from "@/components/ContactPage/SocialLinksSection"

import { getContactPageHeroSection } from "@/sanity/queries/ContactPage/HeroSection"
import { getSectionTitles } from "@/sanity/queries/ContactPage/SectionTitles"
import {
  getContactMethods,
  getSocialLinks,
  getMapData,
} from "@/sanity/queries/GeneralLayout/GeneraLayout"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"

export default async function ContactPage() {
  const [
    structuredData,
    contactPageHeroSection,
    contactMethods,
    sectionTitles,
    socialLinks,
    mapData,
  ] = await Promise.all([
    getStructuredData("contacto"),
    getContactPageHeroSection(),
    getContactMethods(),
    getSectionTitles(),
    getSocialLinks(),
    getMapData(),
  ])

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
          title={contactPageHeroSection.title}
          subtitle={contactPageHeroSection.subtitle}
          description={contactPageHeroSection.description}
          backgroundImage={contactPageHeroSection.backgroundImage}
        />

        {/* Contact Information */}
        <ContactInfoSection
          title={sectionTitles.contactInformationTitle}
          contactMethods={contactMethods}
        />

        {/* Contact Form */}
        <ContactFormSection
          title={sectionTitles.contactFormTitle}
          subtitle={sectionTitles.contactFormSubtitle}
        />

        {/* Location Map */}
        <LocationMapSection
          title={sectionTitles.locationMapTitle}
          address={contactMethods.address}
          mapUrl={mapData.mapUrl}
          embedUrl={mapData.embedUrl}
        />

        {/* Social Media Links */}
        <SocialLinksSection
          title={sectionTitles.socialLinksTitle}
          subtitle={sectionTitles.socialLinksSubtitle}
          socials={socialLinks.socialLinks}
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

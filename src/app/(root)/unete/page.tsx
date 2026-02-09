import { FAQSection } from "@/components/JoinPage/FAQSection"
import { JoinFormSection } from "@/components/JoinPage/JoinFormSection"
import { MembershipTiersSection } from "@/components/JoinPage/MembershipTiersSection"
import { TestimonialsSection } from "@/components/JoinPage/TestimonialsSection"
import { UneteCTA } from "@/components/JoinPage/UneteCTA"
import { UneteHero } from "@/components/JoinPage/UneteHero"
import { WhyJoinSection } from "@/components/JoinPage/WhyJoinSection"
import {
  // whyJoinData,
  // membershipTiersData,
  // joinFormData,
  testimonialsData,
  faqData,
  uneteCTAData,
} from "@/config/unete.config"
import { getJoinPageHeroSection } from "@/sanity/queries/JoinPage/HeroSection"
import { getWhyJoinSection } from "@/sanity/queries/JoinPage/WhyJoinSection"
import { getMemberShipTierSection } from "@/sanity/queries/JoinPage/MemberShipTierSection"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"
import { getJoinPageTestimonialsSection } from "@/sanity/queries/JoinPage/TestimonialsSection"

export default async function UnetePage() {
  const [
    structuredData,
    joinPageHeroSection,
    whyJoinSection,
    memberShipTierSection,
    joinPageTestimonialsSection,
  ] = await Promise.all([
    getStructuredData("unete"),
    getJoinPageHeroSection(),
    getWhyJoinSection(),
    getMemberShipTierSection(),
    getJoinPageTestimonialsSection(),
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
        <UneteHero
          title={joinPageHeroSection.title}
          subtitle={joinPageHeroSection.subtitle}
          description={joinPageHeroSection.description}
          benefits={joinPageHeroSection.benefits}
          ctaText={joinPageHeroSection.ctaText}
          backgroundImage={joinPageHeroSection.backgroundImage}
        />

        {/* Why Join Section */}
        <WhyJoinSection
          title={whyJoinSection.title}
          subtitle={whyJoinSection.subtitle}
          benefits={whyJoinSection.benefits}
        />

        {/* Membership Tiers Section */}
        <MembershipTiersSection
          title={memberShipTierSection.title}
          subtitle={memberShipTierSection.subtitle}
          tiers={memberShipTierSection.tiers}
        />

        {/* Join Form Section */}
        <JoinFormSection
          title="Completa Tu Registro"
          subtitle="Toma solo unos minutos unirte al movimiento"
        />

        {/* Testimonials Section */}
        <TestimonialsSection
          title={joinPageTestimonialsSection.title}
          subtitle={joinPageTestimonialsSection.subtitle}
          testimonials={joinPageTestimonialsSection.testimonials}
        />

        {/* FAQ Section */}
        <FAQSection
          title={faqData.title}
          subtitle={faqData.subtitle}
          faqs={faqData.faqs}
        />

        {/* CTA Section */}
        <UneteCTA
          title={uneteCTAData.title}
          description={uneteCTAData.description}
          actions={uneteCTAData.actions}
        />
      </main>
    </>
  )
}

export async function generateMetadata() {
  const pageSeo = await getPageSeo("unete")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do/unete`
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

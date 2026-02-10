import { FAQSection } from "@/components/JoinPage/FAQSection"
import { JoinFormSection } from "@/components/JoinPage/JoinFormSection"
import { MembershipTiersSection } from "@/components/JoinPage/MembershipTiersSection"
import { TestimonialsSection } from "@/components/JoinPage/TestimonialsSection"
import { UneteCTA } from "@/components/JoinPage/UneteCTA"
import { UneteHero } from "@/components/JoinPage/UneteHero"
import { WhyJoinSection } from "@/components/JoinPage/WhyJoinSection"
import { getJoinPageHeroSection } from "@/sanity/queries/JoinPage/HeroSection"
import { getWhyJoinSection } from "@/sanity/queries/JoinPage/WhyJoinSection"
import { getMemberShipTierSection } from "@/sanity/queries/JoinPage/MemberShipTierSection"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"
import { getJoinPageTestimonialsSection } from "@/sanity/queries/JoinPage/TestimonialsSection"
import { getJoinPageFaqsSection } from "@/sanity/queries/JoinPage/FaqsSection"
import { getJoinPageCtaSection } from "@/sanity/queries/JoinPage/CtaSection"
import { getJoinPageFormSection } from "@/sanity/queries/JoinPage/FormSection"
export default async function UnetePage() {
  const [
    structuredData,
    joinPageHeroSection,
    whyJoinSection,
    memberShipTierSection,
    joinPageTestimonialsSection,
    joinPageFaqsSection,
    joinPageCtaSection,
    joinPageFormSection,
  ] = await Promise.all([
    getStructuredData("unete"),
    getJoinPageHeroSection(),
    getWhyJoinSection(),
    getMemberShipTierSection(),
    getJoinPageTestimonialsSection(),
    getJoinPageFaqsSection(),
    getJoinPageCtaSection(),
    getJoinPageFormSection(),
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
          title={joinPageFormSection.title}
          subtitle={joinPageFormSection.subtitle}
          interestAreas={joinPageFormSection.interestAreas}
          availabilityOptions={joinPageFormSection.availabilityOptions}
        />

        {/* Testimonials Section */}
        <TestimonialsSection
          title={joinPageTestimonialsSection.title}
          subtitle={joinPageTestimonialsSection.subtitle}
          testimonials={joinPageTestimonialsSection.testimonials}
        />

        {/* FAQ Section */}
        <FAQSection
          title={joinPageFaqsSection.title}
          subtitle={joinPageFaqsSection.subtitle}
          faqs={joinPageFaqsSection.faqs}
        />

        {/* CTA Section */}
        <UneteCTA
          title={joinPageCtaSection.title}
          description={joinPageCtaSection.description}
          actions={joinPageCtaSection.actions}
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

import { FAQSection } from "@/components/JoinPage/FAQSection"
import { JoinFormSection } from "@/components/JoinPage/JoinFormSection"
import { MembershipTiersSection } from "@/components/JoinPage/MembershipTiersSection"
import { TestimonialsSection } from "@/components/JoinPage/TestimonialsSection"
import { UneteCTA } from "@/components/JoinPage/UneteCTA"
import { UneteHero } from "@/components/JoinPage/UneteHero"
import { WhyJoinSection } from "@/components/JoinPage/WhyJoinSection"
import {
  uneteHeroData,
  whyJoinData,
  membershipTiersData,
  joinFormData,
  testimonialsData,
  faqData,
  uneteCTAData,
} from "@/config/unete.config"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"

export default async function UnetePage() {
  const [structuredData] = await Promise.all([getStructuredData("unete")])
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
          title={uneteHeroData.title}
          subtitle={uneteHeroData.subtitle}
          description={uneteHeroData.description}
          benefits={uneteHeroData.benefits}
          ctaText={uneteHeroData.ctaText}
        />

        {/* Why Join Section */}
        <WhyJoinSection
          title={whyJoinData.title}
          subtitle={whyJoinData.subtitle}
          benefits={whyJoinData.benefits}
        />

        {/* Membership Tiers Section */}
        <MembershipTiersSection
          title={membershipTiersData.title}
          subtitle={membershipTiersData.subtitle}
          tiers={membershipTiersData.tiers}
        />

        {/* Join Form Section */}
        <JoinFormSection
          title={joinFormData.title}
          subtitle={joinFormData.subtitle}
        />

        {/* Testimonials Section */}
        <TestimonialsSection
          title={testimonialsData.title}
          subtitle={testimonialsData.subtitle}
          testimonials={testimonialsData.testimonials}
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

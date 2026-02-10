import { AboutContent } from "@/components/AboutUsPage/AboutContent"
import { AboutHero } from "@/components/AboutUsPage/AboutHero"
import { AboutStats } from "@/components/AboutUsPage/AboutStats"
import { NationalConnection } from "@/components/AboutUsPage/NationalConnection"
import { PrinciplesSection } from "@/components/AboutUsPage/PrinciplesSection"
import { Timeline } from "@/components/AboutUsPage/Timeline"
import { JoinSection } from "@/components/HomePage/JoinSection"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"
import { getJoinSection } from "@/sanity/queries/HomePage/JoinSection"
import { getAboutPageHeroSection } from "@/sanity/queries/AboutPage/HeroSection"
import { getAboutContentSection } from "@/sanity/queries/AboutPage/AboutContent"
import { getAboutStatsSection } from "@/sanity/queries/AboutPage/AboutStats"
import { getTimelineSection } from "@/sanity/queries/AboutPage/Timeline"
import { getPrinciplesSection } from "@/sanity/queries/AboutPage/Principles"
import { getNationalConnectionSection } from "@/sanity/queries/AboutPage/NationalConnection"
import { getLogoData } from "@/sanity/queries/GeneralLayout/GeneraLayout"
export default async function QuienesSomosPage() {
  const [
    structuredData,
    joinSection,
    aboutPageHeroSection,
    aboutContentSection,
    aboutStatsSection,
    timelineSection,
    principlesSection,
    nationalConnectionSection,
    logoData,
  ] = await Promise.all([
    getStructuredData("quienes-somos"),
    getJoinSection(),
    getAboutPageHeroSection(),
    getAboutContentSection(),
    getAboutStatsSection(),
    getTimelineSection(),
    getPrinciplesSection(),
    getNationalConnectionSection(),
    getLogoData(),
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
        <AboutHero
          title={aboutPageHeroSection.title}
          subtitle={aboutPageHeroSection.subtitle}
          description={aboutPageHeroSection.description}
          backgroundImage={aboutPageHeroSection.backgroundImage}
        />

        {/* Main Content Section */}
        <AboutContent
          title={aboutContentSection.title}
          content={aboutContentSection.content}
          sections={aboutContentSection.sections}
          image={aboutContentSection.image}
        />

        {/* Statistics Section */}
        <AboutStats stats={aboutStatsSection.stats} />

        {/* History Timeline */}
        <Timeline
          title={timelineSection.title}
          subtitle={timelineSection.subtitle}
          items={timelineSection.historyTimelineData}
        />

        {/* Ideological Principles */}
        <PrinciplesSection
          title={principlesSection.title}
          subtitle={principlesSection.subtitle}
          principles={principlesSection.principles}
        />

        {/* National Connection */}
        <NationalConnection
          title={nationalConnectionSection.title}
          content={nationalConnectionSection.content}
          logoUrl={logoData.logo}
          ctaText={nationalConnectionSection.ctaText}
          ctaLink={nationalConnectionSection.ctaLink}
        />

        {/* Join CTA Section */}
        <JoinSection
          title={joinSection.title}
          description={joinSection.description}
          benefits={joinSection.benefits}
          ctaText={joinSection.ctaText}
          backgroundImage={joinSection.backgroundImage}
        />
      </main>
    </>
  )
}

export async function generateMetadata() {
  const pageSeo = await getPageSeo("quienes-somos")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do/partido/quienes-somos`
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

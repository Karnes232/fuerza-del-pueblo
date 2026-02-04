import { AboutContent } from "@/components/AboutUsPage/AboutContent"
import { AboutHero } from "@/components/AboutUsPage/AboutHero"
import { AboutStats } from "@/components/AboutUsPage/AboutStats"
import { NationalConnection } from "@/components/AboutUsPage/NationalConnection"
import { PrinciplesSection } from "@/components/AboutUsPage/PrinciplesSection"
import { Timeline } from "@/components/AboutUsPage/Timeline"
import { JoinSection } from "@/components/HomePage/JoinSection"
import {
  aboutHeroData,
  aboutContentData,
  aboutStatsData,
  aboutTimelineData,
  aboutPrinciplesData,
  nationalConnectionData,
} from "@/config/about.config"
import { joinData } from "@/config/home.config"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"

export default async function QuienesSomosPage() {
  const [structuredData] = await Promise.all([
    getStructuredData("quienes-somos"),
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
          title={aboutHeroData.title}
          subtitle={aboutHeroData.subtitle}
          description={aboutHeroData.description}
          backgroundImage={aboutHeroData.backgroundImage}
        />

        {/* Main Content Section */}
        <AboutContent
          title={aboutContentData.title}
          content={aboutContentData.content}
          sections={aboutContentData.sections}
          image={aboutContentData.image}
        />

        {/* Statistics Section */}
        <AboutStats stats={aboutStatsData.stats} />

        {/* History Timeline */}
        <Timeline
          title={aboutTimelineData.title}
          subtitle={aboutTimelineData.subtitle}
          items={aboutTimelineData.items}
        />

        {/* Ideological Principles */}
        <PrinciplesSection
          title={aboutPrinciplesData.title}
          subtitle={aboutPrinciplesData.subtitle}
          principles={aboutPrinciplesData.principles}
        />

        {/* National Connection */}
        <NationalConnection
          title={nationalConnectionData.title}
          content={nationalConnectionData.content}
          logoUrl={nationalConnectionData.logoUrl}
          leaderName={nationalConnectionData.leaderName}
          leaderTitle={nationalConnectionData.leaderTitle}
          leaderImage={nationalConnectionData.leaderImage}
          ctaText={nationalConnectionData.ctaText}
          ctaLink={nationalConnectionData.ctaLink}
        />

        {/* Join CTA Section */}
        <JoinSection
          title={joinData.title}
          description={joinData.description}
          benefits={joinData.benefits}
          ctaText={joinData.ctaText}
          ctaLink={joinData.ctaLink}
          backgroundImage={joinData.backgroundImage}
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

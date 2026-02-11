import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"
import { JoinSection } from "@/components/HomePage/JoinSection"
import { AboutHero } from "@/components/AboutUsPage/AboutHero"
import { HistoryIntro } from "@/components/HistoryPage/HistoryIntro"
import { FoundingStory } from "@/components/HistoryPage/FoundingStory"
import { HistoryTimeline } from "@/components/HistoryPage/HistoryTimeline"
import { MilestonesSection } from "@/components/HistoryPage/MilestonesSection"
import { AchievementsSection } from "@/components/HistoryPage/AchievementsSection"
import { ErasSection } from "@/components/HistoryPage/ErasSection"
import { LegacySection } from "@/components/HistoryPage/LegacySection"
import { getJoinSection } from "@/sanity/queries/HomePage/JoinSection"
import { getHistoryPageHeroSection } from "@/sanity/queries/HistoryPage/HeroSection"
import { getHistoryIntroSection } from "@/sanity/queries/HistoryPage/HistoryIntro"
import { getFoundingStorySection } from "@/sanity/queries/HistoryPage/FoundingStory"
import { getErasSection } from "@/sanity/queries/HistoryPage/ErasSection"
import { getHistoryTimeline } from "@/sanity/queries/HistoryPage/HistoryTimeline"
import { getMilestonesSection } from "@/sanity/queries/HistoryPage/MilestonesSection"
import { getAchievementsSection } from "@/sanity/queries/HistoryPage/AchievementsSection"
import { getLegacySection } from "@/sanity/queries/HistoryPage/LegacySection"
export default async function HistoriaPage() {
  const [
    structuredData,
    joinSection,
    historyPageHeroSection,
    historyIntroSection,
    foundingStorySection,
    erasSection,
    historyTimeline,
    milestonesSection,
    achievementsSection,
    legacySection,
  ] = await Promise.all([
    getStructuredData("historia"),
    getJoinSection(),
    getHistoryPageHeroSection(),
    getHistoryIntroSection(),
    getFoundingStorySection(),
    getErasSection(),
    getHistoryTimeline(),
    getMilestonesSection(),
    getAchievementsSection(),
    getLegacySection(),
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
          title={historyPageHeroSection.title}
          subtitle={historyPageHeroSection.subtitle}
          description={historyPageHeroSection.description}
          backgroundImage={historyPageHeroSection.backgroundImage}
        />

        {/* History Introduction */}
        <HistoryIntro
          title={historyIntroSection.title}
          content={historyIntroSection.content}
          image={historyIntroSection.image}
        />

        {/* Founding Story */}
        <FoundingStory
          title={foundingStorySection.title}
          subtitle={foundingStorySection.subtitle}
          year={foundingStorySection.year}
          context={foundingStorySection.context}
          founders={foundingStorySection.founders}
          objectives={foundingStorySection.objectives}
        />

        {/* Historical Eras */}
        <ErasSection
          title={erasSection.title}
          subtitle={erasSection.subtitle}
          eras={erasSection.eras}
        />

        {/* Detailed Timeline */}
        <HistoryTimeline
          title={historyTimeline.title}
          subtitle={historyTimeline.subtitle}
          events={historyTimeline.events}
        />

        {/* Key Milestones */}
        <MilestonesSection
          title={milestonesSection.title}
          subtitle={milestonesSection.subtitle}
          milestones={milestonesSection.milestones}
        />

        {/* Major Achievements */}
        <AchievementsSection
          title={achievementsSection.title}
          subtitle={achievementsSection.subtitle}
          achievements={achievementsSection.achievements}
        />

        {/* Legacy and Future */}
        <LegacySection
          title={legacySection.title}
          subtitle={legacySection.subtitle}
          content={legacySection.content}
          items={legacySection.items}
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
  const pageSeo = await getPageSeo("historia")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do/partido/historia`
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

import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"
import {
  historyHeroData,
  historyIntroData,
  foundingStorySection,
  timelineData,
  milestonesData,
  achievementsData,
  erasData,
  legacyData,
} from "@/config/history.config"
import { joinData } from "@/config/home.config"
import { JoinSection } from "@/components/HomePage/JoinSection"
import { AboutHero } from "@/components/AboutUsPage/AboutHero"
import { HistoryIntro } from "@/components/HistoryPage/HistoryIntro"
import { FoundingStory } from "@/components/HistoryPage/FoundingStory"
import { HistoryTimeline } from "@/components/HistoryPage/HistoryTimeline"
import { MilestonesSection } from "@/components/HistoryPage/MilestonesSection"
import { AchievementsSection } from "@/components/HistoryPage/AchievementsSection"
import { ErasSection } from "@/components/HistoryPage/ErasSection"
import { LegacySection } from "@/components/HistoryPage/LegacySection"

export default async function HistoriaPage() {
  const [structuredData] = await Promise.all([getStructuredData("historia")])
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
          title={historyHeroData.title}
          subtitle={historyHeroData.subtitle}
          description={historyHeroData.description}
          backgroundImage={historyHeroData.backgroundImage}
        />

        {/* History Introduction */}
        <HistoryIntro
          title={historyIntroData.title}
          content={historyIntroData.content}
          image={historyIntroData.image}
        />

        {/* Founding Story */}
        <FoundingStory
          title={foundingStorySection.title}
          subtitle={foundingStorySection.subtitle}
          story={foundingStorySection.story}
        />

        {/* Historical Eras */}
        <ErasSection
          title={erasData.title}
          subtitle={erasData.subtitle}
          eras={erasData.eras}
        />

        {/* Detailed Timeline */}
        <HistoryTimeline
          title={timelineData.title}
          subtitle={timelineData.subtitle}
          events={timelineData.events}
        />

        {/* Key Milestones */}
        <MilestonesSection
          title={milestonesData.title}
          subtitle={milestonesData.subtitle}
          milestones={milestonesData.milestones}
        />

        {/* Major Achievements */}
        <AchievementsSection
          title={achievementsData.title}
          subtitle={achievementsData.subtitle}
          achievements={achievementsData.achievements}
        />

        {/* Legacy and Future */}
        <LegacySection
          title={legacyData.title}
          subtitle={legacyData.subtitle}
          content={legacyData.content}
          items={legacyData.items}
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

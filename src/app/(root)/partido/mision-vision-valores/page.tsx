
import {
  missionVisionHeroData,
  missionData,
  visionData,
  coreValuesData,
  commitmentsData,
  pillarsData,
  goalsData,
} from "@/config/mission.config"
import { joinData } from "@/config/home.config"
import { JoinSection } from "@/components/HomePage/JoinSection"
import { AboutHero } from "@/components/AboutUsPage/AboutHero"
import { MissionStatement } from "@/components/MissionPage/MissionStatement"
import { VisionStatement } from "@/components/MissionPage/VisionStatement"
import { CoreValuesSection } from "@/components/MissionPage/CoreValuesSection"
import { CommitmentsSection } from "@/components/MissionPage/CommitmentsSection"
import { GoalsSection } from "@/components/MissionPage/GoalsSection"
import { PillarsSection } from "@/components/MissionPage/PillarsSection"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"

export default async function MisionVisionValoresPage() {
  const [structuredData] = await Promise.all([getStructuredData("mision-vision-valores")])
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
        title={missionVisionHeroData.title}
        subtitle={missionVisionHeroData.subtitle}
        description={missionVisionHeroData.description}
        backgroundImage={missionVisionHeroData.backgroundImage}
      />

      {/* Mission Statement */}
      <MissionStatement
        title={missionData.title}
        statement={missionData.statement}
        description={missionData.description}
        icon={missionData.icon}
        image={missionData.image}
      />

      {/* Vision Statement */}
      <VisionStatement
        title={visionData.title}
        statement={visionData.statement}
        description={visionData.description}
        icon={visionData.icon}
        image={visionData.image}
      />

      {/* Core Values */}
      <CoreValuesSection
        title={coreValuesData.title}
        subtitle={coreValuesData.subtitle}
        values={coreValuesData.values}
      />

      {/* Strategic Pillars */}
      <PillarsSection
        title={pillarsData.title}
        subtitle={pillarsData.subtitle}
        pillars={pillarsData.pillars}
      />

      {/* Community Commitments */}
      <CommitmentsSection
        title={commitmentsData.title}
        subtitle={commitmentsData.subtitle}
        commitments={commitmentsData.commitments}
      />

      {/* Strategic Goals */}
      <GoalsSection
        title={goalsData.title}
        subtitle={goalsData.subtitle}
        goals={goalsData.goals}
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
  const pageSeo = await getPageSeo("mision-vision-valores")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do/partido/mision-vision-valores`
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
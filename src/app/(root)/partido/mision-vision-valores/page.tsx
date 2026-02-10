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
import { getJoinSection } from "@/sanity/queries/HomePage/JoinSection"
import { getMissionPageHeroSection } from "@/sanity/queries/MissionPage/HeroSection"
import { getMissionStatement } from "@/sanity/queries/MissionPage/MissionStatement"
import { getVisionStatement } from "@/sanity/queries/MissionPage/VisionStatement"
import { getCoreValues } from "@/sanity/queries/MissionPage/CoreValues"
import { getPillarsSection } from "@/sanity/queries/MissionPage/PillarsSection"
import { getCommitmentsSection } from "@/sanity/queries/MissionPage/CommitmentsSection"
import { getGoalsSection } from "@/sanity/queries/MissionPage/GoalsSection"

export default async function MisionVisionValoresPage() {
  const [
    structuredData,
    joinSection,
    missionPageHeroSection,
    missionStatement,
    visionStatement,
    coreValues,
    pillarsSection,
    commitmentsSection,
    goalsSection,
  ] = await Promise.all([
    getStructuredData("mision-vision-valores"),
    getJoinSection(),
    getMissionPageHeroSection(),
    getMissionStatement(),
    getVisionStatement(),
    getCoreValues(),
    getPillarsSection(),
    getCommitmentsSection(),
    getGoalsSection(),
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
          title={missionPageHeroSection.title}
          subtitle={missionPageHeroSection.subtitle}
          description={missionPageHeroSection.description}
          backgroundImage={missionPageHeroSection.backgroundImage}
        />

        {/* Mission Statement */}
        <MissionStatement
          title={missionStatement.title}
          statement={missionStatement.statement}
          description={missionStatement.description}
          icon={missionStatement.icon}
          image={missionStatement.image}
        />

        {/* Vision Statement */}
        <VisionStatement
          title={visionStatement.title}
          statement={visionStatement.statement}
          description={visionStatement.description}
          icon={visionStatement.icon}
          image={visionStatement.image}
        />

        {/* Core Values */}
        <CoreValuesSection
          title={coreValues.title}
          subtitle={coreValues.subtitle}
          values={coreValues.values}
        />

        {/* Strategic Pillars */}
        <PillarsSection
          title={pillarsSection.title}
          subtitle={pillarsSection.subtitle}
          pillars={pillarsSection.pillars}
        />

        {/* Community Commitments */}
        <CommitmentsSection
          title={commitmentsSection.title}
          subtitle={commitmentsSection.subtitle}
          commitments={commitmentsSection.commitments}
        />

        {/* Strategic Goals */}
        <GoalsSection
          title={goalsSection.title}
          subtitle={goalsSection.subtitle}
          goals={goalsSection.goals}
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

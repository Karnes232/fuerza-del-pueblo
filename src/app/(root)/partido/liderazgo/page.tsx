import {
  leadershipHeroData,
  leadershipTeamData,
  organizationalStructureData,
  departmentsData,
  wingsData,
  sectorCoordinatorsData,
} from "@/config/leadership.config"
import { joinData } from "@/config/home.config"
import { JoinSection } from "@/components/HomePage/JoinSection"
import { LeadershipTeam } from "@/components/LeadershipPage/LeadershipTeam"
import { AboutHero } from "@/components/AboutUsPage/AboutHero"
import { OrganizationalStructure } from "@/components/LeadershipPage/OrganizationalStructure"
import { DepartmentsSection } from "@/components/LeadershipPage/DepartmentsSection"
import { WingsSection } from "@/components/LeadershipPage/WingsSection"
import { SectorCoordinatorsSection } from "@/components/LeadershipPage/SectorCoordinatorsSection"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"
import { getJoinSection } from "@/sanity/queries/HomePage/JoinSection"

export default async function LiderazgoPage() {
  const [structuredData, joinSection] = await Promise.all([
    getStructuredData("liderazgo"),
    getJoinSection(),
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
          title={leadershipHeroData.title}
          subtitle={leadershipHeroData.subtitle}
          description={leadershipHeroData.description}
          backgroundImage={leadershipHeroData.backgroundImage}
        />

        {/* Leadership Team */}
        <LeadershipTeam
          title={leadershipTeamData.title}
          subtitle={leadershipTeamData.subtitle}
          leaders={leadershipTeamData.leaders}
        />

        {/* Organizational Structure */}
        <OrganizationalStructure
          title={organizationalStructureData.title}
          subtitle={organizationalStructureData.subtitle}
          levels={organizationalStructureData.levels}
        />

        {/* Departments */}
        <DepartmentsSection
          title={departmentsData.title}
          subtitle={departmentsData.subtitle}
          departments={departmentsData.departments}
        />

        {/* Party Wings */}
        <WingsSection
          title={wingsData.title}
          subtitle={wingsData.subtitle}
          wings={wingsData.wings}
        />

        {/* Sector Coordinators */}
        <SectorCoordinatorsSection
          title={sectorCoordinatorsData.title}
          subtitle={sectorCoordinatorsData.subtitle}
          sectors={sectorCoordinatorsData.sectors}
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
  const pageSeo = await getPageSeo("liderazgo")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do/partido/liderazgo`
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

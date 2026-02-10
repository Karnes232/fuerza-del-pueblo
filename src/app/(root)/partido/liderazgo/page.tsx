import {
  organizationalStructureData,
  departmentsData,
  wingsData,
  sectorCoordinatorsData,
} from "@/config/leadership.config"
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
import { getLeadershipPageHeroSection } from "@/sanity/queries/LeadershipPage/HeroSection"
import { getLeadershipTeam } from "@/sanity/queries/LeadershipPage/LeadershipTeam"

export default async function LiderazgoPage() {
  const [
    structuredData,
    joinSection,
    leadershipPageHeroSection,
    leadershipTeam,
  ] = await Promise.all([
    getStructuredData("liderazgo"),
    getJoinSection(),
    getLeadershipPageHeroSection(),
    getLeadershipTeam(),
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
          title={leadershipPageHeroSection.title}
          subtitle={leadershipPageHeroSection.subtitle}
          description={leadershipPageHeroSection.description}
          backgroundImage={leadershipPageHeroSection.backgroundImage}
        />

        {/* Leadership Team */}
        <LeadershipTeam
          title={leadershipTeam.title}
          subtitle={leadershipTeam.subtitle}
          leaders={leadershipTeam.leaders}
        />
        {/* TODO: Add Below Here to Sanity Schema and remove the config file */}
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

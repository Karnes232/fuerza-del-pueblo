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
import { getOrganizationalStructure } from "@/sanity/queries/LeadershipPage/OrganizationalStructure"
import { getDepartmentsSection } from "@/sanity/queries/LeadershipPage/DepartmentsSection"
import { getWingsSection } from "@/sanity/queries/LeadershipPage/WingsSection"
import { getSectorCoordinatorsSection } from "@/sanity/queries/LeadershipPage/SectorCoordinatorsSection"
export default async function LiderazgoPage() {
  const [
    structuredData,
    joinSection,
    leadershipPageHeroSection,
    leadershipTeam,
    organizationalStructure,
    departmentsSection,
    wingsSection,
    sectorCoordinatorsSection,
  ] = await Promise.all([
    getStructuredData("liderazgo"),
    getJoinSection(),
    getLeadershipPageHeroSection(),
    getLeadershipTeam(),
    getOrganizationalStructure(),
    getDepartmentsSection(),
    getWingsSection(),
    getSectorCoordinatorsSection(),
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
          title={organizationalStructure.title}
          subtitle={organizationalStructure.subtitle}
          levels={organizationalStructure.organizationalLevels}
        />

        {/* Departments */}
        <DepartmentsSection
          title={departmentsSection.title}
          subtitle={departmentsSection.subtitle}
          departments={departmentsSection.departments}
        />

        {/* Party Wings */}
        <WingsSection
          title={wingsSection.title}
          subtitle={wingsSection.subtitle}
          wings={wingsSection.wings}
        />

        {/* Sector Coordinators */}
        <SectorCoordinatorsSection
          title={sectorCoordinatorsSection.title}
          subtitle={sectorCoordinatorsSection.subtitle}
          sectors={sectorCoordinatorsSection.sectors}
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

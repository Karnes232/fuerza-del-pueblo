import { JoinSection } from "@/components/HomePage/JoinSection"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"
import { MediaSection } from "@/components/CandidatesPage/MediaSection"
import { AboutHero } from "@/components/AboutUsPage/AboutHero"
import { MayorCandidate } from "@/components/CandidatesPage/MayorCandidate"
import { CouncilMembers } from "@/components/CandidatesPage/CouncilMembers"
import { CampaignProposals } from "@/components/CandidatesPage/CampaignProposals"
import { CampaignVision } from "@/components/CandidatesPage/CampaignVision"
import { CampaignPriorities } from "@/components/CandidatesPage/CampaignPriorities"
import { getJoinSection } from "@/sanity/queries/HomePage/JoinSection"
import { getCandidatesPageHeroSection } from "@/sanity/queries/CandidatesPage/HeroSection"
import { getComingSoonConfig } from "@/sanity/queries/CandidatesPage/ComingSoonConfig"
import { getMayorCandidate } from "@/sanity/queries/CandidatesPage/MayorCandidate"
import { getCampaignProposalsSection } from "@/sanity/queries/CandidatesPage/CampaignProposals"
import { getCampaignPrioritiesSection } from "@/sanity/queries/CandidatesPage/CampaignPriorities"
import { getMediaSection } from "@/sanity/queries/CandidatesPage/MediaSection"
import { getVisionData } from "@/sanity/queries/CandidatesPage/visionData"
import { getCouncilMembersSection } from "@/sanity/queries/CandidatesPage/CouncilMembers"
export default async function CandidatosPage() {
  const [
    structuredData,
    joinSection,
    candidatesPageHeroSection,
    comingSoonConfig,
    mayorCandidate,
    campaignProposalsSection,
    campaignPrioritiesSection,
    mediaSection,
    visionData,
    councilMembersSection,
  ] = await Promise.all([
    getStructuredData("candidatos"),
    getJoinSection(),
    getCandidatesPageHeroSection(),
    getComingSoonConfig(),
    getMayorCandidate(),
    getCampaignProposalsSection(),
    getCampaignPrioritiesSection(),
    getMediaSection(),
    getVisionData(),
    getCouncilMembersSection(),
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
          title={candidatesPageHeroSection.title}
          subtitle={candidatesPageHeroSection.subtitle}
          description={candidatesPageHeroSection.description}
          backgroundImage={candidatesPageHeroSection.backgroundImage}
        />

        {/* Mayor Candidate */}
        <MayorCandidate
          title={mayorCandidate.title}
          subtitle={mayorCandidate.subtitle}
          candidate={mayorCandidate.candidate}
          comingSoon={comingSoonConfig}
        />

        {/* Council Member Candidates */}
        <CouncilMembers
          title={councilMembersSection.title}
          subtitle={councilMembersSection.subtitle}
          candidates={councilMembersSection.candidates}
          comingSoon={comingSoonConfig}
        />

        {/* Only show campaign sections if not in "coming soon" mode */}
        {comingSoonConfig.enabled && (
          <>
            {/* Campaign Vision */}
            <CampaignVision
              title={visionData.title}
              subtitle={visionData.subtitle}
              content={visionData.content}
              items={visionData.items}
            />

            {/* Campaign Priorities */}
            <CampaignPriorities
              title={campaignPrioritiesSection.title}
              subtitle={campaignPrioritiesSection.subtitle}
              priorities={campaignPrioritiesSection.priorities}
            />
            {/* Media Appearances */}
            {mediaSection.appearances.length > 0 && (
              <MediaSection
                title={mediaSection.title}
                subtitle={mediaSection.subtitle}
                appearances={mediaSection.appearances}
              />
            )}
          </>
        )}

        {/* Campaign Proposals (shown even in coming soon mode) */}
        <CampaignProposals
          title={campaignProposalsSection.title}
          subtitle={campaignProposalsSection.subtitle}
          proposals={campaignProposalsSection.proposals}
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
  const pageSeo = await getPageSeo("candidatos")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do/partido/candidatos`
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

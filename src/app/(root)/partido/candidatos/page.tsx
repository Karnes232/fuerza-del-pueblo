import { JoinSection } from "@/components/HomePage/JoinSection"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"
import {
  candidatesHeroData,
  mayorCandidateData,
  councilCandidatesData,
  proposalsData,
  prioritiesData,
  visionData,
  comingSoonConfig,
} from "@/config/candidates.config"
import { joinData } from "@/config/home.config"
import { AboutHero } from "@/components/AboutUsPage/AboutHero"
import { MayorCandidate } from "@/components/CandidatesPage/MayorCandidate"
import { CouncilMembers } from "@/components/CandidatesPage/CouncilMembers"
import { CampaignProposals } from "@/components/CandidatesPage/CampaignProposals"
import { CampaignVision } from "@/components/CandidatesPage/CampaignVision"
import { CampaignPriorities } from "@/components/CandidatesPage/CampaignPriorities"
export default async function CandidatosPage() {
  const [structuredData] = await Promise.all([getStructuredData("candidatos")])
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
          title={candidatesHeroData.title}
          subtitle={candidatesHeroData.subtitle}
          description={candidatesHeroData.description}
          backgroundImage={candidatesHeroData.backgroundImage}
        />

        {/* Mayor Candidate */}
        <MayorCandidate
          title={mayorCandidateData.title}
          subtitle={mayorCandidateData.subtitle}
          candidate={mayorCandidateData.candidate}
          comingSoon={mayorCandidateData.comingSoon}
        />

        {/* Council Member Candidates */}
        <CouncilMembers
          title={councilCandidatesData.title}
          subtitle={councilCandidatesData.subtitle}
          candidates={councilCandidatesData.candidates}
          comingSoon={councilCandidatesData.comingSoon}
        />

        {/* Only show campaign sections if not in "coming soon" mode */}
        {!comingSoonConfig.enabled && (
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
              title={prioritiesData.title}
              subtitle={prioritiesData.subtitle}
              priorities={prioritiesData.priorities}
            />
          </>
        )}

        {/* Campaign Proposals (shown even in coming soon mode) */}
        <CampaignProposals
          title={proposalsData.title}
          subtitle={proposalsData.subtitle}
          proposals={proposalsData.proposals}
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

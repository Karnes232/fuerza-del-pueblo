import Script from "next/script"
import { AboutSection } from "@/components/HomePage/AboutSection"
import { HeroSection } from "@/components/HomePage/HeroSection"
import { getHeroSection } from "@/sanity/queries/HomePage/HeroSection"
import { getAboutSection } from "@/sanity/queries/HomePage/AboutSection"
import { ValuesSection } from "@/components/HomePage/ValuesSection"
import { getValuesSection } from "@/sanity/queries/HomePage/ValueSection"
import { NewsSection } from "@/components/HomePage/NewsSection"
import { EventsSection } from "@/components/HomePage/EventsSection"
import { JoinSection } from "@/components/HomePage/JoinSection"
import { ContactSection } from "@/components/HomePage/ContactSection"
import { getContactMethods } from "@/sanity/queries/GeneralLayout/GeneraLayout"
import { getPageSeo } from "@/sanity/queries/SEO/seo"
import { getStructuredData } from "@/sanity/queries/SEO/seo"
import { getJoinSection } from "@/sanity/queries/HomePage/JoinSection"

import type { NewsArticle } from "@/types/home.types"
import {
  getThreeLatestNewsArticles,
  type NewsArticles,
} from "@/sanity/queries/NewsPage/IndividualNewsArticle"
import { getUpcomingEvents } from "@/sanity/queries/EventsPage/IndividualEvent"
import { getSectionHeaders } from "@/sanity/queries/HomePage/SectionHeaders"

function toHomeNewsArticle(row: NewsArticles): NewsArticle {
  return {
    id: row._id,
    title: row.title,
    excerpt: row.excerpt,
    date: row.date,
    slug: row.slug,
    category: row.category,
    image: row.featuredImage?.asset?.url,
  }
}

export default async function Home() {
  const today = new Date()
  const todayUTC = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()),
  )
  const [
    heroSection,
    aboutSection,
    valuesSection,
    contactMethods,
    structuredData,
    joinSection,
    rawNewsArticles,
    upcomingEvents,
    sectionHeaders,
  ] = await Promise.all([
    getHeroSection(),
    getAboutSection(),
    getValuesSection(),
    getContactMethods(),
    getStructuredData("inicio"),
    getJoinSection(),
    getThreeLatestNewsArticles(),
    getUpcomingEvents(todayUTC),
    getSectionHeaders(),
  ])
  const threeLatestNewsArticles: NewsArticle[] = (rawNewsArticles ?? []).map(
    toHomeNewsArticle,
  )

    console.log(upcomingEvents)
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
        <HeroSection
          title={heroSection.title}
          subtitle={heroSection.subtitle}
          slogan={heroSection.slogan}
          ctaText={heroSection.ctaText}
          ctaLink={heroSection.ctaLink}
          secondaryCtaText={heroSection.secondaryCtaText}
          secondaryCtaLink={heroSection.secondaryCtaLink}
          backgroundImage={heroSection.backgroundImage}
        />

        {/* About Section */}
        <AboutSection
          title={aboutSection.title}
          content={aboutSection.content}
          image={aboutSection.image}
          ctaText={aboutSection.ctaText}
          ctaLink={aboutSection.ctaLink}
        />

        {/* Values Section */}
        <ValuesSection
          title={valuesSection.title}
          subtitle={valuesSection.subtitle}
          values={valuesSection.values}
        />

        {/* News Section */}
        <NewsSection
          title={sectionHeaders.newsTitle}
          subtitle={sectionHeaders.newsSubtitle}
          articles={threeLatestNewsArticles}
          viewAllLink="/noticias"
        />

        {/* Events Section */}
        <EventsSection
          title={sectionHeaders.eventsTitle}
          subtitle={sectionHeaders.eventsSubtitle}
          events={upcomingEvents || []}
          viewAllLink="/eventos"
        />

        {/* Join Section */}
        <JoinSection
          title={joinSection.title}
          description={joinSection.description}
          benefits={joinSection.benefits}
          ctaText={joinSection.ctaText}
          backgroundImage={joinSection.backgroundImage}
        />

        {/* Contact Section */}
        <ContactSection
          title={sectionHeaders.contactTitle}
          description={sectionHeaders.contactDescription}
          contactMethods={contactMethods}
        />
      </main>
    </>
  )
}

export async function generateMetadata() {
  const pageSeo = await getPageSeo("inicio")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do`
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

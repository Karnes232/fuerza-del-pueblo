import { EventCategoriesSection } from "@/components/EventsPage/EventCategoriesSection"
import { EventsCTA } from "@/components/EventsPage/EventsCTA"
import { EventsHero } from "@/components/EventsPage/EventsHero"
import { FeaturedEventSection } from "@/components/EventsPage/FeaturedEventSection"
import { PastEventsSection } from "@/components/EventsPage/PastEventsSection"
import { UpcomingEventsSection } from "@/components/EventsPage/UpcomingEventsSection"
import {
  featuredEvent,
  upcomingEventsSectionData,
  pastEventsSectionData,
} from "@/config/events.config"
import { getEventsPageHeroSection } from "@/sanity/queries/EventsPage/HeroSection"
import { getEventCategorySection } from "@/sanity/queries/EventsPage/CategorySecton"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"
import { getSectionTitlesCTA } from "@/sanity/queries/EventsPage/SectionTitlesCTA"
import { getPreviousEvents } from "@/sanity/queries/EventsPage/IndividualEvent"

export default async function EventsPage() {
  const today = new Date()
  const todayUTC = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()),
  )
  const [
    structuredData,
    eventsPageHeroSection,
    eventCategorySection,
    sectionTitlesCTA,
    previousEvents,
  ] = await Promise.all([
    getStructuredData("eventos"),
    getEventsPageHeroSection(),
    getEventCategorySection(),
    getSectionTitlesCTA(),
    getPreviousEvents(todayUTC),
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
        <EventsHero
          title={eventsPageHeroSection?.title}
          subtitle={eventsPageHeroSection?.subtitle}
          description={eventsPageHeroSection?.description}
          ctaText={eventsPageHeroSection?.ctaText}
          ctaLink={eventsPageHeroSection?.ctaLink}
          backgroundImage={eventsPageHeroSection?.backgroundImage}
        />

        {/* Featured Event */}
        <FeaturedEventSection
          title={eventsPageHeroSection?.featuredEventTitle}
          subtitle={eventsPageHeroSection?.featuredEventSubtitle}
          event={featuredEvent}
        />

        {/* Event Categories */}
        <EventCategoriesSection
          title={eventCategorySection?.title}
          subtitle={eventCategorySection?.subtitle}
          categories={eventCategorySection?.categories}
        />

        {/* Upcoming Events */}
        <UpcomingEventsSection
          title={sectionTitlesCTA?.upcomingEventsTitle}
          subtitle={sectionTitlesCTA?.upcomingEventsSubtitle}
          events={upcomingEventsSectionData.events}
        />

        {/* Past Events */}
        <PastEventsSection
          title={sectionTitlesCTA?.pastEventsTitle}
          subtitle={sectionTitlesCTA?.pastEventsSubtitle}
          events={previousEvents || []}
        />

        {/* CTA Section */}
        <EventsCTA
          title={sectionTitlesCTA?.ctaTitle}
          description={sectionTitlesCTA?.ctaDescription}
          actions={sectionTitlesCTA?.ctaActions}
        />
      </main>
    </>
  )
}

export async function generateMetadata() {
  const pageSeo = await getPageSeo("eventos")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do/eventos`
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

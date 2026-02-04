import { EventCategoriesSection } from "@/components/EventsPage/EventCategoriesSection"
import { EventsCTA } from "@/components/EventsPage/EventsCTA"
import { EventsHero } from "@/components/EventsPage/EventsHero"
import { FeaturedEventSection } from "@/components/EventsPage/FeaturedEventSection"
import { PastEventsSection } from "@/components/EventsPage/PastEventsSection"
import { UpcomingEventsSection } from "@/components/EventsPage/UpcomingEventsSection"
import {
  eventsHeroData,
  featuredEvent,
  upcomingEventsSectionData,
  pastEventsSectionData,
  eventCategoriesSectionData,
  eventsCTAData,
} from "@/config/events.config"
import { getPageSeo, getStructuredData } from "@/sanity/queries/SEO/seo"
import Script from "next/script"

export default async function EventsPage() {
  const [structuredData] = await Promise.all([getStructuredData("eventos")])

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
          title={eventsHeroData.title}
          subtitle={eventsHeroData.subtitle}
          description={eventsHeroData.description}
          ctaText={eventsHeroData.ctaText}
          ctaLink={eventsHeroData.ctaLink}
        />

        {/* Featured Event */}
        <FeaturedEventSection event={featuredEvent} />

        {/* Event Categories */}
        <EventCategoriesSection
          title={eventCategoriesSectionData.title}
          subtitle={eventCategoriesSectionData.subtitle}
          categories={eventCategoriesSectionData.categories}
        />

        {/* Upcoming Events */}
        <UpcomingEventsSection
          title={upcomingEventsSectionData.title}
          subtitle={upcomingEventsSectionData.subtitle}
          events={upcomingEventsSectionData.events}
        />

        {/* Past Events */}
        <PastEventsSection
          title={pastEventsSectionData.title}
          subtitle={pastEventsSectionData.subtitle}
          events={pastEventsSectionData.events}
        />

        {/* CTA Section */}
        <EventsCTA
          title={eventsCTAData.title}
          description={eventsCTAData.description}
          actions={eventsCTAData.actions}
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

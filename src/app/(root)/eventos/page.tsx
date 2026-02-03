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

export default function EventsPage() {
  return (
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
  )
}

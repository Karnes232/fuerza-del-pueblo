// app/eventos/[slug]/page.tsx

import { JoinSection } from "@/components/HomePage/JoinSection"
import { EventDetails } from "@/components/IndividualEventPage/EventDetails"
import { EventHero } from "@/components/IndividualEventPage/EventHero"
import { EventLocation } from "@/components/IndividualEventPage/EventLocation"
import { EventRSVP } from "@/components/IndividualEventPage/EventRSVP"
import { EventSchedule } from "@/components/IndividualEventPage/EventSchedule"
import { RelatedEvents } from "@/components/IndividualEventPage/RelatedEvents"
import {
  getIndividualEvent,
  getIndividualEventSeo,
  getNextThreeEvents,
} from "@/sanity/queries/EventsPage/IndividualEvent"
import { getEventAttendees } from "@/app/actions/rsvp.action"
import { getJoinSection } from "@/sanity/queries/HomePage/JoinSection"
import { Metadata } from "next"
import { notFound } from "next/navigation"


export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const today = new Date()
  const todayUTC = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()),
  )
  const [joinSection, individualEvent, nextThreeEvents] = await Promise.all([
    getJoinSection(),
    getIndividualEvent(slug),
    getNextThreeEvents(todayUTC),
  ])

  if (!individualEvent) {
    return notFound()
  }
  const attendees = await getEventAttendees(individualEvent.id)

  const eventDateUTC = new Date(`${individualEvent.date}T00:00:00Z`)
  const rsvpEnabled = individualEvent.date
    ? eventDateUTC.getTime() > todayUTC.getTime()
    : false

  return (
    <main>
      {individualEvent.seo.structuredData.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: individualEvent.seo.structuredData.jsonLd,
          }}
        />
      )}
      {/* Event Hero */}
      <EventHero
        title={individualEvent.title}
        category={individualEvent.category.name}
        date={individualEvent.date}
        time={individualEvent.time}
        location={individualEvent.location}
        image={individualEvent.image}
      />

      {/* Event Details */}
      <EventDetails
        description={individualEvent.description}
        fullDescription={individualEvent.fullDescription}
        organizer={individualEvent.organizer}
        capacity={individualEvent.capacity}
        attendees={attendees}
        requirements={individualEvent.requirements}
        whatToBring={individualEvent.whatToBring}
      />

      {/* Event Schedule */}
      {individualEvent.schedule && (
        <EventSchedule
          title="Agenda del Evento"
          schedule={individualEvent.schedule}
        />
      )}

      {/* Event Location */}
      <EventLocation
        location={individualEvent.location}
        address={individualEvent.address}
        coordinates={individualEvent.coordinates}
        directions={individualEvent.directions}
      />

      {/* RSVP Form */}
      <EventRSVP
        eventId={individualEvent.id}
        eventSlug={slug}
        eventTitle={individualEvent.title}
        eventDate={individualEvent.date}
        rsvpEnabled={rsvpEnabled}
        capacity={individualEvent.capacity}
        attendees={attendees}
      />

      {/* Related Events */}
      <RelatedEvents title="Próximos Eventos" events={nextThreeEvents || []} />

      {/* Join CTA */}
      <JoinSection
        title={joinSection.title}
        description={joinSection.description}
        benefits={joinSection.benefits}
        ctaText={joinSection.ctaText}
        backgroundImage={joinSection.backgroundImage}
      />
    </main>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const seo = await getIndividualEventSeo(slug)
  if (!seo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpuebloveronpuntacana.com/eventos/${slug}`

  return {
    title: seo.meta.title,
    description: seo.meta.description,
    keywords: seo.meta.keywords,
    openGraph: {
      url: canonicalUrl,
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      images: seo.openGraph.image?.asset.url,
    },
    robots: {
      index: !seo.noIndex,
      follow: !seo.noFollow,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

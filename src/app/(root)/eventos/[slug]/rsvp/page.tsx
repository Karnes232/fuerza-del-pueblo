import { EventHero } from "@/components/IndividualEventPage/EventHero"
import { EventRSVP } from "@/components/IndividualEventPage/EventRSVP"
import {
  getIndividualEvent,
  getIndividualEventSeo,
} from "@/sanity/queries/EventsPage/IndividualEvent"
import { getEventAttendees } from "@/app/actions/rsvp.action"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export default async function RSVPPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const individualEvent = await getIndividualEvent(slug)
  if (!individualEvent) {
    return notFound()
  }

  const attendees = await getEventAttendees(individualEvent.id)

  return (
    <main>
      {/* Event Hero */}
      <EventHero
        title={individualEvent.title}
        category={individualEvent.category.name}
        date={individualEvent.date}
        time={individualEvent.time}
        location={individualEvent.location}
        image={individualEvent.image}
      />
      {/* RSVP Form */}
      <EventRSVP
        eventId={individualEvent.id}
        eventSlug={slug}
        eventTitle={individualEvent.title}
        eventDate={individualEvent.date}
        rsvpEnabled={true}
        capacity={individualEvent.capacity}
        attendees={attendees}
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

  const canonicalUrl = `https://www.fuerzadelpuebloveronpuntacana.com/eventos/${slug}/rsvp`

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

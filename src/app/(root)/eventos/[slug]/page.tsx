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

import { getJoinSection } from "@/sanity/queries/HomePage/JoinSection"
import { Metadata } from "next"
import { notFound } from "next/navigation"

// This is mock data - replace with actual data fetching from Sanity
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
  console.log(nextThreeEvents)
  if (!individualEvent) {
    return notFound()
  }

  const eventDateUTC = new Date(`${individualEvent.date}T00:00:00Z`)
  const rsvpEnabled = individualEvent.date
    ? eventDateUTC.getTime() > todayUTC.getTime()
    : false

  // Mock related events
  const relatedEvents = [
    {
      id: "1",
      title: "Jornada de Limpieza Comunitaria",
      description:
        "Únete a nosotros en una jornada de limpieza y embellecimiento de nuestras calles.",
      date: "2026-02-22",
      time: "8:00 AM",
      location: "Parque Central de Verón",
      image: `https://picsum.photos/400/200?random=${Math.random()}`,
      slug: "jornada-limpieza-febrero",
      category: "Acción Comunitaria",
    },
    {
      id: "2",
      title: "Taller de Formación Política",
      description:
        "Capacitación sobre participación ciudadana y procesos democráticos.",
      date: "2026-03-05",
      time: "5:00 PM",
      location: "Centro Comunitario Punta Cana",
      image: `https://picsum.photos/400/200?random=${Math.random()}`,
      slug: "taller-formacion-marzo",
      category: "Formación",
    },
    {
      id: "3",
      title: "Encuentro con Emprendedores Locales",
      description:
        "Espacio de diálogo con emprendedores para conocer sus necesidades y propuestas.",
      date: "2026-03-12",
      time: "3:00 PM",
      location: "Sede del Partido",
      image: `https://picsum.photos/400/200?random=${Math.random()}`,
      slug: "encuentro-emprendedores",
      category: "Reunión",
    },
  ]

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
        attendees={individualEvent.attendees}
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
        eventTitle={individualEvent.title}
        eventDate={individualEvent.date}
        rsvpEnabled={rsvpEnabled}
        capacity={individualEvent.capacity}
        attendees={individualEvent.attendees}
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
  const canonicalUrl = `https://www.fuerzadelpueblo.do/eventos/${slug}`

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

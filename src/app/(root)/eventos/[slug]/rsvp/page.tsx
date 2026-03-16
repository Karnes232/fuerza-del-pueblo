import { EventHero } from "@/components/IndividualEventPage/EventHero"
import { EventRSVP } from "@/components/IndividualEventPage/EventRSVP"
import { getIndividualEvent } from "@/sanity/queries/EventsPage/IndividualEvent"
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
        eventTitle={individualEvent.title}
        eventDate={individualEvent.date}
        rsvpEnabled={true}
        capacity={individualEvent.capacity}
        attendees={individualEvent.attendees}
      />
    </main>
  )
}

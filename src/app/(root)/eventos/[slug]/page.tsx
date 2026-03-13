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

  const [joinSection, individualEvent] = await Promise.all([
    getJoinSection(),
    getIndividualEvent(slug),
  ])
  if (!individualEvent) {
    return notFound()
  }
  console.log(individualEvent.category)
  // Mock event data - replace with: const event = await getEventBySlug(params.slug)
  const event = {
    id: "event-1",
    title: "Asamblea General Mensual",
    category: "Asamblea",
    date: "2026-02-15",
    time: "6:00 PM - 9:00 PM",
    location: "Sede del Partido",
    slug: slug,
    status: "upcoming" as const,
    image: {
      alt: "Asamblea General",
      asset: {
        url: `https://picsum.photos/1200/600?random=${Math.random()}`,
        metadata: { dimensions: { width: 1200, height: 600 } },
      },
    },
    description:
      "Reunión mensual abierta para todos los militantes y simpatizantes del partido. Discutiremos los avances del mes, próximas actividades, y escucharemos las propuestas de la comunidad.",
    fullDescription: `
      <p>Esta es una oportunidad para que todos los miembros del partido participen activamente en la toma de decisiones y conozcan de primera mano el trabajo que se está realizando en la comunidad.</p>
      
      <p>Durante la asamblea, presentaremos informes detallados sobre:</p>
      <ul>
        <li>Actividades realizadas durante el mes</li>
        <li>Estado financiero del partido</li>
        <li>Próximos eventos y actividades planificadas</li>
        <li>Propuestas de la comunidad</li>
        <li>Proyectos en desarrollo</li>
      </ul>
      
      <p>También habrá tiempo para preguntas, comentarios y nuevas propuestas de los asistentes. Tu participación es fundamental para fortalecer nuestro movimiento.</p>
    `,
    organizer: {
      name: "Dirección Municipal",
      role: "Fuerza del Pueblo Verón-Punta Cana",
      contact: "info@fuerzadelpueblo.do",
    },
    capacity: 200,
    attendees: 87,
    requirements: [
      "Ser militante o simpatizante del partido",
      "Llevar cédula de identidad",
      "Llegar 15 minutos antes para registro",
    ],
    whatToBring: [
      "Libreta y bolígrafo para tomar notas",
      "Ideas y propuestas para la comunidad",
      "Actitud participativa y colaborativa",
    ],
    address: "Avenida Principal #123, Verón, Higüey",
    coordinates: {
      lat: 18.5601,
      lng: -68.4117,
    },
    directions:
      "Ubicado en la Avenida Principal de Verón, frente al parque central. Hay estacionamiento disponible en la parte trasera del edificio.",
    schedule: [
      {
        time: "6:00 PM",
        activity: "Registro y Bienvenida",
        description: "Llegada de los participantes y registro de asistencia",
      },
      {
        time: "6:30 PM",
        activity: "Apertura y Palabras de Bienvenida",
        description:
          "Mensaje de apertura por el presidente municipal del partido",
      },
      {
        time: "6:45 PM",
        activity: "Informe de Actividades",
        description:
          "Presentación de actividades realizadas durante el mes y resultados obtenidos",
      },
      {
        time: "7:15 PM",
        activity: "Informe Financiero",
        description: "Transparencia en el manejo de recursos del partido",
      },
      {
        time: "7:30 PM",
        activity: "Próximas Actividades",
        description: "Presentación del calendario de eventos del próximo mes",
      },
      {
        time: "8:00 PM",
        activity: "Propuestas y Debate",
        description:
          "Espacio abierto para presentar propuestas y debatir temas importantes",
      },
      {
        time: "8:45 PM",
        activity: "Conclusiones y Cierre",
        description: "Resumen de acuerdos y mensaje de cierre",
      },
    ],
    rsvpEnabled: true,
  }

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
      {event.schedule && (
        <EventSchedule
          title="Agenda del Evento"
          schedule={individualEvent.schedule}
        />
      )}

      {/* Event Location */}
      <EventLocation
        location={individualEvent.location}
        address={event.address}
        coordinates={individualEvent.coordinates}
        directions={individualEvent.directions}
      />

      {/* RSVP Form */}
      <EventRSVP
        eventId={event.id}
        eventTitle={event.title}
        eventDate={event.date}
        rsvpEnabled={event.rsvpEnabled}
        capacity={event.capacity}
        attendees={event.attendees}
      />

      {/* Related Events */}
      <RelatedEvents title="Próximos Eventos" events={relatedEvents} />

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

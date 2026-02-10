import { EventHero } from "@/components/IndividualEventPage/EventHero"
import { EventRSVP } from "@/components/IndividualEventPage/EventRSVP"

export default async function RSVPPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

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
  return (
    <main>
      {/* Event Hero */}
      <EventHero
        title={event.title}
        category={event.category}
        date={event.date}
        time={event.time}
        location={event.location}
        image={event.image}
        status={event.status}
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
    </main>
  )
}

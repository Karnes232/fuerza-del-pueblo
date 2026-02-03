// config/events.config.ts
import { Event, PastEvent, EventCategoryInfo } from "@/types/events.types"

// Hero Data
export const eventsHeroData = {
  title: "Eventos y Actividades",
  subtitle: "Participa en nuestras actividades comunitarias",
  description:
    "Únete a nosotros en nuestras actividades, asambleas y eventos sociales. Tu participación fortalece nuestra comunidad.",
  ctaText: "Sugiere un Evento",
  ctaLink: "/contacto",
}

// Event Categories
export const eventCategories: EventCategoryInfo[] = [
  {
    id: "asamblea",
    name: "Asambleas",
    description:
      "Reuniones generales del partido para discutir estrategias y decisiones.",
    icon: "Users",
    color: "#00A651",
  },
  {
    id: "comunitaria",
    name: "Actividades Comunitarias",
    description: "Eventos para servir y conectar con la comunidad.",
    icon: "Heart",
    color: "#1F4D2B",
  },
  {
    id: "formacion",
    name: "Formación Política",
    description: "Talleres y capacitaciones sobre participación ciudadana.",
    icon: "GraduationCap",
    color: "#00A651",
  },
  {
    id: "social",
    name: "Eventos Sociales",
    description: "Celebraciones y encuentros para fortalecer lazos.",
    icon: "PartyPopper",
    color: "#1F4D2B",
  },
  {
    id: "limpieza",
    name: "Jornadas de Limpieza",
    description: "Actividades para embellecer nuestros espacios públicos.",
    icon: "Trash2",
    color: "#00A651",
  },
  {
    id: "reunion",
    name: "Reuniones",
    description: "Encuentros con líderes comunitarios y organizaciones.",
    icon: "Handshake",
    color: "#1F4D2B",
  },
]

// Upcoming Events
export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Asamblea General de Febrero",
    description:
      "Reunión mensual para todos los militantes y simpatizantes. Discutiremos los avances del mes, planificación de eventos futuros y estrategias comunitarias.",
    date: "2026-02-15",
    time: "6:00 PM",
    location: "Sede del Partido, Verón",
    category: "asamblea",
    image: "/images/events/asamblea-feb.jpg",
    slug: "asamblea-general-febrero-2026",
    rsvpLink: "/eventos/asamblea-general-febrero-2026/rsvp",
    capacity: 100,
    attendees: 45,
    featured: true,
    status: "upcoming",
  },
  {
    id: "2",
    title: "Jornada de Limpieza Comunitaria",
    description:
      "Únete a nosotros para limpiar y embellecer el Parque Central de Verón. Trae guantes y bolsas, nosotros proporcionamos el resto.",
    date: "2026-02-22",
    time: "8:00 AM",
    location: "Parque Central de Verón",
    category: "limpieza",
    image: "/images/events/limpieza-feb.jpg",
    slug: "jornada-limpieza-febrero-2026",
    rsvpLink: "/eventos/jornada-limpieza-febrero-2026/rsvp",
    capacity: 50,
    attendees: 28,
    status: "upcoming",
  },
  {
    id: "3",
    title: "Taller de Participación Ciudadana",
    description:
      "Capacitación sobre derechos ciudadanos y cómo participar activamente en procesos democráticos. Abierto al público.",
    date: "2026-03-05",
    time: "5:00 PM",
    location: "Centro Comunitario Punta Cana",
    category: "formacion",
    image: "/images/events/taller-marzo.jpg",
    slug: "taller-participacion-ciudadana-marzo-2026",
    rsvpLink: "/eventos/taller-participacion-ciudadana-marzo-2026/rsvp",
    capacity: 60,
    attendees: 15,
    status: "upcoming",
  },
  {
    id: "4",
    title: "Reunión con Comerciantes Locales",
    description:
      "Encuentro con pequeños y medianos comerciantes para escuchar sus necesidades y propuestas de desarrollo económico.",
    date: "2026-03-10",
    time: "4:00 PM",
    location: "Cámara de Comercio, Punta Cana",
    category: "reunion",
    slug: "reunion-comerciantes-marzo-2026",
    rsvpLink: "/eventos/reunion-comerciantes-marzo-2026/rsvp",
    status: "upcoming",
  },
  {
    id: "5",
    title: "Celebración del Día de la Independencia",
    description:
      "Evento social para celebrar la independencia nacional con actividades culturales, música y comida típica.",
    date: "2026-02-27",
    time: "3:00 PM",
    location: "Plaza Principal, Verón",
    category: "social",
    image: "/images/events/independencia.jpg",
    slug: "celebracion-independencia-2026",
    rsvpLink: "/eventos/celebracion-independencia-2026/rsvp",
    capacity: 200,
    attendees: 87,
    status: "upcoming",
  },
  {
    id: "6",
    title: "Taller de Liderazgo Juvenil",
    description:
      "Programa de formación para jóvenes interesados en convertirse en líderes comunitarios.",
    date: "2026-03-15",
    time: "2:00 PM",
    location: "Sede del Partido, Verón",
    category: "formacion",
    slug: "taller-liderazgo-juvenil-marzo-2026",
    rsvpLink: "/eventos/taller-liderazgo-juvenil-marzo-2026/rsvp",
    capacity: 30,
    attendees: 22,
    status: "upcoming",
  },
]

// Past Events
export const pastEvents: PastEvent[] = [
  {
    id: "p1",
    title: "Inauguración de la Nueva Sede",
    description:
      "Ceremonia de inauguración de nuestra nueva sede del partido en Verón.",
    date: "2026-01-28",
    time: "10:00 AM",
    location: "Sede del Partido, Verón",
    category: "social",
    image: "/images/events/past/inauguracion-sede.jpg",
    slug: "inauguracion-nueva-sede-2026",
    status: "past",
    summary:
      "Un evento exitoso con más de 150 asistentes, incluyendo líderes comunitarios y militantes del partido. Se realizó un recorrido por las instalaciones y se presentó el plan de actividades para el año.",
    photos: [
      "/images/events/past/inauguracion-1.jpg",
      "/images/events/past/inauguracion-2.jpg",
      "/images/events/past/inauguracion-3.jpg",
    ],
    attendeesCount: 152,
  },
  {
    id: "p2",
    title: "Primera Asamblea General 2026",
    description:
      "Primera asamblea del año para establecer objetivos y estrategias.",
    date: "2026-01-15",
    time: "6:00 PM",
    location: "Centro Comunitario",
    category: "asamblea",
    slug: "asamblea-general-enero-2026",
    status: "past",
    summary:
      "Se establecieron las prioridades del año y se formaron comités de trabajo para diferentes áreas: educación, salud, desarrollo económico y medio ambiente.",
    attendeesCount: 78,
  },
  {
    id: "p3",
    title: "Jornada de Reforestación",
    description: "Plantación de árboles en áreas verdes de la comunidad.",
    date: "2026-01-20",
    time: "7:00 AM",
    location: "Zona Verde Municipal",
    category: "comunitaria",
    image: "/images/events/past/reforestacion.jpg",
    slug: "jornada-reforestacion-enero-2026",
    status: "past",
    summary:
      "Más de 100 árboles nativos fueron plantados con la ayuda de voluntarios de todas las edades. Una actividad que fortalece nuestro compromiso con el medio ambiente.",
    photos: [
      "/images/events/past/reforestacion-1.jpg",
      "/images/events/past/reforestacion-2.jpg",
    ],
    attendeesCount: 45,
  },
]

// Featured Event (next important event)
export const featuredEvent =
  upcomingEvents.find(e => e.featured) || upcomingEvents[0]

// CTA Section Data
export const eventsCTAData = {
  title: "¿Quieres Participar Más?",
  description:
    "Hay muchas formas de involucrarte en nuestras actividades comunitarias.",
  actions: [
    {
      title: "Sugiere un Evento",
      description: "Tienes una idea para un evento o actividad comunitaria.",
      icon: "Lightbulb",
      href: "/contacto",
    },
    {
      title: "Voluntariado",
      description: "Ayuda a organizar y coordinar nuestros eventos.",
      icon: "Users",
      href: "/unete#voluntariado",
    },
    {
      title: "Notificaciones",
      description: "Recibe alertas sobre próximos eventos por email.",
      icon: "Bell",
      href: "/unete#newsletter",
    },
  ],
}

// Section Data
export const upcomingEventsSectionData = {
  title: "Próximos Eventos",
  subtitle: "Revisa nuestra agenda y confirma tu asistencia",
  events: upcomingEvents,
}

export const pastEventsSectionData = {
  title: "Eventos Realizados",
  subtitle: "Conoce las actividades que hemos realizado",
  events: pastEvents,
}

export const eventCategoriesSectionData = {
  title: "Tipos de Eventos",
  subtitle: "Participa en las actividades que más te interesen",
  categories: eventCategories,
}

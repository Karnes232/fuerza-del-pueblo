// config/events.config.ts
import { Event, PastEvent, EventCategoryInfo } from "@/types/events.types"

// Hero Data
// export const eventsHeroData = {
//   title: "Eventos y Actividades",
//   subtitle: "Participa en nuestras actividades comunitarias",
//   description:
//     "Únete a nosotros en nuestras actividades, asambleas y eventos sociales. Tu participación fortalece nuestra comunidad.",
//   ctaText: "Sugiere un Evento",
//   ctaLink: "/contacto",
// }

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
    title: "Asamblea General de Febrero",
    description:
      "Reunión mensual para todos los militantes y simpatizantes. Discutiremos los avances del mes, planificación de eventos futuros y estrategias comunitarias.",
    date: "2026-02-15",
    time: "6:00 PM",
    location: "Sede del Partido, Verón",
    category: "asamblea",
    image: {
      alt: "Asamblea General de Febrero",
      asset: {
        url: "https://picsum.photos/400/200?random=" + Math.random(),
        metadata: {
          dimensions: {
            width: 400,
            height: 200,
          },
        },
      },
    },
    slug: { current: "asamblea-general-febrero-2026" },
    rsvpLink: "/eventos/asamblea-general-febrero-2026/rsvp",
    capacity: 100,
    attendees: 45,
    featured: true,
    status: "upcoming",
  },
  {
    title: "Jornada de Limpieza Comunitaria",
    description:
      "Únete a nosotros para limpiar y embellecer el Parque Central de Verón. Trae guantes y bolsas, nosotros proporcionamos el resto.",
    date: "2026-02-22",
    time: "8:00 AM",
    location: "Parque Central de Verón",
    category: "limpieza",
    image: {
      alt: "Jornada de Limpieza Comunitaria",
      asset: {
        url: "https://picsum.photos/400/200?random=" + Math.random(),
        metadata: {
          dimensions: {
            width: 400,
            height: 200,
          },
        },
      },
    },
    slug: { current: "jornada-limpieza-febrero-2026" },
    rsvpLink: "/eventos/jornada-limpieza-febrero-2026/rsvp",
    capacity: 50,
    attendees: 28,
    status: "upcoming",
  },
  {
    title: "Taller de Participación Ciudadana",
    description:
      "Capacitación sobre derechos ciudadanos y cómo participar activamente en procesos democráticos. Abierto al público.",
    date: "2026-03-05",
    time: "5:00 PM",
    location: "Centro Comunitario Punta Cana",
    category: "formacion",
    image: {
      alt: "Taller de Participación Ciudadana",
      asset: {
        url: "https://picsum.photos/400/200?random=" + Math.random(),
        metadata: {
          dimensions: {
            width: 400,
            height: 200,
          },
        },
      },
    },
    slug: { current: "taller-participacion-ciudadana-marzo-2026" },
    rsvpLink: "/eventos/taller-participacion-ciudadana-marzo-2026/rsvp",
    capacity: 60,
    attendees: 15,
    status: "upcoming",
  },
  {
    title: "Reunión con Comerciantes Locales",
    description:
      "Encuentro con pequeños y medianos comerciantes para escuchar sus necesidades y propuestas de desarrollo económico.",
    date: "2026-03-10",
    time: "4:00 PM",
    location: "Cámara de Comercio, Punta Cana",
    category: "reunion",
    image: {
      alt: "Reunión con Comerciantes Locales",
      asset: {
        url: "https://picsum.photos/400/200?random=" + Math.random(),
        metadata: {
          dimensions: {
            width: 400,
            height: 200,
          },
        },
      },
    },
    slug: { current: "reunion-comerciantes-marzo-2026" },
    rsvpLink: "/eventos/reunion-comerciantes-marzo-2026/rsvp",
    status: "upcoming",
  },
  {
    title: "Celebración del Día de la Independencia",
    description:
      "Evento social para celebrar la independencia nacional con actividades culturales, música y comida típica.",
    date: "2026-02-27",
    time: "3:00 PM",
    location: "Plaza Principal, Verón",
    category: "social",
    image: {
      alt: "Celebración del Día de la Independencia",
      asset: {
        url: "https://picsum.photos/400/200?random=" + Math.random(),
        metadata: {
          dimensions: {
            width: 400,
            height: 200,
          },
        },
      },
    },
    slug: { current: "celebracion-independencia-2026" },
    rsvpLink: "/eventos/celebracion-independencia-2026/rsvp",
    capacity: 200,
    attendees: 87,
    status: "upcoming",
  },
  {
    title: "Taller de Liderazgo Juvenil",
    description:
      "Programa de formación para jóvenes interesados en convertirse en líderes comunitarios.",
    date: "2026-03-15",
    time: "2:00 PM",
    location: "Sede del Partido, Verón",
    category: "formacion",
    image: {
      alt: "Taller de Liderazgo Juvenil",
      asset: {
        url: "https://picsum.photos/400/200?random=" + Math.random(),
        metadata: {
          dimensions: {
            width: 400,
            height: 200,
          },
        },
      },
    },
    slug: { current: "taller-liderazgo-juvenil-marzo-2026" },
    rsvpLink: "/eventos/taller-liderazgo-juvenil-marzo-2026/rsvp",
    capacity: 30,
    attendees: 22,
    status: "upcoming",
  },
]

// Past Events
// export const pastEvents: PastEvent[] = [
//   {
//     title: "Inauguración de la Nueva Sede",
//     description:
//       "Ceremonia de inauguración de nuestra nueva sede del partido en Verón.",
//     date: "2026-01-28",
//     time: "10:00 AM",
//     location: "Sede del Partido, Verón",
//     category: "social",
//     image: {
//       alt: "Inauguración de la Nueva Sede",
//       asset: {
//         url: "https://picsum.photos/400/200?random=" + Math.random(),
//         metadata: {
//           dimensions: {
//             width: 400,
//             height: 200,
//           },
//         },
//       },
//     },
//     slug: { current: "inauguracion-nueva-sede-2026" },
//     status: "past",

//     photos: [
//       "/images/events/past/inauguracion-1.jpg",
//       "/images/events/past/inauguracion-2.jpg",
//       "/images/events/past/inauguracion-3.jpg",
//     ],

//   },
//   {
//     title: "Primera Asamblea General 2026",
//     description:
//       "Primera asamblea del año para establecer objetivos y estrategias.",
//     date: "2026-01-15",
//     time: "6:00 PM",
//     location: "Centro Comunitario",
//     category: "asamblea",
//     image: {
//       alt: "Primera Asamblea General 2026",
//       asset: {
//         url: "https://picsum.photos/400/200?random=" + Math.random(),
//         metadata: {
//           dimensions: {
//             width: 400,
//             height: 200,
//           },
//         },
//       },
//     },
//     slug: { current: "asamblea-general-enero-2026" },
//     status: "past",

//   },
//   {
//     title: "Jornada de Reforestación",
//     description: "Plantación de árboles en áreas verdes de la comunidad.",
//     date: "2026-01-20",
//     time: "7:00 AM",
//     location: "Zona Verde Municipal",
//     category: "comunitaria",
//     image: {
//       alt: "Jornada de Reforestación",
//       asset: {
//         url: "https://picsum.photos/400/200?random=" + Math.random(),
//         metadata: {
//           dimensions: {
//             width: 400,
//             height: 200,
//           },
//         },
//       },
//     },
//     slug: { current: "jornada-reforestacion-enero-2026" },
//     status: "past",

//     photos: [
//       "/images/events/past/reforestacion-1.jpg",
//       "/images/events/past/reforestacion-2.jpg",
//     ],
//   },
// ]

// Featured Event (next important event)
export const featuredEvent =
  upcomingEvents.find(e => e.featured) || upcomingEvents[0]

// CTA Section Data
// export const eventsCTAData = {
//   title: "¿Quieres Participar Más?",
//   description:
//     "Hay muchas formas de involucrarte en nuestras actividades comunitarias.",
//   actions: [
//     {
//       title: "Sugiere un Evento",
//       description: "Tienes una idea para un evento o actividad comunitaria.",
//       icon: "Lightbulb",
//       href: "/contacto",
//     },
//     {
//       title: "Voluntariado",
//       description: "Ayuda a organizar y coordinar nuestros eventos.",
//       icon: "Users",
//       href: "/unete#voluntariado",
//     },
//     {
//       title: "Notificaciones",
//       description: "Recibe alertas sobre próximos eventos por email.",
//       icon: "Bell",
//       href: "/unete#newsletter",
//     },
//   ],
// }

// Section Data
export const upcomingEventsSectionData = {
  // title: "Próximos Eventos",
  // subtitle: "Revisa nuestra agenda y confirma tu asistencia",
  events: upcomingEvents,
}

// export const pastEventsSectionData = {
//   // title: "Eventos Realizados",
//   // subtitle: "Conoce las actividades que hemos realizado",
//   events: pastEvents,
// }

// export const eventCategoriesSectionData = {
//   title: "Tipos de Eventos",
//   subtitle: "Participa en las actividades que más te interesen",
//   categories: eventCategories,
// }

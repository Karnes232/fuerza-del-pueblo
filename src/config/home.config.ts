// config/home.config.ts
import { Value, NewsArticle, Event } from "../types/home.types"

// Hero Section Data
// export const heroData = {
//   title: "Fuerza del Pueblo",
//   subtitle: "Verón - Punta Cana",
//   slogan: "Con la Fuerza del Pueblo venceremos",
//   ctaText: "Únete al Movimiento",
//   ctaLink: "/unete",
//   secondaryCtaText: "Conoce Nuestra Propuesta",
//   secondaryCtaLink: "/partido/quienes-somos",
//   backgroundImage:
//     "https://listindiario.com/files/main_image/files/fp/uploads/2023/06/12/648788e97a4b7.r_d.603-282.jpeg", // Optional
// }

// // About Section Data
// export const aboutData = {
//   title: "Trabajando por el Desarrollo de Verón-Punta Cana",
//   content:
//     "Fuerza del Pueblo es un movimiento político comprometido con el bienestar y desarrollo de nuestra comunidad. Trabajamos día a día para construir un futuro mejor para todos los ciudadanos de Verón-Punta Cana, basado en la transparencia, la equidad y el servicio genuino al pueblo.",
//   image: "/images/about-community.jpg", // Optional
//   ctaText: "Conoce Más Sobre Nosotros",
//   ctaLink: "/partido/quienes-somos",
// }

// Core Values
// export const coreValues: Value[] = [
//   {
//     id: "democracy",
//     title: "Democracia",
//     description:
//       "Promovemos la participación ciudadana activa y la toma de decisiones colectivas.",
//     icon: "Users",
//   },
//   {
//     id: "equity",
//     title: "Equidad",
//     description:
//       "Trabajamos por la justicia social y la igualdad de oportunidades para todos.",
//     icon: "Scale",
//   },
//   {
//     id: "development",
//     title: "Desarrollo",
//     description:
//       "Impulsamos el crecimiento económico sostenible y el progreso de nuestra comunidad.",
//     icon: "TrendingUp",
//   },
//   {
//     id: "transparency",
//     title: "Transparencia",
//     description:
//       "Rendimos cuentas y actuamos con honestidad en todas nuestras gestiones.",
//     icon: "Eye",
//   },
// ]

// Values Section Data
// export const valuesData = {
//   title: "Nuestros Valores",
//   subtitle: "Los principios que guían nuestro trabajo por la comunidad",
//   values: coreValues,
// }

// Latest News (Sample Data)
export const latestNews: NewsArticle[] = [
  {
    id: "1",
    title: "Inauguración de Nueva Sede del Partido en Verón",
    excerpt:
      "Con gran éxito se llevó a cabo la inauguración de nuestra nueva sede, contando con la presencia de cientos de militantes y simpatizantes.",
    date: "2026-01-28",
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: "inauguracion-nueva-sede",
    category: "Eventos",
  },
  {
    id: "2",
    title: "Programa de Apoyo a Pequeños Comerciantes",
    excerpt:
      "Lanzamos una iniciativa para apoyar el desarrollo de pequeños comerciantes locales con capacitación y recursos.",
    date: "2026-01-25",
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: "programa-apoyo-comerciantes",
    category: "Iniciativas",
  },
  {
    id: "3",
    title: "Reunión con Líderes Comunitarios de Punta Cana",
    excerpt:
      "Nuestro equipo se reunió con líderes de diferentes sectores para escuchar sus necesidades y propuestas.",
    date: "2026-01-20",
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: "reunion-lideres-comunitarios",
    category: "Noticias",
  },
]

// News Section Data
export const newsData = {
  title: "Últimas Noticias",
  subtitle: "Mantente informado sobre nuestras actividades y propuestas",
  articles: latestNews,
  viewAllLink: "/noticias",
}

// Upcoming Events (Sample Data)
export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Asamblea General Mensual",
    description:
      "Reunión abierta para todos los militantes y simpatizantes. Discutiremos los avances del mes y próximas actividades.",
    date: "2026-02-15",
    time: "6:00 PM",
    location: "Sede del Partido, Verón",
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: "asamblea-general-febrero",
    rsvpLink: "/eventos/asamblea-general-febrero",
  },
  {
    id: "2",
    title: "Jornada de Limpieza Comunitaria",
    description:
      "Únete a nosotros en una jornada de limpieza y embellecimiento de nuestras calles y parques.",
    date: "2026-02-22",
    time: "8:00 AM",
    location: "Parque Central de Verón",
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: "jornada-limpieza-febrero",
    rsvpLink: "/eventos/jornada-limpieza-febrero",
  },
  {
    id: "3",
    title: "Taller de Formación Política",
    description:
      "Capacitación sobre participación ciudadana y procesos democráticos. Abierto al público.",
    date: "2026-03-05",
    time: "5:00 PM",
    location: "Centro Comunitario Punta Cana",
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: "taller-formacion-marzo",
    rsvpLink: "/eventos/taller-formacion-marzo",
  },
]

// Events Section Data
export const eventsData = {
  title: "Próximos Eventos",
  subtitle: "Participa en nuestras actividades comunitarias",
  events: upcomingEvents,
  viewAllLink: "/eventos",
}

// Join Section Data
export const joinData = {
  title: "¡Únete a Fuerza del Pueblo!",
  description:
    "Sé parte del cambio que nuestra comunidad necesita. Juntos construimos un mejor futuro para Verón-Punta Cana.",
  benefits: [
    "Participación activa en decisiones del partido",
    "Acceso a programas de formación política",
    "Red de apoyo comunitario",
    "Oportunidades de voluntariado y liderazgo",
  ],
  ctaText: "Afiliarme Ahora",
  ctaLink: "/unete",
  backgroundImage: "/images/join-bg.jpg", // Optional
}

// Contact Section Data
export const contactData = {
  title: "¿Tienes Preguntas?",
  description:
    "Estamos aquí para escucharte. Contáctanos por cualquiera de nuestros canales.",
}

// Brand Colors
export const brandColors = {
  primaryGreen: "#00A651",
  darkGreen: "#1F4D2B",
  white: "#FFFFFF",
  charcoal: "#111111",
  lightGray: "#F4F4F4",
}

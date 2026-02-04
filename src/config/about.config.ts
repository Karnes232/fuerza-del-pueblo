// config/about.config.ts
import {
    TimelineItem,
    PrincipleItem,
    AboutHeroProps,
    AboutContentProps,
    NationalConnectionProps,
    AboutStatsProps,
  } from "../types/about.types"
  
  // About Hero Section
  export const aboutHeroData: AboutHeroProps = {
    title: "Quiénes Somos",
    subtitle: "Fuerza del Pueblo - Verón Punta Cana",
    description:
      "Somos un movimiento político comprometido con el desarrollo integral de nuestra comunidad, trabajando día a día por el bienestar de todos los ciudadanos de Verón-Punta Cana.",
    backgroundImage: {
      alt: "Fuerza del Pueblo community",
      asset: {
        url: "https://picsum.photos/1920/600?random=" + Math.random(),
        metadata: { dimensions: { width: 1920, height: 600 } }
      }
    }
  }
  
  // Main About Content
  export const aboutContentData: AboutContentProps = {
    title: "Nuestra Identidad",
    content:
      "Fuerza del Pueblo es un partido político dominicano fundado con el propósito de servir genuinamente al pueblo y trabajar por el desarrollo sostenible de nuestras comunidades. A nivel municipal, en Verón-Punta Cana, somos la voz de los ciudadanos que buscan transparencia, equidad y progreso real.",
    sections: [
      {
        id: "commitment",
        title: "Nuestro Compromiso",
        content:
          "Nos comprometemos a trabajar incansablemente por el desarrollo de Verón-Punta Cana, poniendo siempre los intereses de la comunidad por encima de cualquier interés particular. Creemos en la participación ciudadana activa y en la construcción colectiva de soluciones.",
      },
      {
        id: "focus",
        title: "Nuestro Enfoque",
        content:
          "Trabajamos desde una perspectiva municipal enfocada en las necesidades reales de nuestra comunidad: desarrollo económico local, servicios públicos de calidad, infraestructura moderna, educación, salud y seguridad ciudadana.",
      },
      {
        id: "difference",
        title: "Nuestra Diferencia",
        content:
          "Lo que nos distingue es nuestro compromiso genuino con la transparencia y la rendición de cuentas. No prometemos lo imposible; trabajamos con honestidad para lograr cambios reales y medibles en la calidad de vida de nuestros vecinos.",
      },
    ],
    image: {
      alt: "Fuerza del Pueblo community",
      asset: {
        url: "https://picsum.photos/1920/600?random=" + Math.random(),
        metadata: { dimensions: { width: 1920, height: 600 } }
      }
    }
  }
  
  // Party History Timeline
  export const historyTimelineData: TimelineItem[] = [
    {
      id: "1",
      year: "2020",
      title: "Fundación Nacional",
      description:
        "Fuerza del Pueblo es fundado a nivel nacional como una alternativa política comprometida con el cambio y el desarrollo del país.",
    },
    {
      id: "2",
      year: "2022",
      title: "Expansión Municipal",
      description:
        "El partido establece presencia en Verón-Punta Cana, reconociendo el potencial y las necesidades únicas de nuestra comunidad turística.",
    },
    {
      id: "3",
      year: "2023",
      title: "Consolidación Local",
      description:
        "Fortalecimiento de la estructura organizativa municipal y establecimiento de conexiones profundas con líderes comunitarios y organizaciones locales.",
    },
    {
      id: "4",
      year: "2024",
      title: "Crecimiento y Servicio",
      description:
        "Lanzamiento de múltiples iniciativas comunitarias y programas de apoyo, consolidando nuestra presencia como un partido verdaderamente comprometido con Verón-Punta Cana.",
    },
    {
      id: "5",
      year: "2025",
      title: "Preparación Electoral",
      description:
        "Fortalecimiento de la base militante y preparación para las próximas elecciones municipales con propuestas sólidas y realizables.",
    },
  ]
  
  // Ideological Principles
  export const ideologicalPrinciples: PrincipleItem[] = [
    {
      id: "democracy",
      title: "Democracia Participativa",
      description:
        "Creemos en la participación ciudadana activa como pilar fundamental de la democracia. Las decisiones que afectan a la comunidad deben tomarse con la voz y el voto de los ciudadanos.",
      icon: "Users",
    },
    {
      id: "social-justice",
      title: "Justicia Social",
      description:
        "Trabajamos por la equidad y la igualdad de oportunidades para todos, sin importar su origen, condición social o económica. Todos merecen las mismas oportunidades de desarrollo.",
      icon: "Scale",
    },
    {
      id: "sustainable-development",
      title: "Desarrollo Sostenible",
      description:
        "Impulsamos un crecimiento económico que respete el medio ambiente y beneficie a las generaciones presentes y futuras de Verón-Punta Cana.",
      icon: "Leaf",
    },
    {
      id: "transparency",
      title: "Transparencia y Rendición de Cuentas",
      description:
        "Nos comprometemos a actuar con total transparencia en todas nuestras gestiones y a rendir cuentas constantemente a la ciudadanía que nos confía su representación.",
      icon: "Eye",
    },
    {
      id: "local-empowerment",
      title: "Empoderamiento Local",
      description:
        "Creemos en fortalecer las capacidades locales, apoyar a los pequeños empresarios y promover el talento y liderazgo de nuestra propia comunidad.",
      icon: "Award",
    },
    {
      id: "innovation",
      title: "Innovación y Modernización",
      description:
        "Apostamos por la incorporación de nuevas tecnologías y métodos modernos de gestión para ofrecer mejores servicios y mayor eficiencia a los ciudadanos.",
      icon: "Lightbulb",
    },
  ]
  
  // National Connection
  export const nationalConnectionData: NationalConnectionProps = {
    title: "Conexión Nacional",
    content:
      "Fuerza del Pueblo a nivel municipal en Verón-Punta Cana forma parte de un movimiento nacional más amplio. Esta conexión nos permite tener acceso a recursos, experiencia y apoyo institucional, al mismo tiempo que mantenemos nuestra autonomía para tomar decisiones basadas en las necesidades específicas de nuestra comunidad. Trabajamos en coordinación con el liderazgo nacional para asegurar que las políticas y programas del partido se adapten efectivamente a la realidad local de Verón-Punta Cana.",
    // leaderName: "Leonel Fernández",
    // leaderTitle: "Presidente Nacional - Fuerza del Pueblo",
    ctaText: "Conoce Más Sobre el Partido Nacional",
    ctaLink: "https://www.fuerzadelpueblo.do",
    logoUrl: "https://picsum.photos/1920/600?random=" + Math.random(),
  }
  
  // Party Statistics (optional)
  export const aboutStatsData: AboutStatsProps = {
    stats: [
      {
        id: "1",
        value: "500+",
        label: "Militantes Activos",
        icon: "Users",
      },
      {
        id: "2",
        value: "15+",
        label: "Sectores Organizados",
        icon: "MapPin",
      },
      {
        id: "3",
        value: "50+",
        label: "Actividades Comunitarias",
        icon: "Calendar",
      },
      {
        id: "4",
        value: "100%",
        label: "Compromiso con la Comunidad",
        icon: "Heart",
      },
    ],
  }
  
  export const aboutPrinciplesData = {
    title: "Nuestros Principios Ideológicos",
    subtitle:
      "Los valores fundamentales que guían todas nuestras acciones y decisiones",
    principles: ideologicalPrinciples,
  }
  
  export const aboutTimelineData = {
    title: "Nuestra Historia",
    subtitle: "El camino que hemos recorrido para servir a Verón-Punta Cana",
    items: historyTimelineData,
  }
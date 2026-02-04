// config/history.config.ts
import {
  HistoryHeroProps,
  HistoryIntroProps,
  TimelineEvent,
  FoundingStory,
  Milestone,
  Achievement,
  Era,
  LegacyItem,
} from "../types/history.types"

// Hero Section
export const historyHeroData: HistoryHeroProps = {
  title: "Historia del Partido",
  subtitle: "Fuerza del Pueblo - Verón Punta Cana",
  description:
    "Conoce el recorrido de Fuerza del Pueblo desde su fundación hasta convertirse en una fuerza política comprometida con el desarrollo de Verón-Punta Cana y la República Dominicana.",
  backgroundImage: {
    alt: "Fuerza del Pueblo community",
    asset: {
      url: "https://picsum.photos/1920/600?random=" + Math.random(),
      metadata: { dimensions: { width: 1920, height: 600 } },
    },
  },
}

// Introduction
export const historyIntroData: HistoryIntroProps = {
  title: "Nuestro Origen y Trayectoria",
  content:
    "Fuerza del Pueblo nace en 2020 como una respuesta a la necesidad de un partido político verdaderamente democrático, inclusivo y comprometido con el bienestar del pueblo dominicano. Desde su fundación, el partido se ha caracterizado por promover la participación ciudadana, la transparencia y el desarrollo sostenible. En Verón-Punta Cana, hemos construido una presencia sólida basada en el trabajo comunitario constante y el compromiso genuino con las necesidades de nuestros vecinos.",
  image: {
    alt: "Fuerza del Pueblo community",
    asset: {
      url: "https://picsum.photos/500/400?random=" + Math.random(),
      metadata: { dimensions: { width: 500, height: 400 } },
    },
  },
}

// Founding Story
export const foundingStoryData: FoundingStory = {
  year: "2020",
  context:
    "En un contexto nacional de búsqueda de alternativas políticas genuinas y transparentes, Fuerza del Pueblo surge como un movimiento comprometido con la democracia participativa y el desarrollo integral del país. El partido se funda con la visión de crear un espacio político donde la voz del pueblo sea verdaderamente escuchada y sus necesidades atendidas con honestidad y eficiencia.",
  founders: [
    "Líderes nacionales comprometidos con el cambio",
    "Activistas comunitarios de base",
    "Profesionales de diversas áreas",
    "Ciudadanos preocupados por el futuro del país",
  ],
  objectives: [
    "Promover la participación ciudadana activa en la política",
    "Garantizar transparencia en la gestión pública",
    "Impulsar el desarrollo económico sostenible",
    "Defender los derechos de todos los ciudadanos por igual",
    "Construir una democracia más justa y equitativa",
  ],
}

// Timeline Events (National and Local)
export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "2020-10",
    title: "Fundación Nacional del Partido",
    description:
      "Fuerza del Pueblo es oficialmente fundado a nivel nacional, estableciendo sus principios fundacionales de democracia participativa, transparencia y desarrollo sostenible.",
    category: "national",
    highlights: [
      "Registro oficial ante la Junta Central Electoral",
      "Establecimiento de principios y estatutos",
      "Conformación de dirección nacional",
    ],
  },
  {
    id: "2",
    date: "2021-03",
    title: "Primeras Elecciones Municipales",
    description:
      "El partido participa por primera vez en elecciones municipales a nivel nacional, demostrando su capacidad organizativa y propuestas de gobierno local.",
    category: "national",
    highlights: [
      "Presentación de candidatos en múltiples municipios",
      "Campañas centradas en propuestas concretas",
      "Establecimiento de base electoral",
    ],
  },
  {
    id: "3",
    date: "2021-08",
    title: "Llegada a Verón-Punta Cana",
    description:
      "Fuerza del Pueblo establece oficialmente su presencia en Verón-Punta Cana, reconociendo el potencial de crecimiento y las necesidades particulares de esta comunidad turística en desarrollo.",
    category: "local",
    highlights: [
      "Apertura de oficinas locales",
      "Primeras reuniones con líderes comunitarios",
      "Evaluación de necesidades del municipio",
    ],
  },
  {
    id: "4",
    date: "2022-01",
    title: "Primera Asamblea Municipal",
    description:
      "Se realiza la primera asamblea municipal de Fuerza del Pueblo en Verón-Punta Cana con participación masiva de ciudadanos interesados en el proyecto político.",
    category: "local",
    highlights: [
      "Más de 200 asistentes",
      "Elección de coordinadores locales",
      "Definición de prioridades municipales",
    ],
  },
  {
    id: "5",
    date: "2022-06",
    title: "Estructura Organizativa Municipal",
    description:
      "Se consolida la estructura organizativa del partido en Verón-Punta Cana con coordinadores en todos los sectores principales.",
    category: "milestone",
    highlights: [
      "Coordinadores en 6 sectores",
      "Formación de departamentos especializados",
      "Establecimiento de alas juvenil y femenina",
    ],
  },
  {
    id: "6",
    date: "2022-09",
    title: "Programa de Apoyo a Pequeños Comerciantes",
    description:
      "Lanzamiento del primer programa de apoyo directo a la comunidad, ofreciendo capacitación y recursos a pequeños empresarios locales.",
    category: "achievement",
    highlights: [
      "50 pequeños comerciantes beneficiados",
      "Talleres de capacitación empresarial",
      "Conexión con recursos financieros",
    ],
  },
  {
    id: "7",
    date: "2023-03",
    title: "Jornadas Comunitarias de Salud",
    description:
      "Organización de jornadas gratuitas de salud en diversos sectores, ofreciendo servicios médicos básicos a familias de escasos recursos.",
    category: "achievement",
    highlights: [
      "Más de 500 personas atendidas",
      "Servicios médicos gratuitos",
      "Colaboración con profesionales de la salud",
    ],
  },
  {
    id: "8",
    date: "2023-07",
    title: "Inauguración de Nueva Sede",
    description:
      "Se inaugura la sede oficial del partido en Verón con instalaciones modernas para servir mejor a la comunidad y los militantes.",
    category: "milestone",
    highlights: [
      "Instalaciones con capacidad para 200 personas",
      "Espacios para reuniones y capacitaciones",
      "Centro de atención ciudadana",
    ],
  },
  {
    id: "9",
    date: "2023-11",
    title: "Programa de Becas Estudiantiles",
    description:
      "Lanzamiento de programa de becas para estudiantes de escasos recursos, apoyando la educación como motor de desarrollo.",
    category: "achievement",
    highlights: [
      "30 becas otorgadas",
      "Apoyo económico y materiales escolares",
      "Seguimiento académico personalizado",
    ],
  },
  {
    id: "10",
    date: "2024-02",
    title: "Formación de Liderazgo Juvenil",
    description:
      "Inicio del programa de formación política y liderazgo para jóvenes, preparando la próxima generación de dirigentes comprometidos.",
    category: "achievement",
    highlights: [
      "80 jóvenes participantes",
      "Talleres de liderazgo y política",
      "Proyectos comunitarios liderados por jóvenes",
    ],
  },
  {
    id: "11",
    date: "2024-06",
    title: "Alianzas con Organizaciones Comunitarias",
    description:
      "Establecimiento de alianzas estratégicas con organizaciones comunitarias, iglesias y grupos cívicos para fortalecer el trabajo conjunto.",
    category: "milestone",
    highlights: [
      "15 alianzas formalizadas",
      "Proyectos conjuntos en marcha",
      "Red de colaboración comunitaria",
    ],
  },
  {
    id: "12",
    date: "2024-10",
    title: "Campaña de Limpieza Ambiental",
    description:
      "Gran jornada de limpieza y concientización ambiental con participación masiva de militantes y ciudadanos.",
    category: "achievement",
    highlights: [
      "300+ voluntarios participantes",
      "Limpieza de playas y espacios públicos",
      "Programa de educación ambiental",
    ],
  },
  {
    id: "13",
    date: "2025-01",
    title: "Preparación Electoral 2026",
    description:
      "Inicio del proceso de preparación para las elecciones municipales de 2026 con definición de estrategias y propuestas.",
    category: "milestone",
    highlights: [
      "Consultas ciudadanas para propuestas",
      "Fortalecimiento de estructura organizativa",
      "Plan estratégico electoral",
    ],
  },
  {
    id: "14",
    date: "2025-06",
    title: "Mil Militantes Activos",
    description:
      "El partido alcanza la marca de 1,000 militantes activos en Verón-Punta Cana, consolidando su presencia como fuerza política local.",
    category: "milestone",
    highlights: [
      "1,000+ militantes registrados",
      "Presencia en todos los sectores",
      "Base sólida para elecciones",
    ],
  },
  {
    id: "15",
    date: "2026-01",
    title: "Lanzamiento de Propuestas Electorales",
    description:
      "Presentación oficial del plan de gobierno municipal con propuestas concretas para el desarrollo de Verón-Punta Cana.",
    category: "milestone",
    highlights: [
      "Plan de gobierno detallado",
      "Propuestas en educación, salud, empleo",
      "Compromiso con desarrollo sostenible",
    ],
  },
]

// Key Milestones
export const keyMilestones: Milestone[] = [
  {
    id: "1",
    year: "2020",
    title: "Fundación del Partido",
    description:
      "Nacimiento oficial de Fuerza del Pueblo como alternativa política nacional.",
    icon: "Flag",
    impact:
      "Establecimiento de una nueva opción política comprometida con la democracia y la transparencia.",
  },
  {
    id: "2",
    year: "2021",
    title: "Llegada a Verón-Punta Cana",
    description:
      "Expansión del partido al municipio con enfoque en desarrollo turístico sostenible.",
    icon: "MapPin",
    impact:
      "Inicio de presencia política organizada en la zona turística más importante del país.",
  },
  {
    id: "3",
    year: "2022",
    title: "Estructura Organizativa Completa",
    description:
      "Consolidación de estructura con coordinadores en todos los sectores principales.",
    icon: "Building",
    impact:
      "Capacidad operativa plena para servir a la comunidad y organizar actividades.",
  },
  {
    id: "4",
    year: "2023",
    title: "Sede Propia Inaugurada",
    description:
      "Apertura de sede oficial con instalaciones modernas para servir a la comunidad.",
    icon: "Home",
    impact:
      "Espacio permanente para reuniones, capacitaciones y atención ciudadana.",
  },
  {
    id: "5",
    year: "2024",
    title: "Programas Comunitarios Activos",
    description:
      "Múltiples programas de apoyo comunitario en educación, salud y desarrollo.",
    icon: "Heart",
    impact:
      "Impacto directo en cientos de familias a través de servicios y apoyo concreto.",
  },
  {
    id: "6",
    year: "2025",
    title: "Mil Militantes Comprometidos",
    description:
      "Alcance de 1,000 militantes activos consolidando base electoral.",
    icon: "Users",
    impact:
      "Base sólida de ciudadanos comprometidos con el proyecto político del partido.",
  },
]

// Major Achievements
export const majorAchievements: Achievement[] = [
  {
    id: "1",
    title: "500+ Familias Beneficiadas",
    description:
      "Más de 500 familias han recibido apoyo directo a través de nuestros programas de salud, educación y desarrollo económico.",
    date: "2022-2025",
    category: "Impacto Social",
    icon: "Users",
  },
  {
    id: "2",
    title: "30 Becas Estudiantiles",
    description:
      "Programa de becas ha apoyado a 30 estudiantes de escasos recursos en su educación.",
    date: "2023-2025",
    category: "Educación",
    icon: "GraduationCap",
  },
  {
    id: "3",
    title: "15 Alianzas Estratégicas",
    description:
      "Establecimiento de alianzas con organizaciones comunitarias, iglesias y grupos cívicos.",
    date: "2024",
    category: "Organización",
    icon: "Handshake",
  },
  {
    id: "4",
    title: "Jornadas de Salud Gratuitas",
    description:
      "Organización de jornadas médicas que han atendido a más de 500 personas sin costo.",
    date: "2023-2025",
    category: "Salud",
    icon: "Heart",
  },
  {
    id: "5",
    title: "80 Jóvenes en Formación",
    description:
      "Programa de liderazgo juvenil ha capacitado a 80 jóvenes en habilidades políticas y comunitarias.",
    date: "2024-2025",
    category: "Juventud",
    icon: "Award",
  },
  {
    id: "6",
    title: "Campañas Ambientales",
    description:
      "Múltiples jornadas de limpieza con más de 300 voluntarios comprometidos con el medio ambiente.",
    date: "2024-2025",
    category: "Medio Ambiente",
    icon: "Leaf",
  },
]

// Historical Eras
export const historicalEras: Era[] = [
  {
    id: "era-1",
    period: "2020-2021",
    title: "Fundación y Primeros Pasos",
    description:
      "Período de establecimiento nacional del partido y primeras elecciones. Definición de identidad política y principios fundacionales.",
    keyEvents: [
      "Fundación oficial del partido",
      "Registro ante JCE",
      "Primera participación electoral",
      "Establecimiento de estructura nacional",
    ],
    image: {
      alt: "Fuerza del Pueblo community",
      asset: {
        url: "https://picsum.photos/600/200?random=" + Math.random(),
        metadata: { dimensions: { width: 600, height: 200 } },
      },
    },
  },
  {
    id: "era-2",
    period: "2021-2022",
    title: "Expansión a Verón-Punta Cana",
    description:
      "Llegada del partido al municipio y construcción de estructura organizativa local. Primeras reuniones con líderes comunitarios.",
    keyEvents: [
      "Apertura de oficinas locales",
      "Primera asamblea municipal",
      "Formación de coordinaciones sectoriales",
      "Inicio de trabajo comunitario",
    ],
  },
  {
    id: "era-3",
    period: "2022-2023",
    title: "Consolidación y Crecimiento",
    description:
      "Fortalecimiento de presencia local y lanzamiento de primeros programas comunitarios. Construcción de base militante sólida.",
    keyEvents: [
      "Estructura organizativa completa",
      "Primeros programas comunitarios",
      "Jornadas de salud y educación",
      "Crecimiento de militancia",
    ],
    image: {
      alt: "Fuerza del Pueblo community",
      asset: {
        url: "https://picsum.photos/600/200?random=" + Math.random(),
        metadata: { dimensions: { width: 600, height: 200 } },
      },
    },
  },
  {
    id: "era-4",
    period: "2023-2024",
    title: "Institucionalización",
    description:
      "Inauguración de sede propia y establecimiento de programas permanentes. Consolidación como referente político local.",
    keyEvents: [
      "Inauguración de sede oficial",
      "Programas de becas estudiantiles",
      "Formación de liderazgo juvenil",
      "Alianzas estratégicas",
    ],
  },
  {
    id: "era-5",
    period: "2024-2026",
    title: "Madurez y Preparación Electoral",
    description:
      "Período de madurez organizativa y preparación para elecciones municipales. Desarrollo de propuestas de gobierno concretas.",
    keyEvents: [
      "Mil militantes activos",
      "Consultas ciudadanas",
      "Desarrollo de plan de gobierno",
      "Preparación para elecciones 2026",
    ],
  },
]

// Legacy and Future
export const legacyItems: LegacyItem[] = [
  {
    id: "1",
    title: "Compromiso Comunitario",
    description:
      "Dejamos un legado de servicio genuino y compromiso constante con las necesidades de nuestra comunidad.",
    icon: "Heart",
  },
  {
    id: "2",
    title: "Participación Ciudadana",
    description:
      "Hemos fomentado una cultura de participación activa donde la voz de cada ciudadano cuenta.",
    icon: "Users",
  },
  {
    id: "3",
    title: "Transparencia Política",
    description:
      "Establecimos un estándar de transparencia y rendición de cuentas en la política local.",
    icon: "Eye",
  },
  {
    id: "4",
    title: "Desarrollo Sostenible",
    description:
      "Promovimos un enfoque de desarrollo que equilibra crecimiento económico con cuidado ambiental.",
    icon: "Leaf",
  },
]

// Compiled exports
export const foundingStorySection = {
  title: "Nuestros Orígenes",
  subtitle: "La fundación de un movimiento político comprometido con el pueblo",
  story: foundingStoryData,
}

export const timelineData = {
  title: "Línea de Tiempo",
  subtitle: "Los momentos clave que han marcado nuestro camino",
  events: timelineEvents,
}

export const milestonesData = {
  title: "Hitos Históricos",
  subtitle: "Los momentos que definieron nuestro desarrollo",
  milestones: keyMilestones,
}

export const achievementsData = {
  title: "Logros Principales",
  subtitle: "El impacto concreto de nuestro trabajo comunitario",
  achievements: majorAchievements,
}

export const erasData = {
  title: "Etapas de Nuestra Historia",
  subtitle: "La evolución del partido desde su fundación hasta hoy",
  eras: historicalEras,
}

export const legacyData = {
  title: "Nuestro Legado y Futuro",
  subtitle: "Lo que construimos y hacia dónde vamos",
  content:
    "A lo largo de estos años, Fuerza del Pueblo en Verón-Punta Cana ha construido una trayectoria de servicio genuino, compromiso comunitario y trabajo constante por el desarrollo de nuestra región. Miramos hacia el futuro con la convicción de que lo mejor está por venir, comprometidos con seguir sirviendo a nuestra comunidad con honestidad, transparencia y dedicación.",
  items: legacyItems,
}

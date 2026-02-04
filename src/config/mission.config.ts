// config/mission.config.ts
import {
  MissionVisionHeroProps,
  MissionStatementProps,
  VisionStatementProps,
  CoreValue,
  CommitmentItem,
  GoalItem,
} from "../types/mission.types"

// Hero Section
export const missionVisionHeroData: MissionVisionHeroProps = {
  title: "Misión, Visión y Valores",
  subtitle: "Fuerza del Pueblo - Verón Punta Cana",
  description:
    "Conoce los principios fundamentales que guían nuestro trabajo, nuestra visión de futuro para Verón-Punta Cana, y los valores que definen cada una de nuestras acciones.",
  backgroundImage: {
    alt: "Fuerza del Pueblo community",
    asset: {
      url: "https://picsum.photos/1920/600?random=" + Math.random(),
      metadata: { dimensions: { width: 1920, height: 600 } },
    },
  },
}

// Mission Statement
export const missionData: MissionStatementProps = {
  title: "Nuestra Misión",
  statement:
    "Servir genuinamente al pueblo de Verón-Punta Cana, promoviendo el desarrollo integral de nuestra comunidad a través de políticas transparentes, equitativas e inclusivas que mejoren la calidad de vida de todos los ciudadanos.",
  description:
    "Trabajamos día a día para construir una comunidad más justa, próspera y participativa, donde cada voz sea escuchada y cada ciudadano tenga las oportunidades que merece para alcanzar su máximo potencial.",
  icon: "Target",
  image: {
    alt: "Fuerza del Pueblo community",
    asset: {
      url: "https://picsum.photos/1920/600?random=" + Math.random(),
      metadata: { dimensions: { width: 1920, height: 600 } },
    },
  },
}

// Vision Statement
export const visionData: VisionStatementProps = {
  title: "Nuestra Visión",
  statement:
    "Ser el referente político de confianza en Verón-Punta Cana, reconocidos por nuestra transparencia, eficacia y compromiso genuino con el bienestar de la comunidad, liderando la transformación hacia un municipio modelo de desarrollo sostenible, equidad social y participación ciudadana.",
  description:
    "Aspiramos a ver una Verón-Punta Cana donde todos los ciudadanos disfruten de servicios públicos de calidad, oportunidades económicas equitativas, infraestructura moderna, y una democracia participativa que ponga siempre los intereses del pueblo por encima de todo.",
  icon: "Eye",
  image: {
    alt: "Fuerza del Pueblo community",
    asset: {
      url: "https://picsum.photos/1920/600?random=" + Math.random(),
      metadata: { dimensions: { width: 1920, height: 600 } },
    },
  },
}

// Core Values (detailed version)
export const coreValues: CoreValue[] = [
  {
    id: "democracy",
    title: "Democracia Participativa",
    description:
      "Creemos firmemente en el poder de la participación ciudadana activa como motor del desarrollo y la toma de decisiones colectivas.",
    icon: "Users",
    details: [
      "Promovemos espacios de diálogo abierto y constante",
      "Facilitamos la participación directa en decisiones municipales",
      "Fortalecemos las organizaciones comunitarias",
      "Garantizamos transparencia en todos los procesos",
    ],
  },
  {
    id: "equity",
    title: "Equidad y Justicia Social",
    description:
      "Trabajamos incansablemente por la justicia social y la igualdad de oportunidades para todos los ciudadanos, sin excepción.",
    icon: "Scale",
    details: [
      "Combatimos la desigualdad en todas sus formas",
      "Priorizamos a los sectores más vulnerables",
      "Promovemos igualdad de oportunidades económicas",
      "Defendemos los derechos de todos por igual",
    ],
  },
  {
    id: "development",
    title: "Desarrollo Sostenible",
    description:
      "Impulsamos un crecimiento económico que beneficie a todos, respetando el medio ambiente y pensando en las futuras generaciones.",
    icon: "TrendingUp",
    details: [
      "Equilibramos desarrollo económico y cuidado ambiental",
      "Apoyamos el emprendimiento local sostenible",
      "Invertimos en infraestructura moderna y verde",
      "Planificamos pensando en el largo plazo",
    ],
  },
  {
    id: "transparency",
    title: "Transparencia Total",
    description:
      "Rendimos cuentas constantemente y actuamos con honestidad absoluta en todas nuestras gestiones y decisiones.",
    icon: "Eye",
    details: [
      "Publicamos toda información de gestión pública",
      "Realizamos rendiciones de cuenta periódicas",
      "Mantenemos canales abiertos de comunicación",
      "Operamos con integridad en todo momento",
    ],
  },
]

// Community Commitments
export const communityCommitments: CommitmentItem[] = [
  {
    id: "education",
    title: "Educación de Calidad",
    description:
      "Garantizar acceso a educación de excelencia para todos los niños y jóvenes de nuestra comunidad, con infraestructura moderna y programas actualizados.",
    icon: "GraduationCap",
  },
  {
    id: "health",
    title: "Salud Accesible",
    description:
      "Asegurar servicios de salud accesibles y de calidad para todos los ciudadanos, con especial atención a la prevención y atención primaria.",
    icon: "Heart",
  },
  {
    id: "security",
    title: "Seguridad Ciudadana",
    description:
      "Trabajar por una comunidad segura donde las familias puedan vivir tranquilas, con programas de prevención y colaboración comunitaria.",
    icon: "Shield",
  },
  {
    id: "infrastructure",
    title: "Infraestructura Moderna",
    description:
      "Desarrollar y mantener calles, parques, espacios públicos y servicios básicos de calidad que mejoren la vida diaria de todos.",
    icon: "Building2",
  },
  {
    id: "employment",
    title: "Generación de Empleos",
    description:
      "Fomentar la creación de empleos dignos y bien remunerados, apoyando a emprendedores locales y atrayendo inversión responsable.",
    icon: "Briefcase",
  },
  {
    id: "environment",
    title: "Protección Ambiental",
    description:
      "Preservar nuestros recursos naturales y promover prácticas sostenibles que garanticen un ambiente sano para las futuras generaciones.",
    icon: "Leaf",
  },
]

// Strategic Goals
export const strategicGoals: GoalItem[] = [
  {
    id: "short-term-1",
    category: "Corto Plazo (2026)",
    title: "Fortalecer la Participación Ciudadana",
    description:
      "Establecer mecanismos permanentes de consulta y participación ciudadana en la toma de decisiones municipales.",
    icon: "Users",
  },
  {
    id: "short-term-2",
    category: "Corto Plazo (2026)",
    title: "Mejorar Servicios Básicos",
    description:
      "Optimizar la recolección de basura, el alumbrado público y el mantenimiento de calles en todos los sectores.",
    icon: "Wrench",
  },
  {
    id: "medium-term-1",
    category: "Mediano Plazo (2026-2028)",
    title: "Desarrollo Económico Local",
    description:
      "Implementar programas de apoyo a pequeños empresarios y crear un centro de desarrollo de emprendedores.",
    icon: "TrendingUp",
  },
  {
    id: "medium-term-2",
    category: "Mediano Plazo (2026-2028)",
    title: "Modernización Educativa",
    description:
      "Equipar las escuelas con tecnología moderna y capacitar a docentes en nuevas metodologías de enseñanza.",
    icon: "BookOpen",
  },
  {
    id: "long-term-1",
    category: "Largo Plazo (2028-2032)",
    title: "Verón-Punta Cana Sostenible",
    description:
      "Transformar el municipio en un modelo de desarrollo sostenible con energías limpias y manejo responsable de recursos.",
    icon: "Globe",
  },
  {
    id: "long-term-2",
    category: "Largo Plazo (2028-2032)",
    title: "Ciudad Inteligente",
    description:
      "Implementar tecnologías de ciudad inteligente para mejorar servicios, seguridad y calidad de vida de los ciudadanos.",
    icon: "Smartphone",
  },
]

// Strategic Pillars
export const strategicPillars = [
  {
    id: "pillar-1",
    title: "Desarrollo Humano",
    description:
      "Invertir en las personas es invertir en el futuro de nuestra comunidad.",
    icon: "Users",
    keyPoints: [
      "Educación de calidad para todos",
      "Servicios de salud accesibles",
      "Programas de capacitación laboral",
      "Desarrollo de talento local",
    ],
  },
  {
    id: "pillar-2",
    title: "Crecimiento Económico",
    description:
      "Promover un desarrollo económico que beneficie a todos los sectores de la comunidad.",
    icon: "DollarSign",
    keyPoints: [
      "Apoyo a pequeños empresarios",
      "Atracción de inversión responsable",
      "Creación de empleos dignos",
      "Fortalecimiento del turismo local",
    ],
  },
  {
    id: "pillar-3",
    title: "Sostenibilidad Ambiental",
    description:
      "Garantizar un desarrollo que respete y preserve nuestro medio ambiente.",
    icon: "Leaf",
    keyPoints: [
      "Protección de recursos naturales",
      "Energías limpias y renovables",
      "Gestión responsable de residuos",
      "Educación ambiental comunitaria",
    ],
  },
  {
    id: "pillar-4",
    title: "Gobernanza Participativa",
    description:
      "Construir una democracia local verdaderamente participativa y transparente.",
    icon: "Building",
    keyPoints: [
      "Consultas ciudadanas regulares",
      "Presupuesto participativo",
      "Rendición de cuentas constante",
      "Acceso a información pública",
    ],
  },
]

// Compiled data exports
export const coreValuesData = {
  title: "Nuestros Valores Fundamentales",
  subtitle:
    "Los principios que definen quiénes somos y cómo trabajamos cada día",
  values: coreValues,
}

export const commitmentsData = {
  title: "Nuestros Compromisos con la Comunidad",
  subtitle: "Las áreas prioritarias donde enfocamos nuestro trabajo y esfuerzo",
  commitments: communityCommitments,
}

export const goalsData = {
  title: "Nuestras Metas Estratégicas",
  subtitle:
    "Objetivos claros y medibles para el desarrollo de Verón-Punta Cana",
  goals: strategicGoals,
}

export const pillarsData = {
  title: "Pilares Estratégicos",
  subtitle: "Los cuatro pilares fundamentales de nuestro plan de desarrollo",
  pillars: strategicPillars,
}

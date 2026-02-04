// config/candidates.config.ts
import {
  CandidatesHeroProps,
  CandidateProfile,
  CampaignProposal,
  CampaignPriority,
  VisionItem,
  MediaAppearance,
} from "../types/candidates.types"

// Hero Section
export const candidatesHeroData: CandidatesHeroProps = {
  title: "Futuros Candidatos",
  subtitle: "Fuerza del Pueblo - Verón Punta Cana",
  description:
    "Conoce a los líderes que aspiran a servir a Verón-Punta Cana en las próximas elecciones municipales. Comprometidos con el desarrollo, la transparencia y el bienestar de nuestra comunidad.",
}

// Coming Soon Configuration
export const comingSoonConfig = {
  enabled: false, // Set to true to show "coming soon" message instead of candidates
  title: "Próximamente",
  message:
    "Nuestros candidatos para las elecciones municipales de 2026 serán anunciados próximamente. Estamos en proceso de consultas internas y con la comunidad para presentar el mejor equipo de liderazgo para Verón-Punta Cana.",
  expectedDate: "Primer trimestre 2026",
  notifyEnabled: true,
}

// Mayor Candidate
export const mayorCandidate: CandidateProfile = {
  id: "mayor-1",
  name: "Carlos Méndez Vargas",
  position: "Candidato a Alcalde",
  slogan: "Juntos construimos el Verón-Punta Cana que merecemos",
  bio: "Líder comunitario con más de 15 años de experiencia en desarrollo social y gestión pública. Nacido y criado en Verón, ha dedicado su vida a trabajar por el mejoramiento de nuestra comunidad. Con un profundo conocimiento de las necesidades locales y un compromiso inquebrantable con la transparencia y el servicio público.",
  education: [
    "Maestría en Administración Pública - UASD, 2015",
    "Licenciatura en Economía - PUCMM, 2008",
    "Diplomado en Gestión Municipal - FEDOMU, 2012",
  ],
  experience: [
    "Director de Desarrollo Comunitario, Verón-Punta Cana (2018-2024)",
    "Coordinador de Proyectos Sociales, ONG Comunidad Activa (2012-2018)",
    "Consultor en Desarrollo Local, Varios Municipios (2008-2012)",
    "Profesor Universitario de Economía Local, UASD (2016-Presente)",
  ],
  achievements: [
    "Implementó programa de becas que benefició a 200+ estudiantes",
    "Coordinó construcción de 3 centros comunitarios en sectores vulnerables",
    "Lideró alianza público-privada para capacitación de 500+ jóvenes",
    "Reconocido como 'Líder Comunitario del Año' por CONAPE en 2020",
  ],
  priorities: [
    "Educación de calidad",
    "Desarrollo económico local",
    "Transparencia total",
    "Servicios públicos eficientes",
    "Medio ambiente sostenible",
  ],
  image: {
    alt: "Carlos Méndez Vargas",
    asset: {
      url: "https://picsum.photos/800/800?random=1",
      metadata: { dimensions: { width: 800, height: 800 } },
    },
  },
  socialMedia: {
    facebook: "https://facebook.com/carlosmendezalcalde",
    twitter: "https://twitter.com/carlosmendezfp",
    instagram: "https://instagram.com/carlosmendezveron",
    linkedin: "https://linkedin.com/in/carlosmendezvargas",
  },
  campaignWebsite: "https://carlosmendezveron.com",
  contactEmail: "carlos.mendez@fuerzadelpueblo.do",
}

// Council Member Candidates
export const councilCandidates: CandidateProfile[] = [
  {
    id: "regidor-1",
    name: "María Fernández Santos",
    position: "Candidata a Regidora",
    slogan: "Voz de las mujeres, fuerza de la comunidad",
    bio: "Empresaria local y activista por los derechos de las mujeres. Fundadora de la Asociación de Mujeres Emprendedoras de Verón. Comprometida con la equidad de género y el desarrollo económico inclusivo.",
    education: [
      "Licenciatura en Trabajo Social - UASD, 2010",
      "Diplomado en Liderazgo Femenino - INTEC, 2018",
    ],
    experience: [
      "Presidenta, Asociación de Mujeres Emprendedoras (2015-Presente)",
      "Coordinadora de Programas Sociales, Ayuntamiento (2012-2015)",
      "Trabajadora Social, Hospital Regional (2010-2012)",
    ],
    achievements: [
      "Fundó cooperativa que apoya a 80+ mujeres emprendedoras",
      "Organizó 15 ferias de empleo femenino en la comunidad",
      "Implementó programa de microcréditos para mujeres de escasos recursos",
    ],
    priorities: [
      "Equidad de género",
      "Apoyo a emprendedoras",
      "Programas sociales",
      "Educación",
    ],
    contactEmail: "maria.fernandez@fuerzadelpueblo.do",
    socialMedia: {
      facebook: "https://facebook.com/mariafernandezveron",
      instagram: "https://instagram.com/mariafernandezfp",
    },
    image: {
      alt: "María Fernández Santos",
      asset: {
        url: "https://picsum.photos/800/800?random=2",
        metadata: { dimensions: { width: 800, height: 800 } },
      },
    },
  },
  {
    id: "regidor-2",
    name: "Roberto Jiménez Pérez",
    position: "Candidato a Regidor",
    slogan: "Juventud con experiencia, compromiso con el futuro",
    bio: "Ingeniero civil con experiencia en gestión de proyectos de infraestructura. Líder juvenil reconocido por su trabajo en desarrollo comunitario y programas para jóvenes.",
    education: [
      "Ingeniería Civil - UNPHU, 2012",
      "Maestría en Gestión de Proyectos - UNIBE, 2016",
    ],
    experience: [
      "Gerente de Proyectos, Constructora del Este (2016-2024)",
      "Coordinador Juvenil, Fuerza del Pueblo Verón (2020-Presente)",
      "Supervisor de Obras, Ministerio de Obras Públicas (2012-2016)",
    ],
    achievements: [
      "Supervisó construcción de 10+ proyectos de infraestructura local",
      "Organizó programa de pasantías para jóvenes estudiantes de ingeniería",
      "Lideró equipo que ganó licitación de RD$50MM para proyectos municipales",
    ],
    priorities: [
      "Infraestructura moderna",
      "Oportunidades para jóvenes",
      "Desarrollo urbano sostenible",
      "Tecnología e innovación",
    ],
    contactEmail: "roberto.jimenez@fuerzadelpueblo.do",
    socialMedia: {
      facebook: "https://facebook.com/robertojimenezfp",
      twitter: "https://twitter.com/rjimenezingenieria",
      linkedin: "https://linkedin.com/in/robertojimenezperez",
    },
  },
  {
    id: "regidor-3",
    name: "Ana Lucía Martínez",
    position: "Candidata a Regidora",
    slogan: "Educación para todos, futuro para Verón",
    bio: "Educadora con 20 años de experiencia. Directora de escuela pública y defensora incansable de la educación de calidad. Reconocida por transformar escuelas en centros de excelencia académica.",
    education: [
      "Maestría en Educación - Universidad Autónoma, 2008",
      "Licenciatura en Pedagogía - UASD, 2004",
      "Especialización en Gestión Educativa - ISFODOSU, 2010",
    ],
    experience: [
      "Directora, Escuela Primaria Los Corales (2015-Presente)",
      "Coordinadora Académica, Liceo Verón (2010-2015)",
      "Profesora de Primaria (2004-2010)",
    ],
    achievements: [
      "Aumentó tasa de graduación de su escuela de 65% a 95%",
      "Implementó programa de lectura que benefició a 500+ niños",
      "Obtuvo reconocimiento nacional como 'Directora del Año' 2022",
      "Creó programa de apoyo escolar después de clases",
    ],
    priorities: [
      "Educación de excelencia",
      "Infraestructura escolar",
      "Capacitación docente",
      "Programas de becas",
    ],
    contactEmail: "analucia.martinez@fuerzadelpueblo.do",
    socialMedia: {
      facebook: "https://facebook.com/analuciamartinezfp",
      instagram: "https://instagram.com/analuciaeducadora",
    },
  },
  {
    id: "regidor-4",
    name: "Pedro Sánchez Rodríguez",
    position: "Candidato a Regidor",
    slogan: "Del turismo para la comunidad",
    bio: "Profesional del sector turístico con experiencia en gestión hotelera y desarrollo comunitario. Comprometido con que los beneficios del turismo lleguen a todos los residentes de Verón-Punta Cana.",
    education: [
      "Licenciatura en Administración Hotelera - UTESA, 2005",
      "Diplomado en Turismo Sostenible - UNWTO, 2015",
    ],
    experience: [
      "Gerente de Relaciones Comunitarias, Resort Punta Cana (2015-2024)",
      "Coordinador de Capacitación Turística, INFOTEP (2010-2015)",
      "Supervisor de Front Desk, Hotel Bávaro (2005-2010)",
    ],
    achievements: [
      "Desarrolló programa que empleó a 200+ residentes locales en hoteles",
      "Creó alianza hotel-comunidad para capacitación gratuita",
      "Promovió 50+ negocios locales ante turistas internacionales",
      "Implementó programa de turismo comunitario en 3 sectores",
    ],
    priorities: [
      "Empleos turísticos para locales",
      "Capacitación técnica",
      "Turismo sostenible",
      "Desarrollo de negocios locales",
    ],
    contactEmail: "pedro.sanchez@fuerzadelpueblo.do",
    socialMedia: {
      facebook: "https://facebook.com/pedrosanchezfp",
      linkedin: "https://linkedin.com/in/pedrosanchezturismo",
    },
  },
  {
    id: "regidor-5",
    name: "Luisa Reyes Jiménez",
    position: "Candidata a Regidora",
    slogan: "Salud y bienestar para todos",
    bio: "Médica familiar y activista de salud comunitaria. Ha dedicado su carrera a mejorar el acceso a servicios de salud en sectores vulnerables. Fundadora de clínicas móviles que atienden comunidades remotas.",
    education: [
      "Doctora en Medicina - UASD, 2008",
      "Especialidad en Medicina Familiar - UASD, 2012",
      "Diplomado en Salud Pública - OPS/OMS, 2015",
    ],
    experience: [
      "Directora, Clínica Comunitaria Verón (2018-Presente)",
      "Médica de Familia, Centro de Salud Friusa (2012-2018)",
      "Médico General, Hospital Regional (2008-2012)",
    ],
    achievements: [
      "Atendió a más de 5,000 pacientes en clínicas móviles gratuitas",
      "Implementó programa de medicina preventiva en 10 sectores",
      "Organizó 20+ jornadas de salud gratuitas",
      "Redujo tasa de mortalidad infantil en su sector en 30%",
    ],
    priorities: [
      "Salud accesible",
      "Medicina preventiva",
      "Clínicas en todos los sectores",
      "Programas materno-infantiles",
    ],
    contactEmail: "luisa.reyes@fuerzadelpueblo.do",
    socialMedia: {
      facebook: "https://facebook.com/luisareyesfp",
      instagram: "https://instagram.com/dralreyes",
    },
  },
  {
    id: "regidor-6",
    name: "Miguel Ángel Torres",
    position: "Candidato a Regidor",
    slogan: "Medio ambiente hoy, futuro mañana",
    bio: "Ambientalista y líder comunitario dedicado a la protección de recursos naturales. Coordinador de múltiples campañas de limpieza y reforestación. Comprometido con un desarrollo sostenible que preserve nuestras playas y áreas verdes.",
    education: [
      "Licenciatura en Biología - UASD, 2010",
      "Maestría en Gestión Ambiental - ISA, 2014",
    ],
    experience: [
      "Director, ONG Verón Verde (2016-Presente)",
      "Coordinador Ambiental, Ministerio de Medio Ambiente (2014-2016)",
      "Educador Ambiental, Escuelas Públicas (2010-2014)",
    ],
    achievements: [
      "Lideró reforestación de 10 hectáreas en zona costera",
      "Organizó 30+ jornadas de limpieza con 2,000+ voluntarios",
      "Implementó programa de reciclaje en 15 escuelas",
      "Salvó 5 hectáreas de manglar de desarrollo no sostenible",
    ],
    priorities: [
      "Protección ambiental",
      "Playas limpias",
      "Reciclaje municipal",
      "Educación ambiental",
    ],
    contactEmail: "miguel.torres@fuerzadelpueblo.do",
    socialMedia: {
      facebook: "https://facebook.com/migueltorresverde",
      instagram: "https://instagram.com/veronverde",
      twitter: "https://twitter.com/matorresambiente",
    },
  },
]

// Campaign Proposals
export const campaignProposals: CampaignProposal[] = [
  {
    id: "education",
    category: "Educación",
    title: "Educación de Excelencia para Todos",
    description:
      "Mejoraremos la infraestructura educativa y garantizaremos acceso a educación de calidad en todos los sectores.",
    icon: "GraduationCap",
    objectives: [
      "Renovación de escuelas y equipamiento tecnológico",
      "Programa de capacitación continua para docentes",
      "Becas para estudiantes de escasos recursos",
      "Centros de apoyo escolar en todos los sectores",
    ],
  },
  {
    id: "health",
    category: "Salud",
    title: "Salud Accesible y de Calidad",
    description:
      "Garantizaremos servicios de salud accesibles con énfasis en prevención y atención primaria.",
    icon: "Heart",
    objectives: [
      "Centros de salud en sectores desatendidos",
      "Programas de medicina preventiva",
      "Ambulancias disponibles 24/7",
      "Farmacias del pueblo con medicamentos subsidiados",
    ],
  },
  {
    id: "infrastructure",
    category: "Infraestructura",
    title: "Infraestructura Moderna y Sostenible",
    description:
      "Desarrollaremos infraestructura que mejore la calidad de vida de todos los ciudadanos.",
    icon: "Building2",
    objectives: [
      "Pavimentación de calles en todos los sectores",
      "Alumbrado público con energía solar",
      "Parques y áreas recreativas modernas",
      "Sistema de drenaje pluvial eficiente",
    ],
  },
  {
    id: "employment",
    category: "Empleo",
    title: "Generación de Empleos Dignos",
    description:
      "Impulsaremos el desarrollo económico local creando oportunidades de empleo bien remunerado.",
    icon: "Briefcase",
    objectives: [
      "Centro de desarrollo empresarial",
      "Capacitación técnica gratuita",
      "Apoyo a pequeños y medianos empresarios",
      "Alianzas con sector turístico para empleos locales",
    ],
  },
  {
    id: "security",
    category: "Seguridad",
    title: "Comunidad Segura y Tranquila",
    description:
      "Trabajaremos por una comunidad donde las familias vivan seguras a través de prevención y colaboración.",
    icon: "Shield",
    objectives: [
      "Cámaras de seguridad en puntos estratégicos",
      "Programas de prevención comunitaria",
      "Alumbrado público en todas las áreas",
      "Patrullaje coordinado con autoridades",
    ],
  },
  {
    id: "environment",
    category: "Medio Ambiente",
    title: "Desarrollo Sostenible",
    description:
      "Protegeremos nuestro medio ambiente mientras promovemos desarrollo económico responsable.",
    icon: "Leaf",
    objectives: [
      "Programa de reciclaje municipal",
      "Protección de playas y áreas naturales",
      "Energías renovables en edificios públicos",
      "Educación ambiental en escuelas",
    ],
  },
  {
    id: "youth",
    category: "Juventud",
    title: "Oportunidades para la Juventud",
    description:
      "Crearemos espacios y programas para que los jóvenes desarrollen su potencial.",
    icon: "Users",
    objectives: [
      "Centros de formación técnica y profesional",
      "Programas deportivos y culturales",
      "Becas para educación superior",
      "Espacios de emprendimiento juvenil",
    ],
  },
  {
    id: "tourism",
    category: "Turismo",
    title: "Turismo Sostenible e Inclusivo",
    description:
      "Maximizaremos los beneficios del turismo para todos los residentes de Verón-Punta Cana.",
    icon: "Palmtree",
    objectives: [
      "Capacitación turística para residentes",
      "Promoción de negocios locales ante turistas",
      "Desarrollo de turismo comunitario",
      "Protección de recursos naturales turísticos",
    ],
  },
]

// Campaign Priorities
export const campaignPriorities: CampaignPriority[] = [
  {
    id: "priority-1",
    title: "Servicios Básicos de Calidad",
    description:
      "En los primeros 100 días, mejoraremos los servicios básicos que afectan la vida diaria de todos.",
    icon: "Zap",
    actions: [
      "Optimizar recolección de basura",
      "Reparar calles en mal estado",
      "Mejorar suministro de agua",
      "Ampliar alumbrado público",
    ],
  },
  {
    id: "priority-2",
    title: "Transparencia Total",
    description:
      "Implementaremos mecanismos de transparencia y participación ciudadana desde el primer día.",
    icon: "Eye",
    actions: [
      "Portal de transparencia en línea",
      "Asambleas comunitarias mensuales",
      "Presupuesto participativo",
      "Rendición de cuentas trimestral",
    ],
  },
  {
    id: "priority-3",
    title: "Desarrollo Económico Local",
    description:
      "Impulsaremos el crecimiento económico que beneficie a todos los sectores de la comunidad.",
    icon: "TrendingUp",
    actions: [
      "Facilitar trámites para nuevos negocios",
      "Capacitación empresarial gratuita",
      "Ferias de empleo trimestrales",
      "Apoyo a emprendedores locales",
    ],
  },
  {
    id: "priority-4",
    title: "Atención a Sectores Vulnerables",
    description:
      "Priorizaremos el apoyo a las familias y sectores que más lo necesitan.",
    icon: "Heart",
    actions: [
      "Programas de apoyo alimentario",
      "Asistencia médica gratuita",
      "Becas para niños de escasos recursos",
      "Centros comunitarios de apoyo",
    ],
  },
]

// Campaign Vision
export const campaignVision: VisionItem[] = [
  {
    id: "vision-1",
    title: "Verón-Punta Cana Próspero",
    description:
      "Una comunidad con oportunidades económicas para todos, donde el desarrollo turístico beneficie directamente a los residentes locales.",
    icon: "TrendingUp",
  },
  {
    id: "vision-2",
    title: "Comunidad Educada",
    description:
      "Niños y jóvenes con acceso a educación de calidad que los prepare para el futuro, con escuelas modernas y programas innovadores.",
    icon: "GraduationCap",
  },
  {
    id: "vision-3",
    title: "Municipio Sostenible",
    description:
      "Un municipio que equilibra desarrollo económico con protección ambiental, preservando nuestros recursos naturales para futuras generaciones.",
    icon: "Leaf",
  },
  {
    id: "vision-4",
    title: "Gobierno Transparente",
    description:
      "Una administración municipal que rinde cuentas, escucha a la ciudadanía y toma decisiones basadas en las necesidades reales de la comunidad.",
    icon: "Users",
  },
]

// Media Appearances
export const mediaAppearances: MediaAppearance[] = [
  {
    id: "media-1",
    title: "Entrevista en Telenoticias",
    date: "2026-01-15",
    media: "Telenoticias Canal 11",
    type: "interview",
    url: "https://youtube.com/watch?v=example1",
    description:
      "Carlos Méndez presenta su plan de gobierno y responde preguntas sobre desarrollo económico y transparencia.",
  },
  {
    id: "media-2",
    title: "Debate Candidatos Municipales",
    date: "2026-01-20",
    media: "CDN Noticias",
    type: "debate",
    url: "https://youtube.com/watch?v=example2",
    description:
      "Debate entre todos los candidatos a alcalde sobre las principales problemáticas del municipio.",
  },
  {
    id: "media-3",
    title: "Rueda de Prensa - Plan de Educación",
    date: "2026-01-25",
    media: "Diario Libre",
    type: "press",
    description:
      "Presentación detallada del plan de mejora educativa para Verón-Punta Cana.",
  },
]

// Compiled exports
export const mayorCandidateData = {
  title: "Candidato a Alcalde",
  subtitle: "Liderando el cambio para Verón-Punta Cana",
  candidate: mayorCandidate,
  comingSoon: comingSoonConfig.enabled,
}

export const councilCandidatesData = {
  title: "Candidatos a Regidores",
  subtitle: "Un equipo comprometido con el desarrollo municipal",
  candidates: councilCandidates,
  comingSoon: comingSoonConfig.enabled,
}

export const proposalsData = {
  title: "Nuestras Propuestas",
  subtitle: "Compromisos concretos para el desarrollo de Verón-Punta Cana",
  proposals: campaignProposals,
}

export const prioritiesData = {
  title: "Prioridades de Gestión",
  subtitle: "Las acciones urgentes que implementaremos desde el primer día",
  priorities: campaignPriorities,
}

export const visionData = {
  title: "Nuestra Visión para Verón-Punta Cana",
  subtitle: "El futuro que queremos construir juntos",
  content:
    "Aspiramos a un Verón-Punta Cana donde cada ciudadano tenga acceso a oportunidades de desarrollo, servicios públicos de calidad, y participe activamente en las decisiones que afectan su comunidad. Un municipio modelo de desarrollo sostenible, equidad social y buen gobierno.",
  items: campaignVision,
}

export const mediaData = {
  title: "Apariciones en Medios",
  subtitle: "Conoce nuestras propuestas a través de entrevistas y debates",
  appearances: mediaAppearances,
}

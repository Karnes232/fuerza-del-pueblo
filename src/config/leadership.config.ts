// config/leadership.config.ts
import {
  LeadershipHeroProps,
  LeaderProfile,
  OrganizationalLevel,
  DepartmentInfo,
  Wing,
  SectorCoordinator,
} from "../types/leadership.types"

// Hero Section
// export const leadershipHeroData: LeadershipHeroProps = {
//   title: "Liderazgo y Estructura",
//   subtitle: "Fuerza del Pueblo - Verón Punta Cana",
//   description:
//     "Conoce al equipo de líderes comprometidos que trabajan día a día por el desarrollo de nuestra comunidad y la estructura organizativa que nos permite servir eficientemente.",
//   backgroundImage: {
//     alt: "Fuerza del Pueblo community",
//     asset: {
//       url: "https://picsum.photos/1920/600?random=" + Math.random(),
//       metadata: { dimensions: { width: 1920, height: 600 } },
//     },
//   },
// }

// // Main Leadership Team
// export const mainLeaders: LeaderProfile[] = [
//   {
//     id: "president",
//     name: "Por Designar",
//     position: "Presidente Municipal",
//     bio: "Líder principal del partido a nivel municipal, responsable de la dirección estratégica y la representación del movimiento en Verón-Punta Cana.",
//     responsibilities: [
//       "Dirigir la estrategia política municipal",
//       "Representar al partido ante autoridades e instituciones",
//       "Coordinar la dirección ejecutiva",
//       "Supervisar el cumplimiento de objetivos",
//     ],
//     image: {
//       alt: "Presidente Municipal",
//       asset: {
//         url: "https://picsum.photos/400/400?random=1",
//         metadata: { dimensions: { width: 400, height: 400 } },
//       },
//     },
//   },
//   {
//     id: "vicepresident-1",
//     name: "Por Designar",
//     position: "Primer Vicepresidente",
//     bio: "Apoya al presidente en la gestión estratégica y asume funciones de liderazgo en su ausencia.",
//     responsibilities: [
//       "Asistir al presidente en decisiones estratégicas",
//       "Supervisar programas y proyectos clave",
//       "Coordinar con direcciones departamentales",
//       "Representar al partido en eventos oficiales",
//     ],
//   },
//   {
//     id: "vicepresident-2",
//     name: "Por Designar",
//     position: "Segundo Vicepresidente",
//     bio: "Colabora en la dirección del partido y coordina iniciativas comunitarias específicas.",
//     responsibilities: [
//       "Supervisar comisiones de trabajo",
//       "Coordinar actividades comunitarias",
//       "Apoyar en la gestión administrativa",
//       "Facilitar comunicación entre estructuras",
//     ],
//     image: {
//       alt: "Segundo Vicepresidente",
//       asset: {
//         url: "https://picsum.photos/400/400?random=2",
//         metadata: { dimensions: { width: 400, height: 400 } },
//       },
//     },
//   },
//   {
//     id: "secretary",
//     name: "Por Designar",
//     position: "Secretario General",
//     bio: "Responsable de la gestión administrativa del partido y la documentación oficial.",
//     responsibilities: [
//       "Administrar la documentación del partido",
//       "Coordinar reuniones y asambleas",
//       "Mantener registros de militantes",
//       "Gestionar comunicaciones internas",
//     ],
//   },
//   {
//     id: "treasurer",
//     name: "Por Designar",
//     position: "Tesorero",
//     bio: "Administra los recursos financieros del partido con transparencia y eficiencia.",
//     responsibilities: [
//       "Gestionar finanzas del partido",
//       "Preparar informes financieros",
//       "Supervisar presupuestos de actividades",
//       "Garantizar transparencia en el manejo de fondos",
//     ],
//   },
//   {
//     id: "spokesperson",
//     name: "Por Designar",
//     position: "Vocero Oficial",
//     bio: "Encargado de las comunicaciones públicas y relaciones con medios de comunicación.",
//     responsibilities: [
//       "Gestionar comunicaciones públicas",
//       "Relacionarse con medios de comunicación",
//       "Preparar comunicados oficiales",
//       "Coordinar estrategia de redes sociales",
//     ],
//   },
// ]

// Organizational Structure Levels
export const organizationalLevels: OrganizationalLevel[] = [
  {
    id: "executive",
    title: "Dirección Ejecutiva",
    description:
      "Máximo órgano de dirección del partido a nivel municipal, responsable de las decisiones estratégicas y políticas.",
    icon: "Crown",
    positions: [
      "Presidente Municipal",
      "Primer Vicepresidente",
      "Segundo Vicepresidente",
      "Secretario General",
      "Tesorero",
      "Vocero Oficial",
    ],
  },
  {
    id: "management",
    title: "Dirección de Gestión",
    description:
      "Encargada de la implementación de políticas y la coordinación de actividades operativas del partido.",
    icon: "Users",
    positions: [
      "Director de Organización",
      "Director de Finanzas",
      "Director de Comunicaciones",
      "Director de Movilización",
    ],
  },
  {
    id: "departments",
    title: "Departamentos Especializados",
    description:
      "Áreas temáticas que desarrollan propuestas y programas en sectores específicos.",
    icon: "Briefcase",
    positions: [
      "Departamento de Educación",
      "Departamento de Salud",
      "Departamento de Desarrollo Económico",
      "Departamento de Medio Ambiente",
      "Departamento de Juventud",
      "Departamento de Asuntos de la Mujer",
    ],
  },
  {
    id: "sectors",
    title: "Coordinaciones Sectoriales",
    description:
      "Representantes del partido en diferentes sectores geográficos de Verón-Punta Cana.",
    icon: "MapPin",
    positions: [
      "Coordinadores de Sector",
      "Coordinadores de Barrio",
      "Delegados Zonales",
    ],
  },
  {
    id: "base",
    title: "Base Militante",
    description:
      "Militantes activos y simpatizantes que participan en las actividades del partido y constituyen su fuerza fundamental.",
    icon: "Users",
    positions: [
      "Militantes Activos",
      "Simpatizantes",
      "Voluntarios",
      "Comités de Base",
    ],
  },
]

// Departments
export const departments: DepartmentInfo[] = [
  {
    id: "education",
    name: "Departamento de Educación",
    description:
      "Desarrolla propuestas y programas para mejorar la calidad educativa en Verón-Punta Cana.",
    icon: "GraduationCap",
    coordinator: "Por Designar",
    responsibilities: [
      "Elaborar propuestas educativas",
      "Coordinar con centros educativos",
      "Organizar talleres de formación",
      "Monitorear calidad educativa local",
    ],
  },
  {
    id: "health",
    name: "Departamento de Salud",
    description:
      "Trabaja por el acceso universal a servicios de salud de calidad para todos los ciudadanos.",
    icon: "Heart",
    coordinator: "Por Designar",
    responsibilities: [
      "Proponer políticas de salud pública",
      "Coordinar jornadas de salud comunitaria",
      "Monitorear servicios de salud local",
      "Promover prevención y salud preventiva",
    ],
  },
  {
    id: "economic-development",
    name: "Departamento de Desarrollo Económico",
    description:
      "Impulsa el crecimiento económico local y el apoyo a emprendedores y pequeños empresarios.",
    icon: "TrendingUp",
    coordinator: "Por Designar",
    responsibilities: [
      "Diseñar programas de apoyo empresarial",
      "Promover generación de empleos",
      "Coordinar con sector privado",
      "Impulsar desarrollo turístico sostenible",
    ],
  },
  {
    id: "environment",
    name: "Departamento de Medio Ambiente",
    description:
      "Promueve la sostenibilidad ambiental y la protección de recursos naturales.",
    icon: "Leaf",
    coordinator: "Por Designar",
    responsibilities: [
      "Desarrollar políticas ambientales",
      "Organizar jornadas de limpieza",
      "Promover educación ambiental",
      "Monitorear impacto ambiental local",
    ],
  },
  {
    id: "youth",
    name: "Departamento de Juventud",
    description:
      "Enfocado en las necesidades, aspiraciones y desarrollo de los jóvenes de la comunidad.",
    icon: "Users",
    coordinator: "Por Designar",
    responsibilities: [
      "Organizar actividades para jóvenes",
      "Promover liderazgo juvenil",
      "Desarrollar programas de capacitación",
      "Representar intereses de la juventud",
    ],
  },
  {
    id: "womens-affairs",
    name: "Departamento de Asuntos de la Mujer",
    description:
      "Defiende los derechos de las mujeres y promueve la equidad de género en todos los ámbitos.",
    icon: "Users",
    coordinator: "Por Designar",
    responsibilities: [
      "Promover equidad de género",
      "Organizar talleres de empoderamiento",
      "Defender derechos de las mujeres",
      "Impulsar participación política femenina",
    ],
  },
]

// Wings (Youth and Women)
export const partyWings: Wing[] = [
  {
    id: "youth-wing",
    name: "Juventud Fuerza del Pueblo",
    description:
      "Organización juvenil del partido que prepara a la próxima generación de líderes políticos comprometidos con el desarrollo de Verón-Punta Cana.",
    icon: "Users",
    coordinator: "Por Designar",
    focus: [
      "Formación política de jóvenes",
      "Organización de actividades juveniles",
      "Representación en decisiones del partido",
      "Desarrollo de propuestas desde perspectiva juvenil",
      "Participación en campañas y movilizaciones",
    ],
  },
  {
    id: "women-wing",
    name: "Mujeres Fuerza del Pueblo",
    description:
      "Organización que agrupa y empodera a las mujeres del partido, promoviendo su liderazgo y participación activa en la política local.",
    icon: "Users",
    coordinator: "Por Designar",
    focus: [
      "Empoderamiento político de mujeres",
      "Defensa de derechos y equidad de género",
      "Formación en liderazgo femenino",
      "Organización de redes de apoyo",
      "Participación en toma de decisiones",
    ],
  },
]

// Sector Coordinators (examples)
export const sectorCoordinators: SectorCoordinator[] = [
  {
    id: "sector-1",
    sector: "Verón Centro",
    coordinator: "Por Designar",
    description:
      "Coordina las actividades del partido en el sector central de Verón.",
  },
  {
    id: "sector-2",
    sector: "Punta Cana",
    coordinator: "Por Designar",
    description: "Responsable de la organización en la zona de Punta Cana.",
  },
  {
    id: "sector-3",
    sector: "Bávaro",
    coordinator: "Por Designar",
    description: "Lidera las iniciativas del partido en Bávaro.",
  },
  {
    id: "sector-4",
    sector: "El Cortecito",
    coordinator: "Por Designar",
    description: "Coordina la base militante en El Cortecito.",
  },
  {
    id: "sector-5",
    sector: "Friusa",
    coordinator: "Por Designar",
    description: "Encargado de la organización en el sector de Friusa.",
  },
  {
    id: "sector-6",
    sector: "Los Corales",
    coordinator: "Por Designar",
    description: "Coordina actividades en Los Corales.",
  },
]

// // Compiled data exports
// export const leadershipTeamData = {
//   title: "Nuestro Equipo de Liderazgo",
//   subtitle:
//     "Dirigentes comprometidos con el servicio y el desarrollo de Verón-Punta Cana",
//   leaders: mainLeaders,
// }

export const organizationalStructureData = {
  title: "Estructura Organizativa",
  subtitle: "Organización eficiente al servicio de la comunidad",
  levels: organizationalLevels,
}

export const departmentsData = {
  title: "Departamentos Especializados",
  subtitle: "Áreas temáticas que desarrollan propuestas y soluciones",
  departments: departments,
}

export const wingsData = {
  title: "Alas del Partido",
  subtitle: "Organizaciones especializadas dentro del movimiento",
  wings: partyWings,
}

export const sectorCoordinatorsData = {
  title: "Coordinadores Sectoriales",
  subtitle: "Representantes del partido en cada sector de Verón-Punta Cana",
  sectors: sectorCoordinators,
}

// config/history.config.ts
import { TimelineEvent } from "../types/history.types"

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
    image: {
      alt: "Fuerza del Pueblo community",
      asset: {
        url: "https://picsum.photos/600/200?random=" + Math.random(),
        metadata: { dimensions: { width: 600, height: 200 } },
      },
    },
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

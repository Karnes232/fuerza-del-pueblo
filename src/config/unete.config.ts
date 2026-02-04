// config/unete.config.ts
import { Benefit, MembershipTier, Testimonial, FAQItem } from '../types/unete.types';

// Hero Data
export const uneteHeroData = {
  title: '¡Únete a Fuerza del Pueblo!',
  subtitle: 'Sé parte del cambio',
  description: 'Juntos construimos un mejor futuro para Verón-Punta Cana. Tu voz, tu participación y tu compromiso son fundamentales para el desarrollo de nuestra comunidad.',
  benefits: [
    'Participa en decisiones importantes',
    'Accede a programas de formación',
    'Construye redes comunitarias',
    'Haz la diferencia en tu comunidad',
  ],
  ctaText: 'Comienza Tu Registro',
};

// Benefits
export const joinBenefits: Benefit[] = [
  {
    id: 'voice',
    title: 'Tu Voz Cuenta',
    description: 'Participa activamente en las decisiones y estrategias del partido a nivel municipal.',
    icon: 'Megaphone',
  },
  {
    id: 'training',
    title: 'Formación Continua',
    description: 'Accede a talleres, capacitaciones y programas de desarrollo de liderazgo político.',
    icon: 'GraduationCap',
  },
  {
    id: 'community',
    title: 'Red de Apoyo',
    description: 'Conecta con personas comprometidas con el bienestar de nuestra comunidad.',
    icon: 'Users',
  },
  {
    id: 'impact',
    title: 'Impacto Real',
    description: 'Participa en proyectos y actividades que generan cambios positivos en Verón-Punta Cana.',
    icon: 'Sparkles',
  },
  {
    id: 'information',
    title: 'Información Prioritaria',
    description: 'Mantente informado sobre decisiones, eventos y oportunidades antes que nadie.',
    icon: 'Bell',
  },
  {
    id: 'opportunities',
    title: 'Oportunidades de Liderazgo',
    description: 'Desarrolla tus habilidades y asume roles de responsabilidad en la organización.',
    icon: 'Star',
  },
];

// Membership Tiers
export const membershipTiers: MembershipTier[] = [
  {
    id: 'simpatizante',
    name: 'Simpatizante',
    description: 'Apoya nuestro movimiento y mantente informado',
    price: 'Gratis',
    benefits: [
      'Recibe boletines informativos',
      'Invitaciones a eventos públicos',
      'Acceso a contenido exclusivo',
      'Participación en actividades comunitarias',
    ],
    requirements: [
      'Mayor de 18 años',
      'Registrarte con tus datos',
    ],
    color: '#00A651',
  },
  {
    id: 'militante',
    name: 'Militante',
    description: 'Participación activa en el partido',
    price: 'Gratis',
    benefits: [
      'Todos los beneficios de Simpatizante',
      'Derecho a voto en asambleas',
      'Participación en comités de trabajo',
      'Acceso a formación política avanzada',
      'Posibilidad de ser candidato interno',
    ],
    requirements: [
      'Mayor de 18 años',
      'Compromiso de participación activa',
      'Asistir a asambleas mensuales',
      'Completar proceso de afiliación',
    ],
    color: '#1F4D2B',
    recommended: true,
  },
  {
    id: 'voluntario',
    name: 'Voluntario',
    description: 'Ayuda a organizar y ejecutar actividades',
    price: 'Gratis',
    benefits: [
      'Todos los beneficios de Simpatizante',
      'Certificados de voluntariado',
      'Experiencia en organización comunitaria',
      'Acceso a capacitaciones especializadas',
      'Red de contactos amplia',
    ],
    requirements: [
      'Mayor de 16 años',
      'Disponibilidad de tiempo',
      'Compromiso con actividades específicas',
    ],
    color: '#00A651',
  },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María Rodríguez',
    role: 'Militante desde 2024',
    photo: "https://picsum.photos/80/80?random=" + Math.random(),
    quote: 'Unirme a Fuerza del Pueblo me dio la oportunidad de ser parte del cambio que quiero ver en mi comunidad. Ahora mi voz cuenta y veo el impacto directo de nuestro trabajo.',
    location: 'Verón',
  },
  {
    id: '2',
    name: 'Carlos Méndez',
    role: 'Voluntario',
    photo: "https://picsum.photos/80/80?random=" + Math.random(),
    quote: 'Como voluntario he aprendido mucho sobre organización comunitaria. Las jornadas de limpieza y los eventos sociales me han permitido conocer a personas increíbles.',
    location: 'Punta Cana',
  },
  {
    id: '3',
    name: 'Ana Santana',
    role: 'Coordinadora de Juventud',
    photo: "https://picsum.photos/80/80?random=" + Math.random(),
    quote: 'El partido me dio la oportunidad de desarrollar mis habilidades de liderazgo. Hoy coordino el programa de juventud y trabajamos para crear oportunidades para los jóvenes de nuestra comunidad.',
    location: 'Verón',
  },
];

// FAQs
export const faqs: FAQItem[] = [
  {
    id: '1',
    question: '¿Cuál es la diferencia entre Simpatizante, Militante y Voluntario?',
    answer: 'Los Simpatizantes reciben información y pueden participar en eventos públicos. Los Militantes tienen derecho a voto en asambleas y participan activamente en decisiones del partido. Los Voluntarios se enfocan en ayudar a organizar y ejecutar actividades específicas.',
  },
  {
    id: '2',
    question: '¿Hay algún costo por afiliarme?',
    answer: 'No, la afiliación a Fuerza del Pueblo es completamente gratuita. No cobramos cuotas de membresía ni ningún tipo de pago.',
  },
  {
    id: '3',
    question: '¿Qué compromiso de tiempo se requiere?',
    answer: 'Depende del tipo de membresía. Los Simpatizantes no tienen compromiso de tiempo obligatorio. Los Militantes deben asistir a asambleas mensuales (2-3 horas). Los Voluntarios definen su disponibilidad según las actividades en las que deseen participar.',
  },
  {
    id: '4',
    question: '¿Puedo cambiar mi tipo de membresía después?',
    answer: 'Sí, puedes actualizar tu tipo de membresía en cualquier momento. Puedes comenzar como Simpatizante y luego convertirte en Militante o Voluntario cuando estés listo.',
  },
  {
    id: '5',
    question: '¿Necesito experiencia política previa?',
    answer: 'No, no se requiere experiencia previa. Ofrecemos programas de formación para todos los niveles. Lo más importante es tu compromiso con el bienestar de la comunidad.',
  },
  {
    id: '6',
    question: '¿Cómo puedo participar si tengo poco tiempo?',
    answer: 'Puedes comenzar como Simpatizante o Voluntario ocasional. Hay muchas formas de contribuir: asistir a eventos cuando puedas, compartir información en redes sociales, o participar en actividades específicas que se ajusten a tu horario.',
  },
  {
    id: '7',
    question: '¿Qué pasa después de registrarme?',
    answer: 'Recibirás un correo de bienvenida con información sobre próximos eventos y cómo involucrarte. Te contactaremos para una breve orientación y responder cualquier pregunta que tengas.',
  },
  {
    id: '8',
    question: '¿Puedo darme de baja en cualquier momento?',
    answer: 'Sí, puedes darte de baja en cualquier momento sin ningún compromiso adicional. Simplemente contáctanos y procesaremos tu solicitud.',
  },
];

// Why Join Section Data
export const whyJoinData = {
  title: '¿Por Qué Unirte?',
  subtitle: 'Los beneficios de ser parte de nuestra comunidad',
  benefits: joinBenefits,
};

// Membership Tiers Section Data
export const membershipTiersData = {
  title: 'Elige Tu Nivel de Participación',
  subtitle: 'Todas las opciones son gratuitas. Comienza donde te sientas cómodo.',
  tiers: membershipTiers,
};

// Join Form Section Data
export const joinFormData = {
  title: 'Completa Tu Registro',
  subtitle: 'Toma solo unos minutos unirte al movimiento',
};

// Testimonials Section Data
export const testimonialsData = {
  title: 'Historias de Nuestra Comunidad',
  subtitle: 'Conoce a algunos de nuestros miembros',
  testimonials: testimonials,
};

// FAQ Section Data
export const faqData = {
  title: 'Preguntas Frecuentes',
  subtitle: 'Todo lo que necesitas saber antes de unirte',
  faqs: faqs,
};

// CTA Section Data
export const uneteCTAData = {
  title: '¿No Estás Listo Para Unirte?',
  description: 'Hay otras formas de apoyar nuestro movimiento y mantenerte conectado.',
  actions: [
    {
      title: 'Síguenos en Redes',
      description: 'Mantente informado sobre nuestras actividades y propuestas.',
      icon: 'Share2',
      href: '#social-media',
    },
    {
      title: 'Suscríbete al Boletín',
      description: 'Recibe actualizaciones mensuales en tu correo.',
      icon: 'Mail',
      href: '#newsletter',
    },
    {
      title: 'Asiste a un Evento',
      description: 'Conoce al equipo y la comunidad en persona.',
      icon: 'Calendar',
      href: '/eventos',
    },
  ],
};

// Interest Areas
export const interestAreas = [
  'Educación',
  'Salud',
  'Medio Ambiente',
  'Desarrollo Económico',
  'Juventud',
  'Deporte y Recreación',
  'Cultura',
  'Seguridad Ciudadana',
  'Infraestructura',
  'Tecnología',
];

// Availability Options
export const availabilityOptions = [
  'Fines de semana',
  'Entre semana (tardes)',
  'Entre semana (mañanas)',
  'Eventos especiales solamente',
  'Disponibilidad flexible',
];
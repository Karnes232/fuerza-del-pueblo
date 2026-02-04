// config/news.config.ts
import { NewsArticle, NewsCategoryInfo } from '../types/news.types';

// Hero Data
export const newsHeroData = {
  title: 'Noticias',
  subtitle: 'Mantente informado',
  description: 'Últimas noticias, eventos y actualizaciones de Fuerza del Pueblo en Verón-Punta Cana.',
  showSearch: true,
};

// News Categories
export const newsCategories: NewsCategoryInfo[] = [
  {
    id: 'noticias',
    name: 'Noticias',
    description: 'Noticias generales del partido',
    color: '#00A651',
  },
  {
    id: 'eventos',
    name: 'Eventos',
    description: 'Cobertura de eventos y actividades',
    color: '#1F4D2B',
  },
  {
    id: 'iniciativas',
    name: 'Iniciativas',
    description: 'Nuevos proyectos y programas',
    color: '#00A651',
  },
  {
    id: 'comunicados',
    name: 'Comunicados',
    description: 'Comunicados oficiales del partido',
    color: '#1F4D2B',
  },
  {
    id: 'entrevistas',
    name: 'Entrevistas',
    description: 'Entrevistas con miembros y líderes',
    color: '#00A651',
  },
  {
    id: 'logros',
    name: 'Logros',
    description: 'Logros y avances del partido',
    color: '#1F4D2B',
  },
];

// News Articles (Sample Data)
export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Inauguración de Nueva Sede del Partido en Verón',
    excerpt: 'Con gran éxito se llevó a cabo la inauguración de nuestra nueva sede, contando con la presencia de más de 150 militantes y simpatizantes de la comunidad.',
    date: '2026-01-28',
    author: 'Equipo de Comunicaciones',
    category: 'eventos',
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: 'inauguracion-nueva-sede-veron',
    featured: true,
    tags: ['inauguración', 'sede', 'crecimiento'],
    readTime: 5,
  },
  {
    id: '2',
    title: 'Lanzamiento del Programa de Apoyo a Pequeños Comerciantes',
    excerpt: 'Fuerza del Pueblo presenta una iniciativa integral para fortalecer el sector comercial local con capacitación, microcréditos y asesoría empresarial.',
    date: '2026-01-25',
    author: 'María Rodríguez',
    category: 'iniciativas',
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: 'programa-apoyo-comerciantes',
    tags: ['economía', 'comercio', 'desarrollo'],
    readTime: 8,
  },
  {
    id: '3',
    title: 'Reunión Productiva con Líderes Comunitarios de Punta Cana',
    excerpt: 'Nuestro equipo sostuvo un encuentro con más de 30 líderes de diferentes sectores para escuchar sus preocupaciones y propuestas de desarrollo.',
    date: '2026-01-20',
    author: 'Carlos Méndez',
    category: 'noticias',
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: 'reunion-lideres-punta-cana',
    tags: ['reunión', 'líderes', 'comunidad'],
    readTime: 6,
  },
  {
    id: '4',
    title: 'Comunicado: Posición Sobre Proyecto de Desarrollo Turístico',
    excerpt: 'Fuerza del Pueblo expresa su posición sobre el nuevo proyecto turístico propuesto para la zona, enfatizando la necesidad de protección ambiental y beneficios para la comunidad local.',
    date: '2026-01-18',
    author: 'Directiva del Partido',
    category: 'comunicados',
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: 'posicion-proyecto-turistico',
    tags: ['turismo', 'medio ambiente', 'desarrollo'],
    readTime: 10,
  },
  {
    id: '5',
    title: 'Entrevista: Conversando con Ana Santana sobre Juventud y Política',
    excerpt: 'La coordinadora del programa de juventud comparte su visión sobre cómo involucrar a los jóvenes en la participación política activa.',
    date: '2026-01-15',
    author: 'Equipo Editorial',
    category: 'entrevistas',
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: 'entrevista-ana-santana-juventud',
    tags: ['juventud', 'entrevista', 'liderazgo'],
    readTime: 12,
  },
  {
    id: '6',
    title: 'Más de 100 Árboles Plantados en Jornada de Reforestación',
    excerpt: 'Voluntarios del partido y miembros de la comunidad unieron fuerzas para plantar más de 100 árboles nativos en áreas verdes de Verón.',
    date: '2026-01-20',
    author: 'Comité de Medio Ambiente',
    category: 'logros',
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: 'jornada-reforestacion-exito',
    tags: ['medio ambiente', 'voluntariado', 'reforestación'],
    readTime: 4,
  },
  {
    id: '7',
    title: 'Primera Asamblea General del Año Establece Objetivos 2026',
    excerpt: 'Con la participación de 78 militantes, se aprobó el plan de trabajo anual y se formaron comités especializados en diferentes áreas de desarrollo.',
    date: '2026-01-15',
    author: 'Secretaría General',
    category: 'noticias',
    slug: 'asamblea-general-objetivos-2026',
    tags: ['asamblea', 'planificación', 'objetivos'],
    readTime: 7,
  },
  {
    id: '8',
    title: 'Taller de Formación Política Capacita a 45 Nuevos Militantes',
    excerpt: 'El primer taller del año sobre participación ciudadana y procesos democráticos fue un éxito rotundo con evaluaciones excelentes de los participantes.',
    date: '2026-01-12',
    author: 'Departamento de Formación',
    category: 'logros',
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: 'taller-formacion-politica-exito',
    tags: ['formación', 'capacitación', 'militantes'],
    readTime: 5,
  },
  {
    id: '9',
    title: 'Comunicado: Solidaridad con Familias Afectadas por Inundaciones',
    excerpt: 'Fuerza del Pueblo expresa su solidaridad con las familias afectadas por las recientes inundaciones y anuncia campaña de recolección de donaciones.',
    date: '2026-01-10',
    author: 'Directiva del Partido',
    category: 'comunicados',
    slug: 'solidaridad-familias-inundaciones',
    tags: ['solidaridad', 'emergencia', 'comunidad'],
    readTime: 3,
  },
  {
    id: '10',
    title: 'Celebración del Día de la Independencia Reúne a Cientos de Ciudadanos',
    excerpt: 'El evento conmemorativo del Día de la Independencia organizado por el partido fue un éxito con actividades culturales, música y gastronomía típica.',
    date: '2026-02-27',
    author: 'Comité de Eventos',
    category: 'eventos',
    image: "https://picsum.photos/400/200?random=" + Math.random(),
    slug: 'celebracion-dia-independencia',
    tags: ['independencia', 'cultura', 'celebración'],
    readTime: 6,
  },
];

// Featured Article
export const featuredArticle = newsArticles.find(a => a.featured) || newsArticles[0];

// Newsletter CTA Data
export const newsletterCTAData = {
  title: 'No Te Pierdas Ninguna Actualización',
  description: 'Suscríbete a nuestro boletín informativo y recibe las últimas noticias directamente en tu correo.',
};
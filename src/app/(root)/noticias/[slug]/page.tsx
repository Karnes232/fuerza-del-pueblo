import { ArticleContent } from "@/components/IndividualNewsPage/ArticleContent"
import { ArticleCTA } from "@/components/IndividualNewsPage/ArticleCTA"
import { ArticleHero } from "@/components/IndividualNewsPage/ArticleHero"
import { ArticleNavigation } from "@/components/IndividualNewsPage/ArticleNavigation"
import { RelatedArticles } from "@/components/IndividualNewsPage/RelatedArticles"
import { SocialShare } from "@/components/IndividualNewsPage/SocialShare"

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const article = {
    title: "Inauguración de Nueva Sede del Partido en Verón",
    category: "Eventos",
    date: "2026-01-28",
    slug: slug,
    author: {
      name: "Equipo de Comunicaciones",
      role: "Fuerza del Pueblo Verón-Punta Cana",
    },
    readTime: "5",
    featuredImage: {
      alt: "Nueva sede del partido",
      asset: {
        url: `https://picsum.photos/1200/600?random=${Math.random()}`,
        metadata: { dimensions: { width: 1200, height: 600 } },
      },
    },
    content: `
      <p>Con gran entusiasmo y la presencia de cientos de militantes y simpatizantes, Fuerza del Pueblo inauguró este sábado su nueva sede en el corazón de Verón. El evento marcó un hito importante en la consolidación del partido a nivel municipal y demostró el crecimiento constante del movimiento en la zona.</p>

      <h2>Un Espacio para la Comunidad</h2>
      <p>La nueva sede, ubicada en la Avenida Principal de Verón, cuenta con instalaciones modernas diseñadas para servir tanto a los militantes del partido como a la comunidad en general. El edificio de dos plantas incluye:</p>

      <ul>
        <li>Un salón de eventos con capacidad para 200 personas</li>
        <li>Oficinas administrativas equipadas con tecnología moderna</li>
        <li>Salas de reuniones para comisiones de trabajo</li>
        <li>Un centro de atención ciudadana abierto al público</li>
        <li>Áreas de capacitación y formación política</li>
      </ul>

      <h2>Palabras de los Líderes</h2>
      <p>Durante la ceremonia de inauguración, el presidente municipal del partido expresó: "Esta sede representa nuestro compromiso permanente con Verón-Punta Cana. No es solo un edificio, es un espacio de encuentro, diálogo y servicio a la comunidad. Aquí las puertas estarán siempre abiertas para escuchar las necesidades de nuestros vecinos y trabajar juntos por soluciones."</p>

      <blockquote>
        <p>"Este es solo el comienzo. Con esta nueva sede, reforzamos nuestra presencia y nuestro compromiso de servir a la comunidad con transparencia y dedicación."</p>
      </blockquote>

      <h2>Actividades de Inauguración</h2>
      <p>El evento incluyó presentaciones culturales, música en vivo y la participación de líderes comunitarios de todos los sectores de Verón-Punta Cana. Los asistentes pudieron recorrer las instalaciones y conocer los programas y servicios que el partido ofrece a la comunidad.</p>

      <p>Además, se anunció el calendario de actividades para los próximos meses, que incluye:</p>

      <ul>
        <li>Asambleas mensuales abiertas al público</li>
        <li>Talleres de formación política y ciudadana</li>
        <li>Jornadas de servicios comunitarios</li>
        <li>Espacios de consulta y participación ciudadana</li>
      </ul>

      <h2>Mirando Hacia el Futuro</h2>
      <p>La inauguración de esta sede representa un paso significativo en la preparación del partido para las próximas elecciones municipales y, más importante aún, en su capacidad de servir efectivamente a la comunidad de Verón-Punta Cana.</p>

      <p>Los dirigentes del partido reiteraron su compromiso de utilizar este espacio no solo para actividades partidarias, sino como un verdadero centro de servicio comunitario donde todos los ciudadanos, independientemente de su afiliación política, puedan encontrar apoyo y orientación.</p>

      <p>La nueva sede está ubicada en Avenida Principal #123, Verón, y estará abierta de lunes a viernes de 8:00 AM a 5:00 PM, y los sábados de 9:00 AM a 1:00 PM.</p>
    `,
  }

  // Mock related articles - replace with: const relatedArticles = await getRelatedArticles(article.category, article.slug)
  const relatedArticles = [
    {
      id: "1",
      title: "Programa de Apoyo a Pequeños Comerciantes",
      excerpt:
        "Lanzamos iniciativa para apoyar el desarrollo de pequeños comerciantes locales con capacitación y recursos.",
      date: "2026-01-25",
      image: `https://picsum.photos/400/200?random=${Math.random()}`,
      slug: "programa-apoyo-comerciantes",
      category: "Iniciativas",
    },
    {
      id: "2",
      title: "Reunión con Líderes Comunitarios de Punta Cana",
      excerpt:
        "Nuestro equipo se reunió con líderes de diferentes sectores para escuchar sus necesidades y propuestas.",
      date: "2026-01-20",
      image: `https://picsum.photos/400/200?random=${Math.random()}`,
      slug: "reunion-lideres-comunitarios",
      category: "Noticias",
    },
    {
      id: "3",
      title: "Jornada de Limpieza Comunitaria Exitosa",
      excerpt:
        "Más de 300 voluntarios participaron en nuestra jornada de limpieza y embellecimiento de espacios públicos.",
      date: "2026-01-15",
      image: `https://picsum.photos/400/200?random=${Math.random()}`,
      slug: "jornada-limpieza-exitosa",
      category: "Eventos",
    },
  ]

  // Mock navigation articles
  const previousArticle = {
    title: "Programa de Apoyo a Pequeños Comerciantes",
    slug: "programa-apoyo-comerciantes",
  }

  const nextArticle = {
    title: "Asamblea General Mensual de Febrero",
    slug: "asamblea-general-febrero",
  }

  // For social sharing
  const articleUrl = `https://www.fuerzadelpueblo.do/noticias/${slug}`

  return (
    <main>
      {/* Article Hero */}
      <ArticleHero
        title={article.title}
        category={article.category}
        date={article.date}
        author={article.author}
        featuredImage={article.featuredImage}
        readTime={article.readTime}
      />

      {/* Article Content */}
      <ArticleContent content={article.content} />

      {/* Social Share */}
      <SocialShare
        url={articleUrl}
        title={article.title}
        description="Lee este artículo sobre las actividades de Fuerza del Pueblo en Verón-Punta Cana"
      />

      {/* Article Navigation */}
      <ArticleNavigation
        previousArticle={previousArticle}
        nextArticle={nextArticle}
      />

      {/* Related Articles */}
      <RelatedArticles
        title="Artículos Relacionados"
        articles={relatedArticles}
      />

      {/* Call to Action */}
      <ArticleCTA
        title="¿Quieres Mantenerte Informado?"
        description="Únete a nuestro movimiento y recibe las últimas noticias y actualizaciones directamente."
        buttonText="Unirse al Partido"
        buttonLink="/unete"
      />
    </main>
  )
}

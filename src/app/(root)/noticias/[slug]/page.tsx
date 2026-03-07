import { ArticleContent } from "@/components/IndividualNewsPage/ArticleContent"
import { ArticleCTA } from "@/components/IndividualNewsPage/ArticleCTA"
import { ArticleHero } from "@/components/IndividualNewsPage/ArticleHero"
import { ArticleNavigation } from "@/components/IndividualNewsPage/ArticleNavigation"
import { RelatedArticles } from "@/components/IndividualNewsPage/RelatedArticles"
import { SocialShare } from "@/components/IndividualNewsPage/SocialShare"
import {
  getIndividualNewsArticle,
  getIndividualNewsArticleNextArticles,
  getIndividualNewsArticlePreviousArticles,
  getIndividualNewsArticleRelatedArticles,
  getIndividualNewsArticleSeo,
} from "@/sanity/queries/NewsPage/IndividualNewsArticle"
import { notFound } from "next/navigation"

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const article = await getIndividualNewsArticle(slug)

  if (!article) {
    notFound()
  }

  const [relatedArticles, nextArticle, previousArticle] = await Promise.all([
    getIndividualNewsArticleRelatedArticles(article?.category, slug),
    getIndividualNewsArticleNextArticles(article?.date),
    getIndividualNewsArticlePreviousArticles(article?.date),
  ])

  // For social sharing
  const articleUrl = `https://www.fuerzadelpueblo.do/noticias/${slug}`

  return (
    <main>
      {article.seo?.structuredData?.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: article.seo.structuredData.jsonLd,
          }}
        />
      )}
      {/* Article Hero */}
      <ArticleHero
        title={article.title}
        category={article.category}
        date={article.date}
        author={article.author}
        featuredImage={article.featuredImage}
        readTime={article.readTime.toString()}
      />

      {/* Article Content */}
      <ArticleContent content={article.content} images={article.images} />

      {/* Social Share */}
      <SocialShare
        url={articleUrl}
        title={article.title}
        description="Lee este artículo sobre las actividades de Fuerza del Pueblo en Verón-Punta Cana"
      />

      {/* Article Navigation */}
      <ArticleNavigation
        previousArticle={previousArticle ?? undefined}
        nextArticle={nextArticle ?? undefined}
      />

      {/* Related Articles */}
      <RelatedArticles
        title="Artículos Relacionados"
        articles={relatedArticles ?? []}
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const seo = await getIndividualNewsArticleSeo(slug)
  if (!seo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do/noticias/${slug}`
  return {
    canonical: canonicalUrl,
    title: seo.meta?.title,
    description: seo.meta.description,
    keywords: seo.meta.keywords,
    openGraph: {
      url: canonicalUrl,
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      image: seo.openGraph.imageUrl,
    },
    robots: {
      index: !seo.noIndex,
      follow: !seo.noFollow,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

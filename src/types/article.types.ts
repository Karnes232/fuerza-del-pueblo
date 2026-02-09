// types/article.types.ts

export interface ArticleHeroProps {
  title: string
  category: string
  date: string
  author?: {
    name: string
    role?: string
    image?: {
      alt: string
      asset: {
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
      }
    }
  }
  featuredImage?: {
    alt: string
    asset: {
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
  }
  readTime?: string
}

export interface ArticleContentProps {
  content: string // Rich text content
  images?: {
    id: string
    alt: string
    asset: {
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
    caption?: string
  }[]
}

export interface ArticleMetaProps {
  category: string
  date: string
  author?: {
    name: string
    role?: string
  }
  readTime?: string
  tags?: string[]
}

export interface SocialShareProps {
  url: string
  title: string
  description?: string
}

export interface RelatedArticle {
  id: string
  title: string
  excerpt: string
  date: string
  image?: string
  slug: string
  category?: string
}

export interface RelatedArticlesProps {
  title: string
  articles: RelatedArticle[]
}

export interface ArticleNavigationProps {
  previousArticle?: {
    title: string
    slug: string
  }
  nextArticle?: {
    title: string
    slug: string
  }
}

export interface ArticleGalleryProps {
  images: {
    id: string
    alt: string
    asset: {
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
    caption?: string
  }[]
}

export interface ArticleCallToActionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

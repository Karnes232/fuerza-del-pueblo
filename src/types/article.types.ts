// types/article.types.ts
import type { PortableTextBlock } from "sanity"

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
  content: PortableTextBlock[]
  images?: {
    _key: string
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
  _id: string
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
    slug: {
      current: string
    }
  }
  nextArticle?: {
    title: string
    slug: {
      current: string
    }
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

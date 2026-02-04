// types/about.types.ts

export interface AboutHeroProps {
  title: string
  subtitle?: string
  description: string
  backgroundImage?: {
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

export interface AboutContentProps {
  title: string
  content: string
  sections?: {
    id: string
    title: string
    content: string
  }[]
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

export interface TimelineItem {
  id: string
  year: string
  title: string
  description: string
}

export interface TimelineProps {
  title: string
  subtitle?: string
  items: TimelineItem[]
}

export interface PrincipleItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface PrinciplesProps {
  title: string
  subtitle?: string
  principles: PrincipleItem[]
}

export interface NationalConnectionProps {
  title: string
  content: string
  logoUrl?: string
  leaderName?: string
  leaderTitle?: string
  leaderImage?: {
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
  ctaText?: string
  ctaLink?: string
}

export interface AboutStatsProps {
  stats: {
    id: string
    value: string
    label: string
    icon: string
  }[]
}

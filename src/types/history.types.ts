// types/history.types.ts

export interface HistoryHeroProps {
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

export interface HistoryIntroProps {
  title: string
  content: string
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

export interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  category?: "national" | "local" | "milestone" | "achievement"
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
  highlights?: string[]
}

export interface HistoryTimelineProps {
  title: string
  subtitle?: string
  events: TimelineEvent[]
}

export interface FoundingStory {
  year: string
  context: string
  founders?: string[]
  objectives: string[]
}

export interface FoundingStoryProps {
  title: string
  subtitle?: string
  year: string
  context: string
  founders?: string[]
  objectives: string[]
}

export interface Milestone {
  id: string
  year: string
  title: string
  description: string
  icon: string
  impact?: string
}

export interface MilestonesProps {
  title: string
  subtitle?: string
  milestones: Milestone[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  category: string
  icon: string
}

export interface AchievementsProps {
  title: string
  subtitle?: string
  achievements: Achievement[]
}

export interface Era {
  id: string
  period: string
  title: string
  description: string
  keyEvents: string[]
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

export interface ErasProps {
  title: string
  subtitle?: string
  eras: Era[]
}

export interface LegacyItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface LegacyProps {
  title: string
  subtitle?: string
  content: string
  items: LegacyItem[]
}

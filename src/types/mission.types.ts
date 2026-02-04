// types/mission.types.ts

export interface MissionVisionHeroProps {
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

export interface MissionStatementProps {
  title: string
  statement: string
  description?: string
  icon?: string
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

export interface VisionStatementProps {
  title: string
  statement: string
  description?: string
  icon?: string
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

export interface CoreValue {
  id: string
  title: string
  description: string
  icon: string
  details?: string[]
}

export interface CoreValuesProps {
  title: string
  subtitle?: string
  values: CoreValue[]
}

export interface CommitmentItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface CommitmentsProps {
  title: string
  subtitle?: string
  commitments: CommitmentItem[]
}

export interface GoalItem {
  id: string
  category: string
  title: string
  description: string
  icon: string
}

export interface GoalsProps {
  title: string
  subtitle?: string
  goals: GoalItem[]
}

export interface PillarsProps {
  title: string
  subtitle?: string
  pillars: {
    id: string
    title: string
    description: string
    icon: string
    keyPoints: string[]
  }[]
}

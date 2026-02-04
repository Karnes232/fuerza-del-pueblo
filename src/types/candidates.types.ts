// types/candidates.types.ts

export interface CandidatesHeroProps {
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

export interface CandidateProfile {
  id: string
  name: string
  position: string // "Alcalde" or "Regidor"
  slogan?: string
  bio: string
  education?: string[]
  experience?: string[]
  achievements?: string[]
  proposals?: string[]
  priorities?: string[]
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
  socialMedia?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
  campaignWebsite?: string
  contactEmail?: string
}

export interface CandidateCardProps {
  candidate: CandidateProfile
  featured?: boolean
}

export interface MayorCandidateProps {
  title: string
  subtitle?: string
  candidate: CandidateProfile | null
  comingSoon?: boolean
}

export interface CouncilMembersProps {
  title: string
  subtitle?: string
  candidates: CandidateProfile[]
  comingSoon?: boolean
}

export interface CampaignProposal {
  id: string
  category: string
  title: string
  description: string
  icon: string
  objectives?: string[]
}

export interface CampaignProposalsProps {
  title: string
  subtitle?: string
  proposals: CampaignProposal[]
}

export interface CampaignPriority {
  id: string
  title: string
  description: string
  icon: string
  actions: string[]
}

export interface CampaignPrioritiesProps {
  title: string
  subtitle?: string
  priorities: CampaignPriority[]
}

export interface VisionItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface CampaignVisionProps {
  title: string
  subtitle?: string
  content: string
  items: VisionItem[]
}

export interface ComingSoonProps {
  title: string
  message: string
  expectedDate?: string
  notifyEnabled?: boolean
}

export interface MediaAppearance {
  id: string
  title: string
  date: string
  media: string
  type: "interview" | "debate" | "press" | "event"
  url?: string
  description?: string
}

export interface MediaSectionProps {
  title: string
  subtitle?: string
  appearances: MediaAppearance[]
}

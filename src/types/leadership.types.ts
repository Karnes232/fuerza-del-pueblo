// types/leadership.types.ts

export interface LeadershipHeroProps {
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

export interface LeaderProfile {
  id: string
  name: string
  position: string
  bio: string
  responsibilities?: string[]
  email?: string
  phone?: string
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
}

export interface LeaderCardProps {
  leader: LeaderProfile
  featured?: boolean
}

export interface LeadershipTeamProps {
  title: string
  subtitle?: string
  leaders: LeaderProfile[]
}

export interface OrganizationalLevel {
  id: string
  title: string
  description: string
  icon: string
  positions: string[]
}

export interface OrganizationalStructureProps {
  title: string
  subtitle?: string
  levels: OrganizationalLevel[]
}

export interface DepartmentInfo {
  id: string
  name: string
  description: string
  icon: string
  coordinator?: string
  responsibilities: string[]
}

export interface DepartmentsProps {
  title: string
  subtitle?: string
  departments: DepartmentInfo[]
}

export interface Wing {
  id: string
  name: string
  description: string
  icon: string
  coordinator?: string
  focus: string[]
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

export interface WingsProps {
  title: string
  subtitle?: string
  wings: Wing[]
}

export interface SectorCoordinator {
  id: string
  sector: string
  coordinator: string
  description?: string
  contact?: string
}

export interface SectorCoordinatorsProps {
  title: string
  subtitle?: string
  sectors: SectorCoordinator[]
}

// types/events.types.ts

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  category: EventCategory
  image?: string
  slug: string
  rsvpLink?: string
  capacity?: number
  attendees?: number
  featured?: boolean
  status: "upcoming" | "past" | "cancelled"
}

export type EventCategory =
  | "asamblea"
  | "comunitaria"
  | "formacion"
  | "social"
  | "limpieza"
  | "reunion"

export interface EventCategoryInfo {
  id: EventCategory
  name: string
  description: string
  icon: string
  color: string
}

export interface PastEvent extends Event {
  summary: string
  photos?: string[]
  attendeesCount: number
}

export interface EventsHeroProps {
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
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

export interface FeaturedEventSectionProps {
  title?: string
  subtitle?: string
  event?: Event
}

export interface UpcomingEventsSectionProps {
  title: string
  subtitle?: string
  events: Event[]
}

export interface PastEventsSectionProps {
  title: string
  subtitle?: string
  events: PastEvent[]
}

export interface EventCategoriesSectionProps {
  title: string
  subtitle?: string
  categories: {
    id: string
    name: string
    description: string
    icon: string
    color: string
  }[]
}

export interface EventsCTAProps {
  title: string
  description: string
  actions: {
    title: string
    description: string
    icon: string
    href: string
  }[]
}

export interface EventCardProps {
  event: Event
  variant?: "default" | "compact"
}

export interface FeaturedEventCardProps {
  event: Event
}

export interface EventFilterProps {
  categories: EventCategoryInfo[]
  selectedCategory: EventCategory | "all"
  onSelectCategory: (category: EventCategory | "all") => void
}

export interface EventCategoryCardProps {
  category: {
    id: string
    name: string
    description: string
    icon: string
    color: string
  }
}

export interface PastEventCardProps {
  event: PastEvent
}

export interface RSVPButtonProps {
  eventId: string
  rsvpLink?: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

// types/events.types.ts

export interface Event {
  title: string
  category: {
    name: string
  }
  description: string
  date: string
  time: string
  location: string
  image: {
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
  slug: {
    current: string
  }
  rsvpLink?: string
  capacity?: number
  attendees?: number
  featured?: boolean
  status: "upcoming" | "past" | "cancelled"
}

export type EventCategory =
  | "Asamblea"
  | "Actividades Comunitarias"
  | "Formación Política"
  | "Eventos Sociales"
  | "Jornadas de Limpieza"
  | "Reuniones"

export interface EventCategoryInfo {
  id: EventCategory
  name: string
  description: string
  icon: string
  color: string
}

export interface PastEvent extends Event {
  photos?: string[]
}

/** Minimal shape for past-event list items (from getPreviousEvents). Used by PastEventsSection/PastEventCard. */
export interface PastEventListItem {
  title: string
  description: string
  date: string
  time: string
  location: string
  image: {
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
  slug: {
    current: string
  }
  photos?: string[]
  /** Optional unique key for list rendering (e.g. when duplicating for dev). */
  _listKey?: string
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
  categories: {
    id: string
    name: string
    description: string
    icon: string
    color: string
  }[]
}

export interface PastEventsSectionProps {
  title: string
  subtitle?: string
  events: PastEventListItem[]
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
  categories: {
    id: string
    name: string
    description: string
    icon: string
    color: string
  }[]
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
  event: PastEventListItem
}

export interface RSVPButtonProps {
  eventId: string
  rsvpLink?: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

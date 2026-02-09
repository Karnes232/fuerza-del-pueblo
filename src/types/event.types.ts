// types/event.types.ts

export interface EventHeroProps {
  title: string
  category: string
  date: string
  time: string
  location: string
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
  status?: "upcoming" | "ongoing" | "completed"
}

export interface EventDetailsProps {
  description: string
  fullDescription?: string
  organizer?: {
    name: string
    role?: string
    contact?: string
  }
  capacity?: number
  attendees?: number
  requirements?: string[]
  whatToBring?: string[]
}

export interface EventLocationProps {
  location: string
  address?: string
  coordinates?: {
    lat: number
    lng: number
  }
  directions?: string
}

export interface EventScheduleItem {
  time: string
  activity: string
  description?: string
}

export interface EventScheduleProps {
  title: string
  schedule: EventScheduleItem[]
}

export interface EventRSVPProps {
  eventId: string
  eventTitle: string
  eventDate: string
  rsvpEnabled: boolean
  capacity?: number
  attendees?: number
}

export interface RelatedEvent {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image?: string
  slug: string
  category?: string
}

export interface RelatedEventsProps {
  title: string
  events: RelatedEvent[]
}

export interface EventGalleryProps {
  title: string
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

export interface EventSpeaker {
  id: string
  name: string
  role: string
  bio?: string
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

export interface EventSpeakersProps {
  title: string
  speakers: EventSpeaker[]
}

export interface EventFAQItem {
  question: string
  answer: string
}

export interface EventFAQProps {
  title: string
  faqs: EventFAQItem[]
}

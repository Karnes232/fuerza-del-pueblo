import { client } from "@/sanity/lib/client"

export interface EventsPageHeroSection {
  title: string
  subtitle: string
  description: string
  backgroundImage: {
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
  ctaText: string
  ctaLink: string
  featuredEventTitle: string
  featuredEventSubtitle: string
  featuredEvent: {
    title: string
    category: {
      name: string
    }
    date: string
    time: string
    location: string
    description: string
    attendees: number
    capacity: number
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
  }
}

export const eventsPageHeroSectionQuery = `*[_type == "eventsPageHeroSection"][0] {
  title,
  subtitle,
  description,
  backgroundImage {
    alt,
    asset -> {
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  ctaText,
  ctaLink,
  featuredEventTitle,
  featuredEventSubtitle,
  featuredEvent -> {
    title,
    category -> {
      name
    },
    date,
    time,
    location,
    description,
    attendees,
    capacity,
    image {
      alt,
      asset -> {
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    slug {
      current
    }
  },
}`

export const getEventsPageHeroSection =
  async (): Promise<EventsPageHeroSection | null> => {
    return await client.fetch(eventsPageHeroSectionQuery)
  }

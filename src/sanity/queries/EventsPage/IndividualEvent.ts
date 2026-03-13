import { client } from "@/sanity/lib/client"

export interface IndividualEventSeo {
  meta: {
    title: string
    description: string
    keywords: string[]
  }
  openGraph: {
    title?: string
    description?: string
    image?: {
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
  noIndex: boolean
  noFollow: boolean
}

export const individualEventSeoQuery = `*[_type == "individualEvent" && slug.current == $slug][0].seo {
    meta {
        title,
        description,
        keywords
    },
    openGraph {
        title,
        description,
        image {
            asset -> {
                url,
                metadata {
                    dimensions {
                        width,
                        height
                    }
                }
            }
        }
    },
    noIndex,
    noFollow
}`

export const getIndividualEventSeo = async (
  slug: string,
): Promise<IndividualEventSeo | null> => {
  const seo = await client.fetch<IndividualEventSeo>(individualEventSeoQuery, {
    slug,
  })
  if (!seo) return null

  return seo
}

export interface IndividualEvent {
  title: string
  slug: string
  id: string
  category: {
    name: string
  }
  date: string
  time: string
  location: string
  address: string
  directions: string
  coordinates: {
    lat: number
    lng: number
  }
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
  description: string
  fullDescription: string
  organizer: {
    name: string
    role: string
    contact: string
  }
  capacity: number
  attendees: number
  requirements: string[]
  whatToBring: string[]
  schedule: {
    time: string
    activity: string
    description: string
  }[]
  seo: {
    structuredData: {
      jsonLd: string
    }
  }
}

export const individualEventQuery = `*[_type == "individualEvent" && slug.current == $slug][0] {
    title,
    slug,
    id,
    category -> {
        name
    },
    date,
    time,
    location,
    address,
    directions,
    coordinates {
        lat,
        lng
    },
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
    description,
    fullDescription,
    organizer,
    capacity,
    attendees,
    requirements,
    whatToBring,
    schedule,
    seo {
        structuredData {
            jsonLd
        }
    }
}`

export const getIndividualEvent = async (
  slug: string,
): Promise<IndividualEvent | null> => {
  const event = await client.fetch<IndividualEvent>(individualEventQuery, {
    slug,
  })
  if (!event) return null

  return event
}

export interface NextThreeEvents {
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
}

export const nextThreeEventsQuery = `*[_type == "individualEvent" && date > $date] | order(date asc) [0..2] {
  title,
  description,
  date,
  time,
  location,
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
}`

export const getNextThreeEvents = async (
  date: Date,
): Promise<NextThreeEvents[] | null> => {
  const events = await client.fetch<NextThreeEvents[] | null>(
    nextThreeEventsQuery,
    {
      date,
    },
  )
  return events
}

export interface PreviousEvents {
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
}

export const previousEventsQuery = `*[_type == "individualEvent" && date < $date] | order(date desc) {
  title,
  description,
  date,
  time,
  location,
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
}`

export const getPreviousEvents = async (
  date: Date,
): Promise<PreviousEvents[] | null> => {
  const events = await client.fetch<PreviousEvents[] | null>(
    previousEventsQuery,
    {
      date,
    },
  )
  return events
}

export interface UpcomingEvents {
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
}

export const upcomingEventsQuery = `*[_type == "individualEvent" && date > $date] | order(date asc)[0..2] {
  title,
  description,
  date,
  time,
  location,
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
}`

export const getUpcomingEvents = async (
  date: Date,
): Promise<UpcomingEvents[] | null> => {
  const events = await client.fetch<UpcomingEvents[] | null>(
    upcomingEventsQuery,
    {
      date,
    },
  )
  return events
}

export interface FutureEvents {
  title: string
  description: string
  category: {
    name: string
  }
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
}

export const futureEventsQuery = `*[_type == "individualEvent" && date > $date] | order(date asc) {
  title,
  description,
  category -> {
    name
  },
  date,
  time,
  location,
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
}`

export const getFutureEvents = async (
  date: Date,
): Promise<FutureEvents[] | null> => {
  const events = await client.fetch<FutureEvents[] | null>(futureEventsQuery, {
    date,
  })
  return events
}

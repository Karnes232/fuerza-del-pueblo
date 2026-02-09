import { client } from "@/sanity/lib/client"

export interface JoinPageTestimonialsSection {
  title: string
  subtitle: string
  testimonials: {
    id: string
    name: string
    role: string
    photo: {
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
    quote: string
    location?: string
  }[]
}

export const joinPageTestimonialsSectionQuery = `*[_type == "joinPageTestimonialsSection"][0] { 
  title,
  subtitle,
  testimonials[] {
    id,
    name,
    role,
    photo {
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
    quote,
    location,   
  }
}`

export const getJoinPageTestimonialsSection =
  async (): Promise<JoinPageTestimonialsSection> => {
    const data = await client.fetch(joinPageTestimonialsSectionQuery)
    return data
  }

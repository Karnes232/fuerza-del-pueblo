import { client } from "@/sanity/lib/client"
import { CandidateProfile } from "@/types/candidates.types"

export interface CouncilMembersSection {
  title: string
  subtitle: string
  candidates: CandidateProfile[]
}

export const councilMembersSectionQuery = `*[_type == "councilMembersSection"][0] {
  title,
  subtitle,
  candidates[] {
    id,
    name,
    position,
    slogan,
    bio,
    education[],
    experience[],
    achievements[],
    priorities[],
    contactEmail,
    socialMedia {
      facebook,
      X,
      linkedin,
      instagram,
    },
    image {
      alt,
      asset -> {
        url,
        metadata {
          dimensions {
            width,
            height,
          },
        },
      },
    },
  },
}`

export const getCouncilMembersSection =
  async (): Promise<CouncilMembersSection> => {
    const councilMembersSection = await client.fetch(councilMembersSectionQuery)
    return councilMembersSection
  }

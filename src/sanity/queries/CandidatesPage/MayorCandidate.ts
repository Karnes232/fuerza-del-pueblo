import { client } from "@/sanity/lib/client"
import { CandidateProfile } from "@/types/candidates.types"

export interface MayorCandidate {
  title: string
  subtitle: string
  candidate: CandidateProfile
}

export const mayorCandidateQuery = `*[_type == "mayorCandidate"][0] {
  title,
  subtitle,
  candidate {
    id,
    name,
    position,
    slogan,
    bio,
    education[],
    experience[],
    achievements[],
    proposals[],
    priorities[],
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
    socialMedia {
      facebook,
      X,
      instagram,
      linkedin,
    },
    contactEmail,
  },
}`

export const getMayorCandidate = async (): Promise<MayorCandidate> => {
  const mayorCandidate = await client.fetch(mayorCandidateQuery)
  return mayorCandidate
}

// components/CandidatesPage/MayorCandidate.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { CandidateCard } from "@/components/CandidatesPage/CandidateCard"
import { ComingSoon } from "@/components/CandidatesPage/ComingSoon"
import { MayorCandidateProps } from "@/types/candidates.types"
// import { comingSoonConfig } from "@/config/candidates.config"

export const MayorCandidate = ({
  title,
  subtitle,
  candidate,
  comingSoon,
}: MayorCandidateProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        {!comingSoon?.enabled || !candidate ? (
          <ComingSoon
            title={comingSoon?.title || ""}
            message={comingSoon?.message || ""}
            expectedDate={comingSoon?.expectedDate || ""}
            notifyEnabled={comingSoon?.notifyEnabled || false}
          />
        ) : (
          <div className="max-w-6xl mx-auto">
            <CandidateCard candidate={candidate} featured={true} />
          </div>
        )}
      </Container>
    </section>
  )
}

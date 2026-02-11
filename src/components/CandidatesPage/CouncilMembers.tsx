// components/CandidatesPage/CouncilMembers.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { CandidateCard } from "@/components/CandidatesPage/CandidateCard"
import { ComingSoon } from "@/components/CandidatesPage/ComingSoon"
import { CouncilMembersProps } from "@/types/candidates.types"
// import { comingSoonConfig } from "@/config/candidates.config"

export const CouncilMembers = ({
  title,
  subtitle,
  candidates,
  comingSoon,
}: CouncilMembersProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        {!comingSoon?.enabled || candidates.length === 0 ? (
          <ComingSoon
            title={comingSoon?.title || ""}
            message="Los candidatos a regidores serán anunciados junto con el candidato a alcalde. Estamos seleccionando un equipo diverso y comprometido con cada sector de Verón-Punta Cana."
            expectedDate={comingSoon?.expectedDate || ""}
            notifyEnabled={false}
          />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidates.map(candidate => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

// components/LeadershipPage/LeadershipTeam.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { LeaderCard } from "@/components/LeadershipPage/LeaderCard"
import { LeadershipTeamProps } from "@/types/leadership.types"

export const LeadershipTeam = ({
  title,
  subtitle,
  leaders,
}: LeadershipTeamProps) => {
  // First leader (President) is featured
  const president = leaders[0]
  const otherLeaders = leaders.slice(1)

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        {/* Featured Leader (President) */}
        {president && (
          <div className="mb-12">
            <LeaderCard leader={president} featured={true} />
          </div>
        )}

        {/* Other Leaders Grid */}
        {otherLeaders.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherLeaders.map(leader => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

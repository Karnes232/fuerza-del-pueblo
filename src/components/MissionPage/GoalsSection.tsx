// components/MissionPage/GoalsSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { GoalCard } from "@/components/MissionPage/GoalCard"
import { GoalsProps } from "@/types/mission.types"

export const GoalsSection = ({ title, subtitle, goals }: GoalsProps) => {
  // Group goals by category for better organization
  const shortTerm = goals.filter(g => g.category.includes("Corto"))
  const mediumTerm = goals.filter(g => g.category.includes("Mediano"))
  const longTerm = goals.filter(g => g.category.includes("Largo"))

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        {/* Short Term Goals */}
        {shortTerm.length > 0 && (
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {shortTerm.map(goal => (
                <GoalCard key={goal.id} goal={goal} />
              ))}
            </div>
          </div>
        )}

        {/* Medium Term Goals */}
        {mediumTerm.length > 0 && (
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {mediumTerm.map(goal => (
                <GoalCard key={goal.id} goal={goal} />
              ))}
            </div>
          </div>
        )}

        {/* Long Term Goals */}
        {longTerm.length > 0 && (
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {longTerm.map(goal => (
                <GoalCard key={goal.id} goal={goal} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

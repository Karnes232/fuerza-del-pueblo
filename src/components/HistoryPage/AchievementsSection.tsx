// components/HistoryPage/AchievementsSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { AchievementCard } from "@/components/HistoryPage/AchievementCard"
import { AchievementsProps } from "@/types/history.types"

export const AchievementsSection = ({
  title,
  subtitle,
  achievements,
}: AchievementsProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map(achievement => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </Container>
    </section>
  )
}

// components/AboutPage/AboutStats.tsx
import { Container } from "@/components/HomePage/Container"
import { StatsCard } from "@/components/AboutUsPage/StatsCard"
import { AboutStatsProps } from "@/types/about.types"

export const AboutStats = ({ stats }: AboutStatsProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => (
            <StatsCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
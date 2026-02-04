// components/HistoryPage/LegacySection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { LegacyProps } from "@/types/history.types"
import { Heart, Users, Eye, Leaf, LucideIcon } from "lucide-react"

const ICON_MAP: Record<string, LucideIcon> = {
  Heart,
  Users,
  Eye,
  Leaf,
}

export const LegacySection = ({
  title,
  subtitle,
  content,
  items,
}: LegacyProps) => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-r from-darkGreen to-primaryGreen text-white">
      <Container>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          className="text-white [&_p]:text-white/90"
        />

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-white/90 leading-relaxed text-center">
            {content}
          </p>
        </div>

        {/* Legacy Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(item => {
            const IconComponent = ICON_MAP[item.icon]
            return (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-white" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

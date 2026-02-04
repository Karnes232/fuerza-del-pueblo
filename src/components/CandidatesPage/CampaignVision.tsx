// components/CandidatesPage/CampaignVision.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { CampaignVisionProps } from "@/types/candidates.types"
import {
  TrendingUp,
  GraduationCap,
  Leaf,
  Users,
  LucideIcon,
} from "lucide-react"

const ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp,
  GraduationCap,
  Leaf,
  Users,
}

export const CampaignVision = ({
  title,
  subtitle,
  content,
  items,
}: CampaignVisionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-darkGreen to-primaryGreen text-white">
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

        {/* Vision Items Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(item => {
            const IconComponent = ICON_MAP[item.icon]
            return (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

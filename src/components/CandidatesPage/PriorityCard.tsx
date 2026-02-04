// components/CandidatesPage/PriorityCard.tsx
import {
  Zap,
  Eye,
  TrendingUp,
  Heart,
  LucideIcon,
  ArrowRight,
} from "lucide-react"
import { CampaignPriority } from "@/types/candidates.types"

const ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  Eye,
  TrendingUp,
  Heart,
}

interface PriorityCardProps {
  priority: CampaignPriority
  index: number
}

export const PriorityCard = ({ priority, index }: PriorityCardProps) => {
  const IconComponent = ICON_MAP[priority.icon]

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 relative">
      {/* Number Badge */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-primaryGreen rounded-full flex items-center justify-center shadow-lg z-10">
        <span className="text-2xl font-bold text-white">{index + 1}</span>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-primaryGreen/10 rounded-full flex items-center justify-center shrink-0">
            {IconComponent && (
              <IconComponent className="w-8 h-8 text-primaryGreen" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-charcoal mb-2">
              {priority.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-charcoal/70 leading-relaxed mb-6">
          {priority.description}
        </p>

        {/* Actions */}
        {priority.actions && priority.actions.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-3 uppercase tracking-wide">
              Acciones Inmediatas:
            </h4>
            <ul className="space-y-2">
              {priority.actions.map((action, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-charcoal/70"
                >
                  <ArrowRight className="w-4 h-4 text-primaryGreen shrink-0 mt-0.5" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

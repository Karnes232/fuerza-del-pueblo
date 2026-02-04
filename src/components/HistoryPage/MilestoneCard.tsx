// components/HistoryPage/MilestoneCard.tsx
import {
  Flag,
  MapPin,
  Building,
  Home,
  Heart,
  Users,
  LucideIcon,
} from "lucide-react"
import { Milestone } from "@/types/history.types"

const ICON_MAP: Record<string, LucideIcon> = {
  Flag,
  MapPin,
  Building,
  Home,
  Heart,
  Users,
}

interface MilestoneCardProps {
  milestone: Milestone
}

export const MilestoneCard = ({ milestone }: MilestoneCardProps) => {
  const IconComponent = ICON_MAP[milestone.icon]

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Year Header with Gradient */}
      <div className="bg-linear-to-r from-primaryGreen to-darkGreen text-white p-4 text-center">
        <div className="text-3xl font-bold">{milestone.year}</div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-primaryGreen/10 rounded-full flex items-center justify-center shrink-0">
            {IconComponent && (
              <IconComponent className="w-6 h-6 text-primaryGreen" />
            )}
          </div>
          <h3 className="text-xl font-bold text-charcoal flex-1">
            {milestone.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-charcoal/70 leading-relaxed mb-4">
          {milestone.description}
        </p>

        {/* Impact */}
        {milestone.impact && (
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-xs font-semibold text-charcoal/60 uppercase tracking-wide mb-2">
              Impacto:
            </h4>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              {milestone.impact}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

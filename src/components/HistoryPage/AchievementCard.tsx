// components/HistoryPage/AchievementCard.tsx
import {
  Users,
  GraduationCap,
  Handshake,
  Heart,
  Award,
  Leaf,
  LucideIcon,
} from "lucide-react"
import { Achievement } from "@/types/history.types"

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  GraduationCap,
  Handshake,
  Heart,
  Award,
  Leaf,
}

interface AchievementCardProps {
  achievement: Achievement
}

export const AchievementCard = ({ achievement }: AchievementCardProps) => {
  const IconComponent = ICON_MAP[achievement.icon]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primaryGreen">
      <div className="flex flex-col space-y-4">
        {/* Icon and Category */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-primaryGreen/10 rounded-full flex items-center justify-center">
            {IconComponent && (
              <IconComponent className="w-6 h-6 text-primaryGreen" />
            )}
          </div>
          <span className="text-xs font-semibold text-primaryGreen bg-primaryGreen/10 px-3 py-1 rounded-full">
            {achievement.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-charcoal">{achievement.title}</h3>

        {/* Description */}
        <p className="text-charcoal/70 text-sm leading-relaxed">
          {achievement.description}
        </p>

        {/* Date */}
        <div className="pt-3 border-t border-gray-200">
          <p className="text-xs text-charcoal/60 uppercase tracking-wide">
            {achievement.date}
          </p>
        </div>
      </div>
    </div>
  )
}

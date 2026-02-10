// components/AboutPage/PrincipleCard.tsx
import {
  Users,
  Scale,
  Leaf,
  Eye,
  Award,
  Lightbulb,
  LucideIcon,
} from "lucide-react"
import { PrincipleItem } from "@/types/about.types"

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  Scale,
  Leaf,
  Eye,
  Award,
  Lightbulb,
}

interface PrincipleCardProps {
  principle: PrincipleItem
}

export const PrincipleCard = ({ principle }: PrincipleCardProps) => {
  const IconComponent = ICON_MAP[principle.icon]

  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primaryGreen group">
      <div className="flex flex-col space-y-4">
        {/* Icon */}
        <div className="w-14 h-14 bg-primaryGreen/10 rounded-full flex items-center justify-center group-hover:bg-primaryGreen/20 transition-colors">
          {IconComponent && (
            <IconComponent className="w-7 h-7 text-primaryGreen" />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-charcoal h-12 line-clamp-2">
          {principle.title}
        </h3>

        {/* Description */}
        <p className="text-charcoal/70 leading-relaxed">
          {principle.description}
        </p>
      </div>
    </div>
  )
}

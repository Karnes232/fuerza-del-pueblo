// components/ValueCard.tsx
import { Users, Scale, TrendingUp, Eye, LucideIcon } from "lucide-react"
import { ValueCardProps } from "@/types/home.types"

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  Scale,
  TrendingUp,
  Eye,
}

export const ValueCard = ({ value }: ValueCardProps) => {
  const IconComponent = ICON_MAP[value.icon]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-primaryGreen">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div className="w-16 h-16 bg-primaryGreen/10 rounded-full flex items-center justify-center">
          {IconComponent && (
            <IconComponent className="w-8 h-8 text-primaryGreen" />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-darkGreen">{value.title}</h3>

        {/* Description */}
        <p className="text-darkGreen text-sm leading-relaxed">
          {value.description}
        </p>
      </div>
    </div>
  )
}

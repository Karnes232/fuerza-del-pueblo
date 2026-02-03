// components/EventCategoryCard.tsx
import {
  Users,
  Heart,
  GraduationCap,
  PartyPopper,
  Trash2,
  Handshake,
  LucideIcon,
} from "lucide-react"
import { EventCategoryCardProps } from "@/types/events.types"

const iconMap: Record<string, LucideIcon> = {
  Users,
  Heart,
  GraduationCap,
  PartyPopper,
  Trash2,
  Handshake,
}

export const EventCategoryCard = ({ category }: EventCategoryCardProps) => {
  const IconComponent = iconMap[category.icon]

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 group cursor-pointer"
      style={{ borderLeftColor: category.color }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${category.color}15` }}
        >
          {IconComponent && (
            <IconComponent
              className="w-8 h-8"
              style={{ color: category.color }}
            />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#1F4D2B]">{category.name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {category.description}
        </p>
      </div>
    </div>
  )
}

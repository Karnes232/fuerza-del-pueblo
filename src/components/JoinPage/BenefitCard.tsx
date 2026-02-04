// components/BenefitCard.tsx
import {
  Megaphone,
  GraduationCap,
  Users,
  Sparkles,
  Bell,
  Star,
  LucideIcon,
} from "lucide-react"
import { BenefitCardProps } from "@/types/unete.types"

const iconMap: Record<string, LucideIcon> = {
  Megaphone,
  GraduationCap,
  Users,
  Sparkles,
  Bell,
  Star,
}

export const BenefitCard = ({ benefit }: BenefitCardProps) => {
  const IconComponent = iconMap[benefit.icon]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#00A651]">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div className="w-16 h-16 bg-[#00A651]/10 rounded-full flex items-center justify-center">
          {IconComponent && (
            <IconComponent className="w-8 h-8 text-[#00A651]" />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#1F4D2B]">{benefit.title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </div>
  )
}

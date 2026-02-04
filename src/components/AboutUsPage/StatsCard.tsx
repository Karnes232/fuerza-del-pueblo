// components/AboutPage/StatsCard.tsx
import { Users, MapPin, Calendar, Heart, LucideIcon } from "lucide-react"

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  MapPin,
  Calendar,
  Heart,
}

interface StatsCardProps {
  value: string
  label: string
  icon: string
}

export const StatsCard = ({ value, label, icon }: StatsCardProps) => {
  const IconComponent = ICON_MAP[icon]

  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center group">
      <div className="flex flex-col items-center space-y-4">
        {/* Icon */}
        <div className="w-16 h-16 bg-primaryGreen/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          {IconComponent && (
            <IconComponent className="w-8 h-8 text-primaryGreen" />
          )}
        </div>

        {/* Value */}
        <div className="text-4xl md:text-5xl font-bold text-primaryGreen">
          {value}
        </div>

        {/* Label */}
        <p className="text-lg text-charcoal/70 font-semibold">{label}</p>
      </div>
    </div>
  )
}
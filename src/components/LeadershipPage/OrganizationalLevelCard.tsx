// components/LeadershipPage/OrganizationalLevelCard.tsx
import {
  Crown,
  Users,
  Briefcase,
  MapPin,
  Building,
  LucideIcon,
  ChevronRight,
} from "lucide-react"
import { OrganizationalLevel } from "@/types/leadership.types"

const ICON_MAP: Record<string, LucideIcon> = {
  Crown,
  Users,
  Briefcase,
  MapPin,
  Building,
}

interface OrganizationalLevelCardProps {
  level: OrganizationalLevel
  index: number
}

export const OrganizationalLevelCard = ({
  level,
  index,
}: OrganizationalLevelCardProps) => {
  const IconComponent = ICON_MAP[level.icon]

  return (
    <div className="relative">
      {/* Connecting Line (except for last item) */}
      {index < 4 && (
        <div className="hidden md:block absolute left-1/2 top-full w-0.5 h-8 bg-primaryGreen/30 transform -translate-x-1/2 z-0" />
      )}

      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-primaryGreen relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 bg-primaryGreen/10 rounded-full flex items-center justify-center shrink-0">
            {IconComponent && (
              <IconComponent className="w-7 h-7 text-primaryGreen" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-charcoal mb-2">
              {level.title}
            </h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              {level.description}
            </p>
          </div>
        </div>

        {/* Positions List */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-xs font-semibold text-charcoal/60 uppercase tracking-wide mb-3">
            Posiciones:
          </h4>
          <ul className="space-y-2">
            {level.positions.map((position, idx) => (
              <li
                key={idx}
                className="flex items-center text-sm text-charcoal/80"
              >
                <ChevronRight className="w-4 h-4 text-primaryGreen mr-2 shrink-0" />
                <span>{position}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

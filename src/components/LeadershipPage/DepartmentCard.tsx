// components/LeadershipPage/DepartmentCard.tsx
import {
  GraduationCap,
  Heart,
  TrendingUp,
  Leaf,
  Users,
  LucideIcon,
  User,
} from "lucide-react"
import { DepartmentInfo } from "@/types/leadership.types"

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  Heart,
  TrendingUp,
  Leaf,
  Users,
}

interface DepartmentCardProps {
  department: DepartmentInfo
}

export const DepartmentCard = ({ department }: DepartmentCardProps) => {
  const IconComponent = ICON_MAP[department.icon]

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-linear-to-r from-primaryGreen to-darkGreen p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            {IconComponent && <IconComponent className="w-6 h-6" />}
          </div>
          <h3 className="text-lg font-bold">{department.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
          {department.description}
        </p>

        {/* Coordinator */}
        {department.coordinator && (
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
            <User className="w-4 h-4 text-primaryGreen" />
            <div>
              <p className="text-xs text-charcoal/60 uppercase tracking-wide">
                Coordinador:
              </p>
              <p className="text-sm font-semibold text-charcoal">
                {department.coordinator}
              </p>
            </div>
          </div>
        )}

        {/* Responsibilities */}
        {department.responsibilities && (
          <div>
            <h4 className="text-xs font-semibold text-charcoal/60 uppercase tracking-wide mb-2">
              Responsabilidades:
            </h4>
            <ul className="space-y-2">
              {department.responsibilities.map((resp, index) => (
                <li
                  key={index}
                  className="text-sm text-charcoal/70 flex items-start"
                >
                  <span className="text-primaryGreen mr-2 mt-1">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

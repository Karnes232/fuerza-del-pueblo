// components/LeadershipPage/WingCard.tsx
import Image from "next/image"
import {
  Users,
  User,
  CheckCircle,
  LucideIcon,
  Shield,
  Building2,
  Briefcase,
  Leaf,
} from "lucide-react"
import { Wing } from "@/types/leadership.types"

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  Shield,
  Building2,
  Briefcase,
  Leaf,
}

interface WingCardProps {
  wing: Wing
}

export const WingCard = ({ wing }: WingCardProps) => {
  const IconComponent = ICON_MAP[wing.icon]

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Header Image or Gradient */}
      <div className="relative h-48 bg-linear-to-br from-primaryGreen to-darkGreen">
        {wing.image ? (
          <Image
            src={wing.image?.asset?.url}
            alt={wing.image?.alt || wing.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            {IconComponent && (
              <IconComponent className="w-24 h-24 text-white/30" />
            )}
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        {/* Title on image */}
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="text-2xl font-bold text-white">{wing.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-charcoal/70 leading-relaxed mb-4">
          {wing.description}
        </p>

        {/* Coordinator */}
        {wing.coordinator && (
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
            <User className="w-4 h-4 text-primaryGreen" />
            <div>
              <p className="text-xs text-charcoal/60 uppercase tracking-wide">
                Coordinador:
              </p>
              <p className="text-sm font-semibold text-charcoal">
                {wing.coordinator}
              </p>
            </div>
          </div>
        )}

        {/* Focus Areas */}
        {wing.focus && wing.focus.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-3 uppercase tracking-wide">
              Áreas de Enfoque:
            </h4>
            <ul className="space-y-2">
              {wing.focus.map((area, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primaryGreen shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal/80">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

// components/LeadershipPage/WingCard.tsx
import Image from "next/image"
import {
  Users,
  CheckCircle,
  LucideIcon,
  Shield,
  Building2,
  Briefcase,
  Leaf,
} from "lucide-react"
import { Wing } from "@/types/leadership.types"
import { croppedImageUrl } from "@/sanity/lib/image"

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
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-64 bg-linear-to-br from-primaryGreen to-darkGreen">
        {wing.image?.asset?.url ? (
          <Image
            src={croppedImageUrl(wing.image, 800, 800)}
            alt={wing.image?.alt || wing.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                {IconComponent ? (
                  <IconComponent className="w-12 h-12 text-white" />
                ) : (
                  <span className="text-4xl font-bold">
                    {wing.name
                      .split(" ")
                      .map(n => n[0])
                      .join("")
                      .substring(0, 2)}
                  </span>
                )}
              </div>
              <p className="text-sm opacity-75">Foto no disponible</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and Coordinator */}
        <div className="mb-4">
          <h3 className="font-bold text-charcoal mb-2 text-xl h-12">{wing.name}</h3>
          {wing.coordinator && (
            <p className="text-primaryGreen font-semibold">
              {wing.coordinator}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-charcoal/70 text-sm leading-relaxed mb-4 min-h-24">
          {wing.description}
        </p>

        {/* Focus Areas */}
        {wing.focus && wing.focus.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
              Áreas de Enfoque:
            </h4>
            <ul className="space-y-1">
              {wing.focus.map((area, index) => (
                <li
                  key={index}
                  className="text-sm text-charcoal/70 flex items-start"
                >
                  <CheckCircle className="w-4 h-4 text-primaryGreen shrink-0 mt-0.5 mr-2" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

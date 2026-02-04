// components/LeadershipPage/SectorCoordinatorCard.tsx
import { MapPin, User, Mail } from "lucide-react"
import { SectorCoordinator } from "@/types/leadership.types"

interface SectorCoordinatorCardProps {
  sector: SectorCoordinator
}

export const SectorCoordinatorCard = ({
  sector,
}: SectorCoordinatorCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primaryGreen">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-12 h-12 bg-primaryGreen/10 rounded-full flex items-center justify-center shrink-0">
          <MapPin className="w-6 h-6 text-primaryGreen" />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Sector Name */}
          <h3 className="text-lg font-bold text-charcoal mb-2">
            {sector.sector}
          </h3>

          {/* Coordinator */}
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-charcoal/60" />
            <p className="text-sm text-charcoal/80">
              <span className="font-semibold">{sector.coordinator}</span>
            </p>
          </div>

          {/* Description */}
          {sector.description && (
            <p className="text-sm text-charcoal/70 mb-3">
              {sector.description}
            </p>
          )}

          {/* Contact */}
          {sector.contact && (
            <a
              href={`mailto:${sector.contact}`}
              className="inline-flex items-center gap-2 text-sm text-primaryGreen hover:text-darkGreen transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contactar</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

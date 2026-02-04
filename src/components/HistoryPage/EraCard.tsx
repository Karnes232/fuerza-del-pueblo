// components/HistoryPage/EraCard.tsx
import Image from "next/image"
import { Era } from "@/types/history.types"
import { Calendar, ChevronRight } from "lucide-react"

interface EraCardProps {
  era: Era
  index: number
}

export const EraCard = ({ era, index }: EraCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Period Header with gradient */}
      <div className="bg-linear-to-r from-darkGreen to-primaryGreen text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <Calendar className="w-6 h-6" />
          <span className="text-lg font-bold">{era.period}</span>
        </div>
        <h3 className="text-2xl font-bold">{era.title}</h3>
      </div>

      {/* Image if available */}
      {era.image && (
        <div className="relative h-48 bg-gray-200">
          <Image
            src={era.image?.asset?.url}
            alt={era.image?.alt || era.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-charcoal/70 leading-relaxed mb-4">
          {era.description}
        </p>

        {/* Key Events */}
        {era.keyEvents && era.keyEvents.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-3 uppercase tracking-wide">
              Eventos Clave:
            </h4>
            <ul className="space-y-2">
              {era.keyEvents.map((event, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-charcoal/70"
                >
                  <ChevronRight className="w-4 h-4 text-primaryGreen shrink-0 mt-0.5" />
                  <span>{event}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Era Number Badge */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{index + 1}</span>
      </div>
    </div>
  )
}

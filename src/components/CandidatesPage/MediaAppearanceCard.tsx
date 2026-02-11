// components/CandidatesPage/MediaAppearanceCard.tsx
import { MediaAppearance } from "@/types/candidates.types"
import { Calendar, Tv, ExternalLink } from "lucide-react"

interface MediaAppearanceCardProps {
  appearance: MediaAppearance
}

export const MediaAppearanceCard = ({
  appearance,
}: MediaAppearanceCardProps) => {
  const formattedDate = new Date(appearance.date).toLocaleDateString("es-DO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const getTypeLabel = () => {
    switch (appearance.type) {
      case "interview":
        return "Entrevista"
      case "debate":
        return "Debate"
      case "press":
        return "Rueda de Prensa"
      case "event":
        return "Evento"
      default:
        return "Aparición"
    }
  }

  const getTypeBadgeColor = () => {
    switch (appearance.type) {
      case "interview":
        return "bg-blue-500"
      case "debate":
        return "bg-purple-500"
      case "press":
        return "bg-orange-500"
      case "event":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold text-charcoal flex-1">
            {appearance.title}
          </h3>
          <span
            className={`shrink-0 px-3 py-1 ${getTypeBadgeColor()} text-white text-xs font-semibold rounded-full`}
          >
            {getTypeLabel()}
          </span>
        </div>

        {/* Media and Date */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-charcoal/70">
          <div className="flex items-center gap-2">
            <Tv className="w-4 h-4 text-primaryGreen" />
            <span>{appearance.media}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primaryGreen" />
            <time dateTime={appearance.date}>{formattedDate}</time>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        {appearance.description && (
          <p className="text-charcoal/70 leading-relaxed mb-4 line-clamp-3 h-24">
            {appearance.description}
          </p>
        )}

        {/* Link */}
        {appearance.url && (
          <a
            href={appearance.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primaryGreen hover:text-darkGreen font-semibold text-sm transition-colors group"
          >
            Ver Completo
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        )}
      </div>
    </div>
  )
}

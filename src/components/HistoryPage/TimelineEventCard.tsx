// components/HistoryPage/TimelineEventCard.tsx
import Image from "next/image"
import { TimelineEvent } from "@/types/history.types"
import { Calendar, CheckCircle } from "lucide-react"

interface TimelineEventCardProps {
  event: TimelineEvent
  index: number
}

export const TimelineEventCard = ({ event, index }: TimelineEventCardProps) => {
  // Category colors
  const getCategoryColor = () => {
    switch (event.category) {
      case "national":
        return "bg-blue-500"
      case "local":
        return "bg-green-500"
      case "milestone":
        return "bg-purple-500"
      case "achievement":
        return "bg-orange-500"
      default:
        return "bg-primaryGreen"
    }
  }

  const getCategoryLabel = () => {
    switch (event.category) {
      case "national":
        return "Nacional"
      case "local":
        return "Local"
      case "milestone":
        return "Hito"
      case "achievement":
        return "Logro"
      default:
        return ""
    }
  }

  // Format date
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split("-")
    const months = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ]
    return `${months[parseInt(month) - 1]} ${year}`
  }

  return (
    <div
      className={`relative flex items-start ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:gap-8`}
    >
      {/* Date Badge - Left/Right depending on index */}
      <div className="shrink-0 w-full md:w-1/2 flex items-center">
        <div
          className={`flex items-center gap-4 ${
            index % 2 === 0
              ? "md:justify-end md:flex-row"
              : "md:justify-start md:flex-row-reverse"
          }`}
        >
          <div className="relative z-10 bg-linear-to-r from-primaryGreen to-darkGreen text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-2 min-w-[140px] justify-center">
            <Calendar className="w-5 h-5" />
            {formatDate(event.date)}
          </div>
          {/* Dot on timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primaryGreen rounded-full border-4 border-white shadow-md z-20" />
        </div>
      </div>

      {/* Content Card - Right/Left depending on index */}
      <div className="shrink-0 w-full md:w-1/2 mt-4 md:mt-0">
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden ml-12 md:ml-0">
          {/* Image if available */}
          {event.image && (
            <div className="relative h-48 bg-gray-200">
              <Image
                src={event.image?.asset?.url}
                alt={event.image?.alt || event.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {/* Category Badge */}
            {event.category && (
              <span
                className={`inline-block px-3 py-1 ${getCategoryColor()} text-white text-xs font-semibold rounded-full mb-3`}
              >
                {getCategoryLabel()}
              </span>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-charcoal mb-3">
              {event.title}
            </h3>

            {/* Description */}
            <p className="text-charcoal/70 leading-relaxed mb-4">
              {event.description}
            </p>

            {/* Highlights */}
            {event.highlights && event.highlights.length > 0 && (
              <div className="pt-4 border-t border-gray-200">
                <ul className="space-y-2">
                  {event.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-charcoal/70"
                    >
                      <CheckCircle className="w-4 h-4 text-primaryGreen shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

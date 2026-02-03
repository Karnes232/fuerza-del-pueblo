// components/PastEventCard.tsx
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users } from "lucide-react"
import { PastEventCardProps } from "@/types/events.types"

export const PastEventCard = ({ event }: PastEventCardProps) => {
  const formattedDate = new Date(event.date).toLocaleDateString("es-DO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link
      href={`/eventos/${event.slug}`}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      {event.image ? (
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        </div>
      ) : (
        <div className="h-48 bg-linear-to-br from-gray-400 to-gray-600 flex items-center justify-center">
          <span className="text-white text-4xl font-bold opacity-30">FDP</span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <time dateTime={event.date}>{formattedDate}</time>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-darkGreen mb-2 group-hover:text-primaryGreen transition-colors">
          {event.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {event.summary}
        </p>

        {/* Footer Info */}
        <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{event.attendeesCount} asistentes</span>
          </div>
        </div>

        {/* Photos Count */}
        {event.photos && event.photos.length > 0 && (
          <div className="mt-3 text-sm text-primaryGreen font-semibold">
            📷 {event.photos.length}{" "}
            {event.photos.length === 1 ? "foto" : "fotos"}
          </div>
        )}
      </div>
    </Link>
  )
}

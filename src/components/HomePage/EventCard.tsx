// components/EventCard.tsx
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { EventCardProps } from "@/types/home.types"

export const EventCard = ({ event }: EventCardProps) => {
  const formattedDate = new Date(event.date).toLocaleDateString("es-DO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}
      {event.image && (
        <div className="relative h-40 bg-gray-200 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-charcoal mb-3">{event.title}</h3>

        {/* Description */}
        <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          {/* Date */}
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <Calendar className="w-4 h-4 text-primaryGreen mt-0.5 shrink-0" />
            <span className="capitalize">{formattedDate}</span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Clock className="w-4 h-4 text-primaryGreen shrink-0" />
            <span>{event.time}</span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <MapPin className="w-4 h-4 text-primaryGreen mt-0.5 shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* RSVP/View Button */}
        {event.rsvpLink && (
          <Link
            href={event.rsvpLink}
            className="inline-flex items-center gap-2 text-[#00A651] hover:text-[#008d45] font-semibold text-sm transition-colors group"
          >
            {event.rsvpLink.includes("rsvp")
              ? "Confirmar Asistencia"
              : "Ver Detalles"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  )
}

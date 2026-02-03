// components/FeaturedEventCard.tsx
import Image from "next/image"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { RSVPButton } from "@/components/EventsPage/RSVPButton"
import { FeaturedEventCardProps } from "@/types/events.types"
import { eventCategories } from "@/config/events.config"

export const FeaturedEventCard = ({ event }: FeaturedEventCardProps) => {
  const formattedDate = new Date(event.date).toLocaleDateString("es-DO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const category = eventCategories.find(c => c.id === event.category)
  const attendancePercentage =
    event.capacity && event.attendees
      ? Math.round((event.attendees / event.capacity) * 100)
      : 0

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-[#00A651]">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-64 md:h-full bg-linear-to-br from-primaryGreen to-darkGreen">
          {event.image ? (
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-white text-6xl font-bold opacity-20">
                FDP
              </div>
            </div>
          )}

          {/* Featured Badge */}
          <div className="absolute top-4 left-4 bg-primaryGreen text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
            Evento Destacado
          </div>

          {/* Category Badge */}
          {category && (
            <div className="absolute bottom-4 left-4 bg-white/90 text-darkGreen px-3 py-1 rounded-full text-sm font-semibold">
              {category.name}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-darkGreen">
              {event.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              {event.description}
            </p>

            {/* Event Details */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-primaryGreen shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-darkGreen">Fecha</p>
                  <p className="text-gray-700 capitalize">{formattedDate}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primaryGreen shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-darkGreen">Hora</p>
                  <p className="text-gray-700">{event.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primaryGreen shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1F4D2B]">Ubicación</p>
                  <p className="text-gray-700">{event.location}</p>
                </div>
              </div>

              {/* Attendance Info */}
              {event.capacity && event.attendees !== undefined && (
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primaryGreen shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-darkGreen">Asistencia</p>
                    <p className="text-gray-700">
                      {event.attendees} de {event.capacity} confirmados
                    </p>
                    {/* Progress Bar */}
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#00A651] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${attendancePercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RSVP Button */}
          <div className="mt-8">
            <RSVPButton
              eventId={event.id}
              rsvpLink={event.rsvpLink}
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

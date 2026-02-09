// components/EventPage/EventHero.tsx
import Image from "next/image"
import { Container } from "@/components/HomePage/Container"
import { EventHeroProps } from "@/types/event.types"
import { Calendar, Clock, MapPin } from "lucide-react"

export const EventHero = ({
  title,
  category,
  date,
  time,
  location,
  image,
  status = "upcoming",
}: EventHeroProps) => {
  const formattedDate = new Date(date).toLocaleDateString("es-DO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const getStatusBadge = () => {
    switch (status) {
      case "ongoing":
        return (
          <span className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full">
            En Curso
          </span>
        )
      case "completed":
        return (
          <span className="inline-block px-4 py-2 bg-gray-500 text-white text-sm font-semibold rounded-full">
            Finalizado
          </span>
        )
      default:
        return (
          <span className="inline-block px-4 py-2 bg-primaryGreen text-white text-sm font-semibold rounded-full">
            Próximo
          </span>
        )
    }
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Category and Status Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-block px-4 py-2 bg-primaryGreen/10 text-primaryGreen text-sm font-semibold rounded-full">
              {category}
            </span>
            {getStatusBadge()}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
            {title}
          </h1>

          {/* Event Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {/* Date */}
            <div className="flex items-start gap-3 p-4 bg-[#F4F4F4] rounded-lg">
              <div className="w-10 h-10 bg-primaryGreen/10 rounded-full flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-primaryGreen" />
              </div>
              <div>
                <p className="text-xs text-charcoal/60 uppercase tracking-wide mb-1">
                  Fecha
                </p>
                <time
                  dateTime={date}
                  className="text-sm font-semibold text-charcoal capitalize"
                >
                  {formattedDate}
                </time>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-3 p-4 bg-[#F4F4F4] rounded-lg">
              <div className="w-10 h-10 bg-primaryGreen/10 rounded-full flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primaryGreen" />
              </div>
              <div>
                <p className="text-xs text-charcoal/60 uppercase tracking-wide mb-1">
                  Hora
                </p>
                <p className="text-sm font-semibold text-charcoal">{time}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 p-4 bg-[#F4F4F4] rounded-lg">
              <div className="w-10 h-10 bg-primaryGreen/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primaryGreen" />
              </div>
              <div>
                <p className="text-xs text-charcoal/60 uppercase tracking-wide mb-1">
                  Lugar
                </p>
                <p className="text-sm font-semibold text-charcoal">
                  {location}
                </p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {image ? (
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image.asset.url}
                alt={image.alt || title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl bg-linear-to-br from-primaryGreen to-darkGreen flex items-center justify-center">
              <div className="text-center text-white p-8">
                <Calendar className="w-24 h-24 mx-auto mb-4 opacity-50" />
                <p className="text-2xl font-bold">Evento Fuerza del Pueblo</p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

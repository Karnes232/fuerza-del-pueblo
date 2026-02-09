// components/EventPage/EventLocation.tsx
import { Container } from "@/components/HomePage/Container"
import { EventLocationProps } from "@/types/event.types"
import { MapPin, Navigation } from "lucide-react"

export const EventLocation = ({
  location,
  address,
  coordinates,
  directions,
}: EventLocationProps) => {
  const getGoogleMapsUrl = () => {
    if (coordinates) {
      return `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`
    }
    if (address) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-8">
            Ubicación del Evento
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Details */}
            <div className="space-y-6">
              {/* Location Name */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primaryGreen/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primaryGreen" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-1">
                    {location}
                  </h3>
                  {address && <p className="text-charcoal/70">{address}</p>}
                </div>
              </div>

              {/* Directions */}
              {directions && (
                <div className="bg-[#F4F4F4] rounded-lg p-6">
                  <h4 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-primaryGreen" />
                    Cómo Llegar
                  </h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {directions}
                  </p>
                </div>
              )}

              {/* Google Maps Link */}
              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primaryGreen text-white font-semibold rounded-lg hover:bg-primaryGreen/90 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Abrir en Google Maps
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-80 md:h-full min-h-[320px] bg-gray-200 rounded-lg overflow-hidden">
              {coordinates ? (
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de ${location}`}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="text-center text-charcoal/40">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Mapa no disponible</p>
                    <p className="text-sm mt-2">
                      Usa el enlace para ver en Google Maps
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// components/EventPage/EventDetails.tsx
import { Container } from "@/components/HomePage/Container"
import { EventDetailsProps } from "@/types/event.types"
import { User, Users, CheckCircle, Package } from "lucide-react"

export const EventDetails = ({
  description,
  fullDescription,
  organizer,
  capacity,
  attendees,
  requirements,
  whatToBring,
}: EventDetailsProps) => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content - 2 columns */}
            <div className="md:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">
                  Acerca del Evento
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                  {description}
                </p>
                {fullDescription && (
                  <div
                    className="prose prose-lg max-w-none text-charcoal/70"
                    dangerouslySetInnerHTML={{ __html: fullDescription }}
                  />
                )}
              </div>

              {/* Requirements */}
              {requirements && requirements.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primaryGreen" />
                    Requisitos
                  </h3>
                  <ul className="space-y-2">
                    {requirements.map((req, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-charcoal/70"
                      >
                        <CheckCircle className="w-5 h-5 text-primaryGreen shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What to Bring */}
              {whatToBring && whatToBring.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                    <Package className="w-6 h-6 text-primaryGreen" />
                    Qué Traer
                  </h3>
                  <ul className="space-y-2">
                    {whatToBring.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-charcoal/70"
                      >
                        <CheckCircle className="w-5 h-5 text-primaryGreen shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Capacity Info */}
              {capacity && (
                <div className="bg-[#F4F4F4] rounded-lg p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primaryGreen" />
                    Capacidad
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-charcoal/60 mb-1">
                        Capacidad Total
                      </p>
                      <p className="text-2xl font-bold text-charcoal">
                        {capacity} personas
                      </p>
                    </div>
                    {attendees !== undefined && (
                      <div>
                        <p className="text-sm text-charcoal/60 mb-1">
                          Asistentes Confirmados
                        </p>
                        <p className="text-xl font-bold text-primaryGreen">
                          {attendees}
                        </p>
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div
                            className="bg-primaryGreen h-2 rounded-full transition-all duration-300"
                            style={{
                              width: `${Math.min((attendees / capacity) * 100, 100)}%`,
                            }}
                          />
                        </div>
                        <p className="text-xs text-charcoal/60 mt-1">
                          {capacity - attendees > 0
                            ? `${capacity - attendees} espacios disponibles`
                            : "Evento lleno"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Organizer Info */}
              {organizer && (
                <div className="bg-[#F4F4F4] rounded-lg p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-primaryGreen" />
                    Organizado Por
                  </h3>
                  <div className="space-y-2">
                    <p className="font-semibold text-charcoal">
                      {organizer.name}
                    </p>
                    {organizer.role && (
                      <p className="text-sm text-charcoal/70">
                        {organizer.role}
                      </p>
                    )}
                    {organizer.contact && (
                      <p className="text-sm text-charcoal/70">
                        {organizer.contact}
                      </p>
                    )}
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

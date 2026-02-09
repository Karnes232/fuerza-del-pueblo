// components/EventPage/EventRSVP.tsx
"use client"

import { useState } from "react"
import { Container } from "@/components/HomePage/Container"
import { EventRSVPProps } from "@/types/event.types"
import { CheckCircle, AlertCircle } from "lucide-react"

export const EventRSVP = ({
  eventId,
  eventTitle,
  eventDate,
  rsvpEnabled,
  capacity,
  attendees,
}: EventRSVPProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    comments: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const isFull = capacity && attendees ? attendees >= capacity : false

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Por favor completa todos los campos requeridos")
      return
    }

    // Here you would typically send to your backend
    console.log("RSVP Submission:", {
      eventId,
      ...formData,
    })

    // Simulate success
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!rsvpEnabled) {
    return (
      <section className="py-12 bg-[#F4F4F4]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <AlertCircle className="w-12 h-12 text-charcoal/40 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">
                Inscripción No Disponible
              </h3>
              <p className="text-charcoal/70">
                La inscripción para este evento no está disponible en este
                momento. Para más información, contáctanos directamente.
              </p>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  if (isFull) {
    return (
      <section className="py-12 bg-[#F4F4F4]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">
                Evento Lleno
              </h3>
              <p className="text-charcoal/70">
                Lo sentimos, este evento ha alcanzado su capacidad máxima.
                Mantente atento a nuestros próximos eventos.
              </p>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-12 bg-[#F4F4F4]">
      <Container>
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-2">
                ¡Confirmación Exitosa!
              </h3>
              <p className="text-charcoal/70 mb-6">
                Tu asistencia ha sido confirmada. Te hemos enviado un correo de
                confirmación con los detalles del evento.
              </p>
              <div className="bg-[#F4F4F4] rounded-lg p-4">
                <p className="text-sm text-charcoal/70">
                  <strong>Evento:</strong> {eventTitle}
                </p>
                <p className="text-sm text-charcoal/70">
                  <strong>Nombre:</strong> {formData.name}
                </p>
                <p className="text-sm text-charcoal/70">
                  <strong>Invitados:</strong> {formData.guests}
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-charcoal mb-2">
                Confirma tu Asistencia
              </h2>
              <p className="text-charcoal/70 mb-6">
                Completa el formulario para confirmar tu participación en este
                evento.
              </p>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-charcoal mb-2"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-charcoal mb-2"
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-charcoal mb-2"
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                    placeholder="(809) 555-1234"
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-semibold text-charcoal mb-2"
                  >
                    Número de Invitados
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                  >
                    <option value="1">Solo yo</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5+ personas</option>
                  </select>
                </div>

                {/* Comments */}
                <div>
                  <label
                    htmlFor="comments"
                    className="block text-sm font-semibold text-charcoal mb-2"
                  >
                    Comentarios (Opcional)
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                    placeholder="¿Algo que quieras que sepamos?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primaryGreen text-white font-semibold rounded-lg hover:bg-primaryGreen/90 transition-colors shadow-md hover:shadow-lg"
                >
                  Confirmar Asistencia
                </button>
              </form>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

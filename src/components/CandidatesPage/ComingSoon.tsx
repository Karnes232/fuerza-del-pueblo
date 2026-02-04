// components/CandidatesPage/ComingSoon.tsx
"use client"

import { useState } from "react"
import { Container } from "@/components/HomePage/Container"
import { ComingSoonProps } from "@/types/candidates.types"
import { Calendar, Bell, CheckCircle } from "lucide-react"

export const ComingSoon = ({
  title,
  message,
  expectedDate,
  notifyEnabled = false,
}: ComingSoonProps) => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send to your backend
    console.log("Subscribed:", email)
    setSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-primaryGreen/10 rounded-full flex items-center justify-center">
              <Calendar className="w-12 h-12 text-primaryGreen" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            {title}
          </h2>

          {/* Message */}
          <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
            {message}
          </p>

          {/* Expected Date */}
          {expectedDate && (
            <div className="inline-block bg-primaryGreen/10 px-6 py-3 rounded-full mb-8">
              <p className="text-primaryGreen font-semibold">
                Fecha estimada: {expectedDate}
              </p>
            </div>
          )}

          {/* Notification Signup */}
          {notifyEnabled && !subscribed && (
            <div className="bg-[#F4F4F4] rounded-lg p-8 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-primaryGreen" />
                <h3 className="text-lg font-semibold text-charcoal">
                  Recibe una Notificación
                </h3>
              </div>
              <p className="text-sm text-charcoal/70 mb-4">
                Sé el primero en conocer cuando anunciemos nuestros candidatos
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryGreen"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-primaryGreen text-white font-semibold rounded-lg hover:bg-primaryGreen/90 transition-colors"
                >
                  Notificarme
                </button>
              </form>
            </div>
          )}

          {/* Success Message */}
          {subscribed && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <p className="text-green-800 font-semibold">
                ¡Gracias! Te notificaremos cuando hagamos el anuncio.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

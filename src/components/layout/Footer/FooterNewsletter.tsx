// components/FooterNewsletter.tsx
"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { FooterNewsletterProps } from "@/types/footer.types"
import { footerContent } from "@/config/footer.config"

export const FooterNewsletter = ({ onSubmit }: FooterNewsletterProps) => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setMessage("Por favor ingresa un email válido")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    try {
      // Call the onSubmit prop if provided
      if (onSubmit) {
        await onSubmit(email)
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      setMessage("¡Gracias por suscribirte!")
      setEmail("")
    } catch (error) {
      setMessage("Hubo un error. Intenta de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-3 min-w-0 w-full">
      <p className="text-white/70 text-sm">
        {footerContent.newsletterDescription}
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-2 lg:flex-col xl:flex-row">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={footerContent.newsletterPlaceholder}
            className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:border-primaryGreen transition-colors"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-primaryGreen text-white rounded-md hover:bg-primaryGreen/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span className="hidden lg:inline">
              {footerContent.newsletterButton}
            </span>
          </button>
        </div>
        {message && (
          <p
            className={`text-sm ${message.includes("Gracias") ? "text-green-400" : "text-red-400"}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  )
}

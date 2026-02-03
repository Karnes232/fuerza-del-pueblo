// components/ContactForm.tsx
"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { FormInput } from "@/components/ContactPage/FormInput"
import { FormTextarea } from "@/components/ContactPage/FormTextarea"
import { ContactFormProps, ContactFormData } from "@/types/contact.types"

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Correo electrónico inválido"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log("Form data:", formData)
      }

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setErrors({})
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <FormInput
        name="name"
        label="Nombre Completo"
        placeholder="Tu nombre"
        required
        value={formData.name}
        onChange={value => updateField("name", value)}
        error={errors.name}
      />

      {/* Email */}
      <FormInput
        name="email"
        label="Correo Electrónico"
        type="email"
        placeholder="tu@email.com"
        required
        value={formData.email}
        onChange={value => updateField("email", value)}
        error={errors.email}
      />

      {/* Phone (Optional) */}
      <FormInput
        name="phone"
        label="Teléfono (Opcional)"
        type="tel"
        placeholder="+1 (809) 555-1234"
        value={formData.phone || ""}
        onChange={value => updateField("phone", value)}
      />

      {/* Subject */}
      <FormInput
        name="subject"
        label="Asunto"
        placeholder="¿En qué podemos ayudarte?"
        required
        value={formData.subject}
        onChange={value => updateField("subject", value)}
        error={errors.subject}
      />

      {/* Message */}
      <FormTextarea
        name="message"
        label="Mensaje"
        placeholder="Escribe tu mensaje aquí..."
        required
        rows={6}
        value={formData.message}
        onChange={value => updateField("message", value)}
        error={errors.message}
      />

      {/* Submit Status Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo
            pronto.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">
            Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#00A651] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#008d45] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar Mensaje
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  )
}

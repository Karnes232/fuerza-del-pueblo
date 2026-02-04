// components/JoinForm.tsx
"use client"

import { useState } from "react"
import * as Icons from "lucide-react"
import { FormInput } from "@/components/ContactPage/FormInput"
import { FormTextarea } from "@/components/ContactPage/FormTextarea"
import { FormCheckbox } from "@/components/JoinPage/FormCheckbox"
import { JoinFormProps, JoinFormData } from "@/types/unete.types"
import {
  membershipTiers,
  interestAreas,
  availabilityOptions,
} from "@/config/unete.config"

export const JoinForm = ({ onSubmit }: JoinFormProps) => {
  const [formData, setFormData] = useState<JoinFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    membershipType: "simpatizante",
    interests: [],
    availability: [],
    motivation: "",
    agreeToTerms: false,
    receiveUpdates: true,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log("Form submitted:", formData)
      }

      setSubmitStatus("success")
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        address: "",
        city: "",
        membershipType: "simpatizante",
        interests: [],
        availability: [],
        motivation: "",
        agreeToTerms: false,
        receiveUpdates: true,
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const toggleAvailability = (option: string) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(option)
        ? prev.availability.filter(a => a !== option)
        : [...prev.availability, option],
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          name="firstName"
          label="Nombre"
          required
          value={formData.firstName}
          onChange={value => setFormData({ ...formData, firstName: value })}
        />
        <FormInput
          name="lastName"
          label="Apellido"
          required
          value={formData.lastName}
          onChange={value => setFormData({ ...formData, lastName: value })}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          name="email"
          label="Correo Electrónico"
          type="email"
          required
          value={formData.email}
          onChange={value => setFormData({ ...formData, email: value })}
        />
        <FormInput
          name="phone"
          label="Teléfono"
          type="tel"
          required
          value={formData.phone}
          onChange={value => setFormData({ ...formData, phone: value })}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-[#1F4D2B]">
            Fecha de Nacimiento <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            required
            value={formData.dateOfBirth}
            onChange={e =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          />
        </div>
        <FormInput
          name="city"
          label="Ciudad"
          required
          value={formData.city}
          onChange={value => setFormData({ ...formData, city: value })}
        />
      </div>

      <FormInput
        name="address"
        label="Dirección"
        required
        value={formData.address}
        onChange={value => setFormData({ ...formData, address: value })}
      />

      {/* Membership Type */}
      <div>
        <label className="block text-sm font-semibold text-[#1F4D2B] mb-3">
          Tipo de Membresía <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {membershipTiers.map(tier => (
            <label
              key={tier.id}
              className="flex items-start gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="membershipType"
                value={tier.id}
                checked={formData.membershipType === tier.id}
                onChange={e =>
                  setFormData({
                    ...formData,
                    membershipType: e.target.value as any,
                  })
                }
                className="mt-1 w-5 h-5 text-[#00A651] border-gray-300 focus:ring-2 focus:ring-[#00A651]"
              />
              <div>
                <div className="font-semibold text-[#1F4D2B]">{tier.name}</div>
                <div className="text-sm text-gray-600">{tier.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Interest Areas */}
      <div>
        <label className="block text-sm font-semibold text-[#1F4D2B] mb-3">
          Áreas de Interés (selecciona todas las que apliquen)
        </label>
        <div className="grid sm:grid-cols-2 gap-3">
          {interestAreas.map(interest => (
            <FormCheckbox
              key={interest}
              name={`interest-${interest}`}
              label={interest}
              checked={formData.interests.includes(interest)}
              onChange={() => toggleInterest(interest)}
            />
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <label className="block text-sm font-semibold text-[#1F4D2B] mb-3">
          Disponibilidad (selecciona todas las que apliquen)
        </label>
        <div className="space-y-3">
          {availabilityOptions.map(option => (
            <FormCheckbox
              key={option}
              name={`availability-${option}`}
              label={option}
              checked={formData.availability.includes(option)}
              onChange={() => toggleAvailability(option)}
            />
          ))}
        </div>
      </div>

      {/* Motivation */}
      <FormTextarea
        name="motivation"
        label="¿Por qué quieres unirte? (Opcional)"
        placeholder="Comparte tu motivación..."
        rows={4}
        value={formData.motivation}
        onChange={value => setFormData({ ...formData, motivation: value })}
      />

      {/* Terms and Updates */}
      <div className="space-y-3">
        <FormCheckbox
          name="agreeToTerms"
          label="Acepto los términos y condiciones y la política de privacidad"
          checked={formData.agreeToTerms}
          onChange={checked =>
            setFormData({ ...formData, agreeToTerms: checked })
          }
          required
        />

        <FormCheckbox
          name="receiveUpdates"
          label="Deseo recibir actualizaciones y noticias del partido"
          checked={formData.receiveUpdates}
          onChange={checked =>
            setFormData({ ...formData, receiveUpdates: checked })
          }
        />
      </div>

      {/* Submit Status */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            ¡Registro exitoso! Te hemos enviado un correo de confirmación.
            ¡Bienvenido a Fuerza del Pueblo!
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">
            Hubo un error al procesar tu registro. Por favor, intenta de nuevo.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#00A651] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#008d45] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-lg"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Procesando...
          </>
        ) : (
          <>
            <Icons.UserPlus className="w-5 h-5" />
            Completar Registro
          </>
        )}
      </button>
    </form>
  )
}

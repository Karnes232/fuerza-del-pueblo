// components/FooterContact.tsx
import { FooterContactProps } from "@/types/footer.types"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

/** Normalize to digits only for tel: and wa.me links */
function normalizePhone(value: string): string {
  return value.replace(/\D/g, "")
}

/** Format for display, e.g. (809) 555-1234 or +1 (809) 555-1234 */
function formatPhoneDisplay(value: string): string {
  const digits = normalizePhone(value)
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`
  }
  if (digits.length > 10) {
    return `+${digits.slice(0, digits.length - 10)} (${digits.slice(-10, -7)}) ${digits.slice(-7, -4)}-${digits.slice(-4)}`
  }
  // Fallback: group in threes
  return digits.replace(/(\d{3})(?=\d)/g, "$1 ").trim()
}

export const FooterContact = ({
  address,
  email,
  telephone,
}: FooterContactProps) => {
  const telHref = normalizePhone(telephone)
  const displayPhone = formatPhoneDisplay(telephone)

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-primaryGreen shrink-0 mt-0.5" />
        <div>
          <p className="text-white/60 text-xs mb-0.5">Dirección</p>
          <p className="text-white/90 text-sm">{address}</p>
        </div>
      </div>
      <a
        href={`tel:${telHref}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-80 transition-opacity"
      >
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-primaryGreen shrink-0 mt-0.5" />
          <div>
            <p className="text-white/60 text-xs mb-0.5">Teléfono</p>
            <p className="text-white/90 text-sm">{displayPhone}</p>
          </div>
        </div>
      </a>
      <a
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-80 transition-opacity"
      >
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-primaryGreen shrink-0 mt-0.5" />
          <div>
            <p className="text-white/60 text-xs mb-0.5">Email</p>
            <p className="text-white/90 text-sm">{email}</p>
          </div>
        </div>
      </a>
      <a
        href={`https://wa.me/${telHref}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-80 transition-opacity"
      >
        <div className="flex items-start gap-3">
          <MessageCircle className="w-5 h-5 text-primaryGreen shrink-0 mt-0.5" />
          <div>
            <p className="text-white/60 text-xs mb-0.5">WhatsApp</p>
            <p className="text-white/90 text-sm">{displayPhone}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

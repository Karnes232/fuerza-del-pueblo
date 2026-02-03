// components/RSVPButton.tsx
import Link from "next/link"
import { Check } from "lucide-react"
import { RSVPButtonProps } from "@/types/events.types"

export const RSVPButton = ({
  eventId,
  rsvpLink,
  variant = "primary",
  size = "md",
}: RSVPButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"

  const variantClasses = {
    primary: "bg-[#00A651] text-white hover:bg-[#008d45]",
    secondary:
      "bg-white text-[#00A651] border-2 border-[#00A651] hover:bg-[#00A651] hover:text-white",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  if (!rsvpLink) {
    return null
  }

  return (
    <Link
      href={rsvpLink}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      <Check className="w-5 h-5" />
      Confirmar Asistencia
    </Link>
  )
}

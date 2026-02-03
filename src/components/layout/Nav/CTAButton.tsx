// components/CTAButton.tsx
import Link from "next/link"
import { CTAButtonProps } from "@/types/navbar.types"

export const CTAButton = ({
  label,
  href,
  onClick,
  className = "",
}: CTAButtonProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`bg-primaryGreen text-white px-6 py-2.5 rounded-md font-semibold hover:bg-primaryGreen/80 transition-colors duration-200 shadow-md ${className}`}
    >
      {label}
    </Link>
  )
}

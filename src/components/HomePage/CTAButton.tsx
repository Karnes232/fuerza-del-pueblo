// components/CTAButton.tsx
import Link from "next/link"
import * as Icons from "lucide-react"
import { CTAButtonProps } from "@/types/home.types"

export const CTAButton = ({
  text,
  href,
  variant = "primary",
  size = "md",
  icon,
  className = "",
}: CTAButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"

  const variantClasses = {
    primary: "bg-primaryGreen text-white hover:bg-primaryGreen/80",
    secondary: "bg-darkGreen text-white hover:bg-darkGreen/80",
    outline:
      "border-2 border-primaryGreen text-primaryGreen hover:bg-primaryGreen hover:text-white",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const IconComponent = icon ? (Icons[icon as keyof typeof Icons] as any) : null

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {text}
      {IconComponent && <IconComponent className="w-5 h-5" />}
    </Link>
  )
}

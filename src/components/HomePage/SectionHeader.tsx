// components/SectionHeader.tsx
import { SectionHeaderProps } from "@/types/home.types"

export const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#1F4D2B] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

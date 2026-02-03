// components/SocialButton.tsx
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Music,
  LucideIcon,
  X,
} from "lucide-react"
import { SocialButtonProps } from "@/types/contact.types"

const iconMap: Record<string, LucideIcon> = {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Music,
  X,
}

export const SocialButton = ({ social }: SocialButtonProps) => {
  const IconComponent = iconMap[social.icon]

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-primaryGreen"
    >
      <div className="w-16 h-16 bg-primaryGreen/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primaryGreen transition-colors">
        {IconComponent && (
          <IconComponent className="w-8 h-8 text-primaryGreen group-hover:text-white transition-colors" />
        )}
      </div>
      <span className="text-sm font-semibold text-darkGreen group-hover:text-primaryGreen transition-colors">
        {social.platform}
      </span>
    </a>
  )
}

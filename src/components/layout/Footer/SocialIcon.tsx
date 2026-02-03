// components/SocialIcon.tsx
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Share2,
  X,
  Youtube,
} from "lucide-react"
import { SocialIconProps } from "@/types/footer.types"

const ICON_MAP = {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Share2,
  X,
  Youtube,
} as const

type IconName = keyof typeof ICON_MAP

export const SocialIcon = ({ href, icon, ariaLabel }: SocialIconProps) => {
  const IconComponent = ICON_MAP[icon as IconName] ?? Share2

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="w-10 h-10 bg-white/10 hover:bg-[#00A651] rounded-full flex items-center justify-center transition-colors duration-200 group"
    >
      {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
    </a>
  )
}

// components/SocialIcon.tsx
import * as Icons from "lucide-react"
import { SocialIconProps } from "@/types/footer.types"

export const SocialIcon = ({
  platform,
  href,
  icon,
  ariaLabel,
}: SocialIconProps) => {
  // Dynamically get the icon component
  const IconComponent = Icons[icon as keyof typeof Icons] as any

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

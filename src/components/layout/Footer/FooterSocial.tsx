// components/FooterSocial.tsx
import { SocialIcon } from "@/components/layout/Footer/SocialIcon"
import { FooterSocialProps } from "@/types/footer.types"

export const FooterSocial = ({
  socials,
  title = "Síguenos",
}: FooterSocialProps) => {
  return (
    <div className="space-y-4">
      {title && <h4 className="text-white font-medium text-sm">{title}</h4>}
      <div className="flex gap-3 flex-wrap">
        {socials.map(social => (
          <SocialIcon
            key={social._key ?? social.platform}
            platform={social.platform}
            href={social.href}
            icon={social.icon}
            ariaLabel={social.ariaLabel}
          />
        ))}
      </div>
    </div>
  )
}

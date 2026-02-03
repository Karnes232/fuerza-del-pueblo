// components/FooterTop.tsx
import { FooterColumn } from "@/components/layout/Footer/FooterColumn"
import { FooterLogo } from "@/components/layout/Footer/FooterLogo"
import { FooterNav } from "@/components/layout/Footer/FooterNav"
import { FooterContact } from "@/components/layout/Footer/FooterContact"
import { FooterSocial } from "@/components/layout/Footer/FooterSocial"
import { FooterNewsletter } from "@/components/layout/Footer/FooterNewsletter"
import {
  quickLinks,
  partyLinks,
  socialLinks,
  contactInfo,
  footerContent,
} from "@/config/footer.config"

export const FooterTop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-12">
      {/* Column 1: About */}
      <div className="space-y-4">
        <FooterLogo />
        <p className="text-primaryGreen font-semibold text-sm italic">
          {footerContent.tagline}
        </p>
        <p className="text-white/70 text-sm">{footerContent.description}</p>
      </div>

      {/* Column 2: Quick Links */}
      <FooterColumn title="Enlaces Rápidos">
        <FooterNav links={quickLinks} title="Enlaces Rápidos" />
      </FooterColumn>

      {/* Column 3: Contact */}
      <FooterColumn title="Contacto">
        <FooterContact contacts={contactInfo} />
      </FooterColumn>

      {/* Column 4: Connect */}
      <FooterColumn title="Conéctate">
        <FooterSocial socials={socialLinks} />
        <div className="pt-4">
          <FooterNewsletter />
        </div>
      </FooterColumn>
    </div>
  )
}

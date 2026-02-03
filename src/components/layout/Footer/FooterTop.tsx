// components/FooterTop.tsx
import { FooterColumn } from "@/components/layout/Footer/FooterColumn"
import { FooterLogo } from "@/components/layout/Footer/FooterLogo"
import { FooterNav } from "@/components/layout/Footer/FooterNav"
import { FooterContact } from "@/components/layout/Footer/FooterContact"
import { FooterSocial } from "@/components/layout/Footer/FooterSocial"
import { FooterNewsletter } from "@/components/layout/Footer/FooterNewsletter"
import { quickLinks } from "@/config/footer.config"
import { FooterProps } from "@/types/footer.types"

export const FooterTop = ({ generalLayout }: FooterProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-12">
      {/* Column 1: About */}
      <div className="space-y-4">
        <FooterLogo logo={generalLayout.logo} />
        <p className="text-primaryGreen font-semibold text-sm italic">
          {generalLayout.tagline}
        </p>
        <p className="text-white/70 text-sm">{generalLayout.description}</p>
      </div>

      {/* Column 2: Quick Links */}
      <FooterColumn title="Enlaces Rápidos">
        <FooterNav links={quickLinks} title="Enlaces Rápidos" />
      </FooterColumn>

      {/* Column 3: Contact */}
      <FooterColumn title="Contacto">
        <FooterContact
          address={generalLayout.address}
          email={generalLayout.email}
          telephone={generalLayout.telephone}
        />
      </FooterColumn>

      {/* Column 4: Connect */}
      <FooterColumn title="Conéctate">
        <FooterSocial socials={generalLayout.socialLinks} />
        <div className="pt-4">
          <FooterNewsletter />
        </div>
      </FooterColumn>
    </div>
  )
}

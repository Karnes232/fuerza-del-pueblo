// components/FooterBottom.tsx
import { FooterLink } from "@/components/layout/Footer/FooterLink"
import { legalLinks, footerContent } from "@/config/footer.config"

export const FooterBottom = () => {
  return (
    <div className="border-t border-white/10 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-white/60 text-sm text-center md:text-left">
          {footerContent.copyright}
        </p>

        {/* Legal Links */}
        <div className="flex gap-6 items-center">
          {legalLinks.map(link => (
            <FooterLink
              key={link.href}
              href={link.href}
              label={link.label}
              className="text-sm"
            />
          ))}
        </div>
      </div>

      {/* Optional: Built by credit */}
      <div className="mt-4 text-center">
        <p className="text-white/40 text-xs">
          Desarrollado con <span className="text-primaryGreen">♥</span> para el
          pueblo
        </p>
      </div>
    </div>
  )
}

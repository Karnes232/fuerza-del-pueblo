// components/FooterBottom.tsx
import { FooterLink } from "@/components/layout/Footer/FooterLink"
import { legalLinks, footerContent } from "@/config/footer.config"
import Image from "next/image"
import Script from "next/script"
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Atribución del desarrollo del sitio web",
  inLanguage: "es",
  creator: {
    "@type": "Organization",
    "@id": "https://www.dr-webstudio.com/#organization",
    name: "DR Web Studio",
    url: "https://www.dr-webstudio.com/es",
  },
}

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
        <p className="text-white/40 text-xs flex flex-col sm:flex-row items-center gap-2 flex-1 justify-center">
          <span>
            Desarrollado con <span className="text-primaryGreen">♥</span> para
            el pueblo
          </span>
          <a
            href="https://www.dr-webstudio.com/es"
            className="flex items-center gap-1 hover:text-orange-500 cursor-pointer"
          >
            <Image
              src="https://cdn.sanity.io/images/6r8ro1r9/production/81a1e4e2b8efbeb881d9ef9dd1624377bcd2f6d0-512x487.png"
              alt="DR Web Studio"
              className="h-4"
              width={16}
              height={16}
            />
            DR Web Studio
          </a>
          <span className="hidden sm:inline"> —</span> Desarrollo Web en
          República Dominicana
        </p>
      </div>
      <Script
        id="dr-webstudio-builtby-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </div>
  )
}

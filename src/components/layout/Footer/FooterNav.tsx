// components/FooterNav.tsx
import { FooterLink } from "@/components/layout/Footer/FooterLink"
import { FooterNavProps } from "@/types/footer.types"

export const FooterNav = ({ links, title }: FooterNavProps) => {
  return (
    <nav className="space-y-3">
      {links.map(link => (
        <div key={link.href}>
          <FooterLink href={link.href} label={link.label} />
        </div>
      ))}
    </nav>
  )
}

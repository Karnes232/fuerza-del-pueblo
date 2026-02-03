// types/footer.types.ts

export interface FooterLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  href: string
  icon: string // Icon name from lucide-react
  ariaLabel: string
}

export interface ContactInfo {
  type: "address" | "phone" | "email" | "whatsapp"
  label: string
  value: string
  href?: string
  icon: string
}

export interface FooterColumn {
  title: string
  links?: FooterLink[]
  content?: React.ReactNode
}

export interface FooterProps {
  className?: string
}

export interface FooterLogoProps {
  onClick?: () => void
}

export interface FooterLinkProps {
  href: string
  label: string
  external?: boolean
  className?: string
}

export interface SocialIconProps {
  platform: string
  href: string
  icon: string
  ariaLabel: string
}

export interface FooterNewsletterProps {
  onSubmit?: (email: string) => void
}

export interface FooterContactProps {
  contacts: ContactInfo[]
}

export interface FooterNavProps {
  links: FooterLink[]
  title: string
}

export interface FooterSocialProps {
  socials: SocialLink[]
  title?: string
}

export interface FooterColumnProps {
  title: string
  children: React.ReactNode
  className?: string
}

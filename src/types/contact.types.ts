// types/contact.types.ts

export interface ContactMethod {
  id: string
  type: "phone" | "email" | "address" | "whatsapp" | "hours"
  icon: string
  label: string
  value: string
  href?: string
  description?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}

export interface FormField {
  name: string
  label: string
  type: "text" | "email" | "tel" | "textarea" | "select"
  placeholder?: string
  required?: boolean
  options?: string[]
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface ContactHeroProps {
  title: string
  subtitle?: string
  description: string
}

export interface ContactInfoSectionProps {
  title: string
  contacts: ContactMethod[]
}

export interface ContactFormSectionProps {
  title: string
  subtitle?: string
  onSubmit?: (data: ContactFormData) => Promise<void>
}

export interface LocationMapSectionProps {
  title: string
  address: string
  mapUrl?: string
  embedUrl?: string
}

export interface SocialLinksSectionProps {
  title: string
  subtitle?: string
  socials: SocialLink[]
}

export interface ContactCardProps {
  contact: ContactMethod
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>
}

export interface FormInputProps {
  name: string
  label: string
  type?: "text" | "email" | "tel"
  placeholder?: string
  required?: boolean
  value: string
  onChange: (value: string) => void
  error?: string
}

export interface FormTextareaProps {
  name: string
  label: string
  placeholder?: string
  required?: boolean
  value: string
  onChange: (value: string) => void
  error?: string
  rows?: number
}

export interface MapEmbedProps {
  embedUrl: string
  address: string
}

export interface SocialButtonProps {
  social: SocialLink
}

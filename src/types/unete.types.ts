// types/unete.types.ts

export interface Benefit {
  id: string
  title: string
  description: string
  icon: string
}

export interface MembershipTier {
  id: string
  name: string
  description: string
  price: string
  benefits: string[]
  requirements: string[]
  color: string
  recommended?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  photo?: string
  quote: string
  location?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface JoinFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  city: string
  membershipType: "simpatizante" | "militante" | "voluntario"
  interests: string[]
  availability: string[]
  motivation: string
  agreeToTerms: boolean
  receiveUpdates: boolean
}

export interface UneteHeroProps {
  title: string
  subtitle?: string
  description: string
  benefits: string[]
  ctaText: string
  ctaLink?: string
}

export interface WhyJoinSectionProps {
  title: string
  subtitle?: string
  benefits: Benefit[]
}

export interface MembershipTiersSectionProps {
  title: string
  subtitle?: string
  tiers: MembershipTier[]
}

export interface JoinFormSectionProps {
  title: string
  subtitle?: string
  onSubmit?: (data: JoinFormData) => Promise<void>
}

export interface TestimonialsSectionProps {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
}

export interface FAQSectionProps {
  title: string
  subtitle?: string
  faqs: FAQItem[]
}

export interface UneteCTAProps {
  title: string
  description: string
  actions: {
    title: string
    description: string
    icon: string
    href: string
  }[]
}

export interface BenefitCardProps {
  benefit: Benefit
}

export interface MembershipTierCardProps {
  tier: MembershipTier
  onSelect?: () => void
}

export interface JoinFormProps {
  onSubmit?: (data: JoinFormData) => Promise<void>
}

export interface TestimonialCardProps {
  testimonial: Testimonial
}

export interface FAQItemProps {
  faq: FAQItem
  isOpen: boolean
  onToggle: () => void
}

export interface FormCheckboxProps {
  name: string
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  required?: boolean
}

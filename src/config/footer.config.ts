// config/footer.config.ts
import { FooterLink, SocialLink, ContactInfo } from "@/types/footer.types"

// Quick Links Navigation
export const quickLinks: FooterLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes Somos", href: "/partido/quienes-somos" },
  { label: "Noticias", href: "/noticias" },
  { label: "Eventos", href: "/eventos" },
  { label: "Únete", href: "/unete" },
  { label: "Contacto", href: "/contacto" },
]

// Party Links
export const partyLinks: FooterLink[] = [
  { label: "Misión y Visión", href: "/partido/mision-vision-valores" },
  { label: "Liderazgo", href: "/partido/liderazgo" },
  { label: "Historia", href: "/partido/historia" },
  { label: "Valores", href: "/partido/mision-vision-valores#valores" },
]

// Legal Links
export const legalLinks: FooterLink[] = [
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Términos de Uso", href: "/terminos" },
]

// Brand Colors (matching navbar)
export const footerColors = {
  background: "#1F4D2B", // Dark green background
  text: "#FFFFFF", // White text
  textSecondary: "#E5E5E5", // Light gray for secondary text
  accent: "#00A651", // Primary green for links/accents
  border: "#00A651", // Border color
}

// Footer Text Content
export const footerContent = {
  tagline: "Con la Fuerza del Pueblo venceremos",
  description: "Trabajando por el desarrollo y bienestar de Verón-Punta Cana.",
  copyright: `© ${new Date().getFullYear()} Fuerza del Pueblo - Verón-Punta Cana. Todos los derechos reservados.`,
  newsletterTitle: "Mantente Informado",
  newsletterDescription:
    "Recibe las últimas noticias y actualizaciones del partido.",
  newsletterPlaceholder: "Tu correo electrónico",
  newsletterButton: "Suscribirse",
}

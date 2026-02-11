// config/navigation.config.ts
import { NavDropdownItem } from "@/types/navbar.types"

export const navigationItems: NavDropdownItem[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "El Partido",
    href: "/partido",
    items: [
      {
        label: "Quiénes Somos",
        href: "/partido/quienes-somos",
      },
      {
        label: "Misión, Visión y Valores",
        href: "/partido/mision-vision-valores",
      },
      {
        label: "Liderazgo y Estructura",
        href: "/partido/liderazgo",
      },
      {
        label: "Historia del Partido",
        href: "/partido/historia",
      },
      {
        label: "Futuros Candidatos",
        href: "/partido/candidatos",
      },
    ],
  },
  {
    label: "Únete",
    href: "/unete",
  },
  {
    label: "Noticias",
    href: "/noticias",
  },
  {
    label: "Eventos",
    href: "/eventos",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
]

export const ctaButtonConfig = {
  label: "Únete al Movimiento",
  href: "/unete",
}

// Brand colors
export const brandColors = {
  primaryGreen: "#00A651",
  darkGreen: "#1F4D2B",
  white: "#FFFFFF",
  charcoal: "#111111",
  lightGray: "#F4F4F4",
}

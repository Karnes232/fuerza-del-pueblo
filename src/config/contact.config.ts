// config/contact.config.ts
import { ContactMethod, SocialLink } from "@/types/contact.types"

// Page Hero Data
export const contactHeroData = {
  title: "Contáctanos",
  subtitle: "Estamos aquí para escucharte",
  description:
    "Tu voz es importante para nosotros. Comunícate con Fuerza del Pueblo para consultas, sugerencias o para unirte a nuestro movimiento.",
}

// Contact Methods
export const contactMethods: ContactMethod[] = [
  {
    id: "phone",
    type: "phone",
    icon: "Phone",
    label: "Teléfono",
    value: "+1 (809) 555-1234",
    href: "tel:+18095551234",
    description: "Llámanos de lunes a viernes, 9:00 AM - 6:00 PM",
  },
  {
    id: "email",
    type: "email",
    icon: "Mail",
    label: "Correo Electrónico",
    value: "contacto@fdpveron.do",
    href: "mailto:contacto@fdpveron.do",
    description: "Respuesta en 24-48 horas",
  },
  {
    id: "whatsapp",
    type: "whatsapp",
    icon: "MessageCircle",
    label: "WhatsApp",
    value: "+1 (809) 555-1234",
    href: "https://wa.me/18095551234",
    description: "Mensajes directos disponibles",
  },
  {
    id: "address",
    type: "address",
    icon: "MapPin",
    label: "Dirección",
    value: "Calle Principal #123, Verón, Punta Cana",
    href: "https://maps.google.com/?q=Veron+Punta+Cana",
    description: "República Dominicana",
  },
  {
    id: "hours",
    type: "hours",
    icon: "Clock",
    label: "Horario de Atención",
    value: "Lunes a Viernes: 9:00 AM - 6:00 PM",
    description: "Sábados: 9:00 AM - 1:00 PM",
  },
]

// Social Media Links
export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    url: "https://facebook.com/fuerzadelpueblo",
    icon: "Facebook",
    label: "Síguenos en Facebook",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/fuerzadelpueblo",
    icon: "Instagram",
    label: "Síguenos en Instagram",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/fuerzadelpueblo",
    icon: "Twitter",
    label: "Síguenos en Twitter",
  },
  {
    platform: "YouTube",
    url: "https://youtube.com/@fuerzadelpueblo",
    icon: "Youtube",
    label: "Suscríbete a nuestro canal",
  },
  {
    platform: "TikTok",
    url: "https://tiktok.com/@fuerzadelpueblo",
    icon: "Music",
    label: "Síguenos en TikTok",
  },
]

// Contact Info Section Data
export const contactInfoData = {
  title: "Información de Contacto",
  contacts: contactMethods,
}

// Contact Form Section Data
export const contactFormData = {
  title: "Envíanos un Mensaje",
  subtitle:
    "Completa el formulario y nos pondremos en contacto contigo lo antes posible.",
}

// Location Map Section Data
export const locationMapData = {
  title: "Nuestra Ubicación",
  address: "Calle Principal #123, Verón, Punta Cana, República Dominicana",
  mapUrl: "https://maps.app.goo.gl/2q7UQHSngqb8MxCm9",
  // Replace with your actual Google Maps embed URL
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.9338193478982!2d-68.43423988656001!3d18.59741265325868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea895b6d4bf087f%3A0x1c760279b109c6d7!2sVeron%20Plaza%2C%20Punta%20Cana!5e1!3m2!1sen!2sdo!4v1770734704369!5m2!1sen!2sdo",
}

// Social Links Section Data
export const socialLinksData = {
  title: "Síguenos en Redes Sociales",
  subtitle:
    "Mantente conectado y actualizado con nuestras últimas noticias y eventos.",
  socials: socialLinks,
}

// Quick Actions
export const quickActions = [
  {
    title: "Únete al Partido",
    description: "Sé parte del cambio que nuestra comunidad necesita.",
    icon: "UserPlus",
    href: "/unete",
  },
  {
    title: "Voluntariado",
    description: "Contribuye con tu tiempo y habilidades.",
    icon: "Heart",
    href: "/unete#voluntariado",
  },
  {
    title: "Próximos Eventos",
    description: "Participa en nuestras actividades comunitarias.",
    icon: "Calendar",
    href: "/eventos",
  },
]

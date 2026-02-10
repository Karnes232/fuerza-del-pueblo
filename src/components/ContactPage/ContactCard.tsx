import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

const ICONS = {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} as const

type ContactIconName = keyof typeof ICONS

export const ContactCard = ({
  icon,
  contact,
  contactType,
  description,
  href,
}: {
  icon: ContactIconName
  contact: string
  contactType: string
  description: string
  href?: string
}) => {
  const IconComponent = ICONS[icon]

  const content = (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full border-t-4 border-primaryGreen">
      {/* Icon */}
      <div className="w-16 h-16 bg-primaryGreen/10 rounded-full flex items-center justify-center mb-4">
        {IconComponent && (
          <IconComponent className="w-8 h-8 text-primaryGreen" />
        )}
      </div>

      {/* Label */}
      <h3 className="text-lg font-bold text-darkGreen mb-2">{contactType}</h3>

      {/* Value */}
      <p className="text-gray-700 font-medium mb-2">{contact}</p>

      {/* Description */}
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        className="block group"
        target={href.includes("tel:") ? undefined : "_blank"}
        rel={href.includes("tel:") ? undefined : "noopener noreferrer"}
      >
        {content}
      </a>
    )
  }

  return content
}

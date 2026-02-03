// components/ContactCard.tsx
import * as Icons from "lucide-react"
import { ContactCardProps } from "@/types/contact.types"

export const ContactCard = ({ contact }: ContactCardProps) => {
  const IconComponent = Icons[contact.icon as keyof typeof Icons] as any

  const content = (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full border-t-4 border-primaryGreen">
      {/* Icon */}
      <div className="w-16 h-16 bg-primaryGreen/10 rounded-full flex items-center justify-center mb-4">
        {IconComponent && (
          <IconComponent className="w-8 h-8 text-primaryGreen" />
        )}
      </div>

      {/* Label */}
      <h3 className="text-lg font-bold text-darkGreen mb-2">{contact.label}</h3>

      {/* Value */}
      <p className="text-gray-700 font-medium mb-2">{contact.value}</p>

      {/* Description */}
      {contact.description && (
        <p className="text-sm text-gray-500">{contact.description}</p>
      )}
    </div>
  )

  if (contact.href) {
    return (
      <a
        href={contact.href}
        className="block group"
        target={contact.type === "address" ? "_blank" : undefined}
        rel={contact.type === "address" ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    )
  }

  return content
}

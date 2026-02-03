// components/FooterContact.tsx
import * as Icons from "lucide-react"
import { FooterContactProps } from "@/types/footer.types"

export const FooterContact = ({ contacts }: FooterContactProps) => {
  return (
    <div className="space-y-4">
      {contacts.map((contact, index) => {
        const IconComponent = Icons[contact.icon as keyof typeof Icons] as any

        const content = (
          <div className="flex items-start gap-3">
            {IconComponent && (
              <IconComponent className="w-5 h-5 text-primaryGreen shrink-0 mt-0.5" />
            )}
            <div>
              <p className="text-white/60 text-xs mb-0.5">{contact.label}</p>
              <p className="text-white/90 text-sm">{contact.value}</p>
            </div>
          </div>
        )

        if (contact.href) {
          return (
            <a
              key={index}
              href={contact.href}
              className="block hover:opacity-80 transition-opacity"
            >
              {content}
            </a>
          )
        }

        return <div key={index}>{content}</div>
      })}
    </div>
  )
}

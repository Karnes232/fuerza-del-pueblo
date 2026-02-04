// sections/UneteCTA.tsx
import { Share2, Mail, Calendar, LucideIcon } from "lucide-react"
import { Container } from "@/components/HomePage/Container"
import { UneteCTAProps } from "@/types/unete.types"

const iconMap: Record<string, LucideIcon> = {
  Share2,
  Mail,
  Calendar,
}

export const UneteCTA = ({ title, description, actions }: UneteCTAProps) => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-r from-darkGreen to-primaryGreen text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {actions.map((action, index) => {
            const IconComponent = iconMap[action.icon]

            return (
              <a
                key={index}
                href={action.href}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all duration-300 group text-center"
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-white" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold">{action.title}</h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm">{action.description}</p>

                  {/* Arrow */}
                  <div className="text-white font-semibold group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

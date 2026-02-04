// components/MissionPage/VisionStatement.tsx
import Image from "next/image"
import { Container } from "@/components/HomePage/Container"
import { VisionStatementProps } from "@/types/mission.types"
import { Eye } from "lucide-react"
import * as Icons from "lucide-react"

export const VisionStatement = ({
  title,
  statement,
  description,
  icon,
  image,
}: VisionStatementProps) => {
  const IconComponent = icon ? (Icons[icon as keyof typeof Icons] as any) : Eye

  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image or Illustration */}
            <div className="relative order-2 md:order-1">
              {image ? (
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={image?.asset?.url}
                    alt={image?.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-linear-to-br from-darkGreen/20 to-primaryGreen/20 flex items-center justify-center border-4 border-darkGreen/30">
                  <div className="text-center p-8">
                    {IconComponent && (
                      <IconComponent className="w-32 h-32 text-darkGreen/40 mx-auto mb-4" />
                    )}
                    <p className="text-2xl font-bold text-darkGreen">
                      Nuestra Visión
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 md:order-2">
              {/* Icon and Title */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-darkGreen/10 rounded-full flex items-center justify-center shrink-0">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-darkGreen" />
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                  {title}
                </h2>
              </div>

              {/* Vision Statement */}
              <div className="bg-linear-to-br from-darkGreen to-charcoal p-8 rounded-lg shadow-xl">
                <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed italic">
                  "{statement}"
                </p>
              </div>

              {/* Description */}
              {description && (
                <p className="text-lg text-charcoal/70 leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
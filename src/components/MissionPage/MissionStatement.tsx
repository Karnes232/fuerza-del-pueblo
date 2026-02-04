// components/MissionPage/MissionStatement.tsx
import Image from "next/image"
import { Container } from "@/components/HomePage/Container"
import { MissionStatementProps } from "@/types/mission.types"
import { Target } from "lucide-react"
import * as Icons from "lucide-react"

export const MissionStatement = ({
  title,
  statement,
  description,
  icon,
  image,
}: MissionStatementProps) => {
  const IconComponent = icon
    ? (Icons[icon as keyof typeof Icons] as any)
    : Target

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              {/* Icon and Title */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primaryGreen/10 rounded-full flex items-center justify-center shrink-0">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-primaryGreen" />
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                  {title}
                </h2>
              </div>

              {/* Mission Statement */}
              <div className="bg-linear-to-br from-primaryGreen to-darkGreen p-8 rounded-lg shadow-xl">
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

            {/* Image or Illustration */}
            <div className="relative">
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
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primaryGreen/20 to-darkGreen/20 flex items-center justify-center border-4 border-primaryGreen/30">
                  <div className="text-center p-8">
                    {IconComponent && (
                      <IconComponent className="w-32 h-32 text-primaryGreen/40 mx-auto mb-4" />
                    )}
                    <p className="text-2xl font-bold text-primaryGreen">
                      Nuestra Misión
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

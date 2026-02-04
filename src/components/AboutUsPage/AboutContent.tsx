// components/AboutPage/AboutContent.tsx
import Image from "next/image"
import { Container } from "@/components/HomePage/Container"
import { AboutContentProps } from "@/types/about.types"

export const AboutContent = ({
  title,
  content,
  sections,
  image,
}: AboutContentProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 text-center">
            {title}
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed text-center">
            {content}
          </p>
        </div>

        {/* Image (if provided) */}
        {image && (
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image?.asset?.url}
                alt={image?.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Additional Sections */}
        {sections && sections.length > 0 && (
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {sections.map(section => (
              <div
                key={section.id}
                className="bg-[#F4F4F4] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-primaryGreen mb-4">
                  {section.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

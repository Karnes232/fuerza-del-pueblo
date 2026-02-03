// sections/LocationMapSection.tsx
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { MapEmbed } from "@/components/ContactPage/MapEmbed"
import { LocationMapSectionProps } from "@/types/contact.types"

export const LocationMapSection = ({
  title,
  address,
  mapUrl,
  embedUrl,
}: LocationMapSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} align="center" />

        {embedUrl ? (
          <MapEmbed embedUrl={embedUrl} address={address} />
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-gray-700 mb-4">{address}</p>
            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primaryGreen hover:text-darkGreen font-semibold transition-colors"
              >
                Ver en Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        )}

        {/* Directions Link */}
        {mapUrl && (
          <div className="text-center mt-6">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primaryGreen hover:text-darkGreen font-semibold transition-colors"
            >
              Obtener Direcciones
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </Container>
    </section>
  )
}

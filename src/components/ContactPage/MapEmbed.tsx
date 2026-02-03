// components/MapEmbed.tsx
import { MapEmbedProps } from "@/types/contact.types"

export const MapEmbed = ({ embedUrl, address }: MapEmbedProps) => {
  return (
    <div className="space-y-4">
      {/* Map iframe */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ${address}`}
          className="absolute inset-0"
        />
      </div>

      {/* Address text */}
      <p className="text-center text-gray-600">{address}</p>
    </div>
  )
}

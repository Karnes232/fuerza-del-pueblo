// components/LeadershipPage/ElectedRepresentativeCard.tsx
import Image from "next/image"
import { ElectedRepresentative } from "@/types/leadership.types"
import { hotspotToObjectPosition } from "@/sanity/lib/image"

interface ElectedRepresentativeCardProps {
  representative: ElectedRepresentative
}

export const ElectedRepresentativeCard = ({
  representative,
}: ElectedRepresentativeCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-64 bg-linear-to-br from-primaryGreen to-darkGreen">
        {representative.image?.asset?.url ? (
          <Image
            src={representative.image.asset.url}
            alt={representative.image.alt || representative.name}
            fill
            className="object-cover"
            style={{
              objectPosition: hotspotToObjectPosition(
                representative.image.hotspot,
              ),
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-4xl font-bold">
                  {representative.name
                    .split(" ")
                    .map(n => n[0])
                    .join("")
                    .substring(0, 2)}
                </span>
              </div>
              <p className="text-sm opacity-75">Foto no disponible</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and Position */}
        <div className="mb-4">
          <h3 className="font-bold text-charcoal mb-2 text-xl">
            {representative.name}
          </h3>
          <p className="text-primaryGreen font-semibold">
            {representative.position}
          </p>
        </div>

        {/* Bio */}
        <p className="text-charcoal/70 text-sm leading-relaxed mb-4 min-h-24">
          {representative.bio}
        </p>
      </div>
    </div>
  )
}

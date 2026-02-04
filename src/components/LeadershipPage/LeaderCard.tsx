// components/LeadershipPage/LeaderCard.tsx
import Image from "next/image"
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { LeaderCardProps } from "@/types/leadership.types"

export const LeaderCard = ({ leader, featured = false }: LeaderCardProps) => {
  const cardSize = featured ? "md:col-span-2" : ""

  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${cardSize}`}
    >
      <div className={`${featured ? "md:flex" : ""}`}>
        {/* Image */}
        <div
          className={`relative bg-linear-to-br from-primaryGreen to-darkGreen ${
            featured ? "md:w-1/3 h-64 md:h-auto" : "h-64"
          }`}
        >
          {leader.image ? (
            <Image
              src={leader.image?.asset?.url}
              alt={leader.image?.alt || leader.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-4xl font-bold">
                    {leader.name
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
        <div className={`p-6 ${featured ? "md:w-2/3" : ""}`}>
          {/* Name and Position */}
          <div className="mb-4">
            <h3
              className={`font-bold text-charcoal mb-2 ${
                featured ? "text-2xl" : "text-xl"
              }`}
            >
              {leader.name}
            </h3>
            <p className="text-primaryGreen font-semibold">{leader.position}</p>
          </div>

          {/* Bio */}
          <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
            {leader.bio}
          </p>

          {/* Responsibilities */}
          {leader.responsibilities && leader.responsibilities.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
                Responsabilidades:
              </h4>
              <ul className="space-y-1">
                {leader.responsibilities.map((resp, index) => (
                  <li
                    key={index}
                    className="text-sm text-charcoal/70 flex items-start"
                  >
                    <span className="text-primaryGreen mr-2">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Info */}
          {(leader.email || leader.phone) && (
            <div className="flex flex-wrap gap-4 mb-4 pt-4 border-t border-gray-200">
              {leader.email && (
                <a
                  href={`mailto:${leader.email}`}
                  className="flex items-center gap-2 text-sm text-charcoal/70 hover:text-primaryGreen transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-xs">{leader.email}</span>
                </a>
              )}
              {leader.phone && (
                <a
                  href={`tel:${leader.phone}`}
                  className="flex items-center gap-2 text-sm text-charcoal/70 hover:text-primaryGreen transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-xs">{leader.phone}</span>
                </a>
              )}
            </div>
          )}

          {/* Social Media */}
          {leader.socialMedia && (
            <div className="flex gap-3">
              {leader.socialMedia.facebook && (
                <a
                  href={leader.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primaryGreen hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {leader.socialMedia.twitter && (
                <a
                  href={leader.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primaryGreen hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {leader.socialMedia.instagram && (
                <a
                  href={leader.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primaryGreen hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {leader.socialMedia.linkedin && (
                <a
                  href={leader.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primaryGreen hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

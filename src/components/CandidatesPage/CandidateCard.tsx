// components/CandidatesPage/CandidateCard.tsx
import Image from "next/image"
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  Target,
} from "lucide-react"
import { CandidateCardProps } from "@/types/candidates.types"

export const CandidateCard = ({
  candidate,
  featured = false,
}: CandidateCardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
        featured ? "md:col-span-2 lg:col-span-3" : ""
      }`}
    >
      <div className={`${featured ? "md:flex" : ""}`}>
        {/* Image */}
        <div
          className={`relative bg-linear-to-br from-primaryGreen to-darkGreen ${
            featured ? "md:w-2/5 h-96 md:h-auto" : "h-80"
          }`}
        >
          {candidate.image ? (
            <Image
              src={candidate.image?.asset?.url}
              alt={candidate.image?.alt || candidate.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl font-bold">
                    {candidate.name
                      .split(" ")
                      .map(n => n[0])
                      .join("")
                      .substring(0, 2)}
                  </span>
                </div>
                <p className="text-lg opacity-75">Foto próximamente</p>
              </div>
            </div>
          )}
          {/* Position Badge */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-primaryGreen font-bold text-center">
                {candidate.position}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`p-8 ${featured ? "md:w-3/5" : ""}`}>
          {/* Name and Slogan */}
          <div className="mb-6">
            <h3
              className={`font-bold text-charcoal mb-2 ${
                featured ? "text-3xl" : "text-2xl"
              }`}
            >
              {candidate.name}
            </h3>
            {candidate.slogan && (
              <p className="text-primaryGreen italic font-semibold">
                "{candidate.slogan}"
              </p>
            )}
          </div>

          {/* Bio */}
          <p className="text-charcoal/70 leading-relaxed mb-6">
            {candidate.bio}
          </p>

          {/* Education */}
          {candidate.education && candidate.education.length > 0 && (
            <div className="mb-4">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
                <GraduationCap className="w-4 h-4 text-primaryGreen" />
                Educación
              </h4>
              <ul className="space-y-1">
                {candidate.education.map((edu, index) => (
                  <li key={index} className="text-sm text-charcoal/70">
                    • {edu}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Experience */}
          {candidate.experience && candidate.experience.length > 0 && (
            <div className="mb-4">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
                <Briefcase className="w-4 h-4 text-primaryGreen" />
                Experiencia
              </h4>
              <ul className="space-y-1">
                {candidate.experience.map((exp, index) => (
                  <li key={index} className="text-sm text-charcoal/70">
                    • {exp}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Achievements */}
          {candidate.achievements && candidate.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
                <Award className="w-4 h-4 text-primaryGreen" />
                Logros Destacados
              </h4>
              <ul className="space-y-1">
                {candidate.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-charcoal/70">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Priorities */}
          {candidate.priorities && candidate.priorities.length > 0 && (
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
                <Target className="w-4 h-4 text-primaryGreen" />
                Prioridades
              </h4>
              <div className="flex flex-wrap gap-2">
                {candidate.priorities.map((priority, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primaryGreen/10 text-primaryGreen text-xs font-semibold rounded-full"
                  >
                    {priority}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contact and Social */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
            {/* Campaign Website */}
            {candidate.campaignWebsite && (
              <a
                href={candidate.campaignWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primaryGreen hover:text-darkGreen transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Sitio de Campaña
              </a>
            )}

            {/* Email */}
            {candidate.contactEmail && (
              <a
                href={`mailto:${candidate.contactEmail}`}
                className="flex items-center gap-2 text-sm text-charcoal/70 hover:text-primaryGreen transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contactar
              </a>
            )}
          </div>

          {/* Social Media */}
          {candidate.socialMedia && (
            <div className="flex gap-3 mt-4">
              {candidate.socialMedia.facebook && (
                <a
                  href={candidate.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primaryGreen hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {candidate.socialMedia.twitter && (
                <a
                  href={candidate.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primaryGreen hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {candidate.socialMedia.instagram && (
                <a
                  href={candidate.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primaryGreen hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {candidate.socialMedia.linkedin && (
                <a
                  href={candidate.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primaryGreen hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

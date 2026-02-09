// components/ArticlePage/SocialShare.tsx
"use client"

import { Container } from "@/components/HomePage/Container"
import { SocialShareProps } from "@/types/article.types"
import { Facebook, X, Linkedin, Link2, Mail } from "lucide-react"

export const SocialShare = ({ url, title, description }: SocialShareProps) => {
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url,
    )}`
    window.open(facebookUrl, "_blank", "width=600,height=400")
  }

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url,
    )}&text=${encodeURIComponent(title)}`
    window.open(twitterUrl, "_blank", "width=600,height=400")
  }

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url,
    )}`
    window.open(linkedInUrl, "_blank", "width=600,height=400")
  }

  const shareByEmail = () => {
    const subject = encodeURIComponent(title)
    const body = encodeURIComponent(
      `${description || ""}\n\nLee más en: ${url}`,
    )
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      alert("Enlace copiado al portapapeles")
    } catch (err) {
      console.error("Error copying link:", err)
    }
  }

  return (
    <section className="py-8! border-y border-gray-200 bg-[#F4F4F4]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-charcoal">
              Compartir este artículo
            </h3>

            <div className="flex gap-3">
              {/* Facebook */}
              <button
                onClick={shareOnFacebook}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors shadow-md"
                aria-label="Compartir en Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>

              {/* Twitter */}
              <button
                onClick={shareOnTwitter}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors shadow-md"
                aria-label="Compartir en Twitter"
              >
                <X className="w-5 h-5" />
              </button>

              {/* LinkedIn */}
              <button
                onClick={shareOnLinkedIn}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors shadow-md"
                aria-label="Compartir en LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>

              {/* Email */}
              <button
                onClick={shareByEmail}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primaryGreen hover:text-white transition-colors shadow-md"
                aria-label="Compartir por correo"
              >
                <Mail className="w-5 h-5" />
              </button>

              {/* Copy Link */}
              <button
                onClick={copyLink}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-darkGreen hover:text-white transition-colors shadow-md"
                aria-label="Copiar enlace"
              >
                <Link2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

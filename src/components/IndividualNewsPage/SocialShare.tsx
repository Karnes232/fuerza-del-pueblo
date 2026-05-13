// components/ArticlePage/SocialShare.tsx
"use client"

import { Container } from "@/components/HomePage/Container"
import { SocialShareProps } from "@/types/article.types"
import { Facebook, Instagram, Link2, Mail, MessageCircle } from "lucide-react"

export const SocialShare = ({ url, title, description }: SocialShareProps) => {
  const shareOnFacebook = async () => {
    // Facebook's mobile app intercepts sharer.php links but drops the `u=`
    // parameter, so the composer opens empty. Use the Web Share API on mobile
    // (native share sheet → user picks FB → URL is passed correctly) and fall
    // back to the sharer.php popup on desktop.
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ url, title, text: description })
        return
      } catch (err) {
        if ((err as DOMException)?.name === "AbortError") return
      }
    }
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url,
    )}`
    window.open(facebookUrl, "_blank", "width=600,height=400")
  }

  const shareOnWhatsApp = () => {
    const text = `${title}\n\n${url}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, "_blank")
  }

  const shareOnInstagram = async () => {
    // Instagram has no web share endpoint. On mobile, the native share sheet
    // lets the user pick Instagram (link goes into a Story sticker). On
    // desktop we fall back to copying the link with an Instagram-specific
    // message so the user can paste it into a DM/bio/story.
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ url, title, text: description })
        return
      } catch (err) {
        if ((err as DOMException)?.name === "AbortError") return
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      alert("Link copiado — pégalo en Instagram")
    } catch (err) {
      console.error("Error copying link:", err)
    }
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
      alert("Link copiado al portapapeles")
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

              {/* WhatsApp */}
              <button
                onClick={shareOnWhatsApp}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors shadow-md"
                aria-label="Compartir en WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>

              {/* Instagram */}
              <button
                onClick={shareOnInstagram}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-colors shadow-md"
                aria-label="Compartir en Instagram"
              >
                <Instagram className="w-5 h-5" />
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

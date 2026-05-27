"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { ArticleContentProps } from "@/types/article.types"
import { croppedImageUrl, urlFor } from "@/sanity/lib/image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type ArticleImageCarouselProps = {
  images: NonNullable<ArticleContentProps["images"]>
}

export const ArticleImageCarousel = ({ images }: ArticleImageCarouselProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const isOpen = lightboxIndex !== null

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null)
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  if (!images.length) return null

  return (
    <>
      <div className="mt-12 article-gallery">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          loop={images.length > 1}
          className="rounded-lg shadow-lg overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image._key}>
              <figure className="space-y-3 m-0">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label="Ampliar imagen"
                  className="relative block h-96 w-full bg-charcoal/5 cursor-zoom-in group"
                >
                  <Image
                    src={croppedImageUrl(image, 1200, 800)}
                    alt={image.caption || ""}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </button>
                {image.caption && (
                  <figcaption className="text-sm text-charcoal/60 text-center italic px-4 pb-8">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Cerrar"
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X size={24} />
          </button>

          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Keyboard]}
              initialSlide={lightboxIndex}
              slidesPerView={1}
              keyboard={{ enabled: true }}
              navigation={{
                prevEl: ".lightbox-prev",
                nextEl: ".lightbox-next",
              }}
              loop={images.length > 1}
              className="w-full h-full"
            >
              {images.map(image => (
                <SwiperSlide
                  key={image._key}
                  className="!flex items-center justify-center"
                >
                  <figure className="m-0 w-full h-full flex flex-col items-center justify-center px-4 md:px-16 py-12">
                    <div className="relative w-full h-full max-w-6xl">
                      <Image
                        src={urlFor(image).width(2000).auto("format").url()}
                        alt={image.caption || ""}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                      />
                    </div>
                    {image.caption && (
                      <figcaption className="mt-4 text-sm text-white/80 text-center italic max-w-3xl">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Imagen anterior"
                  className="lightbox-prev absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  aria-label="Imagen siguiente"
                  className="lightbox-next absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

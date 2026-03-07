"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import type { ArticleContentProps } from "@/types/article.types"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type ArticleImageCarouselProps = {
  images: NonNullable<ArticleContentProps["images"]>
}

export const ArticleImageCarousel = ({ images }: ArticleImageCarouselProps) => {
  if (!images.length) return null

  return (
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
        {images.map(image => (
          <SwiperSlide key={image._key}>
            <figure className="space-y-3 m-0">
              <div className="relative h-96 w-full bg-charcoal/5">
                <Image
                  src={image.asset.url}
                  alt={image.caption || ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
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
  )
}

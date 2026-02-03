// components/NewsCard.tsx
import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { NewsCardProps } from "@/types/home.types"

export const NewsCard = ({ article }: NewsCardProps) => {
  const formattedDate = new Date(article.date).toLocaleDateString("es-DO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link
      href={`/noticias/${article.slug}`}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      {article.image ? (
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {article.category && (
            <div className="absolute top-4 left-4 bg-primaryGreen text-white px-3 py-1 rounded-full text-xs font-semibold">
              {article.category}
            </div>
          )}
        </div>
      ) : (
        <div className="h-48 bg-linear-to-br from-primaryGreen to-darkGreen flex items-center justify-center">
          <span className="text-white text-4xl font-bold opacity-20">FP</span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <time dateTime={article.date}>{formattedDate}</time>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-darkGreen mb-2 group-hover:text-primaryGreen transition-colors">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>

        {/* Read More Link */}
        <div className="mt-4">
          <span className="text-primaryGreen font-semibold text-sm group-hover:underline">
            Leer más →
          </span>
        </div>
      </div>
    </Link>
  )
}

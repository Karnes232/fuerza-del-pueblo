// components/FeaturedArticleCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { FeaturedArticleCardProps } from '@/types/news.types';
import { CategoryBadge } from '@/components/NewsPage/CategoryBadge';
import { newsCategories } from '@/config/news.config';

export const FeaturedArticleCard = ({ article }: FeaturedArticleCardProps) => {
  const formattedDate = new Date(article.date).toLocaleDateString('es-DO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const category = newsCategories.find(c => c.id === article.category);

  return (
    <Link 
      href={`/noticias/${article.slug}`}
      className="group block bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-64 md:h-full bg-linear-to-br from-primaryGreen to-darkGreen">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-white text-6xl font-bold opacity-20">FDP</span>
            </div>
          )}
          
          {/* Featured Badge */}
          <div className="absolute top-4 left-4 bg-primaryGreen text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
            Destacado
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Category */}
            {category && (
              <CategoryBadge category={category} size="md" />
            )}

            {/* Title */}
            <h2 className="text-3xl font-bold text-darkGreen group-hover:text-primaryGreen transition-colors">
              {article.title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-700 text-lg leading-relaxed">
              {article.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.date}>{formattedDate}</time>
              </div>
              {article.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              )}
              {article.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min lectura</span>
                </div>
              )}
            </div>
          </div>

          {/* Read More */}
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-primaryGreen font-semibold group-hover:gap-3 transition-all">
              Leer artículo completo
              <ArrowRight className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
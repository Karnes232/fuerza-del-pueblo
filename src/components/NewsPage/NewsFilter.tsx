// components/NewsFilter.tsx
"use client"

import { NewsCategory, NewsFilterProps } from "@/types/news.types"

export const NewsFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: NewsFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {/* All Button */}
      <button
        onClick={() => onSelectCategory("all")}
        className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
          selectedCategory === "all"
            ? "bg-primaryGreen text-white shadow-md"
            : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
        }`}
      >
        Todas
      </button>

      {/* Category Buttons */}
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.name as NewsCategory)}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
            selectedCategory === category.name
              ? "bg-primaryGreen text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

// components/EventFilter.tsx
"use client"

import { EventFilterProps } from "@/types/events.types"

export const EventFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: EventFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {/* All Events Button */}
      <button
        onClick={() => onSelectCategory("all")}
        className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
          selectedCategory === "all"
            ? "bg-[#00A651] text-white shadow-md"
            : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
        }`}
      >
        Todos
      </button>

      {/* Category Buttons */}
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
            selectedCategory === category.id
              ? "bg-[#00A651] text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

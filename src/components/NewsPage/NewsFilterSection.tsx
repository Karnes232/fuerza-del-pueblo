// sections/NewsFilterSection.tsx
"use client"

import { Container } from "@/components/HomePage/Container"
import { NewsFilter } from "@/components/NewsPage/NewsFilter"
import { SearchBar } from "@/components/NewsPage/SearchBar"
import { NewsFilterSectionProps } from "@/types/news.types"

export const NewsFilterSection = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onSearch,
}: NewsFilterSectionProps) => {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <Container>
        <div className="space-y-8">
          {/* Search Bar */}
          {onSearch && <SearchBar onSearch={onSearch} />}

          {/* Category Filter */}
          <NewsFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
        </div>
      </Container>
    </section>
  )
}

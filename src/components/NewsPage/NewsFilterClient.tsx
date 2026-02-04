// components/NewsFilterClient.tsx
'use client';

import { useState, useMemo } from 'react';
import { NewsFilterSection } from '@/components/NewsPage/NewsFilterSection';
import { NewsGridSection } from '@/components/NewsPage/NewsGridSection';
import { NewsArticle, NewsCategoryInfo, NewsCategory } from '@/types/news.types';

interface NewsFilterClientProps {
  articles: NewsArticle[];
  categories: NewsCategoryInfo[];
}

export const NewsFilterClient = ({ articles, categories }: NewsFilterClientProps) => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles based on category and search
  const filteredArticles = useMemo(() => {
    let filtered = articles.filter(article => !article.featured);
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.author?.toLowerCase().includes(query) ||
        article.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Sort by date (newest first)
    return filtered.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [articles, selectedCategory, searchQuery]);

  return (
    <>
      {/* Filter Section */}
      <NewsFilterSection
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onSearch={setSearchQuery}
      />

      {/* News Grid Section */}
      <NewsGridSection
        title="Todas las Noticias"
        articles={filteredArticles}
      />
    </>
  );
};
// types/news.types.ts

export type NewsCategory = 
  | 'noticias'
  | 'eventos'
  | 'iniciativas'
  | 'comunicados'
  | 'entrevistas'
  | 'logros';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  author?: string;
  category: NewsCategory;
  image?: string;
  slug: string;
  featured?: boolean;
  tags?: string[];
  readTime?: number;
}

export interface NewsCategoryInfo {
  id: NewsCategory;
  name: string;
  description: string;
  color: string;
}

export interface NewsHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  showSearch?: boolean;
}

export interface FeaturedArticleSectionProps {
  article?: NewsArticle;
}

export interface NewsFilterSectionProps {
  categories: NewsCategoryInfo[];
  selectedCategory: NewsCategory | 'all';
  onSelectCategory: (category: NewsCategory | 'all') => void;
  onSearch?: (query: string) => void;
}

export interface NewsGridSectionProps {
  title?: string;
  articles: NewsArticle[];
  loading?: boolean;
}

export interface NewsletterCTAProps {
  title: string;
  description: string;
  onSubmit?: (email: string) => void;
}

export interface FeaturedArticleCardProps {
  article: NewsArticle;
}

export interface NewsFilterProps {
  categories: NewsCategoryInfo[];
  selectedCategory: NewsCategory | 'all';
  onSelectCategory: (category: NewsCategory | 'all') => void;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export interface CategoryBadgeProps {
  category: NewsCategoryInfo;
  size?: 'sm' | 'md' | 'lg';
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
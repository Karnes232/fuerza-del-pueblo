// components/SearchBar.tsx
'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchBarProps } from '@/types/news.types';

export const SearchBar = ({ 
  onSearch, 
  placeholder = 'Buscar noticias...' 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-6 py-4 pr-14 rounded-lg border-2 border-gray-300 focus:border-primaryGreen focus:outline-none transition-colors text-lg"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primaryGreen text-white p-3 rounded-lg hover:bg-primaryGreen/80 transition-colors"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
};
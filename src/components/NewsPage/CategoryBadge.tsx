// components/CategoryBadge.tsx
import { CategoryBadgeProps } from '@/types/news.types';

export const CategoryBadge = ({ category, size = 'md' }: CategoryBadgeProps) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={`inline-block rounded-full font-semibold ${sizeClasses[size]}`}
      style={{
        backgroundColor: `${category.color}15`,
        color: category.color,
      }}
    >
      {category.name}
    </span>
  );
};
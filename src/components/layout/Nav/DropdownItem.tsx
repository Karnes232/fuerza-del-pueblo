// components/DropdownItem.tsx
import Link from 'next/link';
import { DropdownItemProps } from '@/types/navbar.types';

export const DropdownItem = ({ 
  label, 
  href, 
  onClick, 
  disabled = false 
}: DropdownItemProps) => {
  if (disabled) {
    return (
      <div className="block px-4 py-2 text-gray-400 cursor-not-allowed">
        {label}
      </div>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-2 text-charcoal hover:bg-lightGray hover:text-primaryGreen transition-colors"
    >
      {label}
    </Link>
  );
};
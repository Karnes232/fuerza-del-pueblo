// components/NavLink.tsx
import Link from 'next/link';
import { NavLinkProps } from '@/types/navbar.types';

export const NavLink = ({ 
  href, 
  label, 
  onClick, 
  className = '',
  disabled = false 
}: NavLinkProps) => {
  const baseClasses = 'text-white hover:text-[#00A651] transition-colors duration-200 font-medium';
  const disabledClasses = 'text-gray-400 cursor-not-allowed hover:text-gray-400';
  
  if (disabled) {
    return (
      <span className={`${disabledClasses} ${className}`}>
        {label}
      </span>
    );
  }

  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {label}
    </Link>
  );
};
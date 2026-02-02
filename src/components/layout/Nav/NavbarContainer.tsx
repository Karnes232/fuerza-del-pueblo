// components/NavbarContainer.tsx
'use client';

import { NavbarLogo } from '@/components/layout/Nav/NavbarLogo';
import { DesktopNav } from '@/components/layout/Nav/DesktopNav';
import { MobileNav } from '@/components/layout/Nav/MobileNav';
import { MobileMenuButton } from '@/components/layout/Nav/MobileMenuButton';
import { useNavbar } from '@/hooks/useNavbar';
import { NavbarProps } from '@/types/navbar.types';

export const NavbarContainer = ({ className = '' }: NavbarProps) => {
  const {
    isMobileMenuOpen,
    activeDropdown,
    toggleMobileMenu,
    closeMobileMenu,
    openDropdown,
    closeDropdown,
    toggleDropdown,
  } = useNavbar();

  return (
    <nav className={`bg-darkGreen sticky top-0 z-50 shadow-lg ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavbarLogo onClick={closeMobileMenu} />

          {/* Desktop Navigation */}
          <DesktopNav
            activeDropdown={activeDropdown}
            onOpenDropdown={openDropdown}
            onCloseDropdown={closeDropdown}
          />

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        activeDropdown={activeDropdown}
        onToggleDropdown={toggleDropdown}
        onClose={closeMobileMenu}
      />
    </nav>
  );
};  
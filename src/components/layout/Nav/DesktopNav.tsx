// components/DesktopNav.tsx
import { NavLink } from '@/components/layout/Nav/NavLink';
import { NavDropdown } from '@/components/layout/Nav/NavDropdown';
import { CTAButton } from '@/components/layout/Nav/CTAButton';
import { navigationItems, ctaButtonConfig } from '@/config/navigation.config';

interface DesktopNavProps {
  activeDropdown: string | null;
  onOpenDropdown: (label: string) => void;
  onCloseDropdown: () => void;
}

export const DesktopNav = ({ 
  activeDropdown, 
  onOpenDropdown, 
  onCloseDropdown 
}: DesktopNavProps) => {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      {navigationItems.map((item) => {
        // If item has dropdown
        if (item.items && item.items.length > 0) {
          return (
            <NavDropdown
              key={item.label}
              label={item.label}
              items={item.items}
              isOpen={activeDropdown === item.label}
              onToggle={() => onOpenDropdown(item.label)}
              onClose={onCloseDropdown}
            />
          );
        }

        // Regular link
        return (
          <NavLink
            key={item.label}
            href={item.href}
            label={item.label}
          />
        );
      })}

      {/* CTA Button */}
      <CTAButton
        label={ctaButtonConfig.label}
        href={ctaButtonConfig.href}
      />
    </div>
  );
};
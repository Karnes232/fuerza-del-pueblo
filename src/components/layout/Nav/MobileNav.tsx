// components/MobileNav.tsx
import { ChevronDown } from "lucide-react"
import { NavLink } from "@/components/layout/Nav/NavLink"
import { DropdownItem } from "@/components/layout/Nav/DropdownItem"
import { CTAButton } from "@/components/layout/Nav/CTAButton"
import { navigationItems, ctaButtonConfig } from "@/config/navigation.config"

interface MobileNavProps {
  isOpen: boolean
  activeDropdown: string | null
  onToggleDropdown: (label: string) => void
  onClose: () => void
}

export const MobileNav = ({
  isOpen,
  activeDropdown,
  onToggleDropdown,
  onClose,
}: MobileNavProps) => {
  return (
    <div
      className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen
          ? "max-h-screen opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className="px-4 pt-2 pb-6 space-y-3 bg-darkGreen border-t border-primaryGreen/20">
        {navigationItems.map(item => {
          // If item has dropdown
          if (item.items && item.items.length > 0) {
            return (
              <div key={item.label}>
                <button
                  onClick={() => onToggleDropdown(item.label)}
                  className="w-full text-left text-white hover:text-primaryGreen transition-colors py-2 font-medium flex items-center justify-between"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`ml-4 mt-2 space-y-2 transition-all duration-200 ${
                    activeDropdown === item.label ? "block" : "hidden"
                  }`}
                >
                  {item.items.map(subItem => (
                    <DropdownItem
                      key={subItem.label}
                      label={subItem.label}
                      href={subItem.href}
                      disabled={subItem.disabled}
                      onClick={onClose}
                    />
                  ))}
                </div>
              </div>
            )
          }

          // Regular link
          return (
            <NavLink
              key={item.label}
              href={item.href}
              label={item.label}
              onClick={onClose}
              className="block py-2"
            />
          )
        })}

        {/* Mobile CTA Button */}
        <CTAButton
          label={ctaButtonConfig.label}
          href={ctaButtonConfig.href}
          onClick={onClose}
          className="block text-center mt-4 py-3"
        />
      </div>
    </div>
  )
}

// components/NavDropdown.tsx
import { ChevronDown } from "lucide-react"
import { NavDropdownProps } from "@/types/navbar.types"
import { DropdownItem } from "./DropdownItem"

export const NavDropdown = ({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
}: NavDropdownProps) => {
  return (
    <div
      className="relative group"
      onMouseEnter={onToggle}
      onMouseLeave={() => onClose?.()}
    >
      <button
        className="text-white hover:text-primaryGreen transition-colors duration-200 font-medium flex items-center gap-1"
        onClick={onToggle}
      >
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-2 w-64 bg-pureWhite rounded-md shadow-xl py-2 transition-all duration-200 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        {items.map(item => (
          <DropdownItem
            key={item.label}
            label={item.label}
            href={item.href}
            disabled={item.disabled}
            onClick={onClose}
          />
        ))}
      </div>
    </div>
  )
}

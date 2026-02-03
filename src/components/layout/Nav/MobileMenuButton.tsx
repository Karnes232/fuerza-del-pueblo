import { Menu, X } from "lucide-react"
import { MobileMenuButtonProps } from "@/types/navbar.types"

export const MobileMenuButton = ({
  isOpen,
  onClick,
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden text-white hover:text-primaryGreen transition-colors p-2"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  )
}

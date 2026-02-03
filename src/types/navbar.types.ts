// types/navbar.types.ts

export interface NavItem {
  label: string
  href: string
  disabled?: boolean
}

export interface NavDropdownItem extends NavItem {
  items?: NavItem[]
}

export interface NavbarProps {
  className?: string
}

export interface NavLinkProps {
  href: string
  label: string
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export interface NavDropdownProps {
  label: string
  items: NavItem[]
  isOpen: boolean
  onToggle: () => void
  onClose?: () => void
}

export interface DropdownItemProps {
  label: string
  href: string
  onClick?: () => void
  disabled?: boolean
}

export interface CTAButtonProps {
  label: string
  href: string
  onClick?: () => void
  className?: string
}

export interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export interface LogoProps {
  onClick?: () => void
}

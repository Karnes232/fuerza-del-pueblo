"use client"

import { useState, useCallback } from "react"

export const useNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [])

  const openDropdown = useCallback((label: string) => {
    setActiveDropdown(label)
  }, [])

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null)
  }, [])

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(prev => (prev === label ? null : label))
  }, [])

  return {
    isMobileMenuOpen,
    activeDropdown,
    toggleMobileMenu,
    closeMobileMenu,
    openDropdown,
    closeDropdown,
    toggleDropdown,
  }
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getNavItems } from "./nav.config";
import { NavItem } from "./nav.types";
import { NavLogo } from "./NavLogo";
import { NavLink } from "./NavLink";
import { NavDropdownDesktop } from "./NavDropdownDesktop";
import { NavDropdownMobile } from "./NavDropdownMobile";
import { NavCta } from "./NavCta";
import { MobileToggle } from "./MobileToggle";

export default function Navbar({ showCandidates = false }: { showCandidates?: boolean }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = useMemo(
    () => getNavItems(showCandidates),
    [showCandidates]
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLogo />

        {/* Desktop */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            if (item.type === "link") {
              return (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={isActive(item.href)}
                />
              );
            }

            const isOpen = openDropdown === item.label;
            return (
              <NavDropdownDesktop
                key={item.label}
                label={item.label}
                items={item.items}
                isOpen={isOpen}
                setOpen={(v) => setOpenDropdown(v ? item.label : null)}
                isActive={isActive}
              />
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <NavCta />
        </div>

        {/* Mobile toggle */}
        <MobileToggle open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                if (item.type === "link") {
                  return (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      active={isActive(item.href)}
                      className="w-full"
                    />
                  );
                }

                const isOpen = openDropdown === item.label;
                return (
                  <NavDropdownMobile
                    key={item.label}
                    label={item.label}
                    items={item.items}
                    isOpen={isOpen}
                    onToggle={() => setOpenDropdown(isOpen ? null : item.label)}
                    isActive={isActive}
                  />
                );
              })}

              <div className="mt-2">
                <NavCta />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

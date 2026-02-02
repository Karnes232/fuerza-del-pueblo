export type NavLinkItem = {
    type: "link";
    label: string;
    href: string;
  };
  
  export type NavDropdownItem = {
    type: "dropdown";
    label: string;
    items: { label: string; href: string }[];
  };
  
  export type NavItem = NavLinkItem | NavDropdownItem;
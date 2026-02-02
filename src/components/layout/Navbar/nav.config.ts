import { NavItem } from "./nav.types";

export function getNavItems(showCandidates: boolean): NavItem[] {
  const items: NavItem[] = [
    { type: "link", label: "Inicio", href: "/" },
    {
      type: "dropdown",
      label: "El Partido",
      items: [
        { label: "Sobre el Partido", href: "/el-partido" },
        { label: "Misión y Valores", href: "/mision-y-valores" },
        { label: "Liderazgo", href: "/liderazgo" },
      ],
    },
    { type: "link", label: "Noticias", href: "/noticias" },
    { type: "link", label: "Actividades", href: "/actividades" },
    { type: "link", label: "Contacto", href: "/contacto" },
  ];

  if (showCandidates) {
    items.splice(4, 0, { type: "link", label: "Candidatos", href: "/candidatos" });
  }

  return items;
}
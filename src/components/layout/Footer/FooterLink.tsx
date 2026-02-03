// components/FooterLink.tsx
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { FooterLinkProps } from "@/types/footer.types"

export const FooterLink = ({
  href,
  label,
  external = false,
  className = "",
}: FooterLinkProps) => {
  const baseClasses =
    "text-white/80 hover:text-[#00A651] transition-colors duration-200 flex items-center gap-1"

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {label}
        <ExternalLink className="w-3 h-3" />
      </a>
    )
  }

  return (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {label}
    </Link>
  )
}

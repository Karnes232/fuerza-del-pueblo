// components/FooterColumn.tsx
import { FooterColumnProps } from "@/types/footer.types"

export const FooterColumn = ({
  title,
  children,
  className = "",
}: FooterColumnProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-white font-semibold text-lg border-b border-primaryGreen/30 pb-2">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

// components/FooterContainer.tsx
import { FooterTop } from "@/components/layout/Footer/FooterTop"
import { FooterBottom } from "@/components/layout/Footer/FooterBottom"
import { FooterProps } from "@/types/footer.types"

export const FooterContainer = ({ className = "" }: FooterProps) => {
  return (
    <footer className={`bg-darkGreen text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FooterTop />
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <FooterBottom />
      </div>
    </footer>
  )
}

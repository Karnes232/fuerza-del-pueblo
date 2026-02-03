// components/FooterLogo.tsx
import Image from "next/image"
import Link from "next/link"
import { FooterLogoProps } from "@/types/footer.types"

export const FooterLogo = ({ onClick, logo }: FooterLogoProps) => {
  // Option 1: Text-based logo (current default)
  //   return (
  //     <Link href="/" onClick={onClick} className="inline-block">
  //       <div className="text-white font-bold text-xl md:text-2xl font-['Montserrat']">
  //         <span className="text-[#00A651]">Fuerza del Pueblo</span>
  //         <span className="block text-sm md:text-base font-normal mt-1">
  //           Verón-Punta Cana
  //         </span>
  //       </div>
  //     </Link>
  //   );

  // Option 2: Image logo (uncomment when you have the logo)

  return (
    <Link href="/" onClick={onClick} className="inline-block">
      <Image
        src={logo.asset.url}
        alt={logo.alt}
        width={logo.asset.metadata.dimensions.width}
        height={logo.asset.metadata.dimensions.height}
        className="h-12 md:h-14 w-auto"
      />
    </Link>
  )
}

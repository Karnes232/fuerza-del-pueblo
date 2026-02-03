// components/FooterLogo.tsx
import Image from "next/image"
import Link from "next/link"
import { FooterLogoProps } from "@/types/footer.types"

export const FooterLogo = ({ onClick }: FooterLogoProps) => {
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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vT0mXuxtC8VOUkQ5krTeGlbVIvaWBd-d_g&s"
        alt="Fuerza del Pueblo - Verón-Punta Cana"
        width={160}
        height={50}
        className="h-12 md:h-14 w-auto"
      />
    </Link>
  )
}

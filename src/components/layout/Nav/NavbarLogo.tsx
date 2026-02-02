// components/NavbarLogo.tsx
import Image from 'next/image';
import Link from 'next/link';
import { LogoProps } from '@/types/navbar.types';

export const NavbarLogo = ({ onClick }: LogoProps) => {
  // Option 1: Text-based logo (current default)
//   return (
//     <Link href="/" onClick={onClick} className="flex-shrink-0">
//       <div className="text-white font-bold text-xl md:text-2xl font-['Montserrat']">
//         <span className="text-primaryGreen">Fuerza del Pueblo</span>
//         <span className="block text-xs md:text-sm font-normal mt-0.5">
//           Verón-Punta Cana
//         </span>
//       </div>
//     </Link>
//   );

  // Option 2: Image logo (uncomment when you have the logo)

  return (
    <Link href="/" onClick={onClick} className="flex-shrink-0">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vT0mXuxtC8VOUkQ5krTeGlbVIvaWBd-d_g&s"
        alt="Fuerza del Pueblo - Verón-Punta Cana"
        width={180}
        height={60}
        className="h-12 md:h-14 w-auto"
        priority
      />
    </Link>
  );


  // Option 3: Combined logo (image + text)
  /*
  return (
    <Link href="/" onClick={onClick} className="flex-shrink-0 flex items-center gap-3">
      <Image
        src="/images/logo-icon.png"
        alt="FDP Logo"
        width={50}
        height={50}
        className="h-10 md:h-12 w-auto"
        priority
      />
      <div className="text-white font-bold">
        <span className="text-[#00A651] text-lg md:text-xl block">
          Fuerza del Pueblo
        </span>
        <span className="text-xs md:text-sm font-normal">Verón-Punta Cana</span>
      </div>
    </Link>
  );
  */
};
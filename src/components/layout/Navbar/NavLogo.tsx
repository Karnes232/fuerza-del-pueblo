import Link from "next/link";
import Image from "next/image";

export function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vT0mXuxtC8VOUkQ5krTeGlbVIvaWBd-d_g&s"
          alt="Fuerza del Pueblo"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="leading-tight">
        <p className="text-sm font-semibold text-gray-900">Fuerza del Pueblo</p>
        <p className="text-xs text-gray-600">Verón – Punta Cana</p>
      </div>
    </Link>
  );
}
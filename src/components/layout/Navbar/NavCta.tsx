import Link from "next/link";

export function NavCta() {
  return (
    <Link
      href="/unete"
      className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      Únete
    </Link>
  );
}
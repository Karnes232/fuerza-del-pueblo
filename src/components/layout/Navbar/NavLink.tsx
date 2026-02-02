import Link from "next/link";

export function NavLink({
  href,
  label,
  active,
  className = "",
}: {
  href: string;
  label: string;
  active: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "rounded-md px-3 py-2 text-sm font-medium transition",
        active ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        className,
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
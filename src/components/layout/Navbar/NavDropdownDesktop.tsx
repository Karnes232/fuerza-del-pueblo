import Link from "next/link";

export function NavDropdownDesktop({
  label,
  items,
  isOpen,
  setOpen,
  isActive,
}: {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  isActive: (href: string) => boolean;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={[
          "rounded-md px-3 py-2 text-sm font-medium transition",
          isOpen ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        ].join(" ")}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {label} <span className="ml-1 align-middle">▾</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-lg border bg-white p-2 shadow-lg">
          {items.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className={[
                "block rounded-md px-3 py-2 text-sm transition",
                isActive(sub.href)
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
              ].join(" ")}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
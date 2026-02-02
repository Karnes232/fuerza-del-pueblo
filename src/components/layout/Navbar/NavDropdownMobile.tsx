import Link from "next/link";

export function NavDropdownMobile({
  label,
  items,
  isOpen,
  onToggle,
  isActive,
}: {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  isActive: (href: string) => boolean;
}) {
  return (
    <div className="rounded-md border">
      <button
        type="button"
        className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-gray-700"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {label}
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="flex flex-col gap-1 border-t p-2">
          {items.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className={[
                "rounded-md px-3 py-2 text-sm transition",
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

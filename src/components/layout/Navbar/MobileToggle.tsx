export function MobileToggle({
    open,
    onClick,
  }: {
    open: boolean;
    onClick: () => void;
  }) {
    return (
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 md:hidden"
        onClick={onClick}
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        {open ? "Cerrar" : "Menú"}
      </button>
    );
  }
  
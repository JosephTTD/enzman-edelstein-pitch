"use client";

import Link from "next/link";

const navItems = [
  { label: "Kollektion", href: "/kollektion" },
  { label: "Edelsteinsorten", href: "/kollektion?category=edelsteinsorten" },
  { label: "Kat Florence", href: "/kollektion?category=kat-florence" },
  { label: "Schmuck", href: "/kollektion?category=schmuck" },
  { label: "Wissen", href: "/wissen" },
  { label: "Über Uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-200 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={`fixed right-0 top-0 z-[70] h-full w-80 bg-background transition-transform duration-200 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-6">
          <span className="text-sm uppercase tracking-[0.15em] text-text-secondary">
            Menu
          </span>
          <button onClick={onClose} aria-label="Schließen">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>
        <nav className="px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block border-b border-border/50 py-4 text-sm uppercase tracking-[0.1em] text-text-primary transition-colors duration-fast hover:text-text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

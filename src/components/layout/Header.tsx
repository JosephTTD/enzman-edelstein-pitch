"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNav } from "./MobileNav";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";

const navKeys = [
  { key: "nav.kollektion" as const, href: "/kollektion" },
  { key: "nav.edelsteinsorten" as const, href: "/kollektion?category=edelsteinsorten" },
  { key: "nav.katflorence" as const, href: "/kollektion?category=kat-florence" },
  { key: "nav.schmuck" as const, href: "/kollektion?category=schmuck" },
  { key: "nav.wissen" as const, href: "/wissen" },
  { key: "nav.ueber" as const, href: "/ueber-uns" },
  { key: "nav.kontakt" as const, href: "/kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, toggleLocale, t } = useI18n();
  const { itemCount, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-background">
        <div className="border-b border-border">
          <Container className="relative flex h-16 items-center justify-between">
            {/* Left: language toggle */}
            <div className="flex items-center">
              <button
                onClick={toggleLocale}
                className="flex items-center gap-1 text-xs tracking-wide text-text-secondary transition-colors duration-fast hover:text-text-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span className="hidden sm:inline">{locale === "de" ? "DE" : "EN"}</span>
              </button>
            </div>

            {/* Center: logo with magnetic E·E collapse */}
            <Link
              href="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              {/* Mobile: always show abbreviation */}
              <span className="flex items-baseline font-display not-italic text-xl tracking-[0.25em] text-text-primary sm:hidden whitespace-nowrap">
                E·E
              </span>
              {/* Desktop: magnetic collapse on scroll */}
              <span className="hidden sm:flex items-baseline font-display not-italic text-2xl tracking-[0.25em] text-text-primary whitespace-nowrap">
                <span className="inline-block">E</span>
                <span
                  className="inline-block overflow-hidden transition-all ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    maxWidth: scrolled ? 0 : "300px",
                    opacity: scrolled ? 0 : 1,
                    transitionDuration: scrolled ? "800ms" : "600ms",
                  }}
                >
                  NZMANN
                </span>
                <span
                  className="inline-block overflow-hidden transition-all ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    width: scrolled ? 0 : "0.25em",
                    transitionDuration: "700ms",
                  }}
                />
                <span
                  className="inline-block transition-all ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    maxWidth: scrolled ? "30px" : 0,
                    opacity: scrolled ? 1 : 0,
                    transitionDuration: "600ms",
                    transitionDelay: scrolled ? "500ms" : "0ms",
                  }}
                >
                  ·
                </span>
                <span className="inline-block">E</span>
                <span
                  className="inline-block overflow-hidden transition-all ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    maxWidth: scrolled ? 0 : "300px",
                    opacity: scrolled ? 0 : 1,
                    transitionDuration: scrolled ? "800ms" : "600ms",
                  }}
                >
                  DELSTEINE
                </span>
              </span>
            </Link>

            {/* Right: theme toggle + basket + mobile menu */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="hidden sm:block"><ThemeToggle /></span>
              <button
                onClick={() => setIsOpen(true)}
                className="relative text-text-primary transition-colors duration-fast hover:text-text-secondary"
                aria-label="Warenkorb"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center bg-accent text-[10px] font-medium text-background rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                className="flex items-center justify-center lg:hidden"
                aria-label="Menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              </button>
            </div>
          </Container>
        </div>

        {/* Bottom row: navigation */}
        <nav className="hidden border-b border-border lg:block">
          <Container className="flex h-12 items-center justify-center gap-8">
            {navKeys.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-[13px] uppercase tracking-[0.15em] text-text-secondary transition-colors duration-fast hover:text-text-primary"
              >
                {t(item.key)}
              </Link>
            ))}
          </Container>
        </nav>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

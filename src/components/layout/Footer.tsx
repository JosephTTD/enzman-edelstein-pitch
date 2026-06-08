import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  Kollektion: [
    { label: "Alle Edelsteine", href: "/kollektion" },
    { label: "Edelsteinsorten", href: "/kollektion?category=edelsteinsorten" },
    { label: "Kat Florence", href: "/kollektion?category=kat-florence" },
    { label: "Schmuck", href: "/kollektion?category=schmuck" },
  ],
  Unternehmen: [
    { label: "Über Uns", href: "/ueber-uns" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "Wissen", href: "/wissen" },
  ],
  Rechtliches: [
    { label: "Impressum", href: "/kontakt" },
    { label: "Datenschutz", href: "/kontakt" },
    { label: "AGB", href: "/kontakt" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-base tracking-[0.25em] text-text-primary not-italic">
              ENZMANN EDELSTEINE
            </span>
            <p className="mt-3 text-sm text-text-secondary">
              Sammlerstücke &bull; Geschenke &bull; Kapitalanlagen
            </p>
            <div className="mt-5 space-y-1 text-sm text-text-secondary">
              <p>Blumenstr. 39</p>
              <p>82538 Geretsried</p>
              <p className="mt-2">+49 (0) 8171 9973350</p>
              <p>edelsteine@enzmann.de</p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-text-primary">
                {title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Enzmann Edelsteine. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-xs text-text-secondary">
            Alle Preise inkl. gesetzlicher USt., zzgl. Versand
          </p>
        </div>
      </Container>
    </footer>
  );
}

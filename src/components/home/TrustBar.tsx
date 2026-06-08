"use client";

import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Container } from "@/components/ui/Container";

const trustItems = [
  {
    title: "14 Tage Rückgaberecht",
    description: "Kostenfreie Rücksendung",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Echtheitszertifikat",
    description: "Jeder Stein zertifiziert",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Geprüfter Shop",
    description: "Trusted Shops zertifiziert",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Versicherter Versand",
    description: "3–6 Werktage",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-border py-10">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustItems.map((item, i) => (
            <AnimatedReveal key={item.title} delay={i * 0.03}>
              <div className="flex flex-col items-center text-center gap-3">
                <span className="text-text-secondary">{item.icon}</span>
                <div>
                  <h3 className="text-sm font-medium text-text-primary">{item.title}</h3>
                  <p className="mt-0.5 text-xs text-text-secondary">{item.description}</p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

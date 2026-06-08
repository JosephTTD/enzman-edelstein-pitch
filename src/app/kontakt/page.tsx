"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export default function KontaktPage() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">
            Kontakt
          </p>
          <h1 className="mt-3 font-display text-heading-1 text-text-primary">
            Sprechen Sie uns an
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-text-secondary">
            Wir beraten Sie gerne persönlich zu unseren Edelsteinen.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-text-secondary">
                    Vorname
                  </label>
                  <input
                    type="text"
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-200 focus:border-text-primary placeholder:text-text-secondary/40"
                    placeholder="Max"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-text-secondary">
                    Nachname
                  </label>
                  <input
                    type="text"
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-200 focus:border-text-primary placeholder:text-text-secondary/40"
                    placeholder="Mustermann"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-text-secondary">
                  E-Mail
                </label>
                <input
                  type="email"
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-200 focus:border-text-primary placeholder:text-text-secondary/40"
                  placeholder="max@beispiel.de"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-text-secondary">
                  Ihre Nachricht
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-200 focus:border-text-primary placeholder:text-text-secondary/40 resize-none"
                  placeholder="Wie können wir Ihnen helfen?"
                />
              </div>
              <button
                type="button"
                className="w-full bg-text-primary px-6 py-3.5 text-xs uppercase tracking-[0.15em] text-background transition-opacity duration-200 hover:opacity-80"
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] text-text-secondary mb-3">
                Adresse
              </h3>
              <div className="space-y-1 text-sm text-text-secondary">
                <p className="text-text-primary font-display text-base">
                  Enzmann Edelsteine
                </p>
                <p>Blumenstr. 39</p>
                <p>82538 Geretsried</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] text-text-secondary mb-3">
                Telefon
              </h3>
              <a
                href="tel:+498171997335"
                className="text-sm text-text-primary transition-colors duration-fast hover:text-text-secondary"
              >
                +49 (0) 8171 9973350
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] text-text-secondary mb-3">
                E-Mail
              </h3>
              <a
                href="mailto:edelsteine@enzmann.de"
                className="text-sm text-text-primary transition-colors duration-fast hover:text-text-secondary"
              >
                edelsteine@enzmann.de
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] text-text-secondary mb-3">
                Rechtliches
              </h3>
              <div className="space-y-1 text-sm text-text-secondary">
                <p>Inhaber: Enrico Enzmann</p>
                <p>USt-IdNr: DE815038914</p>
                <p>Registergericht: Amtsgericht Wolfratshausen</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";

const values = [
  {
    title: "Expertise",
    description:
      "Jeder Stein wird sorgfältig geprüft und bewertet. Wir arbeiten mit renommierten Schleifern wie John Dyer und Häusern wie Kat Florence zusammen.",
  },
  {
    title: "Authentizität",
    description:
      "Transparenz bei Behandlung, Herkunft und Zertifizierung. Jeder Edelstein wird mit einem Echtheitszertifikat geliefert.",
  },
  {
    title: "Persönliche Beratung",
    description:
      "Ob Sammlerstück, Geschenk oder Kapitalanlage - wir beraten Sie individuell und finden den perfekten Stein für Ihren Anlass.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">
                Über Uns
              </p>
              <h1 className="mt-3 font-display text-heading-1 text-text-primary">
                Enzmann Edelsteine
              </h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
                <p>
                  Enzmann Edelsteine mit Sitz in Geretsried, Bayern, ist
                  spezialisiert auf den Handel mit erlesenen losen Edelsteinen
                  und exklusivem Edelsteinschmuck.
                </p>
                <p>
                  Unser Sortiment umfasst seltene Granate, Saphire, Turmaline,
                  Tansanite und viele weitere Edelsteine in höchster Qualität -
                  für Sammler, als einzigartiges Geschenk oder als
                  wertbeständige Kapitalanlage.
                </p>
                <p>
                  Inhaber Enrico Enzmann wählt jeden Stein persönlich aus und
                  arbeitet mit international anerkannten Schleifern und
                  Zertifizierungsstellen zusammen.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/images/categories/hauptkategorie_edelsteinsorten.jpg"
                alt="Edelsteinsorten"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <SectionHeading subtitle="Unsere Werte" title="Was uns auszeichnet" />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map((value, i) => (
              <AnimatedReveal key={value.title} delay={i * 0.05}>
                <div className="text-center">
                  <h3 className="font-display text-lg text-text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="text-center">
          <AnimatedReveal>
            <h2 className="font-display text-heading-2 text-text-primary">
              Lassen Sie sich beraten
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-text-secondary">
              Wir freuen uns auf Ihre Anfrage - ob telefonisch, per E-Mail oder
              über unser Kontaktformular.
            </p>
            <div className="mt-8">
              <Button href="/kontakt" variant="primary" size="lg">
                Kontakt aufnehmen
              </Button>
            </div>
          </AnimatedReveal>
        </Container>
      </section>
    </>
  );
}

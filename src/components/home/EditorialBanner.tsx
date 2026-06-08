"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function EditorialBanner() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Wissen
            </p>
            <h2 className="mt-3 font-display text-heading-2 text-text-primary">
              Die Kunst der Edelsteinkunde
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Farbe, Reinheit, Schliff und Karat - die vier Säulen der
              Edelsteinbewertung. Verstehen Sie, was einen außergewöhnlichen
              Stein von einem gewöhnlichen unterscheidet.
            </p>
            <div className="mt-8">
              <Button href="/wissen" variant="secondary">
                Wissen entdecken
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/images/categories/hauptkategorie_kat_florence.jpg"
              alt="Edelsteinkunde"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { educationTopics } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function WissenPage() {
  return (
    <>
      <section className="py-12 lg:py-20">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Edelsteinkunde
            </p>
            <h1 className="mt-3 font-display text-heading-1 text-text-primary">
              Wissen
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
              Verstehen Sie die Kriterien, die den Wert und die Schönheit eines
              Edelsteins bestimmen.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {educationTopics.map((topic, i) => {
              const isReversed = i % 2 === 1;
              return (
                <motion.div
                  key={topic.slug}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3 }}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative h-8 w-8 opacity-40">
                        <Image
                          src={topic.icon}
                          alt={topic.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs uppercase tracking-[0.15em] text-text-secondary">
                        {topic.subtitle}
                      </span>
                    </div>
                    <h2 className="font-display text-heading-2 text-text-primary">
                      {topic.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-text-secondary">
                      {topic.content}
                    </p>
                  </div>
                  <div
                    className={`relative aspect-[4/3] overflow-hidden bg-surface ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[8rem] leading-none text-text-primary/[0.03]">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 lg:py-20">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-display text-heading-2 text-text-primary">
              Haben Sie Fragen?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-text-secondary">
              Unser Expertenteam berät Sie gerne zu jedem Aspekt der Edelsteinkunde.
            </p>
            <div className="mt-6">
              <Button href="/kontakt" variant="primary" size="lg">
                Beratung anfragen
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

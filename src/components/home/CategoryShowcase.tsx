"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function CategoryShowcase() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((cat, i) => (
            <AnimatedReveal key={cat.slug} delay={i * 0.05}>
              <Link
                href={`/kollektion?category=${cat.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl text-white">{cat.title}</h3>
                  <p className="mt-1 text-sm text-white/60 line-clamp-2">{cat.description}</p>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

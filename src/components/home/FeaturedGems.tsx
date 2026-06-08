"use client";

import { getFeaturedProducts } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/product/ProductCard";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";

export function FeaturedGems() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading subtitle="Ausgewählte Stücke" title="Unsere Highlights" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <AnimatedReveal key={product.slug} delay={i * 0.05}>
              <ProductCard product={product} />
            </AnimatedReveal>
          ))}
        </div>
        <AnimatedReveal delay={0.2} className="mt-10 text-center">
          <Button href="/kollektion" variant="secondary">
            Gesamte Kollektion ansehen
          </Button>
        </AnimatedReveal>
      </Container>
    </section>
  );
}

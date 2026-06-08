"use client";

import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import Link from "next/link";

export function ProductDetailClient({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <Container className="py-32 text-center">
        <h1 className="font-display text-heading-1 text-text-primary">
          Produkt nicht gefunden
        </h1>
        <Link
          href="/kollektion"
          className="mt-4 inline-block text-sm text-text-secondary hover:text-text-primary"
        >
          Zurück zur Kollektion
        </Link>
      </Container>
    );
  }

  const related = getRelatedProducts(slug, 3);

  return (
    <section className="py-8 lg:py-16">
      <Container>
        <nav className="mb-6 text-xs text-text-secondary">
          <Link href="/" className="hover:text-text-primary transition-colors duration-fast">
            Startseite
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/kollektion" className="hover:text-text-primary transition-colors duration-fast">
            Kollektion
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-text-primary">{product.category}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.images} title={product.title} />
          <ProductInfo product={product} />
        </div>

        {related.length > 0 && (
          <div className="mt-20 lg:mt-28">
            <SectionHeading
              subtitle="Das könnte Ihnen auch gefallen"
              title="Ähnliche Steine"
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <AnimatedReveal key={p.slug} delay={i * 0.05}>
                  <ProductCard product={p} />
                </AnimatedReveal>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

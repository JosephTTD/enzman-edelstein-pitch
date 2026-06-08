"use client";

import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <AnimatedReveal key={product.slug} delay={Math.min(i * 0.05, 0.3)}>
          <ProductCard product={product} />
        </AnimatedReveal>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import { FilterBar } from "@/components/product/FilterBar";

export default function KollektionPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.categorySlug === activeFilter);

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          subtitle="Unsere Kollektion"
          title="Alle Edelsteine"
        />
        <div className="mt-12 mb-12">
          <FilterBar active={activeFilter} onChange={setActiveFilter} />
        </div>
        <ProductGrid products={filtered} />
        <p className="mt-12 text-center text-sm text-text-secondary">
          {filtered.length} {filtered.length === 1 ? "Edelstein" : "Edelsteine"} gefunden
        </p>
      </Container>
    </section>
  );
}

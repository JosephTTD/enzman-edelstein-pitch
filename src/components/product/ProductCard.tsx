"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const hasMultipleImages = product.images.length > 1;

  return (
    <Link href={`/kollektion/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-white">
        {/* Primary image */}
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className={`object-cover transition-opacity duration-300 ${
            hasMultipleImages ? "group-hover:opacity-0" : ""
          }`}
        />
        {/* Second image (certificate/alt angle) on hover */}
        {hasMultipleImages && (
          <Image
            src={product.images[1]}
            alt={`${product.title} - Zertifikat`}
            fill
            className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
        {/* Certificate badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 px-2 py-1 text-[10px] uppercase tracking-wider text-text-secondary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          {product.specs.certificate}
        </div>
        {product.price === null && (
          <div className="absolute left-3 top-3 bg-text-primary px-2 py-1 text-[10px] uppercase tracking-wider text-background">
            Auf Anfrage
          </div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-sm text-text-primary line-clamp-1">
          {product.title}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-text-secondary">
          <span>{product.specs.carat}</span>
          <span>·</span>
          <span>{product.specs.origin}</span>
        </div>
        <p className="mt-1.5 text-sm font-medium text-text-primary">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}

"use client";

import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export function ProductInfo({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { t } = useI18n();
  const [added, setAdded] = useState(false);

  const specKeys = [
    { key: "spec.color" as const, value: product.specs.color },
    { key: "spec.cut" as const, value: product.specs.cut },
    { key: "spec.carat" as const, value: product.specs.carat },
    { key: "spec.clarity" as const, value: product.specs.clarity },
    { key: "spec.origin" as const, value: product.specs.origin },
    { key: "spec.treatment" as const, value: product.specs.treatment },
    { key: "spec.certificate" as const, value: product.specs.certificate },
    { key: "spec.dimensions" as const, value: product.specs.dimensions },
  ];

  const handleAddToCart = () => {
    addItem({
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <Badge variant="outline">{product.category}</Badge>
        {product.specs.jewelry && <Badge variant="accent">Schmuck</Badge>}
      </div>

      <h1 className="mt-4 font-display text-heading-2 text-text-primary">
        {product.title}
      </h1>

      <p className="mt-1 text-sm text-text-secondary">
        Art.-Nr. {product.articleNumber}
      </p>

      <p className="mt-6 text-2xl font-medium text-text-primary">
        {formatPrice(product.price)}
      </p>
      {product.price !== null && (
        <p className="mt-0.5 text-xs text-text-secondary">
          inkl. 19% USt., zzgl. Versand
        </p>
      )}

      <div className="mt-6 flex gap-3">
        <Button variant="primary" size="lg" onClick={handleAddToCart}>
          {added ? (
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {t("cart.added")}
            </span>
          ) : (
            t("product.addtocart")
          )}
        </Button>
        <Button variant="secondary" size="lg" href="/kontakt">
          Beratung
        </Button>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <h3 className="text-xs uppercase tracking-[0.15em] text-text-secondary mb-4">
          {t("product.specs")}
        </h3>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
          {specKeys.map((spec) => (
            <div key={spec.key}>
              <dt className="text-[11px] uppercase tracking-wider text-text-secondary">
                {t(spec.key)}
              </dt>
              <dd className="mt-0.5 text-sm text-text-primary">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <h3 className="text-xs uppercase tracking-[0.15em] text-text-secondary mb-3">
          {t("product.details")}
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary">
          {product.description}
        </p>
      </div>
    </div>
  );
}

"use client";

import { Container } from "@/components/ui/Container";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, removeItem, total, clearCart } = useCart();
  const { t } = useI18n();
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <Container className="py-20">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="font-display text-heading-2 text-text-primary">
            {t("checkout.title")}
          </h1>
          <p className="mt-4 text-text-secondary">
            {t("checkout.demo")}
          </p>
          <Link
            href="/kollektion"
            className="mt-8 inline-block bg-accent text-background px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
          >
            {t("cart.continue")}
          </Link>
        </div>
      </Container>
    );
  }

  if (items.length === 0) {
    return (
      <Container className="py-20">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="font-display text-heading-2 text-text-primary">
            {t("cart.title")}
          </h1>
          <p className="mt-4 text-text-secondary">{t("cart.empty")}</p>
          <Link
            href="/kollektion"
            className="mt-8 inline-block bg-accent text-background px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
          >
            {t("cart.continue")}
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div className="w-full overflow-x-hidden">
      <Container className="py-8 sm:py-12">
        <h1 className="font-display text-heading-2 text-text-primary mb-8 sm:mb-10">
          {t("checkout.title")}
        </h1>

        {/* Mobile: stacked, no border box. Desktop: side-by-side */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_400px] lg:gap-12">

          {/* Order summary — first on mobile, second on desktop */}
          <div className="lg:order-2">
            <h2 className="text-xs uppercase tracking-[0.15em] text-text-secondary mb-4">
              {t("checkout.summary")}
            </h2>

            <div className="border border-border p-4 sm:p-6 lg:sticky lg:top-32">
              {items.map((item) => (
                <div key={item.slug} className="flex gap-3 pb-4 mb-4 border-b border-border last:border-0 last:mb-0 last:pb-0">
                  <div className="relative h-14 w-14 flex-shrink-0 bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm text-text-primary line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {item.price ? formatPrice(item.price) : t("product.price.request")}
                    </p>
                    <button
                      onClick={() => removeItem(item.slug)}
                      className="mt-1 text-[11px] text-text-secondary underline underline-offset-2 hover:text-text-primary transition-colors"
                    >
                      {t("cart.remove")}
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t("checkout.subtotal")}</span>
                  <span className="text-text-primary">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t("checkout.shippingcost")}</span>
                  <span className="text-text-primary">{t("checkout.free")}</span>
                </div>
                <div className="flex justify-between pt-3 mt-2 border-t border-border">
                  <span className="font-medium text-text-primary">{t("cart.total")}</span>
                  <span className="font-display text-lg text-text-primary not-italic">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                onClick={() => { setPlaced(true); clearCart(); }}
                className="mt-6 w-full bg-accent text-background py-3.5 text-xs font-medium uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
              >
                {t("checkout.place")}
              </button>
            </div>
          </div>

          {/* Form — second on mobile, first on desktop */}
          <div className="lg:order-1">
            <h2 className="text-xs uppercase tracking-[0.15em] text-text-secondary mb-4">
              {t("checkout.shipping")}
            </h2>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs text-text-secondary">{t("checkout.firstname")}</span>
                  <input type="text" className="mt-1 block w-full border border-border bg-background px-3 py-2.5 text-sm text-text-primary outline-none focus:border-text-primary transition-colors" />
                </label>
                <label className="block">
                  <span className="text-xs text-text-secondary">{t("checkout.lastname")}</span>
                  <input type="text" className="mt-1 block w-full border border-border bg-background px-3 py-2.5 text-sm text-text-primary outline-none focus:border-text-primary transition-colors" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs text-text-secondary">{t("checkout.email")}</span>
                <input type="email" className="mt-1 block w-full border border-border bg-background px-3 py-2.5 text-sm text-text-primary outline-none focus:border-text-primary transition-colors" />
              </label>
              <label className="block">
                <span className="text-xs text-text-secondary">{t("checkout.phone")}</span>
                <input type="tel" className="mt-1 block w-full border border-border bg-background px-3 py-2.5 text-sm text-text-primary outline-none focus:border-text-primary transition-colors" />
              </label>
              <label className="block">
                <span className="text-xs text-text-secondary">{t("checkout.address")}</span>
                <input type="text" className="mt-1 block w-full border border-border bg-background px-3 py-2.5 text-sm text-text-primary outline-none focus:border-text-primary transition-colors" />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs text-text-secondary">{t("checkout.zip")}</span>
                  <input type="text" className="mt-1 block w-full border border-border bg-background px-3 py-2.5 text-sm text-text-primary outline-none focus:border-text-primary transition-colors" />
                </label>
                <label className="block">
                  <span className="text-xs text-text-secondary">{t("checkout.city")}</span>
                  <input type="text" className="mt-1 block w-full border border-border bg-background px-3 py-2.5 text-sm text-text-primary outline-none focus:border-text-primary transition-colors" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs text-text-secondary">{t("checkout.country")}</span>
                <select className="mt-1 block w-full border border-border bg-background px-3 py-2.5 text-sm text-text-primary outline-none focus:border-text-primary transition-colors">
                  <option>Deutschland</option>
                  <option>Österreich</option>
                  <option>Schweiz</option>
                </select>
              </label>
            </div>

            <div className="mt-8">
              <h2 className="text-xs uppercase tracking-[0.15em] text-text-secondary mb-4">
                {t("checkout.payment")}
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 border border-border px-3 py-3 cursor-pointer hover:border-text-primary transition-colors">
                  <input type="radio" name="payment" defaultChecked className="accent-text-primary" />
                  <span className="text-sm text-text-primary">Kreditkarte</span>
                </label>
                <label className="flex items-center gap-3 border border-border px-3 py-3 cursor-pointer hover:border-text-primary transition-colors">
                  <input type="radio" name="payment" className="accent-text-primary" />
                  <span className="text-sm text-text-primary">PayPal</span>
                </label>
                <label className="flex items-center gap-3 border border-border px-3 py-3 cursor-pointer hover:border-text-primary transition-colors">
                  <input type="radio" name="payment" className="accent-text-primary" />
                  <span className="text-sm text-text-primary">Überweisung</span>
                </label>
              </div>
            </div>

            <p className="mt-6 text-xs text-text-secondary italic">
              {t("checkout.demo")}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

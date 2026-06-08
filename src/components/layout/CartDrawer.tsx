"use client";

import { useCart } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function CartDrawer() {
  const { items, removeItem, total, isOpen, setIsOpen } = useCart();
  const { t } = useI18n();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background border-l border-border shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="font-display text-lg text-text-primary">
              {t("cart.title")}
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="text-text-secondary">{t("cart.empty")}</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 text-sm text-text-primary underline underline-offset-4 hover:text-text-secondary transition-colors"
                >
                  {t("cart.continue")}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.slug}
                    className="flex gap-4 border-b border-border pb-4"
                  >
                    <div className="relative h-20 w-20 flex-shrink-0 bg-white">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-text-primary truncate">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {item.price ? formatPrice(item.price) : t("product.price.request")}
                      </p>
                      {item.quantity > 1 && (
                        <p className="mt-0.5 text-xs text-text-secondary">
                          × {item.quantity}
                        </p>
                      )}
                      <button
                        onClick={() => removeItem(item.slug)}
                        className="mt-2 text-xs text-text-secondary underline underline-offset-2 hover:text-text-primary transition-colors"
                      >
                        {t("cart.remove")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border px-6 py-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  {t("cart.total")}
                </span>
                <span className="font-display text-lg text-text-primary">
                  {formatPrice(total)}
                </span>
              </div>
              <Link
                href="/checkout"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-accent text-background text-center py-3 text-sm font-medium tracking-wide uppercase hover:bg-accent-hover transition-colors"
              >
                {t("cart.checkout")}
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="block w-full text-center text-sm text-text-secondary underline underline-offset-4 hover:text-text-primary transition-colors"
              >
                {t("cart.continue")}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

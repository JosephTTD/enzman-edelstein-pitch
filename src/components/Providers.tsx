"use client";

import { ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n";
import { CartProvider } from "@/lib/cart";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { WelcomeCurtain } from "@/components/ui/WelcomeCurtain";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <CartProvider>
        <WelcomeCurtain />
        {children}
        <CartDrawer />
      </CartProvider>
    </I18nProvider>
  );
}

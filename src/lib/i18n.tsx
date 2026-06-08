"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Locale = "de" | "en";

const translations = {
  // Header nav
  "nav.kollektion": { de: "Kollektion", en: "Collection" },
  "nav.edelsteinsorten": { de: "Edelsteinsorten", en: "Gemstone Varieties" },
  "nav.katflorence": { de: "Kat Florence", en: "Kat Florence" },
  "nav.schmuck": { de: "Schmuck", en: "Jewellery" },
  "nav.wissen": { de: "Wissen", en: "Knowledge" },
  "nav.ueber": { de: "Über Uns", en: "About Us" },
  "nav.kontakt": { de: "Kontakt", en: "Contact" },

  // Hero
  "hero.1.title": { de: "Die Kunst des Schliffs", en: "The Art of Cutting" },
  "hero.1.desc": {
    de: "Erfahren Sie, wie aus einem rohen Kristall ein funkelnder Edelstein wird.",
    en: "Discover how a raw crystal becomes a sparkling gemstone.",
  },
  "hero.1.cta": { de: "Wissen entdecken", en: "Explore Knowledge" },
  "hero.2.title": { de: "Faszination Edelstein", en: "Gemstone Fascination" },
  "hero.2.desc": {
    de: "Entdecken Sie die Welt der seltenen Steine in unseren Videos.",
    en: "Explore the world of rare stones in our videos.",
  },
  "hero.2.cta": { de: "Mehr erfahren", en: "Learn More" },
  "hero.3.title": { de: "Seltene Schätze", en: "Rare Treasures" },
  "hero.3.desc": {
    de: "Paraiba-Turmaline, Demantoide und weitere Raritäten.",
    en: "Paraiba tourmalines, demantoids and other rarities.",
  },
  "hero.3.cta": { de: "Entdecken", en: "Discover" },

  // Trust bar
  "trust.return": { de: "14 Tage Rückgaberecht", en: "14-Day Returns" },
  "trust.return.desc": { de: "Kostenfreie Rücksendung", en: "Free returns" },
  "trust.cert": { de: "Echtheitszertifikat", en: "Certificate of Authenticity" },
  "trust.cert.desc": { de: "Jeder Stein zertifiziert", en: "Every stone certified" },
  "trust.shop": { de: "Geprüfter Shop", en: "Verified Shop" },
  "trust.shop.desc": { de: "Trusted Shops zertifiziert", en: "Trusted Shops certified" },
  "trust.shipping": { de: "Versicherter Versand", en: "Insured Shipping" },
  "trust.shipping.desc": { de: "3–6 Werktage", en: "3–6 business days" },

  // Section headings
  "section.featured": { de: "Ausgewählte Stücke", en: "Featured Pieces" },
  "section.featured.sub": {
    de: "Handverlesene Edelsteine von außergewöhnlicher Qualität",
    en: "Hand-selected gemstones of exceptional quality",
  },
  "section.categories": { de: "Kategorien", en: "Categories" },
  "section.categories.sub": {
    de: "Entdecken Sie unsere Kollektionen",
    en: "Explore our collections",
  },

  // Product
  "product.addtocart": { de: "In den Warenkorb", en: "Add to Cart" },
  "product.details": { de: "Details", en: "Details" },
  "product.specs": { de: "Eigenschaften", en: "Specifications" },
  "product.related": { de: "Ähnliche Steine", en: "Similar Stones" },
  "product.price.request": { de: "Preis auf Anfrage", en: "Price on Request" },

  // Product specs
  "spec.color": { de: "Farbe", en: "Colour" },
  "spec.cut": { de: "Schliff", en: "Cut" },
  "spec.treatment": { de: "Behandlung", en: "Treatment" },
  "spec.certificate": { de: "Zertifikat", en: "Certificate" },
  "spec.clarity": { de: "Reinheit", en: "Clarity" },
  "spec.origin": { de: "Herkunft", en: "Origin" },
  "spec.carat": { de: "Karat", en: "Carat" },
  "spec.dimensions": { de: "Maße", en: "Dimensions" },
  "spec.jewelry": { de: "Schmuckstück", en: "Jewellery Piece" },

  // Cart
  "cart.title": { de: "Warenkorb", en: "Shopping Cart" },
  "cart.empty": { de: "Ihr Warenkorb ist leer", en: "Your cart is empty" },
  "cart.continue": { de: "Weiter einkaufen", en: "Continue Shopping" },
  "cart.checkout": { de: "Zur Kasse", en: "Checkout" },
  "cart.total": { de: "Gesamt", en: "Total" },
  "cart.remove": { de: "Entfernen", en: "Remove" },
  "cart.added": { de: "Zum Warenkorb hinzugefügt", en: "Added to cart" },

  // Checkout
  "checkout.title": { de: "Kasse", en: "Checkout" },
  "checkout.shipping": { de: "Lieferadresse", en: "Shipping Address" },
  "checkout.payment": { de: "Zahlung", en: "Payment" },
  "checkout.summary": { de: "Zusammenfassung", en: "Order Summary" },
  "checkout.place": { de: "Bestellung aufgeben", en: "Place Order" },
  "checkout.firstname": { de: "Vorname", en: "First Name" },
  "checkout.lastname": { de: "Nachname", en: "Last Name" },
  "checkout.email": { de: "E-Mail", en: "Email" },
  "checkout.phone": { de: "Telefon", en: "Phone" },
  "checkout.address": { de: "Adresse", en: "Address" },
  "checkout.city": { de: "Stadt", en: "City" },
  "checkout.zip": { de: "PLZ", en: "Postal Code" },
  "checkout.country": { de: "Land", en: "Country" },
  "checkout.subtotal": { de: "Zwischensumme", en: "Subtotal" },
  "checkout.shippingcost": { de: "Versand", en: "Shipping" },
  "checkout.free": { de: "Kostenfrei", en: "Free" },
  "checkout.demo": {
    de: "Dies ist eine Demo - keine echte Bestellung wird aufgegeben.",
    en: "This is a demo - no real order will be placed.",
  },

  // Filter
  "filter.all": { de: "Alle", en: "All" },
  "filter.sort": { de: "Sortieren", en: "Sort" },
  "filter.price.asc": { de: "Preis aufsteigend", en: "Price: Low to High" },
  "filter.price.desc": { de: "Preis absteigend", en: "Price: High to Low" },

  // Footer
  "footer.rights": { de: "Alle Rechte vorbehalten", en: "All rights reserved" },

  // Pages
  "page.about.title": { de: "Über Uns", en: "About Us" },
  "page.knowledge.title": { de: "Wissen", en: "Knowledge" },
  "page.contact.title": { de: "Kontakt", en: "Contact" },
  "page.contact.send": { de: "Nachricht senden", en: "Send Message" },
  "page.contact.name": { de: "Name", en: "Name" },
  "page.contact.message": { de: "Nachricht", en: "Message" },
} as const;

type TranslationKey = keyof typeof translations;

interface I18nContextType {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: "de",
  toggleLocale: () => {},
  t: (key) => translations[key]?.de ?? key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");

  const toggleLocale = useCallback(() => {
    setLocale((l) => (l === "de" ? "en" : "de"));
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      return translations[key]?.[locale] ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

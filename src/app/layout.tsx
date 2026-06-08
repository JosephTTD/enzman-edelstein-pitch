import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enzmann Edelsteine - Erlesene Edelsteine & Schmuck",
  description:
    "Entdecken Sie unsere handverlesene Kollektion seltener Edelsteine. Sammlerstücke, Geschenke und Kapitalanlagen von höchster Qualität.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Providers>
          <Header />
          <main className="min-h-screen pt-16 lg:pt-[112px]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    slug: "edelsteinsorten",
    title: "Edelsteinsorten",
    description:
      "Entdecken Sie unsere erlesene Auswahl an losen Edelsteinen – von seltenen Granaten bis hin zu leuchtenden Saphiren.",
    image: "/images/categories/hauptkategorie_edelsteinsorten.jpg",
  },
  {
    slug: "kat-florence",
    title: "Kat Florence",
    description:
      "Exklusive Schmuckstücke und Edelsteine aus dem Hause Kat Florence – zeitgenössisches Design trifft auf seltene Steine.",
    image: "/images/categories/hauptkategorie_kat_florence.jpg",
  },
  {
    slug: "schmuck",
    title: "Schmuck",
    description:
      "Handgefertigte Schmuckkreationen, die die natürliche Schönheit außergewöhnlicher Edelsteine in Szene setzen.",
    image: "/images/categories/hauptkategorie_schmuck.jpg",
  },
];

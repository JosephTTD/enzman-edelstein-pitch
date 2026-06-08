export interface Product {
  slug: string;
  title: string;
  articleNumber: string;
  category: string;
  categorySlug: string;
  price: number | null;
  description: string;
  specs: {
    color: string;
    cut: string;
    treatment: string;
    certificate: string;
    clarity: string;
    origin: string;
    carat: string;
    dimensions: string;
    jewelry: boolean;
  };
  images: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "malaya-granat-starbrite-4-85ct",
    title: "Malaya Granat im Starbrite™ Rundschliff mit 4,85 ct. von John Dyer",
    articleNumber: "100.814",
    category: "Granat",
    categorySlug: "edelsteinsorten",
    price: 3099,
    description:
      "Dieser außergewöhnliche Malaya-Granat entfaltet eine Welt voller Farben inmitten warmer Roséfarbtöne, eine Welt so selten wie fesselnd. Mit einem beeindruckenden Gewicht von 4,85 Karat vereint der Edelstein Größe, Eleganz und außergewöhnliche optische Präsenz. Er wurde vom international renommierten Edelsteinschleifer John Dyer geschliffen, dessen innovative Schlifftechniken von Sammlern und Edelsteinliebhabern weltweit geschätzt werden. Der patentierte Starbrite™-Schliff wurde speziell entwickelt, um die Lichtreflexion des Edelsteins zu maximieren und ein außergewöhnlich lebendiges Funkeln zu erzeugen.",
    specs: {
      color: "Rosa",
      cut: "Starbrite™ Rundschliff",
      treatment: "Unbehandelt",
      certificate: "John Dyer",
      clarity: "Augenrein",
      origin: "Tansania",
      carat: "4,85 ct.",
      dimensions: "9,88 × 9,88 × 4,75 mm",
      jewelry: false,
    },
    images: [
      "/images/products/malaya-granat-john-dyer-starbright-tansania-4-85-ct.jpg",
      "/images/products/malaya-granat-john-dyer-starbright-tansania-4-85-ct~2.jpg",
    ],
    featured: true,
  },
  {
    slug: "mali-granat-rundschliff-1-51ct",
    title: "Mali Granat im Rundschliff mit 1,51 ct.",
    articleNumber: "100.904",
    category: "Granat",
    categorySlug: "edelsteinsorten",
    price: 949,
    description:
      "Die außergewöhnliche Kanarienfarbe dieses Mali-Granats zieht den Blick bereits im ersten Moment auf sich. Der Edelstein präsentiert ein brillantes Kanariengelb, das an tropisches Sonnenlicht erinnert. Mali-Granate wurden erst Anfang der 1990er Jahre entdeckt und gehören zu den faszinierendsten Mitgliedern der Granatfamilie. Intensiv gelbe Exemplare wie dieses gelten als besonders selten und werden von Sammlern weltweit hoch geschätzt.",
    specs: {
      color: "Gelb",
      cut: "Rundschliff",
      treatment: "Unbehandelt",
      certificate: "Hauszertifikat",
      clarity: "Augenrein",
      origin: "Mali",
      carat: "1,51 ct.",
      dimensions: "7,20 × 7,20 × 4,83 mm",
      jewelry: false,
    },
    images: ["/images/products/mali-granat-rundschliff-mali-1-51-ct.jpg"],
  },
  {
    slug: "mali-granat-rundschliff-1-53ct",
    title: "Mali Granat im Rundschliff mit 1,53 ct.",
    articleNumber: "100.905",
    category: "Granat",
    categorySlug: "edelsteinsorten",
    price: 949,
    description:
      "Dieser Mali-Granat präsentiert eine außergewöhnliche kanariengelbe Farbe, die an tropisches Sonnenlicht erinnert. Mali-Granate gehören zu den faszinierendsten Mitgliedern der Granatfamilie und wurden erst in den frühen 1990er Jahren entdeckt. Das Exemplar wiegt 1,53 Karat und strahlt mit brillanter Leuchtkraft. Intensiv gelbe Exemplare wie dieses gelten als besonders selten und werden von Sammlern weltweit hoch geschätzt.",
    specs: {
      color: "Gelb",
      cut: "Rundschliff",
      treatment: "Unbehandelt",
      certificate: "Hauszertifikat",
      clarity: "Augenrein",
      origin: "Mali",
      carat: "1,53 ct.",
      dimensions: "7,20 × 7,20 × 4,83 mm",
      jewelry: false,
    },
    images: ["/images/products/mali-granat-rund-1-53-ct.jpg"],
  },
  {
    slug: "rhodolith-kissenschliff-3-48ct",
    title: "Rhodolith Granat 3,48 ct. im Kissenschliff",
    articleNumber: "100.894",
    category: "Granat",
    categorySlug: "edelsteinsorten",
    price: 2299,
    description:
      "Dieser Edelstein besticht durch tiefe weinrote Farbtöne mit rosafarbenen Untertönen, die in der Brillanz des Steins besonders hervortreten. Das Gewicht von 3,48 Karat verleiht dem Stein eine beeindruckende Präsenz, während der Kissenschliff die natürliche Schönheit unterstreicht. Die Facettierung erzeugt ein dynamisches Lichtspiel und Reflexionen, die sich mit dem Lichteinfall verändern.",
    specs: {
      color: "Rot",
      cut: "Kissenschliff",
      treatment: "Unbehandelt",
      certificate: "Hauszertifikat",
      clarity: "Augenrein",
      origin: "Madagaskar",
      carat: "3,48 ct.",
      dimensions: "8,25 × 8,06 × 6,38 mm",
      jewelry: false,
    },
    images: ["/images/products/granat-kissen-madagaskar-3-48-ct.jpg"],
  },
  {
    slug: "demantoid-rundschliff-0-52ct",
    title: "Demantoid im Rundschliff mit 0,52 ct. aus Russland",
    articleNumber: "100.752",
    category: "Demantoid",
    categorySlug: "edelsteinsorten",
    price: 2949,
    description:
      "Dieser russische Demantoid besticht durch intensive grüne Farbe, begleitet von außergewöhnlicher Lichtstreuung, die den Edelstein lebendig erscheinen lässt. Als Mitglied der Granatfamilie sind Demantoide für ihr außergewöhnliches Funkeln bekannt, wobei russische Exemplare besonders für ihre Originalität und Seltenheit geschätzt werden. Solche Demantoide sind heute kaum noch erhältlich.",
    specs: {
      color: "Grün",
      cut: "Rundschliff",
      treatment: "Unbehandelt",
      certificate: "Hauszertifikat",
      clarity: "Augenrein",
      origin: "Russland",
      carat: "0,52 ct.",
      dimensions: "4,91 × 4,91 × 3,10 mm",
      jewelry: false,
    },
    images: ["/images/products/demantoid-rund-russland-0-52-ct.jpg"],
    featured: true,
  },
  {
    slug: "rhodolith-oktagonschliff-46-87ct",
    title: "Rhodolith Granat 46,87 ct. im Oktagonschliff",
    articleNumber: "100.769",
    category: "Granat",
    categorySlug: "edelsteinsorten",
    price: 44999,
    description:
      "Ein beeindruckendes Exemplar mit einem Gewicht von 46,87 Karat. Dieser Rhodolith präsentiert einen außergewöhnlich intensiven Rotton, der von lebendiger Leuchtkraft und bemerkenswerter Tiefe geprägt ist. Der Oktagonschliff verstärkt die Brillanz und die Farbwirkung des Steins. Große Rhodolithe dieses Kalibers sind unter Sammlern weltweit außergewöhnlich selten.",
    specs: {
      color: "Rot",
      cut: "Oktagonschliff",
      treatment: "Unbehandelt",
      certificate: "Lotus",
      clarity: "Lupenrein",
      origin: "Tansania",
      carat: "46,87 ct.",
      dimensions: "21,65 × 19,03 × 12,85 mm",
      jewelry: false,
    },
    images: [
      "/images/products/rhodolith-oktagon-46-87-ct.jpg",
      "/images/products/rhodolith-oktagon-46-87-ct~2.jpg",
    ],
    featured: true,
  },
  {
    slug: "saphir-farblos-rundschliff-0-96ct",
    title: "Farbloser Saphir im Rundschliff mit 0,96 ct.",
    articleNumber: "100.522",
    category: "Saphir",
    categorySlug: "edelsteinsorten",
    price: 529,
    description:
      "Dieser Stein vereint zeitlose Eleganz und außergewöhnliche Brillanz. Der Rundschliff maximiert die Lichtreflexion und erzeugt lebendiges Funkeln aus jeder Perspektive. Saphire sind nach Diamanten die härtesten Edelsteine und eignen sich daher hervorragend für die Verarbeitung in Schmuck.",
    specs: {
      color: "Farblos",
      cut: "Rundschliff",
      treatment: "Erhitzt",
      certificate: "Hauszertifikat",
      clarity: "Augenrein",
      origin: "Madagaskar",
      carat: "0,96 ct.",
      dimensions: "6,07 × 6,07 × 3,67 mm",
      jewelry: false,
    },
    images: ["/images/products/saphir-farblos-rundschliff-0-96-ct.jpg"],
  },
  {
    slug: "tansanit-regal-radiant-2-34ct",
    title: "Tansanit im Regal Radiant™ Schliff mit 2,34 ct. von John Dyer",
    articleNumber: "100.684",
    category: "Tansanit",
    categorySlug: "edelsteinsorten",
    price: 1729,
    description:
      "Dieser unbehandelte Tansanit vereint Reinheit, Farbe und Natürlichkeit auf harmonische Weise. Der fliederfarbene Stein bietet außergewöhnliche Transparenz und lebendige Strahlkraft und zeigt die seltene Schönheit des Tansanits in seinem ursprünglichen Zustand.",
    specs: {
      color: "Flieder",
      cut: "Regal Radiant™",
      treatment: "Unbehandelt",
      certificate: "John Dyer",
      clarity: "Lupenrein",
      origin: "Tansania",
      carat: "2,34 ct.",
      dimensions: "8,15 × 7,87 × 6,27 mm",
      jewelry: false,
    },
    images: [
      "/images/products/lila-tansanit-john-dyer-regal-radiant-2-34-ct.jpg",
      "/images/products/lila-tansanit-john-dyer-regal-radiant-2-34-ct~2.jpg",
    ],
  },
  {
    slug: "imperial-topas-6-87ct",
    title: "Unbehandelter Imperial Topas 6,87 ct. aus Brasilien",
    articleNumber: "100.451",
    category: "Topas",
    categorySlug: "edelsteinsorten",
    price: 4749,
    description:
      "Ein natürlich brillanter Edelstein mit warmen goldgelben Farbtönen aus Brasilien. Der Ovalschliff verstärkt das Funkeln und Lichtspiel des Steins. Bemerkenswert ist sein unbehandelter Zustand, der bei Imperial-Topasen dieser Qualität ungewöhnlich ist. Die historische Verbindung des Steins mit dem Adel und seine Seltenheit auf internationalen Märkten machen ihn besonders begehrt.",
    specs: {
      color: "Gelb",
      cut: "Ovalschliff",
      treatment: "Unbehandelt",
      certificate: "Hauszertifikat",
      clarity: "Augenrein",
      origin: "Brasilien",
      carat: "6,87 ct.",
      dimensions: "14,30 × 9,50 × 6,90 mm",
      jewelry: false,
    },
    images: ["/images/products/imperial-topas-gelb-6-87ct-brasilien.jpg"],
  },
  {
    slug: "granat-dreamscape-2-78ct",
    title: "Granat im Dreamscape™ Schliff mit 2,78 ct. von John Dyer",
    articleNumber: "100.409",
    category: "Granat",
    categorySlug: "edelsteinsorten",
    price: 2229,
    description:
      "Dieser lila Granat verbindet moderne Schliffkunst mit natürlicher Eleganz durch seinen unverwechselbaren Dreamscape™-Schliff. Er erzeugt ein faszinierendes Zusammenspiel von Licht, Tiefe und Reflexionen. Der intensive Violettton in Kombination mit dem kunstvollen Schliff ergibt eine betont zeitgenössische Ästhetik – ein außergewöhnliches Sammlerstück für Liebhaber exklusiver Edelsteine und Schliffkunst.",
    specs: {
      color: "Lila",
      cut: "Dreamscape™",
      treatment: "Unbehandelt",
      certificate: "John Dyer",
      clarity: "Augenrein",
      origin: "Mosambik",
      carat: "2,78 ct.",
      dimensions: "9,40 × 8,20 × 3,60 mm",
      jewelry: false,
    },
    images: [
      "/images/products/granat-lila-dreamscape-john-dyer-2-78ct.jpg",
      "/images/products/granat-lila-dreamscape-john-dyer-2-78ct~2.jpg",
    ],
  },
  {
    slug: "sphen-ovalschliff-7-42ct",
    title: "Grüner Sphen 7,42 ct. – Transparenter Titanit",
    articleNumber: "100.474",
    category: "Sphen",
    categorySlug: "edelsteinsorten",
    price: 5199,
    description:
      "Dieser natürliche Edelstein präsentiert bunt leuchtende Farbreflexe in grünen Tönen mit Gold- und Orangeuntertönen. Der Stein besticht durch außergewöhnliche Transparenz und starke Dispersionseigenschaften, die für Sphen/Titanit charakteristisch sind. Ein seltenes Exemplar, das besonders für seine intensive Leuchtkraft bekannt ist, die sich in Fotografien nur schwer vollständig einfangen lässt.",
    specs: {
      color: "Grün",
      cut: "Ovalschliff",
      treatment: "Unbehandelt",
      certificate: "Hauszertifikat",
      clarity: "Augenrein",
      origin: "Madagaskar",
      carat: "7,42 ct.",
      dimensions: "13,74 × 10,03 × 7,25 mm",
      jewelry: false,
    },
    images: ["/images/products/sphen-ovalschliff-7-42ct-gruen.jpg"],
  },
  {
    slug: "indigolith-ring-kat-florence-15-21ct",
    title: "Indigolith Ring im Kissenschliff mit 15,21 ct. von Kat Florence",
    articleNumber: "100.810",
    category: "Kat Florence Schmuck und Edelsteine",
    categorySlug: "kat-florence",
    price: 21999,
    description:
      "Ein markanter Ring von Kat Florence, der zeitgenössisches Design mit seltener Edelsteinqualität verbindet. Das Herzstück bildet ein außergewöhnlicher 15,21-Karat-Indigolith mit intensivem Blau. Diese seltene Turmalinvarietät zählt zu den begehrtesten blauen Edelsteinen und zeichnet sich durch außergewöhnliche Farbtiefe aus. Die Weißgoldfassung besticht durch klare geometrische Linien, die architektonische Eleganz verleihen.",
    specs: {
      color: "Blau",
      cut: "Kissenschliff",
      treatment: "Unbehandelt",
      certificate: "Hauszertifikat",
      clarity: "Lupenrein",
      origin: "Brasilien",
      carat: "15,21 ct.",
      dimensions: "14,20 × 12,20 × 9,30 mm",
      jewelry: true,
    },
    images: [
      "/images/products/indigolith-ring-kat-florence-15-21ct.jpg",
      "/images/products/indigolith-ring-kat-florence-15-21ct~2.jpg",
      "/images/products/indigolith-ring-kat-florence-15-21ct~3.jpg",
    ],
    featured: true,
  },
  {
    slug: "blauer-spinell-rundschliff-1-17ct",
    title: "Blauer Spinell im Rundschliff mit 1,17 ct.",
    articleNumber: "100.871",
    category: "Spinell",
    categorySlug: "edelsteinsorten",
    price: 699,
    description:
      "Ein hochwertiger blauer Spinell mit außergewöhnlich tiefer Blaufärbung in Kombination mit natürlicher Brillanz. Der Rundschliff maximiert das Lichtspiel des Steins. Der Edelstein zeichnet sich durch hohe Transparenz und ausgezeichnete Lichtbrechung aus und bietet Klarheit sowie lebendige Strahlkraft, die sich sowohl für moderne als auch für klassische Schmuckdesigns eignet.",
    specs: {
      color: "Blau",
      cut: "Rundschliff",
      treatment: "Unbehandelt",
      certificate: "Hauszertifikat",
      clarity: "Augenrein",
      origin: "Madagaskar",
      carat: "1,17 ct.",
      dimensions: "6,66 × 6,66 × 4,14 mm",
      jewelry: false,
    },
    images: ["/images/products/blauer-spinell-im-rundschliff-mit-117-ct.jpg"],
  },
  {
    slug: "grossular-granat-merelani-2-57ct",
    title: "Mintfarbener Grossular Granat 2,57 ct. aus Merelani",
    articleNumber: "100.738",
    category: "Granat",
    categorySlug: "edelsteinsorten",
    price: 3279,
    description:
      "Ein unverwechselbarer mintfarbener Grossular aus der berühmten Merelani-Mine in Tansania mit einem Gewicht von 2,57 Karat. Der Tropfenschliff verstärkt die Brillanz und erzeugt ein dynamisches Zusammenspiel von Licht. Mintfarbene Grossulare sind besonders gefragt für ihre seltene Kombination aus eleganter Pastellfarbe und hoher Transparenz.",
    specs: {
      color: "Grün",
      cut: "Tropfenschliff",
      treatment: "Unbehandelt",
      certificate: "Hauszertifikat",
      clarity: "Augenrein",
      origin: "Merelani, Tansania",
      carat: "2,57 ct.",
      dimensions: "11,12 × 7,36 × 5,11 mm",
      jewelry: false,
    },
    images: [
      "/images/products/mintfarbener-grossular-granat-2-57-ct-merelani.jpg",
    ],
  },
  {
    slug: "paraiba-turmalin-paar-11-94ct",
    title: "Paraiba Turmalin Paar im Ovalschliff mit 11,94 ct.",
    articleNumber: "100.078",
    category: "Paraiba Turmalin",
    categorySlug: "edelsteinsorten",
    price: null,
    description:
      "Ein außergewöhnliches brasilianisches Edelsteinpaar mit atemberaubender neon-grüner Farbintensität und bemerkenswerter Leuchtkraft, die durch den natürlichen Kupfergehalt hervorgerufen wird. Das zusammenpassende Paar ist in dieser Größe und Lebendigkeit außerordentlich selten. Ideal für hochwertige Ohrringe oder individuelle Schmuckstücke.",
    specs: {
      color: "Neongrün",
      cut: "Ovalschliff",
      treatment: "Erhitzt",
      certificate: "DSEF",
      clarity: "Kleine Einschlüsse",
      origin: "Brasilien",
      carat: "11,94 ct.",
      dimensions: "12,87 × 10,95 × 6,42 mm",
      jewelry: false,
    },
    images: [
      "/images/products/paraiba-turmalin-paar-neon-11-94ct.jpg",
      "/images/products/paraiba-turmalin-paar-neon-11-94ct~2.jpg",
    ],
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(
  currentSlug: string,
  limit = 3
): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return products.slice(0, limit);
  return products
    .filter(
      (p) => p.slug !== currentSlug && p.category === current.category
    )
    .slice(0, limit);
}

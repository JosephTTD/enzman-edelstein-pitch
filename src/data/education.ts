export interface EducationTopic {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  content: string;
}

export const educationTopics: EducationTopic[] = [
  {
    slug: "farbe",
    title: "Farbe",
    subtitle: "Das wichtigste Kriterium",
    icon: "/images/hero/farbe.svg",
    content:
      "Die Farbe steht bei der Beurteilung von Edelsteinen für gewöhnlich im Vordergrund. Sie beeinflusst den Preis maßgeblich und ist oft das erste Merkmal, das ins Auge fällt. Die ideale Farbe variiert je nach Edelsteinart – von tiefem Blau bei Saphiren über leuchtendes Grün bei Smaragden bis hin zu intensivem Rot bei Rubinen. Drei Faktoren bestimmen die Farbqualität: der Farbton (Hue), die Farbsättigung (Saturation) und die Helligkeit (Tone). Die wertvollsten Edelsteine zeigen eine intensive, gleichmäßige Farbverteilung mit hoher Sättigung.",
  },
  {
    slug: "reinheit",
    title: "Reinheit",
    subtitle: "Transparenz und Klarheit",
    icon: "/images/hero/auge.svg",
    content:
      "Die Reinheit beschreibt das Vorhandensein oder Fehlen von Einschlüssen und äußeren Merkmalen in einem Edelstein. Bei der Bewertung werden Größe, Anzahl, Position und Art der Einschlüsse berücksichtigt. Ein lupenreiner Edelstein (frei von Einschlüssen bei 10-facher Vergrößerung) ist besonders wertvoll. Augenreine Steine – solche, bei denen mit bloßem Auge keine Einschlüsse erkennbar sind – bieten ein hervorragendes Preis-Leistungs-Verhältnis. Einschlüsse können jedoch auch die Herkunft eines Steins verraten und seine Einzigartigkeit unterstreichen.",
  },
  {
    slug: "schliff",
    title: "Schliff",
    subtitle: "Kunst der Transformation",
    icon: "/images/hero/diamant.svg",
    content:
      "Der Schliff verwandelt einen rohen Kristall in einen funkelnden Edelstein. Er bestimmt, wie das Licht im Stein gebrochen und reflektiert wird – und damit sein Feuer, seine Brillanz und sein Funkeln. Ein hervorragender Schliff maximiert die natürliche Schönheit des Steins. Zu den klassischen Schliffformen gehören der Rundschliff, Ovalschliff, Kissenschliff, Tropfenschliff und Oktagonschliff. Renommierte Schleifer wie John Dyer entwickeln patentierte Schliffe wie den Starbrite™ oder Dreamscape™, die einzigartige Lichteffekte erzeugen.",
  },
  {
    slug: "karat",
    title: "Karat",
    subtitle: "Gewicht und Seltenheit",
    icon: "/images/hero/carat.svg",
    content:
      "Das Karatgewicht (1 Karat = 0,2 Gramm) ist ein direktes Maß für die Größe eines Edelsteins. Größere Steine sind exponentiell seltener als kleinere – ein 5-Karat-Stein ist weitaus seltener als fünf 1-Karat-Steine derselben Qualität. Der Preis pro Karat steigt daher mit zunehmender Größe überproportional an. Beim Kauf ist jedoch zu beachten, dass ein höheres Karatgewicht allein nicht ausreicht – die Qualitätsmerkmale Farbe, Reinheit und Schliff müssen ebenso stimmen.",
  },
  {
    slug: "herkunft",
    title: "Herkunft",
    subtitle: "Geographische Identität",
    icon: "/images/hero/farbe.svg",
    content:
      "Die Herkunft eines Edelsteins kann seinen Wert erheblich beeinflussen. Bestimmte Fundorte sind für bestimmte Qualitäten berühmt: Birma für Rubine, Kolumbien für Smaragde, Kaschmir für Saphire, Russland für Demantoide. Die geologischen Bedingungen einer Region prägen die einzigartigen Eigenschaften der dort gefundenen Steine. Tansania ist bekannt für Tansanite und Granate aus der Merelani-Mine, während brasilianische Paraiba-Turmaline zu den seltensten Edelsteinen der Welt gehören.",
  },
  {
    slug: "behandlung",
    title: "Behandlung",
    subtitle: "Natürlichkeit und Transparenz",
    icon: "/images/hero/auge.svg",
    content:
      "Viele Edelsteine werden behandelt, um ihre Farbe oder Reinheit zu verbessern. Die häufigste Behandlung ist das Erhitzen (H), das die Farbe intensivieren kann. Unbehandelte Steine (N) sind in der Regel wertvoller, da sie ihre Schönheit ausschließlich der Natur verdanken. Bei Enzmann Edelsteine legen wir größten Wert auf Transparenz: Jede Behandlung wird offen angegeben. Die meisten unserer Steine sind unbehandelt – ein Zeichen für die außergewöhnliche Qualität unserer Auswahl.",
  },
];

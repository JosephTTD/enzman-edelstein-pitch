import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedGems } from "@/components/home/FeaturedGems";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { TrustBar } from "@/components/home/TrustBar";
import { EditorialBanner } from "@/components/home/EditorialBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedGems />
      <CategoryShowcase />
      <TrustBar />
      <EditorialBanner />
    </>
  );
}

import { HeroSection } from "@/components/HeroSection";
import { QuickAccessTiles } from "@/components/QuickAccessTiles";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <QuickAccessTiles />
      <Footer />
    </main>
  );
};

export default Index;

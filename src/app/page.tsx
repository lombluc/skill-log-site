import NavBar from "@/components/sections/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HowSection from "@/components/sections/HowSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProofSection from "@/components/sections/ProofSection";
import CtaSection from "@/components/sections/CtaSection";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowSection />
        <FeaturesSection />
        <ProofSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

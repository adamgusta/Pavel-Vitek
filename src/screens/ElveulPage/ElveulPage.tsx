import { useEffect, useState } from "react";
import { Navigation } from "./sections/Navigation";
import { HeroSection } from "./sections/HeroSection";
import { StatsBar } from "./sections/StatsBar";
import { ServicesSection } from "./sections/ServicesSection";
import { CorporateSection } from "./sections/CorporateSection";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";

export const ElveulPage = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex w-full flex-col gap-12">
      <Navigation scrolled={scrolled} />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <CorporateSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

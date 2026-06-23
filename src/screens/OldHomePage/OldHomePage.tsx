import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { CompanyIntroSection } from "./sections/CompanyIntroSection";
import { HeroCTASection } from "./sections/HeroCTASection";
import { LimitedOfferPromoSection } from "./sections/LimitedOfferPromoSection";
import { PlumbingInsightsSection } from "./sections/PlumbingInsightsSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";
import { SiteNavigationSection } from "./sections/SiteNavigationSection/SiteNavigationSection";
import { ValuePropositionSection } from "./sections/ValuePropositionSection";

export const OldHomePage = (): JSX.Element => {
  const sections = [
    { key: "site-navigation", component: <SiteNavigationSection /> },
    { key: "hero-cta", component: <HeroCTASection /> },
    { key: "company-intro", component: <CompanyIntroSection /> },
    { key: "value-proposition", component: <ValuePropositionSection /> },
    { key: "services-overview", component: <ServicesOverviewSection /> },
    { key: "limited-offer-promo", component: <LimitedOfferPromoSection /> },
    { key: "client-testimonials", component: <ClientTestimonialsSection /> },
    { key: "plumbing-insights", component: <PlumbingInsightsSection /> },
    { key: "site-footer", component: <SiteFooterSection /> },
  ];

  return (
    <main className="relative w-full bg-white">
      <div className="flex w-full flex-col">
        {sections.map((section) => (
          <section key={section.key} className="relative w-full">
            {section.component}
          </section>
        ))}
      </div>
    </main>
  );
};

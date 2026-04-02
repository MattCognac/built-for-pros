import { AboutSection } from "@/components/sections/about-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { LeadMagnetSection } from "@/components/sections/lead-magnet-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SocialProofBanner } from "@/components/sections/social-proof-banner";
import { WhyItMattersSection } from "@/components/sections/why-it-matters-section";
import { ScrollAnchorHandler } from "@/components/scroll-anchor-handler";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createProfessionalServiceSchema } from "@/lib/seo";

export default function Home() {
  const schema = createProfessionalServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />
      <ScrollAnchorHandler />
      <main>
        <HeroSection />
        <SocialProofBanner />
        <WhyItMattersSection />
        <HowItWorksSection />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <LeadMagnetSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

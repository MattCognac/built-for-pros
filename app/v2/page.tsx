import { V2HeroSection } from "@/components/v2/hero-section";
import { V2SocialProofBanner } from "@/components/v2/social-proof-banner";
import { V2HowItWorksSection } from "@/components/v2/how-it-works-section";
import { V2WhyItMattersSection } from "@/components/v2/why-it-matters-section";
import { V2ServicesSection } from "@/components/v2/services-section";
import { V2PricingSection } from "@/components/v2/pricing-section";
import { V2AboutSection } from "@/components/v2/about-section";
import { V2LeadMagnetSection } from "@/components/v2/lead-magnet-section";
import { V2FaqSection } from "@/components/v2/faq-section";
import { V2FinalCtaSection } from "@/components/v2/final-cta-section";
import { ScrollAnchorHandler } from "@/components/scroll-anchor-handler";

export default function V2Home() {
  return (
    <>
      <ScrollAnchorHandler />
      <main>
        <V2HeroSection />
        <V2SocialProofBanner />
        <V2WhyItMattersSection />
        <V2HowItWorksSection />
        <V2ServicesSection />
        <V2PricingSection />
        <V2AboutSection />
        <V2LeadMagnetSection />
        <V2FaqSection />
        <V2FinalCtaSection />
      </main>
    </>
  );
}

import { headers } from "next/headers";

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
import { getHeroVariant } from "@/content/site";
import { HERO_VARIANT_HEADER } from "@/lib/hero-test";
import { createProfessionalServiceSchema } from "@/lib/seo";

export default async function Home() {
  const requestHeaders = await headers();
  const schema = createProfessionalServiceSchema();
  const heroVariant = getHeroVariant(requestHeaders.get(HERO_VARIANT_HEADER));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />
      <ScrollAnchorHandler />
      <main className="bg-[color:var(--canvas)] text-[color:var(--fg)]">
        <HeroSection variant={heroVariant} />
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

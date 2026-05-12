import {
  DEFAULT_HERO_VARIANT_ID,
  isHeroVariantId,
  type HeroVariantId,
} from "@/lib/hero-test";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: "phone" | "layout" | "trendingUp";
};

export type ServiceItem = {
  title: string;
  description: string;
  icon:
    | "monitor"
    | "search"
    | "map"
    | "folders"
    | "star"
    | "megaphone"
    | "phoneIncoming"
    | "fileText"
    | "mapPinned";
};

export type PricingPlan = {
  name: string;
  price: string;
  priceSuffix?: string;
  summary: string;
  featured?: boolean;
  features: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HeroLayout = "split" | "centered";

export type HeroVariant = {
  id: HeroVariantId;
  layout: HeroLayout;
  eyebrow: string;
  titleLines?: readonly string[];
  description: string;
};

export const siteConfig = {
  name: "Built for Pros",
  description:
    "Subscription-based marketing for contractors and home service businesses. Custom websites, SEO, Google presence, reviews, and ads handled for you.",
  url: "https://www.builtforpros.com",
  emailDisplay: "hello@builtforpros.com",
  emailHref: "mailto:hello@builtforpros.com",
  primaryCtaLabel: "Schedule a Free Call",
  primaryCtaHref: "https://cal.com/built-for-pros/free-call",
  heroPrimaryCtaLabel: "Let's Talk Growth",
  heroSecondaryCtaLabel: "Learn more",
  heroSecondaryCtaHref: "#why-it-matters",
  leadFormSuccess:
    "Got it. I'll be in touch with your free guide and next steps soon.",
} as const;

export const navItems: NavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Free Guide", href: "#lead-magnet" },
  { label: "FAQ", href: "#faq" },
];

export const heroVariants = {
  main: {
    id: "main",
    layout: "split",
    eyebrow: "Contractor Marketing, Simplified",
    description:
      "You didn't start your business to learn SEO. We take care of your website, search rankings, reviews, and ads so you can focus on what you do best.",
  },
  secondary: {
    id: "secondary",
    layout: "centered",
    eyebrow: "Contractor Marketing, Simplified",
    titleLines: ["You run your crew.", "We run your marketing."],
    description:
      "Websites, Google presence, reviews, SEO, and ads handled for you, so the phone keeps ringing while you stay focused on the work.",
  },
} satisfies Record<HeroVariantId, HeroVariant>;

export function getHeroVariant(value: string | null | undefined): HeroVariant {
  return heroVariants[isHeroVariantId(value) ? value : DEFAULT_HERO_VARIANT_ID];
}

export const socialProofBrands = [
  "Structura",
  "Forge_Co",
  "Iron&Oak",
  "Apex_Build",
  "Core_Site",
] as const;

export const whyItMatters = {
  eyebrow: "Why it matters",
  title: "Your next customer is searching for you.",
  paragraphs: [
    "Most homeowners start with a Google search. If your site, your reviews, or your profile aren't working for you, that call goes to someone else. We make sure it doesn't.",
  ],
  /**
   * Sources:
   * 75% — Stanford Web Credibility Research + PR Newswire survey 2024 (website credibility)
   * 5× — WebFX / Lead Oracle GBP benchmarks 2026 (optimized vs unmanaged profiles)
   * 60% — SEOSandwich agency vs in-house SEO comparison 2024 (outsourced ROI)
   * 35% — Opensend review response rate statistics 2024 (review revenue impact)
   */
  stats: [
    {
      value: "75%",
      label: "of consumers judge a business's credibility by its website alone",
    },
    {
      value: "5×",
      label: "more calls from optimized Google profiles vs. unmanaged ones",
    },
    {
      value: "60%",
      label: "higher ROI from outsourced marketing vs. doing it yourself",
    },
    {
      value: "35%",
      label: "more revenue for businesses that actively manage their reviews",
    },
  ],
} as const;

export const processSteps: ProcessStep[] = [
  {
    title: "We Talk",
    description:
      "A quick call where we learn your business — your trade, your market, where leads come from now, and where the gaps are. If you've got campaigns running, we'll look at those too.",
    icon: "phone",
  },
  {
    title: "We Build",
    description:
      "We build your site, set up your SEO foundation, optimize your Google presence, and connect the pieces that turn searches into booked calls — all based on what we learned from you.",
    icon: "layout",
  },
  {
    title: "You Grow",
    description:
      "Your site goes live, visibility climbs, and we keep optimizing month after month. You see exactly what's working — and we adjust as your business grows.",
    icon: "trendingUp",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Custom-built website",
    description:
      "A fast, professional site built to make a strong first impression and turn visits into calls.",
    icon: "monitor",
  },
  {
    title: "Monthly content",
    description:
      "Fresh posts that keep Google paying attention and your site climbing in search.",
    icon: "fileText",
  },
  {
    title: "Google Ads & lead gen",
    description:
      "Managed paid strategy for contractors who want faster lead flow on top of organic.",
    icon: "megaphone",
  },
  {
    title: "SEO",
    description:
      "Show up when someone searches for the services you actually want more of.",
    icon: "search",
  },
  {
    title: "City & service area pages",
    description:
      "Dedicated pages for every town you serve so you show up in more local searches.",
    icon: "mapPinned",
  },
  {
    title: "Google Business Profile",
    description:
      "The listing most contractors know they should care about — kept optimized and up to date.",
    icon: "map",
  },
  {
    title: "Call tracking",
    description:
      "Know exactly where your leads come from so you can see what's working.",
    icon: "phoneIncoming",
  },
  {
    title: "Review management",
    description:
      "More of the right reviews, without responses becoming another thing on your plate.",
    icon: "star",
  },
  {
    title: "Directory coverage",
    description:
      "Thumbtack, Angi, Yelp, and other listings kept complete and consistent.",
    icon: "folders",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Foundation",
    price: "$299/mo",
    summary: "A professional online foundation with steady SEO support.",
    features: [
      "Custom-built professional website",
      "Website hosting and maintenance",
      "On-page SEO and keyword targeting",
      "Monthly SEO content",
      "Google Business Profile setup and optimization",
      "Basic directory citations",
      "Call tracking included",
      "Monthly performance summary",
    ],
  },
  {
    name: "Growth",
    price: "$599/mo",
    summary: "Wider reach, stronger local presence, and review momentum.",
    featured: false,
    features: [
      "Everything in Foundation",
      "City and service area pages for expanded reach",
      "Active monthly Google Business management",
      "Full directory presence",
      "Review response management",
      "Automated review request system",
      "Detailed monthly performance report",
    ],
  },
  {
    name: "Accelerator",
    price: "$899/mo",
    priceSuffix: "+ ad spend",
    summary: "Paid lead generation on top of the full organic system.",
    features: [
      "Everything in Growth",
      "Google Ads / Local Service Ads management",
      "Weekly ad performance monitoring and optimization",
      "Landing page optimization for ad campaigns",
      "Monthly report with lead attribution and cost per lead",
    ],
  },
];

export const foundingOffer = {
  eyebrow: "Limited Availability",
  title: "Partner",
  subtitle: "You get everything in our Accelerator plan at nearly half the price. We're keeping this rate low because we're growing too — and your results become the proof that helps us both.",
  description:
    "We're hand-selecting 10 partner clients to get our complete Accelerator system at a reduced rate. In exchange, you help us build the case studies, testimonials, and referrals that grow this business. Once all 10 spots are filled, this offer is retired permanently.",
  price: "$499/mo",
  originalPrice: "$899/mo + ad spend",
  spotsTotal: 10,
  spotsRemaining: 7,
  commitment: "12-month commitment",
  includes: [
    "Custom-built website, hosting, and maintenance",
    "Google Ads / Local Service Ads management and optimization",
    "Full SEO: on-page optimization, monthly content, and city/service area pages",
    "Google Business Profile setup and ongoing management",
    "Review management and automated review requests",
    "Call tracking, directory presence, and monthly reporting",
    "First month of Google ad spend covered (up to $300)",
    "Rate locked for life — your price never goes up",
  ],
  youProvide: [
    "Share a quick video about your experience after 90 days",
    "Let us tell your before/after story as a case study",
    "Leave us an honest Google review",
    "Introduce us to a couple business owners you know",
  ],
} as const;

export const partnerFounderNote = {
  eyebrow: "Why this exists",
  title: "This is not a discount. It's a trade.",
  paragraphs: [
    "Built for Pros is growing too. Instead of charging the full Accelerator rate to the first group of clients, I'm opening a small number of partner spots for contractors willing to help me prove the system publicly.",
    "You get the full system at nearly half the price, locked in for life. In return, your results become the proof — case studies, a quick video, an honest review, and a couple of intros to other owners you respect.",
    "That's the trade. Real partners, not anonymous logos. Once these spots are filled, the offer is retired permanently.",
  ],
  quote:
    "I'd rather build this with ten contractors who actually want to win together than sell a hundred subscriptions and hope it sticks.",
  attribution: "Matt Hennessy, founder",
} as const;

export const founderStory = [
  "I spent more than a decade working in the trades — handyman work, building maintenance, contractor environments where word of mouth was everything.",
  "I saw a lot of good contractors get stuck with bad websites, confusing marketing, or agencies that talked a big game without understanding how the business actually works.",
  "Built for Pros exists to make that simple. You talk to me once, I build the system, and your marketing gets handled without turning into another job.",
] as const;

export const leadMagnet = {
  title: "Not ready to commit? Start with the playbook.",
  description:
    "Get a free guide to turning your Google presence into more calls — practical steps you can use right away, no strings attached.",
} as const;

export const faqItems: FaqItem[] = [
  {
    question: "Do I have to pay for the website upfront?",
    answer:
      "No. The website is built and included as part of your monthly subscription. No setup fees, no hidden costs.",
  },
  {
    question: "What happens after 12 months?",
    answer:
      "Most clients continue on a flexible month-to-month plan. You can also purchase the website outright if you want to go independent.",
  },
  {
    question: "Do I own the website?",
    answer:
      "While you're a subscriber, I build, host, and maintain the site for you. If you leave after your commitment, you have the option to purchase it.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Your website goes live within two weeks. SEO usually starts showing traction in three to six months. If you're on Accelerator with ads, you can see leads much faster.",
  },
  {
    question: "What trades do you work with?",
    answer:
      "All of them. Plumbers, electricians, roofers, HVAC, painters, landscapers, handymen, general contractors, remodelers, and more.",
  },
  {
    question: "I already have a website. Can you improve it?",
    answer:
      "I build a new custom site for every client so I can control the quality, speed, and SEO foundation from day one. Your existing content and branding can still carry over.",
  },
  {
    question: "What if I want to cancel early?",
    answer:
      "The 12-month commitment exists because SEO takes time to work. Early cancellation requires a buyout of 50% of the remaining contract value.",
  },
  {
    question: "How is this different from other marketing companies?",
    answer:
      "I've spent over a decade working in the trades myself. I'm not a marketing agency that learned your business from Google. I understand how contractors think, what a real lead looks like, and how to keep the whole thing simple.",
  },
];

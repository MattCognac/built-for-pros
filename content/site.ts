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
  badge?: string;
  features: PricingFeature[];
};

export type PricingFeature = {
  label: string;
  description?: string;
  emphasized?: boolean;
};

export type AdsBoltOn = {
  name: string;
  price: string;
  availability: string;
  summary: string;
  features: AdsBoltOnFeature[];
  note: string;
};

export type AdsBoltOnFeature = {
  label: string;
  description?: string;
  emphasized?: boolean;
};

export type PricingComparisonCell = boolean | string;

export type PricingComparisonRow = {
  feature: string;
  foundation: PricingComparisonCell;
  growth: PricingComparisonCell;
  accelerator: PricingComparisonCell;
};

export type PricingComparisonGroup = {
  category: string;
  rows: PricingComparisonRow[];
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
    titleLines: ["You run the jobsite.", "We run your marketing."],
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
    summary:
      "Best for owner-operators who need a credible online presence without managing marketing themselves.",
    features: [
      {
        label: "Custom-built professional website",
        emphasized: true,
        description:
          "A custom site that matches your branding and how you really work—clear services, proof of work, and an easy path to call or book so homeowners choose you over the next listing.",
      },
      {
        label: "Managed hosting & maintenance",
        description:
          "Your site stays live, secure, and updated without extra hosting work.",
      },
      {
        label: "Anytime site updates",
        description:
          "Small website updates handled for you so your services, photos, offers, and business details stay current without editing the site yourself.",
      },
      {
        label: "On-page SEO foundation",
        description:
          "Page titles, descriptions, and keywords set up so Google knows what you do and where you do it.",
      },
      {
        label: "Google Business Profile setup",
        description:
          "Your categories, services, photos, hours, and service area filled out correctly so your listing looks complete when homeowners find it.",
      },
      {
        label: "Monthly Google Business Profile post",
        description:
          "One post per month to your Google listing — a completed job, a seasonal tip, or a service highlight — so your profile stays active and signals a business that's thriving.",
      },
      {
        label: "Core business listing sync",
        description:
          "Your name, phone, address, and website kept accurate on Google, Apple Maps, Bing, Yelp, and Facebook so customers never hit outdated info.",
      },
    ],
  },
  {
    name: "Growth",
    price: "$449/mo",
    summary:
      "Best for established shops that want more local visibility and consistent review growth from completed jobs.",
    featured: true,
    badge: "Popular",
    features: [
      {
        label: "City and service area pages",
        emphasized: true,
        description:
          "Dedicated pages like \"Kitchen Remodeling in Beaverton\" or \"Water Heater Repair in Salem\" so Google has a specific page to rank for each town and service you want calls from.",
      },
      {
        label: "Automated review request system",
        emphasized: true,
        description:
          "After a job is done, your customer gets a text or email with a direct link to leave a Google review while the work is still fresh.",
      },
      {
        label: "Professional review responses",
        emphasized: true,
        description:
          "We write and post responses to every new Google review — good or bad — so homeowners see a business that is active, professional, and easy to work with.",
      },
      {
        label: "Monthly project spotlight",
        emphasized: true,
        description:
          "We turn one completed job into a short write-up with photos, location, and what was done, then publish it to your site and Google profile so future customers see your actual work.",
      },
      {
        label: "CRM or booking integration",
        description:
          "We connect your job management or booking system so review requests go out automatically after every completed job.",
      },
      {
        label: "Home-service directory profiles",
        description:
          "Full profiles built out on Angi, Thumbtack, Houzz, Nextdoor, and Porch with your photos, services, and service areas so you show up wherever homeowners are looking.",
      },
      {
        label: "Monthly performance summary",
        description:
          "A clear report each month covering where your calls came from, how your search rankings moved, what reviews came in, and what we are working on next.",
      },
      { label: "Everything in Foundation" },
    ],
  },
  {
    name: "Accelerator",
    price: "$799/mo",
    summary:
      "Best for busy teams missing calls or slow follow-up who want to convert more of the leads they already get.",
    features: [
      {
        label: "Missed call text-back",
        emphasized: true,
        description:
          "When someone calls and you can't answer, they get an automatic text within seconds from your business so they know you got it and don't move on to the next contractor.",
      },
      {
        label: "Automatic lead follow-up",
        emphasized: true,
        description:
          "When a new lead fills out your form or reaches out but doesn't reply or book, they get a short series of texts or emails from your business over the next few days to bring them back before they call someone else.",
      },
      {
        label: "Custom AI chat widget",
        emphasized: true,
        description:
          "A custom-trained website assistant built around your services, service area, qualification rules, and intake flow — not a generic plugin — so it can answer job-specific questions, capture structured lead details, and hand off clean follow-up context.",
      },
      {
        label: "Monthly email newsletter",
        description:
          "One email per month to past customers and open leads with seasonal tips, maintenance reminders, or project ideas so your business stays top of mind when they need work done again.",
      },
      {
        label: "Quarterly strategy call",
        description:
          "Every quarter we review what brought in calls, which pages and searches are gaining traction, what is not working, and what to focus on next.",
      },
      {
        label: "Quarterly technical SEO audit",
        description:
          "Every quarter we dig into your search data to see which keywords and pages are gaining traction, then adjust your strategy to double down on what's driving calls.",
      },
      { label: "Everything in Growth" },
    ],
  },
];

export const adsBoltOn: AdsBoltOn = {
  name: "Professional Ads Management",
  price: "+$399/mo",
  availability: "Available on any plan",
  summary:
    "Best for businesses that want faster lead flow while SEO builds and prefer hands-off ads management with clear monthly reporting.",
  features: [
    {
      label: "Dedicated landing page built for ad traffic",
      emphasized: true,
      description:
        "A focused page built around the ad offer, trade, and service area so paid clicks land somewhere designed to convert instead of a generic homepage.",
    },
    {
      label: "Google Local Services Ads setup and verification support",
      emphasized: true,
      description:
        "We help set up the Google-screened lead channel, categories, service areas, and verification steps so qualified homeowners can contact you directly from Google.",
    },
    {
      label: "Retargeting display ads for recent website visitors",
      emphasized: true,
      description:
        "Follow-up ads shown to people who already visited your site, keeping your business in front of warmer prospects while they compare contractors.",
    },
    {
      label: "Campaign configuration, budget pacing, and weekly monitoring",
      description:
        "We configure targeting, budgets, and campaign settings, then monitor performance weekly so spend stays controlled and the campaign keeps improving.",
    },
    {
      label: "Monthly report with lead attribution and cost per lead",
      description:
        "A monthly view of which paid channels produced leads, what those leads cost, and what should be adjusted next.",
    },
  ],
  note: "Recommended ad spend varies by trade and market. Paid directly to Google, never to Built for Pros.",
};

export const pricingComparisonGroups: PricingComparisonGroup[] = [
  {
    category: "Website & Foundation",
    rows: [
      {
        feature: "Custom-built professional website",
        foundation: true,
        growth: true,
        accelerator: true,
      },
      {
        feature: "Managed hosting & maintenance",
        foundation: true,
        growth: true,
        accelerator: true,
      },
      {
        feature: "Anytime site updates",
        foundation: true,
        growth: true,
        accelerator: true,
      },
      {
        feature: "Google Business Profile setup",
        foundation: true,
        growth: true,
        accelerator: true,
      },
      {
        feature: "On-page SEO foundation",
        foundation: true,
        growth: true,
        accelerator: true,
      },
      {
        feature: "Core business listing sync",
        foundation: true,
        growth: true,
        accelerator: true,
      },
    ],
  },
  {
    category: "Local SEO & Content",
    rows: [
      {
        feature: "Monthly Google Business Profile post",
        foundation: true,
        growth: true,
        accelerator: true,
      },
      {
        feature: "Monthly project spotlight",
        foundation: false,
        growth: true,
        accelerator: true,
      },
      {
        feature: "Home-service directory profiles",
        foundation: false,
        growth: true,
        accelerator: true,
      },
      {
        feature: "City and service area pages",
        foundation: false,
        growth: true,
        accelerator: true,
      },
    ],
  },
  {
    category: "Reviews & Reputation",
    rows: [
      {
        feature: "Automated review request system",
        foundation: false,
        growth: true,
        accelerator: true,
      },
      {
        feature: "CRM or booking integration",
        foundation: false,
        growth: true,
        accelerator: true,
      },
      {
        feature: "Professional review responses",
        foundation: false,
        growth: true,
        accelerator: true,
      },
    ],
  },
  {
    category: "Automation",
    rows: [
      {
        feature: "Missed call text-back",
        foundation: false,
        growth: false,
        accelerator: true,
      },
      {
        feature: "Custom AI chat widget",
        foundation: false,
        growth: false,
        accelerator: true,
      },
      {
        feature: "Automatic lead follow-up",
        foundation: false,
        growth: false,
        accelerator: true,
      },
    ],
  },
  {
    category: "Retention & Strategy",
    rows: [
      {
        feature: "Monthly performance summary",
        foundation: false,
        growth: true,
        accelerator: true,
      },
      {
        feature: "Monthly email newsletter",
        foundation: false,
        growth: false,
        accelerator: true,
      },
      {
        feature: "Quarterly strategy call",
        foundation: false,
        growth: false,
        accelerator: true,
      },
      {
        feature: "Quarterly technical SEO audit",
        foundation: false,
        growth: false,
        accelerator: true,
      },
    ],
  },
  {
    category: "Ads Add-On",
    rows: [
      {
        feature: "Local Services Ads management",
        foundation: "add-on",
        growth: "add-on",
        accelerator: "add-on",
      },
      {
        feature: "Retargeting display ads",
        foundation: "add-on",
        growth: "add-on",
        accelerator: "add-on",
      },
      {
        feature: "Ad landing page",
        foundation: "add-on",
        growth: "add-on",
        accelerator: "add-on",
      },
      {
        feature: "Lead attribution report",
        foundation: "add-on",
        growth: "add-on",
        accelerator: "add-on",
      },
    ],
  },
];

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

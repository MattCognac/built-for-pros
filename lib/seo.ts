import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type CreateMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: CreateMetadataInput = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Marketing for contractors that gets handled`;
  const url = new URL(path, siteConfig.url);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export function createProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.emailDisplay,
    areaServed: "United States",
    serviceType: [
      "Contractor marketing",
      "Website design for contractors",
      "Local SEO",
      "Google Business Profile management",
      "Paid advertising for home service businesses",
    ],
  };
}

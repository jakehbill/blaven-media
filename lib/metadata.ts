import type { Metadata, Viewport } from "next";

import { seoPages } from "@/data/seo";
import { siteConfig } from "@/data/site";
import { SITE_URL } from "@/lib/constants";

type CreatePageMetadataOptions = {
  /** Path without trailing slash, e.g. "/" or "/about". */
  path: string;
  title: string | { absolute: string };
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
};

function absoluteUrl(path: string) {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  path,
  title,
  description,
  openGraphTitle,
  openGraphDescription,
}: CreatePageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: path === "" ? "/" : path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: openGraphTitle,
      description: openGraphDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description: openGraphDescription,
    },
  };
}

export const homeMetadata = createPageMetadata({
  path: "/",
  title: { absolute: seoPages.home.title },
  description: seoPages.home.description,
  openGraphTitle: seoPages.home.openGraphTitle,
  openGraphDescription: seoPages.home.openGraphDescription,
});

export const aboutMetadata = createPageMetadata({
  path: "/about",
  title: seoPages.about.title,
  description: seoPages.about.description,
  openGraphTitle: seoPages.about.openGraphTitle,
  openGraphDescription: seoPages.about.openGraphDescription,
});

export const caseStudiesMetadata = createPageMetadata({
  path: "/case-studies",
  title: seoPages.caseStudies.title,
  description: seoPages.caseStudies.description,
  openGraphTitle: seoPages.caseStudies.openGraphTitle,
  openGraphDescription: seoPages.caseStudies.openGraphDescription,
});

export const contactMetadata = createPageMetadata({
  path: "/contact",
  title: seoPages.contact.title,
  description: seoPages.contact.description,
  openGraphTitle: seoPages.contact.openGraphTitle,
  openGraphDescription: seoPages.contact.openGraphDescription,
});

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: SITE_URL,
    siteName: siteConfig.name,
    title: seoPages.home.openGraphTitle,
    description: seoPages.home.openGraphDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: seoPages.home.openGraphTitle,
    description: seoPages.home.openGraphDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0e0e0e" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0e" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

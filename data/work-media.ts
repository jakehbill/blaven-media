export type WorkProvider = "youtube" | "linkedin" | "substack" | "other";

export type WorkFormat = "podcast" | "short" | "article" | "newsletter";

export type WorkMediaItem = {
  id: string;
  format: WorkFormat;
  formatLabel: string;
  title: string;
  client?: string;
  href: string;
  thumbnail: {
    src: string;
    alt: string;
  } | null;
  provider: WorkProvider;
  /** Featured large cell in the reel (podcast). */
  featured?: boolean;
  /** True until a real destination URL is supplied. */
  placeholder?: boolean;
};

/**
 * Format-led work reel. Each asset appears once.
 * Replace placeholder hrefs/thumbnails with live YouTube, LinkedIn, and Substack links.
 */
export const workMediaItems: readonly WorkMediaItem[] = [
  {
    id: "podcast-01",
    format: "podcast",
    formatLabel: "Long-form podcast",
    title: "Ideas worth exploring",
    client: "SilverLining",
    href: "https://www.youtube.com/",
    thumbnail: {
      src: "/images/case_studies/silverlining_casestudy.png",
      alt: "Long-form podcast conversation thumbnail",
    },
    provider: "youtube",
    featured: true,
    placeholder: true,
  },
  {
    id: "short-virtual-01",
    format: "short",
    formatLabel: "LinkedIn short · Virtual",
    title: "A moment worth sharing",
    client: "Exactly AI",
    href: "https://www.linkedin.com/",
    thumbnail: {
      src: "/images/case_studies/exactlyai_casestudy.png",
      alt: "Virtually recorded LinkedIn short thumbnail",
    },
    provider: "linkedin",
    placeholder: true,
  },
  {
    id: "short-studio-01",
    format: "short",
    formatLabel: "LinkedIn short · Studio",
    title: "The insight that sticks",
    client: "LDPR",
    href: "https://www.linkedin.com/",
    thumbnail: {
      src: "/images/case_studies/ldpr_casestudy.png",
      alt: "In-studio LinkedIn short thumbnail",
    },
    provider: "linkedin",
    placeholder: true,
  },
  {
    id: "short-studio-02",
    format: "short",
    formatLabel: "LinkedIn short · Studio",
    title: "Clarity in conversation",
    client: "Sideways",
    href: "https://www.linkedin.com/",
    thumbnail: {
      src: "/images/case_studies/sideways_casestudy.png",
      alt: "In-studio LinkedIn short thumbnail",
    },
    provider: "linkedin",
    placeholder: true,
  },
  {
    id: "substack-01",
    format: "article",
    formatLabel: "Substack",
    title: "The story continues in writing",
    href: "https://substack.com/",
    thumbnail: {
      src: "/images/mountain.jpg",
      alt: "Substack essay cover",
    },
    provider: "substack",
    placeholder: true,
  },
  {
    id: "substack-02",
    format: "article",
    formatLabel: "Substack",
    title: "A distinctive point of view",
    href: "https://substack.com/",
    thumbnail: null,
    provider: "substack",
    placeholder: true,
  },
  {
    id: "newsletter-01",
    format: "newsletter",
    formatLabel: "Newsletter",
    title: "Ideas that arrive in the inbox",
    href: "https://substack.com/",
    thumbnail: null,
    provider: "other",
    placeholder: true,
  },
] as const;

export const workMediaContent = {
  eyebrow: "Selected work / Formats",
  heading: "Work that",
  headingEmphasis: "speaks.",
  body: "Podcasts, LinkedIn shorts, Substack essays, and newsletters — each piece opens in its own home.",
  archiveCta: { label: "Selected work archive", href: "/case-studies" },
} as const;

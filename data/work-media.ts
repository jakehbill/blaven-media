export type WorkProvider = "youtube" | "linkedin" | "substack" | "other";

export type WorkFormat = "podcast" | "short" | "article" | "newsletter" | "reel";

export type WorkLayout = "featured" | "rail" | "portrait" | "square";

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
  layout: WorkLayout;
  /** True until a real destination URL is supplied. */
  placeholder?: boolean;
};

/**
 * Format-led work reel. Layout roles drive the homepage mosaic.
 */
export const workMediaItems: readonly WorkMediaItem[] = [
  {
    id: "augmentum-podcast",
    format: "podcast",
    formatLabel: "Long-form podcast",
    title: "Conversations that compound",
    client: "Augmentum",
    href: "https://youtu.be/lRkX1oNm3qY",
    thumbnail: {
      src: "/images/case_studies/augmentum-1.png",
      alt: "Augmentum long-form podcast thumbnail",
    },
    provider: "youtube",
    layout: "featured",
  },
  {
    id: "ldpr-short-01",
    format: "short",
    formatLabel: "LinkedIn short",
    title: "Leadership worth following",
    client: "LDPR",
    href: "https://www.linkedin.com/posts/lauradavidson-ldpr_ldpr-travelpr-laborday-activity-7368613674967674881-hWC4",
    thumbnail: {
      src: "/images/case_studies/ldpr-1.png",
      alt: "LDPR executive thought leadership short",
    },
    provider: "linkedin",
    layout: "rail",
  },
  {
    id: "silverlining-short-01",
    format: "short",
    formatLabel: "LinkedIn short",
    title: "Fundraising starts with trust",
    client: "SilverLining",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7447262038260822016",
    thumbnail: {
      src: "/images/case_studies/silverlining-1.png",
      alt: "SilverLining fundraising thought leadership short",
    },
    provider: "linkedin",
    layout: "rail",
  },
  {
    id: "exactly-short-01",
    format: "short",
    formatLabel: "LinkedIn short",
    title: "A founder's point of view",
    client: "Exactly.AI",
    href: "https://www.linkedin.com/posts/toniasamsonova_brandai-creativeops-marketingtechnology-activity-7376921013487345664-zW0r",
    thumbnail: {
      src: "/images/case_studies/exactly-1.png",
      alt: "Exactly.AI founder storytelling short",
    },
    provider: "linkedin",
    layout: "portrait",
  },
  {
    id: "sideways-short-01",
    format: "short",
    formatLabel: "Street interview",
    title: "What Londoners really think",
    client: "Sideways",
    href: "https://www.youtube.com/shorts/vhonKZpkh4I",
    thumbnail: {
      src: "/images/case_studies/sideways-1.png",
      alt: "Sideways street interview short",
    },
    provider: "youtube",
    layout: "portrait",
  },
  {
    id: "ldpr-short-02",
    format: "short",
    formatLabel: "Virtual short",
    title: "Why the best people stay",
    client: "LDPR",
    href: "https://www.linkedin.com/posts/greatstay-leadership-employeeretention-ugcPost-7452008119825788928-DWZt",
    thumbnail: {
      src: "/images/case_studies/ldpr-2.png",
      alt: "LDPR employee retention short",
    },
    provider: "linkedin",
    layout: "square",
  },
  {
    id: "pathaka-reel-01",
    format: "reel",
    formatLabel: "Instagram Reel",
    title: "Podcasts, personalized",
    client: "Pathaka AI",
    href: "https://www.youtube.com/shorts/IWXkTd-yAhI",
    thumbnail: {
      src: "/images/case_studies/pathaka-1.png",
      alt: "Pathaka AI personalized podcasts reel",
    },
    provider: "youtube",
    layout: "square",
  },
  {
    id: "silverlining-article-01",
    format: "article",
    formatLabel: "Substack essay",
    title: "Safety first, in writing",
    client: "SilverLining",
    href: "https://silverliningngo.substack.com/p/safety-first-a-roadmap-for-evaluating",
    thumbnail: {
      src: "/images/case_studies/silverlining-2.png",
      alt: "SilverLining Substack essay cover",
    },
    provider: "substack",
    layout: "square",
  },
  {
    id: "climateimpact-newsletter-01",
    format: "newsletter",
    formatLabel: "Weekly newsletter",
    title: "Ideas that land in the inbox",
    client: "Climate Impact",
    href: "https://drive.google.com/file/d/1WvXfzJ4-5tTAbbsooZNo6NLgmLWgou8_/view?usp=sharing",
    thumbnail: {
      src: "/images/case_studies/climateimpact-1.png",
      alt: "Climate Impact weekly newsletter",
    },
    provider: "other",
    layout: "square",
  },
] as const;

export const workMediaContent = {
  heading: "Work that",
  headingEmphasis: "speaks.",
  body: "A short conversation with a leader is all we need. From that, we produce weeks to months of high-quality video, writing, and distribution. The work below shows how that process has built visibility, credibility, and reach for the people we've partnered with.",
  archiveCta: { label: "Selected work archive", href: "/case-studies" },
} as const;

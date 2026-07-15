/**
 * Per-route SEO copy. Titles and descriptions are written for SERPs
 * and social previews — distinctive, natural, and aligned to positioning.
 */
export const seoPages = {
  home: {
    title: "Blaven Media | Strategic Communications for Meaningful Ideas",
    description:
      "AI made content abundant. Trust became scarce. Blaven Media partners with founders and leadership teams to build authority through storytelling, thought leadership, and exceptional digital work.",
    openGraphTitle: "Strategic communications for meaningful ideas",
    openGraphDescription:
      "Blaven Media helps organisations become recognised — not louder — through trust, storytelling, and founder-led communications.",
  },
  about: {
    title: "About",
    description:
      "Founded by Jake Bill, Blaven Media helps organisations with meaningful ideas become recognised. Independent, founder-led, and built around trust, storytelling, and a distinctive point of view.",
    openGraphTitle: "The thinking behind Blaven Media",
    openGraphDescription:
      "Great ideas deserve great communication. Meet the founder-led studio helping meaningful organisations become landmarks in their industries.",
  },
  caseStudies: {
    title: "Case Studies",
    description:
      "Selected partnerships with organisations building recognition — from climate and technology to culture and policy. See how thoughtful communications help meaningful ideas reach the right people.",
    openGraphTitle: "Work that builds recognition",
    openGraphDescription:
      "Case studies from Blaven Media: helping meaningful organisations become recognised through strategy, storytelling, and carefully executed digital experiences.",
  },
  contact: {
    title: "Contact",
    description:
      "Whether you're launching something new, repositioning an established organisation, or looking for a long-term communications partner — tell us what you're working on.",
    openGraphTitle: "Let's build something people remember",
    openGraphDescription:
      "Start a conversation with Blaven Media. Based in London, working with founders and organisations who care deeply about how they communicate.",
  },
} as const;

export type SeoPageKey = keyof typeof seoPages;

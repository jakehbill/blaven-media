/**
 * Per-route SEO copy. Titles and descriptions are written for SERPs
 * and social previews: distinctive, natural, and aligned to positioning.
 */
export const seoPages = {
  home: {
    title: "Blaven Media | Good Ideas Deserve to Be Heard",
    description:
      "Blaven is a boutique creative studio helping founders and ambitious organisations turn expertise into compelling content and digital experiences, from thought leadership and video to websites and digital strategy.",
    openGraphTitle: "Good ideas deserve to be heard",
    openGraphDescription:
      "Boutique creative studio helping founders and organisations turn expertise into content, digital experiences, and lasting influence.",
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
      "Selected Blaven Media case studies: thought leadership, video, newsletters, and digital work for organisations with meaningful ideas.",
    openGraphTitle: "Case studies from Blaven Media",
    openGraphDescription:
      "How Blaven Media helps organisations build authority through thoughtful communications, storytelling, and digital experiences.",
  },
  contact: {
    title: "Contact",
    description:
      "Whether you're launching something new, repositioning an established organisation, or looking for a long-term communications partner, tell us what you're working on.",
    openGraphTitle: "Let's build something people remember",
    openGraphDescription:
      "Start a conversation with Blaven Media. Based in London, working with founders and organisations who care deeply about how they communicate.",
  },
} as const;

export type SeoPageKey = keyof typeof seoPages;

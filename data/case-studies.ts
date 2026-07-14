export type CaseStudyOutcome = string;

export type CaseStudy = {
  id: string;
  slug: string;
  client: string;
  industry: string;
  logo: {
    src: string;
    alt: string;
  };
  engagement?: string;
  challenge: string;
  approach: string;
  outcomes: readonly CaseStudyOutcome[];
  services: readonly string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  cta: {
    label: string;
    href: string;
  };
};

export type CaseStudiesSurface = "dark" | "light" | "grey";

export const caseStudiesContent = {
  label: "Case Studies",
  heading: "Helping meaningful organisations become recognised.",
  introduction: [
    "Every organisation has different goals. Some want to build authority. Some want to launch a new brand. Some want to reach investors, customers, or policymakers.",
    "Our role is always the same: helping important ideas reach the right people through thoughtful communications, compelling storytelling, and beautifully executed digital experiences.",
  ],
  closing: {
    heading: "Ready to become recognised?",
    body: "If you're building something meaningful, we'd love to help you tell its story.",
    primaryCta: {
      label: "Let's Talk",
      href: "/contact",
    },
    secondaryCta: {
      label: "Back to Home",
      href: "/",
    },
  },
  items: [
    {
      id: "01",
      slug: "silverlining",
      client: "SilverLining",
      industry: "Climate nonprofit",
      logo: {
        src: "/images/logos/placeholder-01.svg",
        alt: "SilverLining logo placeholder",
      },
      engagement:
        "Long-term communications and thought leadership partner.",
      challenge:
        "Help establish SilverLining as a trusted global voice on atmospheric science and climate risk while supporting fundraising, events and strategic communications.",
      approach:
        "Built executive thought leadership across LinkedIn, developed newsletter campaigns, redesigned sections of the website, produced research-driven content, organised executive roundtables, supported event marketing, and created communications around major reports and initiatives.",
      outcomes: [
        "Approximately 1.5× LinkedIn audience growth",
        "Newsletter programme established",
        "Thought leadership programme established",
        "Communications supported fundraising conversations",
      ],
      services: [
        "Thought Leadership",
        "Communications Strategy",
        "Newsletter",
        "Website",
        "Event Communications",
        "Content Strategy",
      ],
      testimonial: {
        quote:
          "[Placeholder testimonial: to be provided by SilverLining.]",
        author: "[Placeholder Name]",
        role: "[Placeholder Role], SilverLining",
      },
      cta: {
        label: "Get in touch",
        href: "/contact",
      },
    },
    {
      id: "02",
      slug: "climate-impact",
      client: "Climate Impact",
      industry: "Climate innovation",
      logo: {
        src: "/images/logos/placeholder-02.svg",
        alt: "Climate Impact logo placeholder",
      },
      challenge:
        "Increase visibility while strengthening the organisation's overall brand and communications.",
      approach:
        "Produced weekly newsletters, executive LinkedIn content, visual redesign work, event marketing and ongoing communications support.",
      outcomes: [
        "Approximately 1.8× LinkedIn audience growth",
        "Successful recurring newsletter programme",
        "Refreshed visual identity",
      ],
      services: [
        "Thought Leadership",
        "Newsletter",
        "Brand & Digital",
        "Event Communications",
        "Communications Strategy",
      ],
      testimonial: {
        quote:
          "[Placeholder testimonial: to be provided by Climate Impact.]",
        author: "[Placeholder Name]",
        role: "[Placeholder Role], Climate Impact",
      },
      cta: {
        label: "Get in touch",
        href: "/contact",
      },
    },
    {
      id: "03",
      slug: "exactly-ai",
      client: "Exactly.ai",
      industry: "Creative AI",
      logo: {
        src: "/images/logos/placeholder-03.svg",
        alt: "Exactly.ai logo placeholder",
      },
      challenge:
        "Build consistent founder thought leadership without requiring a significant time commitment.",
      approach:
        "Recorded a single long-form session and transformed it into approximately two months of strategic content across multiple formats.",
      outcomes: [
        "Established a consistent publishing cadence from a single recording session",
        "Improved efficiency by converting one long-form capture into multi-format content",
        "Strengthened founder visibility without a heavy ongoing time commitment",
      ],
      services: [
        "Thought Leadership",
        "Content Systems",
        "Video & Content Systems",
      ],
      testimonial: {
        quote:
          "[Placeholder testimonial: to be provided by Exactly.ai.]",
        author: "[Placeholder Name]",
        role: "[Placeholder Role], Exactly.ai",
      },
      cta: {
        label: "Get in touch",
        href: "/contact",
      },
    },
    {
      id: "04",
      slug: "ldpr",
      client: "LDPR",
      industry: "Public Relations",
      logo: {
        src: "/images/logos/placeholder-04.svg",
        alt: "LDPR logo placeholder",
      },
      challenge: "Increase visibility of senior leadership.",
      approach:
        "Developed a LinkedIn thought leadership programme for senior executives including strategy, scripting and talking-head video production.",
      outcomes: [
        "Increased executive presence across LinkedIn",
        "Stronger engagement with leadership content",
      ],
      services: [
        "Thought Leadership",
        "Executive Communications",
        "Video & Content Systems",
      ],
      testimonial: {
        quote: "[Placeholder testimonial: to be provided by LDPR.]",
        author: "[Placeholder Name]",
        role: "[Placeholder Role], LDPR",
      },
      cta: {
        label: "Get in touch",
        href: "/contact",
      },
    },
    {
      id: "05",
      slug: "eight-sleep",
      client: "Eight Sleep",
      industry: "Consumer technology",
      logo: {
        src: "/images/logos/placeholder-05.svg",
        alt: "Eight Sleep logo placeholder",
      },
      challenge:
        "Expand awareness through creator partnerships and brand collaborations.",
      approach:
        "Supported influencer marketing initiatives, social campaigns and in-person activations.",
      outcomes: [
        "Increased brand visibility through creator partnerships",
        "Supported brand collaborations and in-person activations",
      ],
      services: [
        "Communications Strategy",
        "Event Communications",
        "Content Strategy",
      ],
      testimonial: {
        quote:
          "[Placeholder testimonial: to be provided by Eight Sleep.]",
        author: "[Placeholder Name]",
        role: "[Placeholder Role], Eight Sleep",
      },
      cta: {
        label: "Get in touch",
        href: "/contact",
      },
    },
    {
      id: "06",
      slug: "sideways",
      client: "Sideways",
      industry: "Corporate trust",
      logo: {
        src: "/images/logos/placeholder-01.svg",
        alt: "Sideways logo placeholder",
      },
      challenge: "Validate product positioning before launch.",
      approach:
        "Designed and conducted street interviews across London to gather qualitative research, test messaging and build an early waitlist.",
      outcomes: [
        "Improved understanding of market response to positioning",
        "Stronger messaging informed by qualitative research",
        "[Placeholder: waitlist / conversion metrics to verify]",
      ],
      services: [
        "Brand Strategy",
        "Content Strategy",
        "Communications Strategy",
      ],
      testimonial: {
        quote:
          "[Placeholder testimonial: to be provided by Sideways.]",
        author: "[Placeholder Name]",
        role: "[Placeholder Role], Sideways",
      },
      cta: {
        label: "Get in touch",
        href: "/contact",
      },
    },
  ] as const satisfies readonly CaseStudy[],
} as const;

export const caseStudySurfaces: readonly CaseStudiesSurface[] = [
  "dark",
  "grey",
  "light",
  "dark",
  "grey",
  "light",
] as const;

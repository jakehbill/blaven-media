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
  /** External company site. Null when the organisation no longer exists or has no URL. */
  companyHref?: string | null;
  engagement?: string;
  challenge: string;
  approach: string;
  outcomes: readonly CaseStudyOutcome[];
  services: readonly string[];
  testimonial?: {
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
        src: "/images/logos/silverlining.svg",
        alt: "SilverLining",
      },
      companyHref: "https://www.silverlining.ngo/",
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
          "Jake brings a rare mix of strategic thinking and hands-on execution. He's helped elevate every part of our communications, from email to LinkedIn to founder-led video. I'm so glad we brought Blaven Media on board when we did.",
        author: "Alexandra",
        role: "Head of Special Projects, SilverLining",
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
        src: "/images/logos/climateimpact.svg",
        alt: "Climate Impact",
      },
      companyHref: null,
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
          "From content to design, Jake just gets it. Everything he's delivered has been thoughtful, on-brand, and high quality. The weekly newsletter he developed from scratch has been one of the greatest drivers of engagement for us, and our events have been growing every month because of it.",
        author: "Kendall",
        role: "Head of Community, Climate Impact",
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
        src: "/images/logos/exactly.png",
        alt: "Exactly.ai",
      },
      companyHref: "https://exactly.ai/",
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
          "The best part of working with Blaven is that I stay in control of the narrative while doing very little. Two hours per month with them gives me weeks of daily content. They're diligent and incredibly fast, delivering everything the day after recording. A traditional journalist might take two weeks. By any standard, that's exceptional.",
        author: "Tonia Samsonova",
        role: "Founder & CEO, Exactly.ai",
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
        src: "/images/logos/ldpr.svg",
        alt: "LDPR",
      },
      companyHref: "https://www.ldpr.com/",
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
        quote:
          "Working with Blaven has brought clarity and consistency to LDPR's voice. We've seen a real uptick in engagement, particularly on LinkedIn, due to the creative video content they've produced with our senior team members. From strategy to execution, they've been an amazing partner, and we couldn't be more grateful.",
        author: "Laura",
        role: "Founder & President, LDPR",
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
        src: "/images/logos/eightsleep.svg",
        alt: "Eight Sleep",
      },
      companyHref: "https://www.eightsleep.com/",
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

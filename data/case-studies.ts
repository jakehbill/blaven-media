export type CaseStudy = {
  id: string;
  slug: string;
  client: string;
  industry: string;
  logo: {
    src: string;
    alt: string;
  };
  summary: string;
  services: readonly string[];
  outcome: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  href: string;
};

export const caseStudiesContent = {
  label: "Selected Work",
  heading: "[Placeholder Heading]",
  introduction:
    "[Placeholder introduction — a short editorial lead framing the work as evidence of strategic thinking and careful execution.]",
  items: [
    {
      id: "01",
      slug: "placeholder-client-one",
      client: "[Placeholder Client Name]",
      industry: "[Placeholder Industry]",
      logo: {
        src: "/images/logos/placeholder-01.svg",
        alt: "[Placeholder Client Logo]",
      },
      summary:
        "[Placeholder project summary — outline the challenge, the strategic approach, and the role Blaven Media played.]",
      services: [
        "Thought Leadership",
        "Content Systems",
        "Brand & Digital",
      ],
      outcome:
        "[Placeholder outcome — a concise statement of the result or shift achieved.]",
      testimonial: {
        quote:
          "[Placeholder testimonial — a short reflection on the partnership and its impact.]",
        author: "[Placeholder Author]",
        role: "[Placeholder Role]",
      },
      href: "/work/placeholder-client-one",
    },
    {
      id: "02",
      slug: "placeholder-client-two",
      client: "[Placeholder Client Name]",
      industry: "[Placeholder Industry]",
      logo: {
        src: "/images/logos/placeholder-02.svg",
        alt: "[Placeholder Client Logo]",
      },
      summary:
        "[Placeholder project summary — outline the challenge, the strategic approach, and the role Blaven Media played.]",
      services: [
        "Communications Strategy",
        "Thought Leadership",
      ],
      outcome:
        "[Placeholder outcome — a concise statement of the result or shift achieved.]",
      testimonial: {
        quote:
          "[Placeholder testimonial — a short reflection on the partnership and its impact.]",
        author: "[Placeholder Author]",
        role: "[Placeholder Role]",
      },
      href: "/work/placeholder-client-two",
    },
    {
      id: "03",
      slug: "placeholder-client-three",
      client: "[Placeholder Client Name]",
      industry: "[Placeholder Industry]",
      logo: {
        src: "/images/logos/placeholder-03.svg",
        alt: "[Placeholder Client Logo]",
      },
      summary:
        "[Placeholder project summary — outline the challenge, the strategic approach, and the role Blaven Media played.]",
      services: [
        "Brand & Digital",
        "Content Systems",
      ],
      outcome:
        "[Placeholder outcome — a concise statement of the result or shift achieved.]",
      testimonial: {
        quote:
          "[Placeholder testimonial — a short reflection on the partnership and its impact.]",
        author: "[Placeholder Author]",
        role: "[Placeholder Role]",
      },
      href: "/work/placeholder-client-three",
    },
    {
      id: "04",
      slug: "placeholder-client-four",
      client: "[Placeholder Client Name]",
      industry: "[Placeholder Industry]",
      logo: {
        src: "/images/logos/placeholder-04.svg",
        alt: "[Placeholder Client Logo]",
      },
      summary:
        "[Placeholder project summary — outline the challenge, the strategic approach, and the role Blaven Media played.]",
      services: [
        "Thought Leadership",
        "Communications Strategy",
        "Content Systems",
      ],
      outcome:
        "[Placeholder outcome — a concise statement of the result or shift achieved.]",
      testimonial: {
        quote:
          "[Placeholder testimonial — a short reflection on the partnership and its impact.]",
        author: "[Placeholder Author]",
        role: "[Placeholder Role]",
      },
      href: "/work/placeholder-client-four",
    },
  ] as const satisfies readonly CaseStudy[],
} as const;

export const homeEditorialContent = {
  hero: {
    eyebrow: "Boutique creative studio / London",
    headline: "Good ideas deserve to be",
    headlineEmphasis: "heard.",
    body: [
      "Blaven is a boutique creative studio helping founders and ambitious organisations turn their expertise into compelling content and digital experiences.",
      "From thought leadership and video production to websites and digital strategy, we bring ideas to life and help them reach the people who matter.",
    ],
    primaryCta: { label: "Explore our work", href: "#work" },
    secondaryCta: { label: "Start a conversation", href: "/contact" },
    meta: "Thought leadership / Digital / Communications",
    featured: {
      label: "Independent studio",
      title: "Ideas with impact.",
      image: {
        src: "/images/mountain.jpg",
        alt: "Atmospheric landscape suggesting clarity and distance",
      },
    },
  },
  offer: {
    eyebrow: "Signature offering",
    heading: "One conversation.",
    headingEmphasis: "A month of thought leadership.",
    lead: "You have the ideas. We help you share them.",
    body: [
      "Through thoughtful, interview-led conversations, we uncover the insights, stories, and perspectives that make you worth listening to.",
      "Then we turn them into a consistent stream of high-quality video and written content, designed to build your visibility, credibility, and connections.",
    ],
    closer: "One conversation. Multiple formats. A clear, consistent voice.",
    cta: { label: "Explore our approach", href: "#work" },
  },
  services: {
    eyebrow: "Capabilities",
    heading: "More than content.",
    lead: "Great ideas need great places to live.",
    body: "Alongside our signature thought leadership offering, we help organisations build and strengthen their digital presence.",
    cta: { label: "See what we do", href: "#work" },
    items: [
      {
        title: "Websites & Digital Experiences",
        body: "Thoughtfully designed, high-performing websites that communicate what makes your organisation different.",
      },
      {
        title: "Digital Strategy & Visibility",
        body: "SEO, AI search visibility, and content strategy to help the right audiences discover and understand your work.",
      },
      {
        title: "Content & Communications",
        body: "Newsletters, LinkedIn strategy, video production, and digital campaigns that bring your message to life.",
      },
    ],
  },
  studio: {
    eyebrow: "The studio",
    heading: "Small studio.",
    headingEmphasis: "Close collaboration.",
    headingLine: "Considered work.",
    body: [
      "We work with a select number of clients, combining strategic thinking, creative production, and hands-on collaboration.",
      "No unnecessary complexity. Just thoughtful work, strong relationships, and ideas worth sharing.",
    ],
    cta: { label: "Let's talk", href: "/contact" },
  },
} as const;

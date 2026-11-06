export const homeEditorialContent = {
  hero: {
    eyebrow: "Independent communications & creative studio / London",
    headline: "Turn your expertise into a reputation",
    headlineEmphasis: "that drives business.",
    body: "Strategic communications for organisations with meaningful ideas. We turn expertise into stories, conversations, and content that build lasting influence.",
    primaryCta: { label: "Explore our work", href: "/case-studies" },
    secondaryCta: { label: "Let's talk", href: "/contact" },
    meta: "Strategy / Storytelling / Production",
    featured: {
      label: "Selected project / 01",
      title: "Ideas with impact.",
      image: {
        src: "/images/case_studies/silverlining_casestudy.png",
        alt: "SilverLining project imagery",
      },
    },
  },
  approach: {
    items: [
      {
        number: "01 / Think",
        title: "Find the story.",
        body: "Uncover the ideas, insights, and expertise that make your perspective worth hearing.",
        surface: "sage" as const,
      },
      {
        number: "02 / Make",
        title: "Make it matter.",
        body: "From thoughtful interviews to beautifully crafted writing and video.",
        surface: "sand" as const,
      },
      {
        number: "03 / Share",
        title: "Build influence.",
        body: "A consistent presence across the channels where your audience is paying attention.",
        surface: "olive" as const,
      },
    ],
  },
  inAction: {
    eyebrow: "Thought leadership / In action",
    heading: "One conversation.",
    headingEmphasis: "A world of content.",
    body: "See how a single meaningful conversation becomes a whole ecosystem of ideas.",
    film: {
      label: "The conversation / Featured film",
      title: "Ideas worth exploring.",
      note: "Video placeholder",
      image: {
        src: "/images/case_studies/silverlining_casestudy.png",
        alt: "Illustrative podcast feature, awaiting a real video thumbnail",
      },
    },
    shorts: [
      {
        title: "A moment worth sharing",
        label: "Short-form video / Placeholder",
        image: {
          src: "/images/case_studies/exactlyai_casestudy.png",
          alt: "Illustrative short-form video thumbnail",
        },
      },
      {
        title: "The insight that sticks",
        label: "Short-form video / Placeholder",
        image: {
          src: "/images/case_studies/ldpr_casestudy.png",
          alt: "Illustrative short-form video thumbnail",
        },
      },
    ],
    tiles: [
      {
        eyebrow: "Editorial / Newsletter",
        title: "The story continues in writing.",
        body: "Articles and newsletters that give ideas room to breathe.",
        surface: "panel" as const,
      },
      {
        eyebrow: "Distribution / LinkedIn",
        title: "From insight to conversation.",
        body: "Thoughtful posts, compelling clips, and an ongoing presence.",
        surface: "sand" as const,
      },
      {
        eyebrow: "Impact / Presence",
        title: "A voice people remember.",
        body: "Not more noise. A distinctive point of view, consistently expressed.",
        surface: "sage" as const,
      },
    ],
  },
  work: {
    eyebrow: "Selected work / Portfolio",
    heading: "Work that",
    headingEmphasis: "speaks.",
    cta: { label: "All case studies", href: "/case-studies" },
    items: [
      {
        name: "SilverLining",
        type: "Thought leadership / strategic communications",
        image: "/images/case_studies/silverlining_casestudy.png",
      },
      {
        name: "Exactly AI",
        type: "Creative storytelling / digital content",
        image: "/images/case_studies/exactlyai_casestudy.png",
      },
      {
        name: "LDPR",
        type: "Editorial content / communications",
        image: "/images/case_studies/ldpr_casestudy.png",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    heading: "Building authority isn't one service. It's a system.",
    introduction:
      "Every touchpoint shapes how people perceive your organisation. We bring strategy, storytelling, and execution together.",
  },
  cta: {
    eyebrow: "Let's make something meaningful",
    heading: "Have a story\nworth telling?",
    button: { label: "Let's talk", href: "/contact" },
  },
} as const;

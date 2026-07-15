export type AboutPreviewContent = {
  label: string;
  heading: string;
  body: string;
  cta: {
    label: string;
    href: string;
  };
};

export type AboutPageContent = {
  hero: {
    label: string;
    heading: string;
    paragraphs: readonly string[];
  };
  whyBlaven: {
    label: string;
    heading: string;
    image: {
      src: string;
      alt: string;
    };
    paragraphs: readonly string[];
  };
  howWeThink: {
    label: string;
    heading: string;
    columns: readonly {
      title: string;
      body: string;
    }[];
  };
  howWeWork: {
    label: string;
    heading: string;
    paragraphs: readonly string[];
    metrics: readonly {
      value: string;
      label: string;
    }[];
  };
  experience: {
    label: string;
    heading: string;
    items: readonly string[];
  };
  closing: {
    heading: string;
    body: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
};

/** Homepage About Preview — kept separate from the full About page. */
export const aboutPreviewContent: AboutPreviewContent = {
  label: "About",
  heading: "Built to help meaningful organisations become impossible to ignore.",
  body: "Blaven Media was founded by Jake Bill after seeing how many exceptional businesses struggled to communicate the value of what they do. Today, we partner with organisations that care deeply about their work and want their communications to reflect that same level of quality.",
  cta: {
    label: "Learn More",
    href: "/about",
  },
};

export const aboutPageContent: AboutPageContent = {
  hero: {
    label: "About",
    heading: "Building recognition for organisations with meaningful ideas.",
    paragraphs: [
      "Blaven Media was founded on a simple belief. Great ideas deserve great communication.",
      "In a world where content has become abundant, trust has become the rarest commodity. We help organisations build authority through thoughtful strategy, compelling storytelling, and carefully crafted digital experiences.",
    ],
  },
  whyBlaven: {
    label: "Why Blaven?",
    heading: "A mountain with a point of view.",
    image: {
      src: "/images/Blaven.jpeg",
      alt: "Blaven, a distinctive mountain on the Isle of Skye",
    },
    paragraphs: [
      "Blaven is a mountain on the Isle of Skye. It isn't Scotland's tallest mountain. It isn't the most famous. Yet for those who know it, it's unforgettable.",
      "Rugged, distinctive, and slightly off the beaten path, it stands out not because it shouts the loudest, but because there is nothing quite like it. That's the kind of brand we want to build.",
      "We believe organisations don't become memorable because they spend the most money or produce the most content. They become memorable because they communicate a distinctive point of view and consistently earn people's trust.",
      "Like the mountain itself, we want our clients to become landmarks within their industries, recognised by the right people for the right reasons.",
    ],
  },
  howWeThink: {
    label: "How We Think",
    heading: "Recognition is built.",
    columns: [
      {
        title: "Trust",
        body: "AI has made publishing easier than ever. It has not made brands more believable. As content becomes abundant, trust becomes increasingly valuable.",
      },
      {
        title: "Storytelling",
        body: "Marketing is ultimately the craft of helping people understand why something matters. Every meaningful organisation already has a story. Our job is to uncover it and tell it well.",
      },
      {
        title: "Experimentation",
        body: "The rules of communication are changing faster than ever. The organisations that thrive will be the ones willing to learn, adapt and experiment.",
      },
    ],
  },
  howWeWork: {
    label: "How We Work",
    heading: "Independent by design.",
    paragraphs: [
      "Blaven Media is intentionally lean. Every project is led by founder Jake Bill. Remaining independent allows us to stay closely involved, move quickly, and work with organisations whose missions genuinely resonate with us.",
      "Our clients don't get passed between departments. They work directly with the person shaping the thinking from day one. That means fewer layers, faster decisions, and work that feels considered from start to finish.",
    ],
    metrics: [
      { value: "5+", label: "Years building brands" },
      { value: "10+", label: "Organisations supported" },
      { value: "3 Months", label: "Average engagement" },
      { value: "100%", label: "Founder-led projects" },
    ],
  },
  experience: {
    label: "Services",
    heading: "Helping organisations become recognised.",
    items: [
      "Thought Leadership",
      "Executive Communications",
      "Websites & Digital",
      "Brand Strategy",
      "Newsletters",
      "Video & Content Systems",
      "Event Communications",
    ],
  },
  closing: {
    heading: "Let's build something people remember.",
    body: "Whether you're launching something new, repositioning an established organisation, or looking for a long-term communications partner, we'd love to hear what you're working on.",
    primaryCta: {
      label: "Get in Touch",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Case Studies",
      href: "/case-studies",
    },
  },
};

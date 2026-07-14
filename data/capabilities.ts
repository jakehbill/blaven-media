export type Capability = {
  number: string;
  title: string;
  description: string;
  services: readonly string[];
};

export const capabilitiesContent = {
  label: "Capabilities",
  heading: "Building authority isn't one service. It's a system.",
  introduction:
    "Every touchpoint shapes how people perceive your organisation. We bring strategy, storytelling, and execution together to ensure every piece of communication reinforces the same idea: why your work matters.",
  items: [
    {
      number: "01",
      title: "Thought Leadership",
      description:
        "Position founders and leadership teams as trusted voices through articles, LinkedIn, newsletters, speaking profiles, and strategic content.",
      services: [
        "Articles",
        "LinkedIn",
        "Newsletters",
        "Speaking profiles",
        "Strategic content",
      ],
    },
    {
      number: "02",
      title: "Content Systems",
      description:
        "Turn expertise into high-quality video, podcasts, articles, email newsletters, and social content that keeps working long after it's published.",
      services: [
        "Video",
        "Podcasts",
        "Articles",
        "Email newsletters",
        "Social",
      ],
    },
    {
      number: "03",
      title: "Brand & Digital",
      description:
        "Build brands and websites that earn trust from the very first interaction, combining clear messaging with thoughtful design.",
      services: ["Websites", "Brand", "Messaging", "Design"],
    },
    {
      number: "04",
      title: "Communications Strategy",
      description:
        "Develop campaigns, positioning, launches, and messaging that help organisations communicate with confidence in a rapidly changing world.",
      services: [
        "Campaigns",
        "Positioning",
        "Launches",
        "Messaging",
      ],
    },
  ] as const satisfies readonly Capability[],
} as const;

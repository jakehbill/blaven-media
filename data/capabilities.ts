export type Capability = {
  number: string;
  title: string;
  description: string;
  services: readonly string[];
};

export const capabilitiesContent = {
  label: "Capabilities",
  heading: "[Placeholder Heading]",
  introduction:
    "[Placeholder introduction — a short editorial lead explaining how Blaven Media helps founders, experts and organisations build lasting authority.]",
  items: [
    {
      number: "01",
      title: "Thought Leadership",
      description:
        "[Placeholder description — how we position founders and experts as credible voices in their field.]",
      services: [
        "Executive positioning",
        "LinkedIn",
        "Newsletters",
        "Articles",
        "Speaking profiles",
      ],
    },
    {
      number: "02",
      title: "Content Systems",
      description:
        "[Placeholder description — how we build repeatable systems that turn expertise into consistent, high-quality content.]",
      services: [
        "Video",
        "Podcasts",
        "Content repurposing",
        "Email",
        "Social",
      ],
    },
    {
      number: "03",
      title: "Brand & Digital",
      description:
        "[Placeholder description — how we shape identity, messaging and digital presence with clarity and restraint.]",
      services: [
        "Websites",
        "Visual identity",
        "Messaging",
        "Design systems",
      ],
    },
    {
      number: "04",
      title: "Communications Strategy",
      description:
        "[Placeholder description — how we advise on campaigns, launches and the communications that build reputation.]",
      services: [
        "Campaigns",
        "Launches",
        "Positioning",
        "Communications advisory",
      ],
    },
  ] as const satisfies readonly Capability[],
} as const;

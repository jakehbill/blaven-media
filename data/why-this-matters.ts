import type { LucideIcon } from "lucide-react";
import { Layers, Shield, Handshake } from "lucide-react";

export const whyThisMattersContent = {
  label: "[Placeholder Section Label]",
  heading: "[Placeholder Heading]",
  paragraphs: [
    "[Placeholder paragraph one — set the editorial context. Explain how AI has changed the way audiences discover, evaluate and trust brands.]",
    "[Placeholder paragraph two — explore the tension between volume and credibility. Note that visibility alone no longer signals substance.]",
    "[Placeholder paragraph three — argue that authority, trust and reputation are becoming the decisive factors in a crowded, automated landscape.]",
    "[Placeholder paragraph four — close with a measured observation on what this means for organisations building a lasting presence.]",
  ],
  features: [
    {
      title: "Authority",
      description:
        "[Placeholder description — why demonstrable expertise and earned credibility matter more when anyone can publish at scale.]",
      icon: Shield,
    },
    {
      title: "Trust",
      description:
        "[Placeholder description — how trust is built through consistency, transparency and proof over time.]",
      icon: Handshake,
    },
    {
      title: "Consistency",
      description:
        "[Placeholder description — why a coherent voice and presence across every touchpoint anchors reputation.]",
      icon: Layers,
    },
  ],
} as const;

export type WhyThisMattersFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

import aboutJson from "@/data/about.json";

export type AboutLogo = {
  name: string;
  src: string;
};

export type AboutContent = {
  label: string;
  heading: string;
  portrait: {
    src: string;
    alt: string;
    caption: string;
  };
  paragraphs: string[];
  experience: {
    label: string;
    items: string[];
  };
  clients: {
    label: string;
    logos: AboutLogo[];
  };
  personalStatement: string;
  cta: {
    label: string;
    href: string;
  };
};

export const aboutContent = aboutJson as AboutContent;

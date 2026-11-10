export type CaseStudyIndexItem = {
  id: string;
  client: string;
  industry: string;
  summary: string;
  services: readonly string[];
  thumbnail: {
    src: string;
    alt: string;
  };
  /** External example or company link when available. */
  href?: string;
};

/**
 * Lightweight case-study index for /case-studies.
 * Fuller narratives live in data/case-studies.ts for deeper surfaces later.
 */
export const caseStudiesIndexContent = {
  eyebrow: "Selected work",
  heading: "Case Studies",
  introduction:
    "Every organisation has different goals. Our role is the same: helping important ideas reach the right people through thoughtful communications, compelling storytelling, and carefully made digital work.",
  items: [
    {
      id: "01",
      client: "SilverLining",
      industry: "Climate nonprofit",
      summary:
        "Long-term marketing and communications partner. We built executive LinkedIn thought leadership, newsletter campaigns, a responsive website, in-person events, and fundraising content that helped establish SilverLining as a trusted voice on atmospheric science and climate risk.",
      services: [
        "Thought Leadership",
        "Communications Strategy",
        "Newsletter",
        "Website",
        "Event Communications",
        "Content Strategy",
      ],
      thumbnail: {
        src: "/images/case_studies/silverlining-1.png",
        alt: "SilverLining thought leadership example",
      },
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7447262038260822016",
    },
    {
      id: "02",
      client: "Climate Impact",
      industry: "Climate innovation",
      summary:
        "We produced weekly newsletters, executive LinkedIn content, visual redesign work, and event marketing to grow visibility and strengthen the organisation's overall brand and communications.",
      services: [
        "Thought Leadership",
        "Newsletter",
        "Brand & Digital",
        "Event Communications",
        "Communications Strategy",
      ],
      thumbnail: {
        src: "/images/case_studies/climateimpact-1.png",
        alt: "Climate Impact newsletter example",
      },
      href: "https://drive.google.com/file/d/1WvXfzJ4-5tTAbbsooZNo6NLgmLWgou8_/view?usp=sharing",
    },
    {
      id: "03",
      client: "Exactly.ai",
      industry: "Creative AI",
      summary:
        "One long-form recording became roughly two months of founder thought leadership across formats, keeping the CEO visible and consistent without a heavy ongoing time commitment.",
      services: [
        "Thought Leadership",
        "Content Systems",
        "Video & Content Systems",
      ],
      thumbnail: {
        src: "/images/case_studies/exactly-1.png",
        alt: "Exactly.ai founder storytelling example",
      },
      href: "https://www.linkedin.com/posts/toniasamsonova_brandai-creativeops-marketingtechnology-activity-7376921013487345664-zW0r",
    },
    {
      id: "04",
      client: "LDPR",
      industry: "Travel public relations",
      summary:
        "We developed a LinkedIn thought leadership programme for senior executives, covering strategy, scripting, and talking-head video production to increase leadership visibility and engagement.",
      services: [
        "Thought Leadership",
        "Executive Communications",
        "Video & Content Systems",
      ],
      thumbnail: {
        src: "/images/case_studies/ldpr-1.png",
        alt: "LDPR executive thought leadership example",
      },
      href: "https://www.linkedin.com/posts/lauradavidson-ldpr_ldpr-travelpr-laborday-activity-7368613674967674881-hWC4",
    },
    {
      id: "05",
      client: "Sideways",
      industry: "Corporate trust",
      summary:
        "We designed and conducted street interviews across London to test messaging, validate product positioning, gather qualitative research, and build early awareness ahead of launch.",
      services: [
        "Brand Strategy",
        "Content Strategy",
        "Communications Strategy",
      ],
      thumbnail: {
        src: "/images/case_studies/sideways-1.png",
        alt: "Sideways street interview example",
      },
      href: "https://www.youtube.com/shorts/vhonKZpkh4I",
    },
    {
      id: "06",
      client: "Augmentum",
      industry: "Influencer marketing agency",
      summary:
        "Long-form podcast conversation produced as part of an ongoing thought leadership programme.",
      services: ["Thought Leadership", "Long-form Video"],
      thumbnail: {
        src: "/images/case_studies/augmentum-1.png",
        alt: "Augmentum podcast example",
      },
      href: "https://youtu.be/lRkX1oNm3qY",
    },
    {
      id: "07",
      client: "Pathaka AI",
      industry: "AI media",
      summary:
        "Short-form reel content introducing Pathaka's approach to personalized podcasts.",
      services: ["Short-form Video", "Content Strategy"],
      thumbnail: {
        src: "/images/case_studies/pathaka-1.png",
        alt: "Pathaka AI reel example",
      },
      href: "https://www.youtube.com/shorts/IWXkTd-yAhI",
    },
  ] as const satisfies readonly CaseStudyIndexItem[],
} as const;

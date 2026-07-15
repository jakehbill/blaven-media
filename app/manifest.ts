import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Blaven",
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#0e0e0e",
    theme_color: "#0e0e0e",
    lang: "en-GB",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}

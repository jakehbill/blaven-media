import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";

const routes = ["", "/about", "/case-studies", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}

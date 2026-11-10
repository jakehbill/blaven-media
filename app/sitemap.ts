import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";

type SiteRoute = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

const routes: SiteRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  // About lives on the homepage (/#about). Keep /about as a redirect for
  // old links, but do not list it here as a separate indexed URL.
  { path: "/case-studies", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Same creative as Open Graph for consistent large-card previews. */
export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0e0e0e",
          color: "#f0efed",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#8a93a0",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            maxWidth: 920,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}

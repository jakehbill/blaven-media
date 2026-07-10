import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
            fontSize: 52,
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}

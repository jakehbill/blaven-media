import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";

/**
 * General Sans: self-hosted from Fontshare (Indian Type Foundry).
 * Geist Mono retained for code and technical labels only.
 */
export const fontSans = localFont({
  src: [
    {
      path: "../public/fonts/general-sans/general-sans-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/general-sans/general-sans-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/general-sans/general-sans-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/general-sans/general-sans-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = `${fontSans.variable} ${fontMono.variable}`;

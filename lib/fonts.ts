import localFont from "next/font/local";

/**
 * General Sans: self-hosted from Fontshare (Indian Type Foundry).
 * Instrument Serif: self-hosted editorial display face.
 * Mono uses a system stack so local build never blocks on network fonts.
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

export const fontSerif = localFont({
  src: [
    {
      path: "../public/fonts/instrument-serif/InstrumentSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/instrument-serif/InstrumentSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const fontVariables = `${fontSans.variable} ${fontSerif.variable}`;

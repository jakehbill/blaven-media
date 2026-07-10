import type { Metadata, Viewport } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { fontVariables } from "@/lib/fonts";
import { defaultMetadata, defaultViewport } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`dark ${fontVariables} h-full antialiased`}
    >
      <body className="surface-dark flex min-h-full flex-col bg-background text-foreground">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

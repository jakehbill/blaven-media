import type { Metadata, Viewport } from "next";

import { Providers } from "@/components/providers";
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
    <html lang="en" className={`dark ${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

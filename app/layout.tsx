import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NanoBana — Dual-Chamber Peptide Pen",
  description:
    "The world's first consumer-grade dual-chamber peptide pen. Powder and diluent, perfectly separated. Reconstituted at the moment of injection.",
  keywords: ["peptide pen", "dual chamber", "peptide delivery", "research peptides", "injection pen"],
  openGraph: {
    title: "NanoBana — Precision lives in two chambers.",
    description:
      "Lyophilised peptides. Maximum potency. Reconstituted only at the moment of delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}

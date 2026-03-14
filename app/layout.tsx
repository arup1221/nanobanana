import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DUE║MIX — DUE║MIX™ Dual-Chamber Mixing System",
  description:
    "The world's first consumer-grade dual-chamber peptide pen. Powder and diluent, perfectly separated. Reconstituted at the moment of injection.",
  keywords: ["peptide pen", "dual chamber", "peptide delivery", "research peptides", "injection pen"],
  openGraph: {
    title: "DUE║MIX — DUE║MIX™ — Two chambers. One perfect dose.",
    description:
      "Powered by DUE║MIX™ dual-chamber technology. Maximum peptide potency — reconstituted only at the moment of injection.",
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

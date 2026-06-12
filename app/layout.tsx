import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import PageBackground from "@/components/PageBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Top Casinos in Canada | Best Canadian Casino Bonuses",
  description:
    "Discover the top-rated online casinos in Canada. Compare exclusive bonuses, lightning-fast payouts, and VIP treatment at secure, licensed platforms handpicked for Canadian players.",
  keywords: [
    "top casinos Canada",
    "Canadian casino bonuses",
    "best online casinos Canada",
    "Canadian gambling sites",
    "casino free spins Canada",
  ],
  openGraph: {
    title: "Top Casinos in Canada | Best Canadian Casino Bonuses",
    description:
      "Discover the top-rated online casinos in Canada with exclusive bonuses, fast payouts, and VIP treatment.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Casinos in Canada | Best Canadian Casino Bonuses",
    description:
      "Discover the top-rated online casinos in Canada with exclusive bonuses, fast payouts, and VIP treatment.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen text-white antialiased">
        <PageBackground />
        <div className="page-content">{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "1Ghalon Download",
  description:
    "1Ghalon is a mobile app designed to show fuel prices and directions to nearby fuel stations. It sources fuel prices from CediRates.",
  openGraph: {
    title: "1Ghalon App Download Landing Page — Know the right station before you move.",
    description:
      "1Ghalon is a mobile app designed to show fuel prices and directions to nearby fuel stations. It sources fuel prices from CediRates.",
    type: "website",
    url: "https://onelink.to/pbx4uz",
  },
  twitter: {
    card: "summary_large_image",
    title: "1Ghalon Download",
    description:
      "1Ghalon is a mobile app designed to show fuel prices and directions to nearby fuel stations. It sources fuel prices from CediRates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

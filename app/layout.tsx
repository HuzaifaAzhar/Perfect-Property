import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Perfect Property & Relocation Solutions | Apartments & Short-Lets UK",
    template: "%s | Perfect Property & Relocation Solutions",
  },
  description:
    "Perfect Property & Relocation Solutions provides serviced apartments, short-let accommodation, and relocation support across the UK. Flexible, compliant solutions for individuals, families, and organisations.",
  keywords: [
    "serviced apartments UK",
    "short lets UK",
    "temporary accommodation UK",
    "corporate short lets",
    "apartment relocation services",
    "property relocation UK",
    "Perfect Property & Relocation Solutions",
  ],
  authors: [{ name: "Perfect Property & Relocation Solutions Ltd" }],
  creator: "Perfect Property & Relocation Solutions Ltd",
  publisher: "Perfect Property & Relocation Solutions Ltd",

  metadataBase: new URL("https://www.perfectpropertyandsolutionltd.net"),

  openGraph: {
    title: "Perfect Property & Relocation Solutions",
    description:
      "Serviced apartments, short-let accommodation, and relocation solutions across the UK. Flexible, reliable, and professionally managed stays.",
    url: "https://www.perfectpropertyandsolutionltd.net",
    siteName: "Perfect Property & Relocation Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Serviced apartments and short-let accommodation by Perfect Property & Relocation Solutions",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Perfect Property & Relocation Solutions",
    description:
      "UK-based serviced apartments and short-let accommodation with flexible relocation support.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

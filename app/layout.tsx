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
    default: "Perfect Property & Relocation Solutions | Housing & Relocation Services UK",
    template: "%s | Perfect Property & Relocation Solutions",
  },
  description:
    "Perfect Property & Relocation Solutions provides professional housing, relocation, and property support services across the UK. Trusted solutions for individuals, families, and organisations.",
  keywords: [
    "property relocation UK",
    "housing services UK",
    "relocation solutions London",
    "property support services",
    "housing assistance UK",
    "Perfect Property & Relocation Solutions",
  ],
  authors: [{ name: "Perfect Property & Relocation Solutions Ltd" }],
  creator: "Perfect Property & Relocation Solutions Ltd",
  publisher: "Perfect Property & Relocation Solutions Ltd",

  metadataBase: new URL("https://www.perfectpropertyandsolutionltd.net"),

  openGraph: {
    title: "Perfect Property & Relocation Solutions",
    description:
      "Professional housing and relocation services across the UK. Reliable, compliant, and client-focused support.",
    url: "https://www.perfectpropertyandsolutionltd.net",
    siteName: "Perfect Property & Relocation Solutions",
    images: [
      {
        url: "/og-image.jpg", // add later
        width: 1200,
        height: 630,
        alt: "Perfect Property & Relocation Solutions",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Perfect Property & Relocation Solutions",
    description:
      "UK-based property and relocation services delivering reliable housing support.",
    images: ["/og-image.jpg"],
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

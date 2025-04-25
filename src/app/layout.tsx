import "@/src/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Creator Genius AI – Power Your Content Workflow",
  description:
    "Join the wait-list for Creator Genius AI and turn hours of content work into minutes.",
  keywords:
    "Creator Genius AI, content ideation, AI for creators, social media AI tools, waitlist",
  openGraph: {
    title: "Creator Genius AI",
    url: "https://creator-genius.com",
    description:
      "AI that ideates, scripts, optimises & schedules – so you stay creative.",
    images: ["/og.png"],
    siteName: "Creator Genius AI",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@creatorgenius_ai",
  },
  metadataBase: new URL("https://creator-genius.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
     <body className={`${inter.className} scroll-smooth bg-white text-slate-900`}>{children}</body>
    </html>
  );
}

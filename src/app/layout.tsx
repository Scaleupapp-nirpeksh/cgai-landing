import "@/src/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/src/components/Navigation";

// Font configuration
const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap",
  variable: '--font-inter',
});

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
    <html 
      lang="en" 
      className={`${inter.variable} scroll-smooth`}
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5A33FF" />
        <meta name="msapplication-TileColor" content="#5A33FF" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Preload key assets */}
        <link rel="preload" href="/CG-AI Logo.png" as="image" />
        <link rel="preload" href="/grid-pattern.svg" as="image" />
      </head>
      <body className="antialiased text-slate-900 bg-white">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
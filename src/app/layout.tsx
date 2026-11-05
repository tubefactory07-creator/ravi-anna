import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0D0712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Ravi Rajan — The Series",
  description:
    "Ravi Rajan — Senior Full-Stack Architect & Product Engineer. A cinematic, streaming-inspired personal portfolio.",
  keywords: [
    "Ravi Rajan",
    "Senior Full-Stack Architect",
    "Systems Engineer",
    "Distributed Systems",
    "Autonomous AI",
    "Next.js",
    "React",
    "TypeScript",
    "Go",
    "Kafka",
    "ClickHouse",
  ],
  authors: [{ name: "Ravi Rajan" }],
  creator: "Ravi Rajan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.linkedin.com/in/ravi-rajan-19268b73/",
    title: "Ravi Rajan — The Series",
    description:
      "Senior Full-Stack Architect & Product Engineer. Distributed Systems • Autonomous AI • Cloud Architecture. Every project is an Original.",
    siteName: "Ravi Rajan — The Series",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Rajan — The Series",
    description:
      "Senior Full-Stack Architect & Product Engineer. Distributed Systems • Autonomous AI • Cloud Architecture. Every project is an Original.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/portrait-720.jpg"
          type="image/jpeg"
        />
      </head>
      <body className="min-h-screen bg-[#0D0712] text-[#F8F4E9] antialiased">
        {children}
      </body>
    </html>
  );
}

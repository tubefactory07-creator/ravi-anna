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
  title: "Ravirajan P — Senior Administration Executive & Operations Leader",
  description:
    "Ravirajan P — Senior Administration Executive & Operations Specialist with 8+ years experience in enterprise ERP rollout, executive office administration, facilities governance, and MIS reporting.",
  keywords: [
    "Ravirajan P",
    "Ravi Rajan",
    "Senior Administration Executive",
    "Operations Specialist",
    "Office Administration",
    "ERP Implementation",
    "Hypercare Support",
    "Executive Facilities Management",
    "Vendor Management",
    "MIS Reporting",
    "Document Control",
    "Salesforce CRM",
    "SPDS Group of Companies",
  ],
  authors: [{ name: "Ravirajan P" }],
  creator: "Ravirajan P",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linkedin.com/in/ravirajan-p",
    title: "Ravirajan P — Senior Administration Executive & Operations Leader",
    description:
      "Senior Administration Executive & Operations Specialist. 8+ years driving ERP deployment, facilities governance, vendor procurement, and executive MIS reporting.",
    siteName: "Ravirajan P — The Operations Leader",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravirajan P — Senior Administration Executive & Operations Leader",
    description:
      "Senior Administration Executive & Operations Specialist. 8+ years driving ERP deployment, facilities governance, vendor procurement, and executive MIS reporting.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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

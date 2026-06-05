import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Sendroid Overseas Private Limited | International Trading & Export Company",
    template: "%s | Sendroid Overseas Private Limited"
  },
  description:
    "Sendroid Overseas Private Limited connects Indian products with global buyers through sourcing, supplier verification, export support, documentation and logistics coordination.",
  keywords: [
    "Indian export company",
    "international trading company India",
    "product sourcing India",
    "Sendroid Overseas",
    "export services"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/sendroid-logo.jpg",
    apple: "/sendroid-logo.jpg"
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Sendroid Overseas Private Limited",
    description: "Connecting Indian Products to Global Markets",
    siteName: "Sendroid Overseas Private Limited"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

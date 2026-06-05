import type { Metadata } from "next";
import Script from "next/script";
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-G8M2J5GFTG" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G8M2J5GFTG');
        `}</Script>
      </body>
    </html>
  );
}

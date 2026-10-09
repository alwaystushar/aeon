import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Footer, Header } from "@/components/site-shell";
import { SmoothScroll } from "@/components/smooth-scroll";
import { FloatingContact } from "@/components/floating-contact";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const viewport: Viewport = {
  themeColor: "#071c35",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aeonfinvest.com"),
  title: {
    default: "AEON Finvest Services LLP | Strategic Corporate Lending & Funding Solutions",
    template: "%s | AEON Finvest Services",
  },
  description:
    "AEON Finvest Services LLP connects business ambitions with strategic funding solutions. Over 15 years experience, ₹1,00,000 Cr+ funding volume, and 100+ banking partners across India and Canada for Builder Funding, Corporate Loans, MSME, LAP, and Project Finance.",
  keywords: [
    "AEON Finvest Services LLP",
    "Corporate Lending Solutions",
    "Strategic Advisory Funding",
    "Builder Funding India",
    "Project Finance",
    "MSME Loans",
    "Loan Against Property",
    "Working Capital Facilities",
    "Debt Consolidation",
    "Business Loans Mohali",
    "Financial Advisory India",
    "Real Estate Developer Funding",
  ],
  authors: [{ name: "AEON Finvest Services LLP", url: "https://aeonfinvest.com" }],
  creator: "AEON Finvest Services LLP",
  publisher: "AEON Finvest Services LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://aeonfinvest.com",
  },
  openGraph: {
    title: "AEON Finvest Services LLP | Strategic Corporate Lending & Funding Solutions",
    description:
      "Empowering businesses and enterprises with structured debt advisory, builder funding, corporate lending, and retail financial products across India and Canada.",
    url: "https://aeonfinvest.com",
    siteName: "AEON Finvest Services LLP",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/perspective.jpg",
        width: 1200,
        height: 630,
        alt: "AEON Finvest Services LLP - Corporate Advisory and Strategic Lending",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEON Finvest Services LLP | Strategic Corporate Lending & Funding Solutions",
    description:
      "Over ₹1,00,000 Cr+ funding volume and 100+ banking partners. Strategic funding, builder loans, corporate finance, and MSME solutions.",
    images: ["/images/perspective.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://aeonfinvest.com/#organization",
      "name": "AEON Finvest Services LLP",
      "alternateName": ["AFS Aeon Finvest", "AEON Finvest"],
      "url": "https://aeonfinvest.com",
      "logo": "https://aeonfinvest.com/logo.png",
      "image": "https://aeonfinvest.com/images/perspective.jpg",
      "description":
        "AEON Finvest Services LLP connects business ambitions with strategic funding solutions, specializing in Corporate Lending, Builder Project Finance, MSME Loans, LAP, and Working Capital Facilities.",
      "telephone": "+91-9815965451",
      "email": "contact@aeonfinvest.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. C 133, Level 1st, Industrial Area, Phase 8",
        "addressLocality": "Mohali",
        "addressRegion": "Punjab",
        "postalCode": "160071",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.7046,
        "longitude": 76.7179,
      },
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "Canada" },
      ],
      "priceRange": "$$$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:30",
          "closes": "18:30",
        },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Financial & Advisory Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Builder & Developer Funding" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Loans" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Loan Against Property" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Loan" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Loan" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MSME Loan" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personal Loan" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wealth Management" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://aeonfinvest.com/#website",
      "url": "https://aeonfinvest.com",
      "name": "AEON Finvest Services LLP",
      "publisher": { "@id": "https://aeonfinvest.com/#organization" },
      "inLanguage": "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "AEON Finvest Services LLP | Strategic Funding & Corporate Lending Solutions",
  description:
    "Leading corporate finance and advisory firm in India & Canada. Specializing in Builder & Developer Funding, Corporate Loans, MSME, LAP, and Working Capital with ₹1,00,000 Cr+ funding volume.",
  alternates: {
    canonical: "https://aeonfinvest.com",
  },
  openGraph: {
    title: "AEON Finvest Services LLP | Strategic Funding & Corporate Lending Solutions",
    description:
      "From business growth to builder funding and wealth management, we help you make informed financial decisions with confidence.",
    url: "https://aeonfinvest.com",
    images: [{ url: "/images/perspective.jpg", width: 1200, height: 630, alt: "AEON Finvest Services LLP" }],
  },
};

export default function Page() {
  return <HomePage />;
}

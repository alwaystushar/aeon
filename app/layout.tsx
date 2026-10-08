import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer, Header } from "@/components/site-shell";
import { SmoothScroll } from "@/components/smooth-scroll";
import { FloatingContact } from "@/components/floating-contact";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aeon-finvest-services.tusharnegi-11-tn.chatgpt.site"),
  title: { default: "AEON Finvest Services LLP", template: "%s | AEON Finvest" },
  description: "Thoughtful financial solutions for individuals, entrepreneurs and businesses.",
  openGraph: { title: "AEON Finvest Services LLP", description: "Financial solutions built around your ambitions.", type: "website" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

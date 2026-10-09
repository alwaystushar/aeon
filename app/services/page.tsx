import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/site-link";
import { FiArrowUpRight } from "react-icons/fi";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Financial Services & Strategic Funding Solutions",
  description:
    "Explore AEON Finvest services for Builder & Developer Funding, Corporate Loans, Loan Against Property, MSME Loans, Home Loans, Business Loans, and Wealth Management.",
  alternates: {
    canonical: "https://aeonfinvest.com/services",
  },
  openGraph: {
    title: "Financial Services | AEON Finvest Services LLP",
    description:
      "Comprehensive financing across 8 focus areas: Builder funding, corporate debt syndication, MSME facilities, LAP, and retail credit solutions.",
    url: "https://aeonfinvest.com/services",
    images: [{ url: "/images/perspective.jpg", width: 1200, height: 630, alt: "AEON Finvest Services" }],
  },
};

export default function Services() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow light">Our services</p>
        <h1>
          Financial solutions<br />
          for every <span style={{ color: "var(--gold-light)" }}>ambition.</span>
        </h1>
        <p>
          Eight areas of focus. One commitment to advice that is clear, relevant and grounded in your context.
        </p>
      </section>
      <section className="section service-card-grid">
        {services.map((s, i) => (
          <Link className="service-card" href={`/services/${s.slug}`} key={s.slug}>
            <div className="service-card-image">
              <Image
                src={s.image}
                alt={`${s.name} - AEON Finvest`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <article>
              <div className="service-card-meta">
                <span>0{i + 1}</span>
                <FiArrowUpRight />
              </div>
              <h2>{s.name}</h2>
              <p>{s.description}</p>
              <strong>Explore service</strong>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}

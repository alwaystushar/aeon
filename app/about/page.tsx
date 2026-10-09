import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { TeamSection } from "@/components/team-section";
import { BankMarquee } from "@/components/bank-marquee";
import { FiCheckCircle, FiGlobe, FiSmartphone, FiUsers, FiTrendingUp, FiShield, FiAward } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About Us | Leadership, Track Record & Management Team",
  description:
    "Trusted name in financial services for over 15 years with operations in India and Canada, managing ₹1,00,000 Cr+ in funding cases with senior banking and CA leadership.",
  alternates: {
    canonical: "https://aeonfinvest.com/about",
  },
  openGraph: {
    title: "About Us | AEON Finvest Services LLP",
    description:
      "Discover AEON Finvest's 15+ years track record, ₹1,00,000 Cr+ volume, and cross-functional leadership of former bankers, CAs, and credit heads.",
    url: "https://aeonfinvest.com/about",
    images: [{ url: "/images/about-team.jpg", width: 1200, height: 630, alt: "AEON Finvest Leadership Team" }],
  },
};

const milestones = [
  {
    icon: FiUsers,
    stat: "10,000+",
    tag: "Client Trust",
    label: "Happy Customers",
    desc: "Proudly served over 10,000 satisfied clients, reflecting our unwavering commitment to transparency and client-first execution.",
  },
  {
    icon: FiTrendingUp,
    stat: "₹1,00,000 Cr+",
    tag: "Cumulative Volume",
    label: "Cases Conducted",
    desc: "Successfully handled financial transactions and high-value funding cases exceeding ₹1,00,000 Crores in cumulative value.",
  },
  {
    icon: FiShield,
    stat: "100+",
    tag: "Direct Alliances",
    label: "Banks & NBFC Partners",
    desc: "Direct institutional partnerships with 100+ leading lenders to curate competitive interest rates and tailored structures.",
  },
  {
    icon: FiAward,
    stat: "Best in Class",
    tag: "Dedicated Support",
    label: "CRM Leadership",
    desc: "Industry-leading CRM professionals providing end-to-end guidance, relationship management, and frictionless processing.",
  },
];

const reasons = [
  { title: "Expert in Secured & Unsecured Funding", desc: "From home loans and LAP to corporate project funding, builder finance, and equity syndication." },
  { title: "Quick Disbursals & Efficient Processing", desc: "Streamlined underwriting workflows with priority bank desk processing and 15-day maximum TAT on builder funding." },
  { title: "Deep Banking & NBFC Understanding", desc: "Decades of relationships with senior leadership across public and private lenders." },
  { title: "Data Privacy & Absolute Transparency", desc: "Zero hidden charges, clear term comparisons and strict confidentiality." },
  { title: "Customized Funding Solutions", desc: "Financial structures precisely calibrated around client cash flows and long-term goals." },
];

const accolades = [
  {
    icon: FiAward,
    title: "Appreciation Letters from Top Bankers",
    org: "SBI, HDFC, ICICI, Axis Bank & PNB",
    desc: "Commended by senior banking leadership for loan syndication velocity, rigorous compliance, and transparent underwriting in complex builder and corporate funding.",
  },
  {
    icon: FiCheckCircle,
    title: "₹1,00,000 Cr+ Execution Landmark",
    org: "Cumulative Advisory & Disbursals",
    desc: "A verified track record of structuring and facilitating over ₹1,00,000 Crores in secured project finance, builder capital, and retail credit solutions.",
  },
  {
    icon: FiTrendingUp,
    title: "Pan-India Builder Funding Leadership",
    org: "Real Estate & Infrastructure Syndication",
    desc: "Recognised across Tier-1 and Tier-2 real estate markets for unlocking high-ticket collateral-backed funding (₹1 Cr – ₹1,000 Cr) with a 15-day maximum turnaround.",
  },
  {
    icon: FiShield,
    title: "Exemplary Client & Industry Rewards",
    org: "10,000+ Enterprises & Builders Served",
    desc: "Recipient of distinguished client appreciation plaques and industry awards for maintaining absolute transparency, zero hidden costs, and dedicated relationship management.",
  },
];

const appreciationLetters = [
  {
    quote:
      "“Aeon Finvest has proven to be an exemplary syndication partner for our commercial credit division. Their dossiers are meticulously verified, and their ability to bridge borrower readiness with institutional guidelines ensures remarkable sanction efficiency.”",
    author: "Senior Vice President & Zonal Head",
    entity: "Leading Private Sector Bank",
    badge: "Official Banker Commendation",
  },
  {
    quote:
      "“When we needed urgent collateral-backed funding of ₹45 Cr for our high-rise residential project in NCR, Aeon Finvest delivered approval within 12 days. Their understanding of developer cash flows and collateral structuring is unparalleled in the industry.”",
    author: "Managing Director",
    entity: "Premier Real Estate Development Group",
    badge: "Client Appreciation Letter",
  },
  {
    quote:
      "“The discipline, transparency and market depth demonstrated by Aeon Finvest Services have set a benchmark in large-ticket project financing and builder capital syndication across Northern and Western India.”",
    author: "Chief Credit Risk Officer",
    entity: "National Infrastructure & Housing NBFC",
    badge: "Institutional Partner Review",
  },
];

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow light">About AEON Finvest Services LLP</p>
        <h1>
          15+ Years of Excellence.<br />
          Global Reach.<br />
          <span style={{ color: "var(--gold-light)" }}>Local Expertise.</span>
        </h1>
        <p>
          Empowering growth through smart financial solutions with established operations in both India and Canada.
        </p>
      </section>

      {/* About Company Overview */}
      <section className="section content-grid balanced-intro about-intro">
        <div>
          <p className="eyebrow">Who We Are</p>
          <h2>A multi-disciplinary consulting firm.</h2>
        </div>
        <div className="prose">
          <p>
            AEON Finvest Services LLP has been a trusted name in the financial services industry for over 15 years. With a strong foundation and an unwavering commitment to excellence, we have built a reputation for delivering exceptional customer satisfaction.
          </p>
          <p>
            Guided by a results-driven, &ldquo;get-things-done&rdquo; philosophy, our strength lies in our ability to assemble highly skilled, cross-functional teams that bring innovative thinking and deep expertise to every engagement.
          </p>
          <p>
            We prioritize long-term client success over short-term gains, focusing on high-value transactions and corporate funding opportunities. With corporate operations in Mohali, India and branch operations in Calgary, Canada, we are well-positioned to serve clients across geographies.
          </p>
        </div>
      </section>

      {/* Split Feature Visual */}
      <section className="split-feature">
        <div className="split-image">
          <Image
            src="/images/about-team.jpg"
            alt="AEON Finvest leadership advisory team in corporate boardroom"
            fill
            sizes="(max-width:900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="split-copy">
          <p className="eyebrow">Our Mission &amp; Vision</p>
          <h2>Empowering Growth &amp; Inclusion.</h2>
          <div className="mission-vision-blocks">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To be a trusted financial partner empowering businesses and individuals through seamless access to capital, driving sustainable growth and financial inclusion.
              </p>
            </div>
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>
                To deliver transparent, innovative, and reliable funding solutions by leveraging partnerships with banks and NBFCs, ensuring long-term success for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="dark-section milestones-section">
        <div className="milestones-header">
          <div>
            <p className="eyebrow light">Track Record of Excellence</p>
            <h2>Proven Scale.<br/>Measurable Impact.</h2>
          </div>
          <p className="milestones-sub">
            A legacy of institutional relationships, multi-disciplinary advisory, and thousands of successfully funded commercial and personal ambitions across India and Canada.
          </p>
        </div>
        <div className="milestones-grid">
          {milestones.map((m) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.label} className="milestone-card">
                <div className="milestone-top">
                  <div className="milestone-icon-wrap">
                    <Icon />
                  </div>
                  <span className="milestone-tag">{m.tag}</span>
                </div>
                <strong className="milestone-stat">{m.stat}</strong>
                <h3 className="milestone-title">{m.label}</h3>
                <p className="milestone-desc">{m.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Management Team Section */}
      <TeamSection />

      {/* Why Choose AFS */}
      <section className="section why-afs-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Strategic Advantage</p>
            <h2>Why Choose AFS?</h2>
          </div>
          <p>
            Five cornerstones that set AEON Finvest Services apart in the Indian and international financial ecosystem.
          </p>
        </div>
        <div className="why-afs-grid">
          {reasons.map((r, i) => (
            <Reveal key={r.title} className="why-afs-card">
              <span>0{i + 1}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Achievements, Rewards & Banker Accolades */}
      <section className="dark-section accolades-section">
        <div className="section-head light">
          <div>
            <p className="eyebrow light">Recognition &amp; Accreditations</p>
            <h2>Achievements, Rewards &amp;<br/>Banker Appreciation</h2>
          </div>
          <p>
            Honoured with formal appreciation letters and relationship awards by senior leadership across premier public and private sector banks, institutional NBFCs, and developer conglomerates.
          </p>
        </div>

        <div className="accolades-grid">
          {accolades.map((a) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} className="accolade-card">
                <div className="accolade-icon-wrap">
                  <Icon />
                </div>
                <span className="accolade-org">{a.org}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </Reveal>
            );
          })}
        </div>

        {/* Appreciation Letters Highlights */}
        <div className="appreciation-letters-block">
          <div className="appreciation-header">
            <p className="eyebrow light">Commendations</p>
            <h3>Excerpts from Banker &amp; Client Appreciation Letters</h3>
          </div>
          <div className="letters-grid">
            {appreciationLetters.map((l) => (
              <Reveal key={l.author} className="letter-card">
                <span className="letter-badge">{l.badge}</span>
                <blockquote>{l.quote}</blockquote>
                <div className="letter-meta">
                  <strong>{l.author}</strong>
                  <span>{l.entity}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Partner Marquee */}
      <BankMarquee />
    </main>
  );
}

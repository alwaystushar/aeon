import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { TeamSection } from "@/components/team-section";
import { BankMarquee } from "@/components/bank-marquee";
import { FiCheckCircle, FiGlobe, FiSmartphone, FiUsers, FiTrendingUp, FiShield, FiAward } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About Us | AEON Finvest Services LLP",
  description:
    "Trusted name in financial services for over 15 years with operations in India and Canada, managing ₹5,00,000 Cr+ in funding cases.",
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
    stat: "₹5,00,000 Cr+",
    tag: "Cumulative Volume",
    label: "Cases Conducted",
    desc: "Successfully handled financial transactions and high-value funding cases exceeding ₹5,00,000 Crores in cumulative value.",
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
  { title: "Expert in Secured & Unsecured Funding", desc: "From home loans and LAP to corporate project funding and equity syndication." },
  { title: "Quick Disbursals & Efficient Processing", desc: "Streamlined underwriting workflows with priority bank desk processing." },
  { title: "Deep Banking & NBFC Understanding", desc: "Decades of relationships with senior leadership across public and private lenders." },
  { title: "Data Privacy & Absolute Transparency", desc: "Zero hidden charges, clear term comparisons and strict confidentiality." },
  { title: "Customized Funding Solutions", desc: "Financial structures precisely calibrated around client cash flows and long-term goals." },
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

      {/* Bank Partner Marquee */}
      <BankMarquee />
    </main>
  );
}

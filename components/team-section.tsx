"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "@/components/site-link";
import { Reveal } from "@/components/reveal";
import { FiX, FiCheckCircle, FiArrowRight, FiArrowUpRight, FiBriefcase } from "react-icons/fi";

export type TeamMember = {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  bio: string;
  image: string;
  tagline?: string;
  subtitle?: string;
  fullBio?: string[];
  expertise?: string[];
  highlights?: string[];
};

export const managementTeam: TeamMember[] = [
  {
    name: "Karan Sharma",
    role: "Senior Banking & Corporate Finance Advisor",
    qualification: "Former Branch Head, Citibank",
    experience: "Nearly 2 Decades",
    subtitle: "Strategic Funding | Corporate Lending Solutions",
    tagline: "Connecting Business Ambitions with Strategic Funding Solutions.",
    bio: "Senior Banking & Corporate Finance Advisor with nearly two decades of leadership including Citibank Branch Head, specializing in strategic funding, corporate lending, and builder project finance.",
    image: "/images/team/karan-sharma.jpg",
    fullBio: [
      "Karan Sharma brings nearly two decades of experience in the banking and financial services sector, including his tenure with Citibank as a Branch Head. With a strong understanding of financial products, credit assessment, banking operations, and lending solutions, he combines valuable banking experience with a strategic approach to business finance and corporate funding.",
      "At AFS Aeon Finvest Services LLP, Karan focuses on helping entrepreneurs, business owners, MSMEs, established enterprises, and large corporations identify suitable financing opportunities to support business expansion, capital requirements, operational efficiency, and long-term growth.",
      "His expertise covers a broad spectrum of financial solutions, including Project Finance, MSME Loans, Corporate Funding, Business Loans, Debt Consolidation, Business Expansion Finance, Working Capital Facilities, Cash Credit and Overdraft Limits, Letters of Credit (LC), and Bank Guarantees (BG).",
      "With comprehensive knowledge of financial products and lending structures, Karan understands the importance of aligning a business’s financial requirements with appropriate lender policies, credit parameters, repayment capacity, and documentation requirements. He supports clients in evaluating funding options, preparing structured loan proposals, identifying suitable banks and NBFCs, and coordinating with financial institutions throughout the funding process.",
      "His professional relationships across the banking industry, including connections with senior banking officials, strengthen his ability to facilitate meaningful discussions between businesses and potential lenders. He is particularly focused on assisting clients with complex funding requirements, large-ticket financing proposals, project development, business expansion, and corporate financial planning.",
      "At AFS Aeon Finvest Services LLP, Karan is committed to delivering professional, transparent, and client-centric financial advisory services. His objective is to simplify complex funding processes, develop long-term business relationships, and help clients explore appropriate financial solutions that support sustainable growth and create lasting business value."
    ],
    expertise: [
      "Project Finance",
      "Builder & Real Estate Funding",
      "Corporate Funding & Lending",
      "MSME & Business Loans",
      "Debt Consolidation",
      "Business Expansion Finance",
      "Working Capital (CC/OD)",
      "Letters of Credit (LC) & BG"
    ],
    highlights: [
      "Nearly two decades in banking and financial services",
      "Former Branch Head at Citibank",
      "Specialist in complex, large-ticket financing proposals",
      "Direct relationships with senior leadership across public & private banks"
    ]
  },
  {
    name: "Dr. Maansi Makkar",
    role: "Credit Head – Credit Team",
    qualification: "PhD in International Finance",
    experience: "12+ Years",
    tagline: "Driving Institutional Rigour & Credit Risk Precision.",
    bio: "A PhD in International Finance, Maansi brings 12+ years of global expertise in operations and CRM, with a focus on optimizing client relations and business development.",
    image: "/images/team/maansi-makkar.jpg",
    fullBio: [
      "Dr. Maansi Makkar serves as Credit Head at AEON Finvest Services LLP, steering credit policy evaluation, underwriting governance, and institutional syndication standards.",
      "Holding a PhD in International Finance, she brings over 12 years of specialized experience in global credit appraisal, structured underwriting, and CRM operational architecture.",
      "Her focus centers on minimizing sanction turnaround time while safeguarding risk parameters, ensuring clients receive optimal terms and seamless disbursement."
    ],
    expertise: [
      "Credit Risk Underwriting",
      "International Finance",
      "CRM Architecture",
      "Institutional Policy Compliance",
      "Client Relationship Strategy"
    ],
    highlights: [
      "PhD in International Finance",
      "12+ years in international credit underwriting & operations",
      "Leads credit assessment and risk management team",
      "Focused on rapid turnaround and client satisfaction"
    ]
  },
  {
    name: "CA Ajay Munjal",
    role: "Financial Advisor – India",
    qualification: "Chartered Accountant",
    experience: "20+ Years",
    tagline: "Strategic Financial Architecture for Corporate Scale.",
    bio: "A seasoned CA with 20+ years of experience in project finance, valuations, and strategic planning, Ajay specializes in large-scale financial consulting and business development.",
    image: "/images/team/ajay-munjal.jpg",
    fullBio: [
      "CA Ajay Munjal is a distinguished Chartered Accountant with more than two decades of senior practice in project finance, corporate valuations, and strategic financial advisory.",
      "He has advised on numerous multi-crore industrial transactions, cross-border business restructuring, and debt syndications across diverse manufacturing and infrastructure domains.",
      "At AEON, Ajay provides strategic oversight on large-scale financial proposals, balance sheet engineering, and institutional bank presentation."
    ],
    expertise: [
      "Project Finance",
      "Business Valuations",
      "Taxation & Corporate Structuring",
      "Balance Sheet Engineering",
      "M&A Due Diligence"
    ],
    highlights: [
      "Fellow Chartered Accountant with 20+ years practice",
      "Specialist in high-value project finance & industrial mandates",
      "Cross-border transaction and syndication advisor",
      "Trusted advisor to corporate boards and enterprise promoters"
    ]
  },
  {
    name: "CA Ankit Dhiman",
    role: "Financial Advisor – India",
    qualification: "Chartered Accountant",
    experience: "Audit & Tax Advisory",
    tagline: "Meticulous Due Diligence & Multi-Sector Compliance.",
    bio: "With expertise in GST, international taxation, and business valuations, Ankit has led financial audits and consulting for various industries including FMCG and real estate.",
    image: "/images/team/ankit-dhiman.jpg",
    fullBio: [
      "CA Ankit Dhiman leads financial due diligence, audit validation, and direct/indirect tax advisory at AEON Finvest Services LLP.",
      "With deep expertise across GST frameworks, international taxation laws, and complex asset valuations, Ankit has managed financial reporting and audit workflows for top conglomerates in FMCG, real estate, and retail.",
      "He ensures that client dossiers conform to the highest standards of regulatory compliance, accelerating lender scrutiny and sanction approvals."
    ],
    expertise: [
      "GST & Indirect Taxation",
      "Statutory Audit & Due Diligence",
      "Asset & Enterprise Valuation",
      "Real Estate Compliance",
      "Regulatory Filing & Advisory"
    ],
    highlights: [
      "Chartered Accountant specializing in corporate audits",
      "Expertise in real estate, FMCG and manufacturing sectors",
      "Accelerates bank approvals through rigorous documentation",
      "Comprehensive GST and tax compliance advisory"
    ]
  },
  {
    name: "Hemant Kumar",
    role: "Strategic Financial Consultant",
    qualification: "CA & US CPA",
    experience: "CFO & Corporate Finance",
    tagline: "Equity & Debt Syndication for High-Growth Enterprises.",
    bio: "A CA and US CPA with 8+ years in corporate finance, Hemant specializes in equity & debt syndication, project funding, and tax planning, currently serving as CFO at a superspeciality hospital.",
    image: "/images/team/hemant-kumar.jpg",
    fullBio: [
      "Hemant Kumar is a dual-qualified CA and US CPA possessing over 8 years of intensive corporate finance, equity syndication, and hospital administration experience.",
      "Currently serving as Chief Financial Officer at a prominent superspeciality hospital, Hemant acts as a Senior Strategic Financial Consultant to AEON Finvest on healthcare, infrastructure, and institutional funding.",
      "His acumen in complex capital structure design and lender negotiation helps high-growth businesses secure transformative funding."
    ],
    expertise: [
      "Equity & Debt Syndication",
      "CFO Advisory & Financial Planning",
      "Healthcare & Infrastructure Finance",
      "US GAAP & Cross-Border Accounting",
      "Project Feasibility Modeling"
    ],
    highlights: [
      "Dual qualification: CA & US CPA",
      "Active CFO at a superspeciality hospital group",
      "Specialist in healthcare & infrastructure capital structuring",
      "Expertise in complex financial modeling & syndication"
    ]
  },
];

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Close modal on Escape key and manage Lenis scroll
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedMember(null);
    }
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;

    if (selectedMember) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  return (
    <section className="section team-section" aria-label="Our Management Team">
      <div className="section-head">
        <div>
          <p className="eyebrow">Leadership &amp; Advisory</p>
          <h2>Our Management Team</h2>
        </div>
        <p>
          Seasoned banking advisors, former Citibank leaders, chartered accountants, and credit heads assembling cross-functional excellence across corporate and builder finance.
        </p>
      </div>

      <div className="team-grid">
        {managementTeam.map((member) => (
          <Reveal key={member.name} className="team-card team-card-clickable">
            <div
              className="team-card-inner"
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedMember(member);
                }
              }}
              aria-label={`View full profile for ${member.name}`}
            >
              <div className="team-image-wrap">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="team-exp-badge">{member.experience}</span>
              </div>
              <div className="team-info">
                <span className="team-qual">{member.qualification}</span>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-card-action">
                  <span>View Full Profile</span>
                  <FiArrowUpRight aria-hidden="true" />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Pop-up Profile Modal */}
      {selectedMember && (
        <div
          className="team-modal-backdrop"
          data-lenis-prevent="true"
          onClick={() => setSelectedMember(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-member-name"
        >
          <div
            className="team-modal-dialog"
            data-lenis-prevent="true"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <button
              className="team-modal-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Close profile"
            >
              <FiX />
            </button>

            <div className="team-modal-header">
              <div className="team-modal-image">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  sizes="200px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="team-modal-head-info">
                <span className="team-modal-qual">{selectedMember.qualification}</span>
                <h2 id="modal-member-name" className="team-modal-name">{selectedMember.name}</h2>
                <p className="team-modal-role">{selectedMember.role}</p>
                {selectedMember.subtitle && (
                  <p style={{fontSize: "0.85rem", color: "var(--muted)", margin: "0 0 10px", fontWeight: 500}}>
                    {selectedMember.subtitle}
                  </p>
                )}
                <div className="team-modal-badges">
                  <span className="team-modal-badge">{selectedMember.experience}</span>
                  <span className="team-modal-badge" style={{background: "rgba(200, 162, 74, 0.15)", color: "var(--navy)", border: "1px solid var(--gold)"}}>
                    Executive Advisory
                  </span>
                </div>
              </div>
            </div>

            {selectedMember.tagline && (
              <div className="team-modal-tagline">
                “{selectedMember.tagline}”
              </div>
            )}

            <div className="team-modal-body">
              {/* Highlights */}
              {selectedMember.highlights && selectedMember.highlights.length > 0 && (
                <div>
                  <h4 className="team-modal-section-title">Credentials &amp; Highlights</h4>
                  <div className="team-modal-highlights">
                    {selectedMember.highlights.map((h, i) => (
                      <div key={i} className="team-modal-highlight-item">
                        <FiCheckCircle />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Core Expertise */}
              {selectedMember.expertise && selectedMember.expertise.length > 0 && (
                <div>
                  <h4 className="team-modal-section-title">Core Advisory Domains</h4>
                  <div className="team-modal-expertise-grid">
                    {selectedMember.expertise.map((e) => (
                      <span key={e} className="team-modal-expertise-pill">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* In-depth Biography */}
              <div>
                <h4 className="team-modal-section-title">Professional Background</h4>
                <div className="team-modal-bio-paragraphs">
                  {selectedMember.fullBio && selectedMember.fullBio.length > 0 ? (
                    selectedMember.fullBio.map((para, i) => <p key={i}>{para}</p>)
                  ) : (
                    <p>{selectedMember.bio}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="team-modal-footer">
              <div style={{display: "flex", alignItems: "center", gap: "8px", color: "var(--muted)", fontSize: "0.82rem"}}>
                <FiBriefcase style={{color: "var(--gold)"}} />
                <span>AFS Aeon Finvest Services LLP • Advisory Desk</span>
              </div>
              <Link
                href="/contact"
                className="button gold"
                onClick={() => setSelectedMember(null)}
              >
                Consult with Advisor <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

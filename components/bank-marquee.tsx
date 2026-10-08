"use client";

import React from "react";

export type BankPartner = {
  name: string;
  category: "Bank" | "NBFC";
  color: string;
  renderLogo: () => React.ReactNode;
};

export const bankPartners: BankPartner[] = [
  {
    name: "HDFC Bank",
    category: "Bank",
    color: "#004c8f",
    renderLogo: () => (
      <svg viewBox="0 0 130 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" y="2" rx="4" fill="#004c8f" />
        <rect x="9" y="5" width="10" height="22" fill="#ed232a" />
        <rect x="5" y="9" width="18" height="14" fill="#004c8f" />
        <rect x="9" y="13" width="10" height="6" fill="#ffffff" />
        <text x="36" y="21" fill="#004c8f" fontFamily="sans-serif" fontSize="13" fontWeight="800" letterSpacing="-0.3">
          HDFC BANK
        </text>
      </svg>
    ),
  },
  {
    name: "ICICI Bank",
    category: "Bank",
    color: "#f37021",
    renderLogo: () => (
      <svg viewBox="0 0 130 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" fill="#be1e2d" />
        <path d="M12 9h8a5 5 0 0 1 0 10h-5v4h-3V9zm3 7h5a2 2 0 0 0 0-4h-5v4z" fill="#f37021" />
        <circle cx="16" cy="16" r="6" fill="#fdb813" />
        <text x="36" y="21" fill="#be1e2d" fontFamily="sans-serif" fontSize="13" fontWeight="800">
          ICICI <tspan fill="#f37021">Bank</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "State Bank of India",
    category: "Bank",
    color: "#280071",
    renderLogo: () => (
      <svg viewBox="0 0 120 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" fill="#2295d4" />
        <circle cx="16" cy="13" r="4.5" fill="#ffffff" />
        <rect x="14.5" y="13" width="3" height="13" fill="#ffffff" />
        <text x="36" y="21" fill="#1b6392" fontFamily="sans-serif" fontSize="14" fontWeight="800">
          SBI
        </text>
      </svg>
    ),
  },
  {
    name: "Kotak Mahindra Bank",
    category: "Bank",
    color: "#ed1c24",
    renderLogo: () => (
      <svg viewBox="0 0 130 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" y="2" rx="6" fill="#ed1c24" />
        <path d="M8 16c0-3 3-5 6-3l5 5c2 2 5 0 5-2s-3-5-6-3l-5 5c-2 2-5 0-5-2z" fill="#ffffff" />
        <text x="36" y="21" fill="#003366" fontFamily="sans-serif" fontSize="14" fontWeight="800">
          kotak<tspan fill="#ed1c24" fontSize="10">®</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "Axis Bank",
    category: "Bank",
    color: "#97144d",
    renderLogo: () => (
      <svg viewBox="0 0 130 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4 L28 26 H21 L16 16 L11 26 H4 Z" fill="#97144d" />
        <path d="M16 11 L21 21 H11 Z" fill="#ffffff" />
        <text x="36" y="21" fill="#97144d" fontFamily="sans-serif" fontSize="13" fontWeight="800" letterSpacing="0.5">
          AXIS BANK
        </text>
      </svg>
    ),
  },
  {
    name: "Bank of Baroda",
    category: "Bank",
    color: "#f26522",
    renderLogo: () => (
      <svg viewBox="0 0 155 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" fill="#f26522" />
        <path d="M11 9h5a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5 1.5.5 2.5 1.8 2.5 3.5a4 4 0 0 1-4 4h-5.5V9zm3 6h2a1.5 1.5 0 0 0 0-3h-2v3zm0 6h2.5a1.5 1.5 0 0 0 0-3H14v3z" fill="#ffffff" />
        <text x="36" y="20" fill="#f26522" fontFamily="sans-serif" fontSize="12" fontWeight="700">
          Bank of Baroda
        </text>
      </svg>
    ),
  },
  {
    name: "IDFC FIRST Bank",
    category: "Bank",
    color: "#991b1e",
    renderLogo: () => (
      <svg viewBox="0 0 155 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" y="2" rx="4" fill="#991b1e" />
        <text x="6" y="20" fill="#ffffff" fontFamily="sans-serif" fontSize="12" fontWeight="900">
          1st
        </text>
        <text x="36" y="16" fill="#991b1e" fontFamily="sans-serif" fontSize="11" fontWeight="800">
          IDFC FIRST
        </text>
        <text x="36" y="26" fill="#555555" fontFamily="sans-serif" fontSize="9" fontWeight="700">
          Bank
        </text>
      </svg>
    ),
  },
  {
    name: "Yes Bank",
    category: "Bank",
    color: "#00488f",
    renderLogo: () => (
      <svg viewBox="0 0 130 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6 L16 26 L28 6 Z" fill="#00488f" />
        <path d="M8 8 L16 22 L24 8 Z" fill="#ed1c24" />
        <text x="36" y="21" fill="#00488f" fontFamily="sans-serif" fontSize="13" fontWeight="800">
          YES <tspan fill="#ed1c24">BANK</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "HSBC",
    category: "Bank",
    color: "#db0011",
    renderLogo: () => (
      <svg viewBox="0 0 120 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="24" height="22" fill="#ffffff" stroke="#db0011" strokeWidth="1.5" />
        <polygon points="14,5 26,16 14,27" fill="#db0011" />
        <polygon points="14,5 2,16 14,27" fill="#db0011" />
        <text x="34" y="21" fill="#333333" fontFamily="sans-serif" fontSize="14" fontWeight="800" letterSpacing="0.8">
          HSBC
        </text>
      </svg>
    ),
  },
  {
    name: "Standard Chartered",
    category: "Bank",
    color: "#009944",
    renderLogo: () => (
      <svg viewBox="0 0 160 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20 C6 14 12 8 18 10 C22 12 24 18 20 22 C16 26 10 24 8 20 Z" fill="#009944" />
        <path d="M12 12 C18 8 26 12 24 18 C22 24 14 26 10 22" stroke="#0072bc" strokeWidth="3" fill="none" />
        <text x="34" y="16" fill="#0072bc" fontFamily="sans-serif" fontSize="10" fontWeight="700">
          Standard
        </text>
        <text x="34" y="26" fill="#009944" fontFamily="sans-serif" fontSize="10" fontWeight="700">
          Chartered
        </text>
      </svg>
    ),
  },
  {
    name: "Bajaj Finserv",
    category: "NBFC",
    color: "#0072bb",
    renderLogo: () => (
      <svg viewBox="0 0 145 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="26" height="26" y="3" rx="5" fill="#0072bb" />
        <path d="M8 8h6a4 4 0 0 1 0 8H8V8zm0 8h7a4 4 0 0 1 0 8H8v-8z" fill="#ffffff" />
        <text x="34" y="16" fill="#0072bb" fontFamily="sans-serif" fontSize="11" fontWeight="800">
          BAJAJ
        </text>
        <text x="34" y="26" fill="#002f6c" fontFamily="sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.4">
          FINSERV
        </text>
      </svg>
    ),
  },
  {
    name: "Union Bank of India",
    category: "Bank",
    color: "#ed1c24",
    renderLogo: () => (
      <svg viewBox="0 0 145 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8v9a7 7 0 0 0 14 0V8h-4v9a3 3 0 0 1-6 0V8H7z" fill="#ed1c24" />
        <path d="M15 8v9a7 7 0 0 0 14 0V8h-4v9a3 3 0 0 1-6 0V8h-4z" fill="#004c8f" />
        <text x="36" y="20" fill="#004c8f" fontFamily="sans-serif" fontSize="11" fontWeight="800">
          Union Bank
        </text>
      </svg>
    ),
  },
  {
    name: "Canara Bank",
    category: "Bank",
    color: "#0072bc",
    renderLogo: () => (
      <svg viewBox="0 0 135 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="6,24 16,8 26,24" fill="#0072bc" />
        <polygon points="12,24 19,13 26,24" fill="#ffcb05" />
        <text x="34" y="21" fill="#0072bc" fontFamily="sans-serif" fontSize="12" fontWeight="800">
          Canara Bank
        </text>
      </svg>
    ),
  },
  {
    name: "L&T Finance",
    category: "NBFC",
    color: "#003b70",
    renderLogo: () => (
      <svg viewBox="0 0 135 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="16" r="13" fill="#003b70" />
        <text x="8" y="21" fill="#ffffff" fontFamily="sans-serif" fontSize="12" fontWeight="900">
          L&amp;T
        </text>
        <text x="36" y="21" fill="#003b70" fontFamily="sans-serif" fontSize="12" fontWeight="800">
          Finance
        </text>
      </svg>
    ),
  },
  {
    name: "Sammaan Capital",
    category: "NBFC",
    color: "#d9232a",
    renderLogo: () => (
      <svg viewBox="0 0 150 32" className="bank-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="26" height="26" y="3" rx="4" fill="#d9232a" />
        <path d="M8 21 L18 10 M18 10 H11 M18 10 V17" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="34" y="16" fill="#d9232a" fontFamily="sans-serif" fontSize="10" fontWeight="900" letterSpacing="0.4">
          SAMMAAN
        </text>
        <text x="34" y="26" fill="#333333" fontFamily="sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.8">
          CAPITAL
        </text>
      </svg>
    ),
  },
];

export function BankMarquee() {
  // Duplicate array to achieve seamless infinite scroll
  const items = [...bankPartners, ...bankPartners];

  return (
    <section className="bank-marquee-section" aria-label="Partner Banks & NBFCs">
      <div className="bank-marquee-header">
        <p className="eyebrow">Our Partner Network</p>
        <h2>Collaborating with 100+ Leading Banks &amp; NBFCs</h2>
        <p className="bank-marquee-sub">
          Direct institutional relationships delivering the most competitive interest rates, swift approvals and tailored funding structures.
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-gradient marquee-gradient-left" aria-hidden="true" />
        <div className="marquee-track">
          {items.map((bank, idx) => (
            <div key={`${bank.name}-${idx}`} className="bank-card" title={bank.name}>
              <div className="bank-logo-wrap">{bank.renderLogo()}</div>
              <span className="bank-badge">{bank.category}</span>
            </div>
          ))}
        </div>
        <div className="marquee-gradient marquee-gradient-right" aria-hidden="true" />
      </div>

      <div className="bank-marquee-stats">
        <div>
          <strong>100+</strong>
          <span>Partner Banks &amp; NBFCs</span>
        </div>
        <div>
          <strong>₹5,00,000 Cr+</strong>
          <span>Cases Conducted</span>
        </div>
        <div>
          <strong>10,000+</strong>
          <span>Happy Clients</span>
        </div>
        <div>
          <strong>15+ Years</strong>
          <span>Excellence in Finance</span>
        </div>
      </div>
    </section>
  );
}

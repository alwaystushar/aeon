export type Service = {
  slug: string; name: string; short: string; description: string; image: string;
  audience: string[]; benefits: string[]; process: string[]; considerations: string[];
  faq: { q: string; a: string }[];
  keySpecs?: { label: string; value: string }[];
  requirements?: string[];
  bannerBadge?: string;
};

const commonFaq = [
  { q: "How does the process begin?", a: "It starts with a conversation about your requirements, context and priorities. We then help you understand suitable paths forward." },
  { q: "Is approval guaranteed?", a: "No. Every lending decision is subject to the relevant financial institution’s assessment, documentation and policies." },
  { q: "What should I prepare?", a: "Identity, income or business records, and details of the requirement are typically useful. Exact documentation varies by solution and provider." },
];

export const services: Service[] = [
  { slug:"home-loan", name:"Home Loan", short:"Guidance for purchasing, building or improving a home.", description:"Home financing is a long-term decision. We help bring clarity to the choices, paperwork and trade-offs involved.", image:"/images/home-loan.jpg", audience:["First-time home buyers","Families moving homes","Homeowners planning construction or improvement"], benefits:["Structure matched to your purchase context","Support through documentation","Long-term repayment perspective"], process:["Define the property goal","Assess financial context","Review lending options","Coordinate documentation","Support next steps"], considerations:["Down payment planning","Property documentation","Long-term repayment comfort"], faq:commonFaq },
  { slug:"loan-against-property", name:"Loan Against Property", short:"Use eligible property value for personal or business requirements.", description:"A secured financing route that can support substantial requirements while keeping the property ownership context in view.", image:"/images/loan-against-property.jpg", audience:["Property owners","Business owners seeking secured capital","Families planning significant expenditure"], benefits:["Secured financing perspective","Use-case flexibility","Guidance across valuation and documents"], process:["Clarify requirement","Review property context","Assess options","Coordinate valuation and records","Support completion"], considerations:["Property eligibility","Repayment horizon","Valuation and lender terms"], faq:commonFaq },
  { slug:"business-loan", name:"Business Loan", short:"Purposeful capital for operations, expansion and opportunity.", description:"Financing shaped around the operating realities of growing businesses, from working capital needs to planned expansion.", image:"/images/business-loan.jpg", audience:["Entrepreneurs","Growing enterprises","Established small businesses"], benefits:["Business-context-led guidance","Options for varied capital needs","Documentation support"], process:["Map the business need","Understand cash-flow context","Review structures","Prepare documentation","Support the lending journey"], considerations:["Cash-flow consistency","Purpose and tenure","Business records"], faq:commonFaq },
  { slug:"personal-loan", name:"Personal Loan", short:"Flexible support for planned and unexpected personal needs.", description:"A considered approach to unsecured personal finance, with guidance that helps you compare structure, tenure and obligations before deciding.", image:"/images/personal-loan.jpg", audience:["Salaried professionals","Self-employed individuals","People consolidating personal requirements"], benefits:["Clear comparison of suitable options","Guidance on documentation","A process centred on affordability"], process:["Understand your requirement","Review available information","Compare suitable structures","Support documentation","Stay available through the journey"], considerations:["Repayment capacity","Tenure and total cost","Applicable fees and terms"], faq:commonFaq },
  {
    slug: "builder-funding",
    name: "Builder & Developer Funding",
    short: "Collateral-backed funding for builders and real estate developers across India (₹1 Cr to ₹1,000 Cr).",
    description: "Purposeful, collateral-backed project finance designed for residential and commercial builders across PAN India. Rapid 15-day TAT, flexible monthly repayment up to 10 years, and support for both existing and upcoming projects.",
    image: "/images/builder-funding.jpg",
    bannerBadge: "PAN INDIA 🇮🇳 • ₹1 Cr to ₹1,000 Cr",
    audience: [
      "Real Estate Developers & Builders (PAN India)",
      "Ongoing Residential & Commercial Projects",
      "New Projects with built-up collateral mortgage",
      "Builders seeking rapid bridge or construction liquidity"
    ],
    benefits: [
      "Funding Ticket Size: ₹1 Cr to ₹1,000 Cr",
      "100% Secured Funding (Property-backed collateral)",
      "CIBIL: No Matter (Asset & project-backed underwriting)",
      "Fast TAT: Maximum 15 Days for sanction & disbursal",
      "Maximum Tenure: Up to 10 Years with monthly repayment",
      "Indicative ROI: 1.5% – 3% p.m."
    ],
    process: [
      "Initial Project & Collateral Assessment",
      "Verification of Builder Profile & RERA Documentation",
      "Collateral Property Valuation & Technical Inspection",
      "Structure Term Sheet (₹1 Cr – ₹1,000 Cr)",
      "Sanction & Disbursal within 15 Days TAT"
    ],
    considerations: [
      "Active RERA preferred (or strong builder profile with past delivered projects)",
      "Suitable built-up collateral available for mortgage/security",
      "Good market reputation & strong repayment capacity",
      "Turnover preferably ₹100 Cr+ with at least 1 delivered project"
    ],
    faq: [
      {
        q: "What ticket sizes does Aeon Finvest offer for builder funding?",
        a: "We provide funding ranging from ₹1 Crore up to ₹1,000 Crores for builders and real estate developers across India."
      },
      {
        q: "Are new real estate projects eligible for funding?",
        a: "Yes! New projects can also be considered, subject to availability of suitable built-up collateral property for mortgage/security."
      },
      {
        q: "Does CIBIL score affect builder funding approval?",
        a: "No. CIBIL score does not matter. The funding is 100% collateral-backed and evaluated on project viability and security."
      },
      {
        q: "What is the expected turnaround time (TAT)?",
        a: "We operate with a maximum TAT of 15 days from document submission to disbursal."
      },
      {
        q: "What are the key eligibility requirements?",
        a: "Active RERA is preferred (or a strong builder profile if RERA is not applicable), good market reputation, minimum 1 successfully delivered project, turnover preferably ₹100 Cr+, and clear property collateral for mortgage."
      }
    ],
    keySpecs: [
      { label: "Ticket Size", value: "₹1 Cr to ₹1,000 Cr" },
      { label: "Funding Security", value: "100% Secured" },
      { label: "CIBIL Score", value: "No Matter" },
      { label: "Collateral", value: "Property-Backed" },
      { label: "Turnaround Time", value: "Max 15 Days TAT" },
      { label: "Max Tenure", value: "Up to 10 Years" },
      { label: "Repayment", value: "Monthly" },
      { label: "Indicative ROI", value: "1.5% – 3% p.m." }
    ],
    requirements: [
      "Active RERA – Preferred",
      "If RERA is not applicable, strong builder profile is required",
      "Good market reputation & strong repayment capacity",
      "Turnover preferably ₹100 Cr+",
      "Minimum 1 successfully delivered project",
      "Suitable collateral / property available for mortgage",
      "New projects also considered subject to suitable built-up collateral property"
    ]
  },
  { slug:"corporate-loan", name:"Corporate Loan", short:"Structured finance for established organisations and complex needs.", description:"A disciplined approach to larger financing requirements, grounded in business purpose, financial context and long-term implications.", image:"/images/corporate-loan.jpg", audience:["Established companies","Corporate finance teams","Businesses planning strategic investment"], benefits:["Structured requirement assessment","Multi-stakeholder coordination","Long-term financing perspective"], process:["Frame the mandate","Review financial context","Evaluate structures","Coordinate due diligence","Support execution"], considerations:["Capital structure","Covenants and security","Governance and approvals"], faq:commonFaq },
  { slug:"msme-loan", name:"MSME Loan", short:"Finance that respects the pace and realities of smaller enterprises.", description:"Practical support for MSMEs seeking working capital, equipment finance or funds for measured growth.", image:"/images/msme-loan.jpg", audience:["Micro enterprises","Small and medium businesses","Manufacturers and service businesses"], benefits:["Grounded business assessment","Guidance for varied MSME needs","Clear documentation pathway"], process:["Understand operations","Identify the capital need","Compare routes","Organise records","Support next steps"], considerations:["Business vintage","Turnover and cash flow","Use of funds"], faq:commonFaq },
  { slug:"wealth-management", name:"Wealth Management", short:"A long-term view of capital, priorities and financial decisions.", description:"Thoughtful financial planning that begins with your goals and treats risk, time horizon and liquidity as connected decisions.", image:"/images/wealth-management.jpg", audience:["Individuals building long-term wealth","Families aligning financial priorities","Business owners planning beyond the enterprise"], benefits:["Goal-led perspective","Risk-aware allocation thinking","Ongoing review mindset"], process:["Understand priorities","Map current position","Frame an approach","Implement deliberately","Review over time"], considerations:["Risk tolerance","Liquidity needs","Time horizon and diversification"], faq:commonFaq },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

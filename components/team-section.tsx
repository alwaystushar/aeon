"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";

export type TeamMember = {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  bio: string;
  image: string;
};

export const managementTeam: TeamMember[] = [
  {
    name: "Karan Sharma",
    role: "Vice President – Sales",
    qualification: "Banking & Loan Origination",
    experience: "18+ Years",
    bio: "With 18+ years of experience in banking, Karan leads sales and loan origination, focusing on client relationships and market growth across retail and corporate finance.",
    image: "/images/team/karan-sharma.jpg",
  },
  {
    name: "Dr. Maansi Makkar",
    role: "Credit Head – Credit Team",
    qualification: "PhD in International Finance",
    experience: "12+ Years",
    bio: "A PhD in International Finance, Maansi brings 12+ years of global expertise in operations and CRM, with a focus on optimizing client relations and business development.",
    image: "/images/team/maansi-makkar.jpg",
  },
  {
    name: "CA Ajay Munjal",
    role: "Financial Advisor – India",
    qualification: "Chartered Accountant",
    experience: "20+ Years",
    bio: "A seasoned CA with 20+ years of experience in project finance, valuations, and strategic planning, Ajay specializes in large-scale financial consulting and business development.",
    image: "/images/team/ajay-munjal.jpg",
  },
  {
    name: "CA Ankit Dhiman",
    role: "Financial Advisor – India",
    qualification: "Chartered Accountant",
    experience: "Audit & Tax Advisory",
    bio: "With expertise in GST, international taxation, and business valuations, Ankit has led financial audits and consulting for various industries including FMCG and real estate.",
    image: "/images/team/ankit-dhiman.jpg",
  },
  {
    name: "Hemant Kumar",
    role: "Strategic Financial Consultant",
    qualification: "CA & US CPA",
    experience: "CFO & Corporate Finance",
    bio: "A CA and US CPA with 8+ years in corporate finance, Hemant specializes in equity & debt syndication, project funding, and tax planning, currently serving as CFO at a superspeciality hospital.",
    image: "/images/team/hemant-kumar.jpg",
  },
];

export function TeamSection() {
  return (
    <section className="section team-section" aria-label="Our Management Team">
      <div className="section-head">
        <div>
          <p className="eyebrow">Leadership &amp; Advisory</p>
          <h2>Our Management Team</h2>
        </div>
        <p>
          Seasoned chartered accountants, banking vice presidents and credit risk leaders assembling cross-functional expertise across retail and corporate finance.
        </p>
      </div>

      <div className="team-grid">
        {managementTeam.map((member, idx) => (
          <Reveal key={member.name} className="team-card">
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
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

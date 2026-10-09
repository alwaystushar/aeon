import type { Metadata } from "next";import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of service for AEON Finvest Services LLP.",
  alternates: {
    canonical: "https://aeonfinvest.com/terms-and-conditions",
  },
};
const sections=[
{heading:"Introduction",body:"These placeholder terms outline general conditions for using this informational website. They require legal review and company-specific details before publication."},
{heading:"Services",body:"Website content is general information and does not constitute a binding offer, approval, investment advice or financial guarantee. Actual services remain subject to assessment and applicable provider terms."},
{heading:"Eligibility",body:"Users are responsible for ensuring that their use of the website and any requested service is lawful and appropriate in their jurisdiction."},
{heading:"User Responsibilities",body:"Users should provide accurate information, use the website lawfully and independently review all formal documents before making a financial decision."},
{heading:"Third-Party Services",body:"References or links to third parties do not imply a guarantee of their services. Third-party terms and policies may apply."},
{heading:"Intellectual Property",body:"Unless otherwise stated, website design, copy and branding may be protected by applicable intellectual-property laws."},
{heading:"Limitation of Liability",body:"Company-specific limitations, exclusions and applicable-law provisions should be drafted by qualified counsel."},
{heading:"Privacy",body:"Use of personal information should be governed by the final Privacy Policy and actual production practices."},
{heading:"Changes",body:"Terms may be updated periodically. A production version should state an effective date and how material changes are communicated."},
{heading:"Contact",body:"Insert verified legal contact details here before public publication."},];
export default function Page(){return <LegalPage title="Terms & Conditions" sections={sections}/>}

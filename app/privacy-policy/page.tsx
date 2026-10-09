import type { Metadata } from "next";import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data governance practices for AEON Finvest Services LLP.",
  alternates: {
    canonical: "https://aeonfinvest.com/privacy-policy",
  },
};
const sections=[
{heading:"Information We Collect",body:"If you choose to use an enquiry form, you may enter contact and enquiry details. In this frontend demonstration, information is not transmitted or stored. A production policy should describe all actual collection practices."},
{heading:"How We Use Information",body:"Information submitted through a future production website may be used to respond to enquiries, provide requested information and improve service. Specific purposes and lawful bases should be confirmed before launch."},
{heading:"Cookies",body:"The final website may use essential or analytics cookies. Any cookie use, controls and consent practices should be documented accurately."},
{heading:"Data Security",body:"Appropriate technical and organisational safeguards should be used for any personal information processed by the production service."},
{heading:"Third Party Services",body:"A production website may rely on hosting, analytics or communication providers. Their role and privacy practices should be identified here."},
{heading:"Data Retention",body:"Personal information should be retained only for as long as necessary for the stated purpose and applicable obligations."},
{heading:"User Rights",body:"Depending on applicable law, individuals may have rights to access, correct, delete or restrict use of their personal information."},
{heading:"Contact",body:"Insert verified privacy contact details here before public publication."},];
export default function Page(){return <LegalPage title="Privacy Policy" sections={sections}/>}

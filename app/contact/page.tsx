import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FiMail, FiMapPin, FiPhone, FiGlobe } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contact Us | AEON Finvest Services LLP",
  description:
    "Get in touch with AEON Finvest Services LLP in Mohali, India and Calgary, Canada.",
};

export default function Contact() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow light">Contact AEON Finvest</p>
        <h1>
          Let’s talk about<br />
          <span style={{ color: "var(--gold-light)" }}>what comes next.</span>
        </h1>
        <p>
          Tell us what you are considering. Our advisory team will review your context and outline structured paths forward.
        </p>
      </section>

      <section className="section contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Direct Advisory Desk</p>
          <h2>A good conversation starts with the right questions.</h2>
          <p className="contact-lead">
            With offices in India and Canada, our team is equipped to support retail lending, LAP, corporate debt, and structured fundings.
          </p>

          <div className="contact-details">
            <article>
              <span><FiMapPin aria-hidden="true" /></span>
              <div>
                <strong>India Corporate Office</strong>
                <p>Plot No. C 133, Level 1st, Industrial Area, Phase 8 Mohali, India</p>
              </div>
            </article>

            <article>
              <span><FiMapPin aria-hidden="true" /></span>
              <div>
                <strong>Canada Branch Office</strong>
                <p>217 NA A Drive, South West Calgary T3H6A4, Canada</p>
              </div>
            </article>

            <article>
              <span><FiPhone aria-hidden="true" /></span>
              <div>
                <strong>Direct Phone</strong>
                <p>+91 9815965451</p>
              </div>
            </article>

            <article>
              <span><FiMail aria-hidden="true" /></span>
              <div>
                <strong>Official Email</strong>
                <p>sales@aeonfinvestservices.com</p>
              </div>
            </article>

            <article>
              <span><FiGlobe aria-hidden="true" /></span>
              <div>
                <strong>Website</strong>
                <p>www.aeonfinvestservices.com</p>
              </div>
            </article>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}

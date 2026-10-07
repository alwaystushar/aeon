"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { services } from "@/data/services";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" name="phone" required />
      </div>
      <div className="field">
        <label htmlFor="type">Loan type</label>
        <div className="custom-select">
          <select id="type" name="type" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>{service.name}</option>
            ))}
          </select>
          <FiChevronDown aria-hidden="true" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="amount">Loan amount</label>
        <input id="amount" name="amount" inputMode="numeric" placeholder="Optional" />
      </div>
      <div className="field full">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell us briefly what you are considering" />
      </div>
      {sent && (
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="form-success" role="status">
          Thank you. Your enquiry has been received. This demonstration form does not transmit or store your information.
        </motion.p>
      )}
      <div className="field full"><button className="button navy" type="submit">Submit enquiry</button></div>
    </form>
  );
}

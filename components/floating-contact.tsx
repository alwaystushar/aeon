"use client";

import { FaPhone, FaWhatsapp } from "react-icons/fa6";

export function FloatingContact() {
  return (
    <div className="floating-contact-container" aria-label="Quick contact options">
      {/* Phone Call Button */}
      <a
        href="tel:+919815965451"
        className="floating-btn floating-btn--call"
        aria-label="Call AEON Finvest at +91 9815965451"
      >
        <span className="floating-tooltip">Call: +91 9815965451</span>
        <span className="floating-icon">
          <FaPhone />
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919815965451?text=Hello%20AEON%20Finvest%2C%20I%20would%20like%20to%20enquire%20about%20your%20financial%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn--whatsapp"
        aria-label="Chat with AEON Finvest on WhatsApp"
      >
        <span className="floating-tooltip">Chat on WhatsApp</span>
        <span className="floating-pulse" aria-hidden="true" />
        <span className="floating-icon">
          <FaWhatsapp />
        </span>
      </a>
    </div>
  );
}

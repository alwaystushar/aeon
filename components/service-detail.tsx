import Image from "next/image";
import Link from "@/components/site-link";
import { FiArrowRight, FiCheckCircle, FiFileText, FiMessageCircle, FiSearch, FiSliders } from "react-icons/fi";
import type { Service } from "@/data/services";
const processIcons=[FiMessageCircle,FiSearch,FiSliders,FiFileText,FiCheckCircle];
export function ServiceDetail({service}: {service:Service}){
  return (
    <main>
      <section className="page-hero image">
        <Image src={service.image} alt={service.name} fill priority sizes="100vw"/>
        <p className="eyebrow light">Financial solutions / {service.name}</p>
        {service.bannerBadge && (
          <span style={{display: "inline-block", background: "rgba(200, 162, 74, 0.2)", color: "var(--gold-light)", border: "1px solid rgba(200, 162, 74, 0.5)", padding: "6px 14px", borderRadius: "4px", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", alignSelf: "flex-start"}}>
            {service.bannerBadge}
          </span>
        )}
        <h1>{service.name}</h1>
        <p>{service.description}</p>
      </section>

      <section className="section content-grid balanced-intro service-overview">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>A solution shaped around the requirement.</h2>
        </div>
        <div className="prose">
          <p>{service.short}</p>
          <p>We help you understand the available route, the information lenders may consider and the responsibilities that come with the decision. Our work is guidance-led; all final decisions remain subject to the relevant provider’s policies and assessment.</p>
        </div>
      </section>

      {service.keySpecs && (
        <section className="dark-section" style={{padding: "70px max(24px, calc((100vw - var(--container))/2))"}}>
          <div className="section-head light" style={{marginBottom: "40px"}}>
            <div>
              <p className="eyebrow light">Key Highlights</p>
              <h2 style={{fontSize: "clamp(2rem, 3.8vw, 3.2rem)"}}>Funding Structure &amp; Terms</h2>
            </div>
            <p>Pan-India collateral-backed financing tailored for builders, developers and infrastructure projects.</p>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px"}}>
            {service.keySpecs.map(spec => (
              <div key={spec.label} style={{background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", padding: "24px 20px", borderRadius: "8px"}}>
                <span style={{display: "block", color: "var(--gold)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "8px"}}>{spec.label}</span>
                <strong style={{fontSize: "1.3rem", color: "#ffffff", fontWeight: 600}}>{spec.value}</strong>
              </div>
            ))}
          </div>
        </section>
      )}

      {service.requirements && (
        <section className="section" style={{paddingTop: "70px", paddingBottom: "70px"}}>
          <div className="section-head">
            <div>
              <p className="eyebrow">Eligibility</p>
              <h2 style={{fontSize: "clamp(2rem, 3.8vw, 3.2rem)"}}>Key Requirements &amp; Criteria</h2>
            </div>
            <p>Streamlined requirements designed to enable rapid underwriting and maximum 15-day turnaround.</p>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px"}}>
            {service.requirements.map((req, idx) => (
              <div key={idx} style={{display: "flex", gap: "14px", alignItems: "flex-start", padding: "20px 22px", background: "#ffffff", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 2px 12px rgba(7,28,53,0.03)"}}>
                <FiCheckCircle style={{color: "var(--gold)", fontSize: "1.25rem", marginTop: "2px", flexShrink: 0}} />
                <p style={{margin: 0, fontSize: "0.92rem", lineHeight: 1.6, color: "var(--ink)", fontWeight: 500}}>{req}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section service-detail-section">
        <div className="detail-columns service-detail-grid">
          <article><p className="eyebrow">Who it is for</p><h3>Relevant contexts</h3><ul>{service.audience.map(x=><li key={x}>{x}</li>)}</ul></article>
          <article><p className="eyebrow">Benefits</p><h3>How we can help</h3><ul>{service.benefits.map(x=><li key={x}>{x}</li>)}</ul></article>
          <article><p className="eyebrow">Considerations</p><h3>What to weigh</h3><ul>{service.considerations.map(x=><li key={x}>{x}</li>)}</ul></article>
        </div>
      </section>

      <section className="dark-section process-section">
        <p className="eyebrow light">How it works</p>
        <h2 style={{fontSize:"clamp(2rem,4vw,3.8rem)",fontWeight:500,letterSpacing:"-.05em"}}>A clear, measured process.</h2>
        <ol className="steps">{service.process.map((x,i)=>{const Icon=processIcons[i]??FiCheckCircle;return <li key={x}><div className="process-card-top"><span className="process-card-number">0{i+1}</span><Icon aria-hidden="true"/></div><strong>{x}</strong></li>})}</ol>
      </section>

      <section className="section faq">
        <div className="section-head">
          <div><p className="eyebrow">Questions, answered</p><h2>Useful context before you begin.</h2></div>
        </div>
        {service.faq.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
      </section>

      <section className="final-cta" style={{minHeight:560}}>
        <div className="hero-overlay"/>
        <div>
          <p className="eyebrow light">Discuss {service.name}</p>
          <h2>Ready for a clearer<br/>conversation?</h2>
          <Link href="/contact" className="button gold">Talk to an advisor <FiArrowRight/></Link>
        </div>
      </section>
    </main>
  );
}

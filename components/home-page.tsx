"use client";

import Image from "next/image";
import Link from "@/components/site-link";
import { useState } from "react";
import { FiArrowDown, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { services } from "@/data/services";
import { ParallaxImage, Reveal } from "@/components/reveal";
import { BankMarquee } from "@/components/bank-marquee";

const why=["Personalized guidance","Multiple financial solutions","Transparent process","Individual & business expertise","Long-term support"];
const process=["Understand","Assess","Recommend","Execute","Support"];

export function HomePage(){const [active,setActive]=useState(0);return <main>
  <section className="hero home-hero">
    <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90" alt="Contemporary city architecture" fill priority sizes="100vw" />
    <div className="hero-overlay"/><div className="hero-grid" aria-hidden="true"/>
    <div className="hero-content"><p className="eyebrow light">AEON Finvest Services LLP</p><h1>Financial Solutions<br/>Built Around<br/><em>Your Ambitions.</em></h1><p className="hero-copy">From business growth to personal financing and wealth management, we help you make informed financial decisions with confidence.</p><div className="hero-actions"><Link className="button gold" href="/services">Explore services <FiArrowRight/></Link><Link className="button ghost" href="/contact">Talk to an advisor</Link></div></div>
    <div className="hero-note"><span>01 — 08</span><p>One relationship.<br/>A wider financial view.</p></div><a className="scroll-cue" href="#intro"><FiArrowDown/> Scroll to discover</a>
  </section>

  <section id="intro" className="section intro"><Reveal><p className="eyebrow">Our perspective</p><h2>Finance should create<br/><em>possibility,</em> not complexity.</h2></Reveal><Reveal className="intro-side"><p>Important financial decisions rarely sit in isolation. We take time to understand the wider picture, explain the options clearly, and help you move forward with purpose.</p><Link className="text-link" href="/about">How we think <FiArrowUpRight/></Link></Reveal><div className="intro-media"><ParallaxImage><Image src="/images/perspective.jpg" alt="AEON Finvest thoughtful financial consultation with clients" fill sizes="(max-width: 1280px) 100vw, 1280px"/></ParallaxImage></div></section>

  <section className="section services-editorial"><div className="section-head"><div><p className="eyebrow">What we do</p><h2>Solutions for Every<br/>Financial Stage</h2></div><p>From an immediate requirement to a long-term plan, explore guidance shaped around the decision in front of you.</p></div>
    <div className="service-experience"><div className="service-list">{services.map((s,i)=><Link href={`/services/${s.slug}`} key={s.slug} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} className={active===i?"active":""}><span>0{i+1}</span><div><h3>{s.name}</h3><p>{s.short}</p></div><FiArrowUpRight/></Link>)}</div><div className="service-image"><Image src={services[active].image} alt={services[active].name} fill sizes="(max-width: 900px) 100vw, 42vw"/><div><span>0{active+1}</span><p>{services[active].name}</p></div></div></div>
  </section>

  <BankMarquee />

  <section className="split-feature"><div className="split-image"><ParallaxImage><Image src="/images/about-team.jpg" alt="AEON Finvest leadership team in corporate consultation" fill sizes="(max-width:900px) 100vw, 50vw"/></ParallaxImage></div><Reveal className="split-copy"><p className="eyebrow">About AEON</p><h2>Built on clarity.<br/>Driven by trust.</h2><p>Financial decisions deserve more than a quick answer. They deserve context, candour and a partner who remains attentive to what changes.</p><ul><li>Transparent guidance</li><li>Personalized solutions</li><li>Long-term relationships</li><li>Responsible financial approach</li></ul><Link className="button navy" href="/about">Meet AEON <FiArrowRight/></Link></Reveal></section>

  <section className="dark-section showcase"><div className="section-head light"><div><p className="eyebrow light">A connected view</p><h2>One ambition.<br/>Many moving parts.</h2></div><p>Business and personal finance often overlap. Our role is to help you see the decisions as a whole.</p></div><div className="showcase-track">{services.slice(0,4).map((s,i)=><article key={s.slug}><span>0{i+1}</span><h3>{s.name}</h3><p>{s.short}</p><Link href={`/services/${s.slug}`}>Explore <FiArrowRight/></Link></article>)}</div></section>

  <section className="section why"><div className="section-head"><div><p className="eyebrow">The AEON difference</p><h2>Why AEON Finvest</h2></div><p>A measured way of working, designed to make complex decisions easier to understand.</p></div><div className="why-list">{why.map((x,i)=><Reveal key={x}><span>0{i+1}</span><h3>{x}</h3><p>{["Every recommendation begins with your context.","A broad view across business, property and personal finance.","Straightforward communication at every stage.","Perspective that understands both sides of the balance sheet.","A relationship designed to extend beyond one transaction."][i]}</p></Reveal>)}</div></section>

  <section className="process"><div><p className="eyebrow light">How we work</p><h2>A clear path<br/>forward.</h2></div><ol>{process.map((p,i)=><li key={p}><span>0{i+1}</span><strong>{p}</strong></li>)}</ol></section>

  <section className="section testimonials"><p className="eyebrow">Client &amp; Banker perspectives</p><blockquote>“AEON brought structure and immense speed to our collateral funding. Their direct institutional relationships and formal appreciation letters from top banks reflect the integrity and execution capability they bring to every mandate.”</blockquote><div className="quote-meta"><span>Real Estate Developer &amp; Enterprise Clients</span><span>₹1,00,000 Cr+ Cumulative Track Record</span></div></section>

  <section className="final-cta"><Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85" alt="Refined contemporary office" fill sizes="100vw"/><div className="hero-overlay"/><Reveal><p className="eyebrow light">Begin a conversation</p><h2>Let’s talk about<br/>what comes next.</h2><div><Link className="button gold" href="/contact">Talk to an advisor <FiArrowRight/></Link><Link className="button ghost" href="/services">Explore services</Link></div></Reveal></section>
  </main>}

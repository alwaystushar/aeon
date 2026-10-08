"use client";

import Image from "next/image";
import Link from "@/components/site-link";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowUpRight, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { services } from "@/data/services";

const links = [["Home","/"],["About","/about"],["Services","/services"],["Contact","/contact"]];

export function Header() {
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{ const onScroll=()=>setScrolled(window.scrollY>24); onScroll(); addEventListener("scroll",onScroll,{passive:true}); return()=>removeEventListener("scroll",onScroll);},[]);
  useEffect(()=>{ document.body.style.overflow=open?"hidden":""; return()=>{document.body.style.overflow=""};},[open]);
  return <>
    <header className={`header ${scrolled?"header--solid":""}`}>
      <Link href="/" className="brand" aria-label="AEON Finvest home">
        <Image src="/logo-header.png" alt="AEON Finvest Services LLP" width={140} height={48} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Primary">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className="nav-cta" href="/contact">Contact us <FiArrowUpRight /></Link>
      <button className="menu-button" onClick={()=>setOpen(true)} aria-label="Open menu"><FiMenu /></button>
    </header>
    <div className={`mobile-menu ${open?"is-open":""}`} aria-hidden={!open}>
      <button onClick={()=>setOpen(false)} aria-label="Close menu"><FiX /></button>
      <nav>{links.map(([label,href],i)=><Link key={href} onClick={()=>setOpen(false)} href={href}><span>0{i+1}</span>{label}</Link>)}</nav>
      <p>Finance, considered carefully.</p>
    </div>
  </>;
}

export function Footer(){return <footer className="footer">
  <div className="footer-top">
    <div>
      <Image className="footer-logo" src="/logo.png" alt="AEON Finvest" width={230} height={112}/>
      <p>Empowering Growth Through Smart Financial Solutions. Over 15 years of trusted financial excellence across India and Canada.</p>
      <div className="footer-contact-snippets">
        <p><FiMapPin /> <strong>India Office:</strong> Plot No. C 133, Level 1st, Phase 8 Industrial Area, Mohali</p>
        <p><FiPhone /> +91 9815965451</p>
        <p><FiMapPin /> <strong>Canada Office:</strong> 217 NA A Drive, SW Calgary T3H6A4</p>
        <p><FiMail /> sales@aeonfinvestservices.com</p>
      </div>
    </div>
    <div><h3>Explore</h3>{links.slice(1).map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div>
    <div><h3>Core Services</h3>{services.slice(0,6).map(s=><Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}</div>
    <div><h3>Legal &amp; Social</h3><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms &amp; conditions</Link><span className="socials"><FiLinkedin/><FiInstagram/></span></div>
  </div>
  <div className="footer-bottom"><span>© 2026 AEON FINVEST SERVICES LLP</span><span>Empowering Growth Through Smart Financial Solutions</span></div>
  </footer>}

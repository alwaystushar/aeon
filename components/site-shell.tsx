"use client";

import Image from "next/image";
import Link from "@/components/site-link";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowUpRight, FiInstagram, FiLinkedin } from "react-icons/fi";
import { services } from "@/data/services";

const links = [["Home","/"],["About","/about"],["Services","/services"],["Contact","/contact"]];

export function Header() {
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{ const onScroll=()=>setScrolled(window.scrollY>24); onScroll(); addEventListener("scroll",onScroll,{passive:true}); return()=>removeEventListener("scroll",onScroll);},[]);
  useEffect(()=>{ document.body.style.overflow=open?"hidden":""; return()=>{document.body.style.overflow=""};},[open]);
  return <>
    <header className={`header ${scrolled?"header--solid":""}`}>
      <Link href="/" className="brand" aria-label="AEON Finvest home"><Image src="/logo.png" alt="AEON Finvest Services LLP" width={150} height={96} priority /></Link>
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
    <div><Image className="footer-logo" src="/logo.png" alt="AEON Finvest" width={230} height={112}/><p>Thoughtful financial guidance for individuals, entrepreneurs and businesses.</p></div>
    <div><h3>Explore</h3>{links.slice(1).map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div>
    <div><h3>Services</h3>{services.slice(0,5).map(s=><Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}</div>
    <div><h3>Legal & social</h3><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms & conditions</Link><span className="socials"><FiLinkedin/><FiInstagram/></span></div>
  </div>
  <div className="footer-bottom"><span>© 2026 AEON FINVEST SERVICES LLP</span><span>Clarity first. Always.</span></div>
  </footer>}

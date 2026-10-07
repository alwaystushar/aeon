import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/site-link";
import { FiArrowUpRight } from "react-icons/fi";
import { services } from "@/data/services";
export const metadata: Metadata={title:"Services",description:"Explore AEON Finvest services for personal, property, business and wealth needs."};
export default function Services(){return <main><section className="page-hero"><p className="eyebrow light">Our services</p><h1>Financial solutions<br/>for every <span style={{color:"var(--gold-light)"}}>ambition.</span></h1><p>Seven areas of focus. One commitment to advice that is clear, relevant and grounded in your context.</p></section><section className="section service-card-grid">{services.map((s,i)=><Link className="service-card" href={`/services/${s.slug}`} key={s.slug}><div className="service-card-image"><Image src={s.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"/></div><article><div className="service-card-meta"><span>0{i+1}</span><FiArrowUpRight/></div><h2>{s.name}</h2><p>{s.description}</p><strong>Explore service</strong></article></Link>)}</section></main>}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;gsap.registerPlugin(ScrollTrigger);const ctx=gsap.context(()=>gsap.fromTo(ref.current,{y:40,opacity:0},{y:0,opacity:1,duration:.85,ease:"power3.out",scrollTrigger:{trigger:ref.current,start:"top 88%"}}),ref);return()=>ctx.revert()},[]);
  return <div ref={ref} className={className}>{children}</div>
}

export function ParallaxImage({children}:{children:React.ReactNode}){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;gsap.registerPlugin(ScrollTrigger);const ctx=gsap.context(()=>gsap.fromTo(ref.current,{yPercent:-5},{yPercent:5,ease:"none",scrollTrigger:{trigger:ref.current,start:"top bottom",end:"bottom top",scrub:true}}),ref);return()=>ctx.revert()},[]);
  return <div ref={ref} className="parallax-image">{children}</div>
}

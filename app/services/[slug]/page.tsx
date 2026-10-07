import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/service-detail";
import { getService, services } from "@/data/services";
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const s=getService(slug);return s?{title:s.name,description:s.short}:{title:"Service"}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const service=getService(slug);if(!service)notFound();return <ServiceDetail service={service}/>}

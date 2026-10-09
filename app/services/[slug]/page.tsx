import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/service-detail";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Service | AEON Finvest" };

  return {
    title: `${s.name} | Strategic Financing Solutions`,
    description: s.description || s.short,
    alternates: {
      canonical: `https://aeonfinvest.com/services/${slug}`,
    },
    openGraph: {
      title: `${s.name} | AEON Finvest Services LLP`,
      description: s.short,
      url: `https://aeonfinvest.com/services/${slug}`,
      images: s.image
        ? [
            {
              url: s.image,
              alt: `${s.name} - AEON Finvest Services LLP`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.name} | AEON Finvest Services LLP`,
      description: s.short,
      images: s.image ? [s.image] : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

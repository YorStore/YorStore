import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.siteUrl;
  const pages = [
    { url: base,                           lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${base}/mobile-self-storage`,  lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/crate-storage`,        lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/student-storage`,      lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/business-storage`,     lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/about`,                lastModified: new Date(), changeFrequency: "yearly"  as const, priority: 0.5 },
    { url: `${base}/contact`,              lastModified: new Date(), changeFrequency: "yearly"  as const, priority: 0.6 },
  ];
  return pages;
}

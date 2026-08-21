import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/web-development`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/mern-stack-development`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/full-stack-development`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ecommerce-development`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/custom-web-applications`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}

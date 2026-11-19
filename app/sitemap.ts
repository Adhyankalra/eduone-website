import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eduone.in";

  const routes = [
    "",
    "/about",
    "/solutions/student-essentials",
    "/solutions/it-infrastructure",
    "/solutions/security-surveillance",
    "/solutions/networking-solutions",
    "/solutions/amc-support",
    "/process",
    "/contact",
    "/quote",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/solutions") ? 0.9 : 0.8,
  }));
}

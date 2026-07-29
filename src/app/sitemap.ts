import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://insist.unsri.ac.id";

  const routes = [
    "",
    "/about",
    "/research",
    "/people",
    "/projects",
    "/publications",
    "/news",
    "/join",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/news" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://insist.unsri.ac.id";
  const locales = ["en", "id"];

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

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" || route === "/news" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    }))
  );
}

import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((p) => ({
    url: `${site.url}/proyectos/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/quienes-somos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/servicios`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/proyectos`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/contacto`, changeFrequency: "yearly", priority: 0.6 },
    ...projectUrls,
    { url: `${site.url}/politica-de-privacidad`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/terminos-y-condiciones`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/aviso-legal`, changeFrequency: "yearly", priority: 0.2 },
  ];
}

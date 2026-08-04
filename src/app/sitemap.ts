import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/* Le site n'a qu'une URL — la navigation entre sections se fait par ancres et le
   changement de langue est côté client. Le sitemap ne déclare donc qu'une seule
   entrée, mais il donne à Google un point d'entrée explicite plutôt que de le
   laisser dépendre du seul robots.txt. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

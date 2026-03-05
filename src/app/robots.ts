import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/contact/", "/privacy/", "/terms/"],
    },
    sitemap: "https://skill-log.com/sitemap.xml",
  };
}

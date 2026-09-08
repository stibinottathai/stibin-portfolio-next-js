import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://stibin.website";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/digital-marketing"],
        disallow: ["/admin", "/admin/*"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}


import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { services } from "@/lib/data/services";
import { productCategories } from "@/lib/data/products";
import { blogPosts } from "@/lib/data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `${siteConfig.url}${siteConfig.basePath}`.replace(/\/$/, "");

  const staticPages = [
    "",
    "/about/",
    "/services/",
    "/products/",
    "/export/",
    "/blog/",
    "/case-studies/",
    "/faq/",
    "/contact/",
    "/quote/",
    "/industries/",
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productPages = productCategories.map((c) => ({
    url: `${base}/products/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...servicePages, ...productPages, ...blogPages];
}

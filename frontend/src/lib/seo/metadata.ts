import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

interface PageSEO {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  type = "website",
  image,
}: PageSEO): Metadata {
  const url = `${siteConfig.url}${siteConfig.basePath}${path}`;
  const ogImage = image || `${siteConfig.url}${siteConfig.basePath}/logo.svg`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        "fa-IR": url,
        en: `${siteConfig.url}/en${path}`,
        ar: `${siteConfig.url}/ar${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fa_IR",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

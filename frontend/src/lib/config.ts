export const siteConfig = {
  name: "صنات غذا",
  nameEn: "Sanat Food",
  tagline: "پلتفرم جامع مشاوره، تولید و صادرات صنایع غذایی ایران",
  description:
    "مشاوره تخصصی صنایع غذایی، فرمولاسیون محصول، راه‌اندازی کارخانه، اخذ مجوز سیب سلامت و ISO 22000، فروش مواد اولیه و محصولات غذایی، صادرات به سراسر جهان.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sanatfood.ir",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  locale: "fa-IR",
  phone: "+98-21-12345678",
  email: "info@sanatfood.ir",
  address: "تهران، ایران",
  social: {
    instagram: "https://instagram.com/sanatfood",
    linkedin: "https://linkedin.com/company/sanatfood",
    telegram: "https://t.me/sanatfood",
    whatsapp: "https://wa.me/982112345678",
  },
};

export function assetPath(path: string): string {
  const base = siteConfig.basePath.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const bp = siteConfig.basePath.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${bp}${p}`;
}

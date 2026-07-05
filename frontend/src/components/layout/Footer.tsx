import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Icon } from "@/components/ui/Icon";

const footerLinks = {
  services: [
    { href: "/services/formulation/", label: "فرمولاسیون" },
    { href: "/services/factory-setup/", label: "راه‌اندازی کارخانه" },
    { href: "/services/haccp-iso/", label: "HACCP و ISO" },
    { href: "/services/licenses/", label: "اخذ مجوز" },
  ],
  products: [
    { href: "/products/saffron/", label: "زعفران" },
    { href: "/products/pistachio/", label: "پسته" },
    { href: "/products/dates/", label: "خرما" },
    { href: "/products/ingredients/", label: "مواد اولیه" },
  ],
  company: [
    { href: "/about/", label: "درباره ما" },
    { href: "/case-studies/", label: "نمونه‌کارها" },
    { href: "/blog/", label: "وبلاگ" },
    { href: "/faq/", label: "سوالات متداول" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white/85">
      <div className="border-b border-white/10 bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 className="text-xl font-bold text-white">آماده همکاری هستید؟</h3>
            <p className="mt-1 text-sm text-white/70">مشاوره اولیه کاملاً رایگان است</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/quote/"
              className="rounded-2xl bg-gold-light px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110"
            >
              درخواست مشاوره
            </Link>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              واتساپ
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-light text-lg font-black text-white">
                ص
              </div>
              <div>
                <span className="text-lg font-bold text-white">{siteConfig.name}</span>
                <span className="block text-xs text-white/50">Sanat Food Platform</span>
              </div>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {["ISO 22000", "HACCP", "HALAL", "GMP"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {[
            { title: "خدمات", links: footerLinks.services },
            { title: "محصولات", links: footerLinks.products },
            { title: "شرکت", links: footerLinks.company },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-bold text-white">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-gold-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-sm font-bold text-white">تماس</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-gold-light">
                  <Icon name="phone" className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.email}</li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/45">
            © ۱۴۰۴ {siteConfig.name}. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-5 text-xs text-white/45">
            <Link href="/faq/" className="hover:text-gold-light">سوالات متداول</Link>
            <Link href="/contact/" className="hover:text-gold-light">تماس</Link>
            <Link href="/quote/" className="hover:text-gold-light">درخواست قیمت</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

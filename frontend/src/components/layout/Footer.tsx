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
    <footer className="border-t border-border bg-surface">
      {/* CTA strip */}
      <div className="border-b border-border bg-gradient-to-l from-gold/10 via-surface to-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 className="text-xl font-bold text-foreground">آماده همکاری هستید؟</h3>
            <p className="mt-1 text-sm text-muted">مشاوره اولیه کاملاً رایگان است</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/quote/"
              className="rounded-2xl bg-gold px-6 py-3 text-sm font-bold text-background shadow-lg shadow-gold/25 transition-all hover:brightness-110"
            >
              درخواست مشاوره
            </Link>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-400 transition-all hover:bg-emerald-500/20"
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
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-dark text-lg font-black text-background">
                ص
              </div>
              <div>
                <span className="text-lg font-bold">{siteConfig.name}</span>
                <span className="block text-xs text-muted">Sanat Food Platform</span>
              </div>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {["ISO 22000", "HACCP", "HALAL", "GMP"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-lg border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-muted"
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
              <h3 className="mb-4 text-sm font-bold text-foreground">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground">تماس</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-gold">
                  <Icon name="phone" className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.email}</li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © ۱۴۰۴ {siteConfig.name}. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-5 text-xs text-muted">
            <Link href="/faq/" className="hover:text-gold">سوالات متداول</Link>
            <Link href="/contact/" className="hover:text-gold">تماس</Link>
            <Link href="/quote/" className="hover:text-gold">درخواست قیمت</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

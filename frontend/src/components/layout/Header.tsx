import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { TopBar } from "@/components/layout/TopBar";
import { Icon } from "@/components/ui/Icon";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/services/", label: "خدمات" },
  { href: "/products/", label: "محصولات" },
  { href: "/export/", label: "صادرات" },
  { href: "/blog/", label: "وبلاگ" },
  { href: "/about/", label: "درباره ما" },
];

export function Header() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 glass border-b border-border shadow-sm shadow-black/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-primary text-lg font-black text-white shadow-md shadow-primary/25 transition-transform group-hover:scale-105">
              ص
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                {siteConfig.name}
              </span>
              <span className="block text-[10px] text-muted sm:text-xs">
                مشاوره · تولید · صادرات
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="منوی اصلی">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-muted transition-all hover:bg-surface-elevated hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact/"
              className="hidden rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted transition-all hover:border-primary/30 hover:text-primary md:inline-block"
            >
              تماس
            </Link>
            <Link
              href="/quote/"
              className="hidden rounded-xl bg-gradient-to-l from-primary-light to-primary px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110 sm:inline-block"
            >
              مشاوره رایگان
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}

function MobileMenu() {
  return (
    <details className="relative xl:hidden">
      <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-border bg-surface transition-colors hover:border-primary/30">
        <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <nav className="absolute left-0 top-12 z-50 w-56 rounded-2xl border border-border bg-surface p-2 shadow-xl shadow-black/10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-2 space-y-2 border-t border-border pt-2">
          <Link
            href="/contact/"
            className="block rounded-xl px-4 py-3 text-center text-sm font-medium text-muted hover:bg-surface-elevated"
          >
            تماس با ما
          </Link>
          <Link
            href="/quote/"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white"
          >
            <Icon name="consult" className="h-4 w-4" />
            مشاوره رایگان
          </Link>
        </div>
      </nav>
    </details>
  );
}

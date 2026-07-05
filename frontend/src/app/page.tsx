import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatsBar } from "@/components/ui/Stat";
import { Icon, ServiceIcon, ProductEmoji } from "@/components/ui/Icon";
import { services } from "@/lib/data/services";
import { productCategories } from "@/lib/data/products";
import { blogPosts } from "@/lib/data/blog";
import { caseStudies } from "@/lib/data/case-studies";
import { faqs } from "@/lib/data/faqs";
import {
  testimonials,
  processSteps,
  trustBadges,
  quickActions,
} from "@/lib/data/homepage";
import { createMetadata } from "@/lib/seo/metadata";
import { faqSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/config";

export const metadata = createMetadata({
  title: "صنات غذا | مشاوره، تولید و صادرات صنایع غذایی ایران",
  description:
    "پلتفرم جامع مشاوره صنایع غذایی، فرمولاسیون، راه‌اندازی کارخانه، HACCP، ISO 22000، سیب سلامت، فروش مواد اولیه و صادرات محصولات غذایی ایرانی.",
  path: "/",
  keywords: [
    "مشاوره صنایع غذایی",
    "فرمولاسیون",
    "راه اندازی خط تولید",
    "سیب سلامت",
    "food consultant",
    "Iran food export",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs.slice(0, 4))} />

      {/* ── Hero ── */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03]" />
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-gold/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                پلتفرم جامع صنایع غذایی ایران
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                <span className="gradient-text">مشاوره، تولید</span>
                <br />
                <span className="text-foreground">و صادرات</span>
                <br />
                <span className="text-foreground/80 text-3xl sm:text-4xl lg:text-5xl">
                  صنایع غذایی
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                از فرمولاسیون محصول تا راه‌اندازی کارخانه، از اخذ مجوز{" "}
                <strong className="text-foreground/80">سیب سلامت</strong> تا
                صادرات زعفران و پسته — همه در یک پلتفرم.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/quote/" size="lg">
                  مشاوره رایگان
                  <Icon name="arrow" className="h-4 w-4" />
                </Button>
                <Button href="/services/" variant="outline" size="lg">
                  مشاهده خدمات
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-emerald" />
                  مشاوره اولیه رایگان
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-emerald" />
                  پاسخگویی ۲۴ ساعته
                </span>
              </div>
            </div>

            {/* Visual cards */}
            <div className="relative hidden h-[420px] lg:block">
              <div className="animate-float absolute right-0 top-0 w-64 rounded-3xl border border-border bg-surface p-6 shadow-xl glow-primary">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon name="formulation" className="h-6 w-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">فرمولاسیون محصول</p>
                <p className="mt-1 text-sm text-muted">از ایده تا محصول نهایی</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-border">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-l from-primary-light to-primary" />
                </div>
                <p className="mt-2 text-xs text-primary">۸۰٪ تکمیل پروژه نمونه</p>
              </div>

              <div className="animate-float-delay absolute bottom-8 right-32 w-56 rounded-3xl border border-border bg-surface p-5 shadow-lg">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌸</span>
                  <div>
                    <p className="text-sm font-bold">زعفران سرگل</p>
                    <p className="text-xs text-emerald">آماده صادرات</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} name="star" className="h-3 w-3 text-gold-light" filled />
                  ))}
                </div>
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-52 rounded-3xl border border-border bg-surface p-5 shadow-lg">
                <p className="text-xs font-medium text-muted">پروژه‌های موفق</p>
                <p className="mt-1 text-3xl font-black text-primary">+۵۰۰</p>
                <p className="text-xs text-muted">در ۳۰ کشور</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <StatsBar
              stats={[
                { value: "+۵۰۰", label: "پروژه موفق" },
                { value: "+۳۰", label: "کشور صادراتی" },
                { value: "+۱۰۰", label: "محصول" },
                { value: "۱۵+", label: "سال تجربه" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Trust badges ── */}
      <section className="border-y border-border bg-surface py-6 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 sm:gap-10 sm:px-6">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/15 bg-primary/5">
                <Icon name="quality" className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{badge.label}</p>
                <p className="text-xs text-muted">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick actions ── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="دسترسی سریع"
            title="چطور می‌توانیم کمکتان کنیم؟"
            description="مسیر مورد نظر خود را انتخاب کنید"
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={`card-hover group relative overflow-hidden rounded-3xl border border-border bg-surface bg-gradient-to-br ${action.color} p-6 shadow-sm`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-elevated transition-colors group-hover:bg-primary/10">
                  <Icon name={action.icon as "consult"} className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary">
                  {action.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{action.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  شروع کنید
                  <Icon name="chevron" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="border-y border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="فرآیند همکاری"
            title="چگونه کار می‌کنیم؟"
            description="۴ مرحله ساده از مشاوره تا نتیجه"
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="absolute -left-3 top-8 hidden h-px w-6 bg-gradient-to-l from-primary/30 to-transparent lg:block" />
                )}
                <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
                  <span className="text-4xl font-black text-primary/20">{step.step}</span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="خدمات مشاوره"
            title="خدمات تخصصی صنایع غذایی"
            description="از ایده تا محصول نهایی — برای تولیدکنندگان، کارآفرینان و صادرکنندگان"
            centered
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="card-hover group rounded-3xl border border-border bg-surface p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 transition-colors group-hover:bg-primary/15">
                  <ServiceIcon slug={service.slug} className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground group-hover:text-primary">
                  {service.shortTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.features.slice(0, 2).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted">
                      <Icon name="check" className="h-3 w-3 shrink-0 text-emerald" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services/" variant="secondary">
              همه خدمات
            </Button>
          </div>
        </div>
      </section>

      {/* ── Products bento ── */}
      <section className="border-y border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="فروشگاه"
            title="محصولات غذایی"
            description="خرده (B2C) · عمده (B2B) · صادراتی — با بهترین کیفیت"
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}/`}
                className={`card-hover group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-sm ${
                  i === 0 ? "sm:row-span-1 lg:col-span-1" : ""
                }`}
              >
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
                <div className="relative flex items-start justify-between">
                  <ProductEmoji slug={cat.slug} />
                  <span className="rounded-full bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold">
                    {cat.products.length} محصول
                  </span>
                </div>
                <h3 className="relative mt-4 text-xl font-bold text-foreground group-hover:text-primary">
                  {cat.title}
                </h3>
                <p className="relative mt-2 text-sm text-muted">{cat.description}</p>
                <div className="relative mt-5 flex items-center gap-1 text-sm font-medium text-primary">
                  مشاهده
                  <Icon name="chevron" className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Export ── */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-gold/5" />
        <div className="relative mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-lg">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                  <Icon name="globe" className="h-3.5 w-3.5" />
                  Export Marketplace
                </span>
                <h2 className="mt-4 text-3xl font-black text-foreground sm:text-4xl">
                  صادرات به ۳۰+ کشور جهان
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  زعفران، پسته، خرما و محصولات غذایی ایرانی — با گواهی HALAL، ISO 22000
                  و بسته‌بندی بین‌المللی.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Private Label & OEM", "گواهی‌های بین‌المللی", "لجستیک صادراتی"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted">
                        <Icon name="check" className="h-4 w-4 text-emerald" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/export/" size="lg">بازار صادرات</Button>
                  <Button href="/quote/" variant="outline" size="lg">درخواست قیمت</Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border">
                {[
                  { flag: "🇩🇪", country: "آلمان" },
                  { flag: "🇦🇪", country: "امارات" },
                  { flag: "🇹🇷", country: "ترکیه" },
                  { flag: "🇮🇶", country: "عراق" },
                ].map((c) => (
                  <div
                    key={c.country}
                    className="flex flex-col items-center justify-center bg-surface-elevated p-8 transition-colors hover:bg-primary/5"
                  >
                    <span className="text-3xl">{c.flag}</span>
                    <span className="mt-2 text-sm font-medium text-muted">{c.country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="نظرات مشتریان"
            title="مشتریان ما چه می‌گویند"
            centered
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="card-hover rounded-3xl border border-border bg-surface p-7 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4 text-gold-light" filled />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case studies ── */}
      <section className="border-y border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader badge="نمونه‌کارها" title="داستان‌های موفقیت" centered />
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="card-hover overflow-hidden rounded-3xl border border-border bg-surface shadow-sm"
              >
                <div className="h-2 bg-gradient-to-l from-primary via-primary-light to-gold-light" />
                <div className="p-6">
                  <span className="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                    {study.industry}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{study.title}</h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{study.description}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-5">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-base font-black text-primary">{m.value}</div>
                        <div className="text-xs text-muted">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/case-studies/" variant="outline">همه نمونه‌کارها</Button>
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader badge="دانش" title="آخرین مقالات" centered />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="card-hover group flex flex-col rounded-3xl border border-border bg-surface p-6 shadow-sm"
              >
                <span className="w-fit rounded-full bg-primary/8 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {post.category}
                </span>
                <h3 className="mt-3 flex-1 text-base font-bold text-foreground group-hover:text-primary line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/blog/" variant="secondary">همه مقالات</Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader badge="FAQ" title="سوالات متداول" centered />
          <div className="space-y-3">
            {faqs.slice(0, 5).map((faq, i) => (
              <details
                key={i}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors open:border-primary/30 open:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-semibold text-foreground">
                  {faq.question}
                  <Icon name="chevron" className="faq-chevron h-5 w-5 shrink-0 text-primary" />
                </summary>
                <p className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/faq/" variant="outline">همه سوالات</Button>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/8 via-surface to-gold/5 p-10 text-center shadow-lg sm:p-14">
          <div className="absolute inset-0 shimmer-border opacity-30" />
          <div className="relative">
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">
              آماده شروع هستید؟
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              مشاوره اولیه رایگان — همین امروز با تیم متخصص ما تماس بگیرید
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/quote/" size="lg">درخواست مشاوره رایگان</Button>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-emerald/30 bg-emerald/10 px-8 py-4 text-base font-semibold text-emerald-dark transition-all hover:bg-emerald/15"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                واتساپ
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

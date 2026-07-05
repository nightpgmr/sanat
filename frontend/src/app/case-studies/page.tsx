import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { caseStudies } from "@/lib/data/case-studies";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "نمونه‌کارها و داستان‌های موفقیت",
  description:
    "پروژه‌های موفق در راه‌اندازی کارخانه، پیاده‌سازی ISO 22000، صادرات زعفران و فرمولاسیون محصول.",
  path: "/case-studies/",
  keywords: ["نمونه کار", "case study", "پروژه صنایع غذایی"],
});

export default function CaseStudiesPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb items={[{ label: "نمونه‌کارها" }]} />
        <SectionHeader
          badge="Portfolio"
          title="داستان‌های موفقیت"
          description="پروژه‌هایی که با مشتریانمان به نتیجه رسید"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="card-hover rounded-2xl border border-border bg-surface p-8"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                  {study.industry}
                </span>
                <span className="text-xs text-muted">{study.client}</span>
              </div>
              <h2 className="mt-4 text-xl font-bold text-foreground">{study.title}</h2>
              <p className="mt-2 text-sm text-muted">{study.description}</p>
              <div className="mt-4 rounded-lg bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                نتیجه: {study.result}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {study.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-lg font-bold text-gold">{m.value}</div>
                    <div className="text-xs text-muted">{m.label}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

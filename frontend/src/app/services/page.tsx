import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/data/services";
import { createMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/seo/schema";

export const metadata = createMetadata({
  title: "خدمات مشاوره صنایع غذایی",
  description:
    "فرمولاسیون، راه‌اندازی کارخانه، HACCP، ISO 22000، GMP، اخذ مجوز سیب سلامت، بسته‌بندی، بهینه‌سازی تولید و مشاوره صادرات.",
  path: "/services/",
  keywords: [
    "مشاوره صنایع غذایی",
    "فرمولاسیون",
    "food consultant",
    "HACCP consultant",
    "راه اندازی خط تولید",
    "سیب سلامت",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={services.map((s) =>
          serviceSchema({ title: s.title, description: s.description, slug: s.slug })
        )}
      />
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: "خدمات" }]} />
          <SectionHeader
            badge="خدمات"
            title="خدمات مشاوره تخصصی"
            description="مجموعه کامل خدمات برای تولیدکنندگان، کارآفرینان و صادرکنندگان صنایع غذایی"
          />

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="card-hover group rounded-2xl border border-border bg-surface p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-gold">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-1">
                      {service.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted">
                          <span className="text-gold">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-block text-sm font-medium text-gold">
                      جزئیات بیشتر ←
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

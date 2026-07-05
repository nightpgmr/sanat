import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { services, getServiceBySlug } from "@/lib/data/services";
import { createMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { absoluteUrl } from "@/lib/config";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}/`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            title: service.title,
            description: service.description,
            slug: service.slug,
          }),
          breadcrumbSchema([
            { name: "خدمات", url: absoluteUrl("/services/") },
            { name: service.title, url: absoluteUrl(`/services/${slug}/`) },
          ]),
        ]}
      />
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb
            items={[
              { label: "خدمات", href: "/services/" },
              { label: service.shortTitle },
            ]}
          />

          <div className="mb-8 flex items-center gap-4">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                {service.title}
              </h1>
              <p className="mt-2 text-lg text-muted">{service.description}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-xl font-bold text-foreground">خدمات شامل</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-lg bg-background px-4 py-3 text-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/quote/" size="lg">
              درخواست مشاوره
            </Button>
            <Button href="/contact/" variant="outline" size="lg">
              تماس با ما
            </Button>
          </div>

          <div className="mt-12">
            <h2 className="text-lg font-semibold text-muted">خدمات مرتبط</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {services
                .filter((s) => s.slug !== slug)
                .slice(0, 4)
                .map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}/`}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-gold hover:text-gold"
                  >
                    {s.shortTitle}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

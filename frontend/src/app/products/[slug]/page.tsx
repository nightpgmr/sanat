import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { productCategories, getCategoryBySlug } from "@/lib/data/products";
import { createMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { absoluteUrl } from "@/lib/config";

export function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return createMetadata({
    title: `خرید ${cat.title}`,
    description: cat.description,
    path: `/products/${slug}/`,
    keywords: [cat.title, `Iranian ${cat.title}`, "food supplier Iran"],
  });
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <>
      <JsonLd
        data={[
          ...category.products.map((p) =>
            productSchema({
              name: p.name,
              description: p.description,
              category: category.title,
            })
          ),
          breadcrumbSchema([
            { name: "محصولات", url: absoluteUrl("/products/") },
            { name: category.title, url: absoluteUrl(`/products/${slug}/`) },
          ]),
        ]}
      />
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "محصولات", href: "/products/" },
              { label: category.title },
            ]}
          />

          <div className="mb-10 flex items-center gap-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{category.title}</h1>
              <p className="mt-2 text-muted">{category.description}</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product) => (
              <article
                key={product.slug}
                className="card-hover rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex h-40 items-center justify-center rounded-xl bg-background text-6xl">
                  {category.icon}
                </div>
                {product.badge && (
                  <span className="mt-4 inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                    {product.badge}
                  </span>
                )}
                <h2 className="mt-3 text-lg font-bold text-foreground">{product.name}</h2>
                <p className="mt-1 text-sm text-muted">{product.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-semibold text-gold">{product.price}</span>
                  {product.unit && (
                    <span className="text-xs text-muted">/{product.unit}</span>
                  )}
                </div>
                <Button href="/quote/" variant="outline" size="sm" className="mt-4 w-full">
                  درخواست قیمت
                </Button>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">سفارش عمده یا صادراتی؟</h2>
            <p className="mt-2 text-muted">قیمت ویژه برای سفارشات B2B و صادرات</p>
            <div className="mt-6 flex justify-center gap-4">
              <Button href="/quote/">درخواست قیمت</Button>
              <Button href="/export/" variant="outline">
                بازار صادرات
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

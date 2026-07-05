import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { productCategories } from "@/lib/data/products";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "محصولات غذایی",
  description:
    "فروش زعفران، پسته، خرما، قهوه، مواد اولیه، افزودنی‌ها و بسته‌بندی — خرده، عمده و صادراتی.",
  path: "/products/",
  keywords: [
    "محصولات غذایی",
    "زعفران",
    "پسته",
    "مواد اولیه غذایی",
    "Iranian saffron",
    "food ingredients",
  ],
});

export default function ProductsPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb items={[{ label: "محصولات" }]} />
        <SectionHeader
          badge="فروشگاه"
          title="محصولات غذایی"
          description="خرید خرده (B2C)، عمده (B2B) و صادراتی — با بهترین کیفیت و قیمت"
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {["همه", "صادراتی", "عمده", "خرده"].map((filter) => (
            <span
              key={filter}
              className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-gold hover:text-gold"
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}/`}
              className="card-hover group rounded-2xl border border-border bg-surface p-8"
            >
              <span className="text-5xl">{cat.icon}</span>
              <h2 className="mt-4 text-2xl font-bold text-foreground group-hover:text-gold">
                {cat.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{cat.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gold">{cat.products.length} محصول</span>
                <span className="text-sm text-muted">مشاهده ←</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

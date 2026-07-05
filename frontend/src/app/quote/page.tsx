import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/data/services";
import { productCategories } from "@/lib/data/products";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "درخواست مشاوره و قیمت",
  description:
    "درخواست مشاوره رایگان، قیمت محصولات، RFQ و پیش‌فاکتور — مشاوره صنایع غذایی و صادرات.",
  path: "/quote/",
  keywords: ["درخواست قیمت", "مشاوره رایگان", "RFQ", "quote request"],
});

export default function QuotePage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Breadcrumb items={[{ label: "درخواست مشاوره" }]} />
        <SectionHeader
          badge="رایگان"
          title="درخواست مشاوره و قیمت"
          description="فرم زیر را پر کنید — کارشناسان ما ظرف ۲۴ ساعت با شما تماس می‌گیرند"
          centered
        />

        <form className="rounded-2xl border border-border bg-surface p-8">
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted">
                  نام و نام خانوادگی *
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-muted">
                  نام شرکت
                </label>
                <input
                  id="company"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-gold"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted">
                  تلفن *
                </label>
                <input
                  id="phone"
                  required
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted">
                  ایمیل
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-gold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="request-type" className="block text-sm font-medium text-muted">
                نوع درخواست *
              </label>
              <select
                id="request-type"
                required
                className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-gold"
              >
                <option value="">انتخاب کنید</option>
                <option value="consulting">مشاوره</option>
                <option value="product">خرید محصول</option>
                <option value="export">صادرات</option>
                <option value="rfq">درخواست قیمت (RFQ)</option>
              </select>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-muted">
                خدمت / محصول
              </label>
              <select
                id="service"
                className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-gold"
              >
                <option value="">انتخاب کنید</option>
                <optgroup label="خدمات">
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.shortTitle}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="محصولات">
                  {productCategories.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.title}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted">
                توضیحات
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-gold"
                placeholder="جزئیات درخواست خود را بنویسید..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-l from-primary-light to-primary py-3 font-semibold text-white shadow-md shadow-primary/25 transition-all hover:shadow-primary/40"
            >
              ارسال درخواست
            </button>
          </div>
          <p className="mt-4 text-xs text-muted">
            * این فرم در نسخه دمو است. در نسخه نهایی به API متصل می‌شود.
          </p>
        </form>
      </div>
    </div>
  );
}

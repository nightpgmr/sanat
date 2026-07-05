import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "تماس با ما",
  description:
    "تماس با صنات غذا — مشاوره صنایع غذایی، سفارش محصولات و درخواست صادرات. تهران، ایران.",
  path: "/contact/",
  keywords: ["تماس", "contact", "مشاوره غذا"],
});

export default function ContactPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Breadcrumb items={[{ label: "تماس" }]} />
        <SectionHeader
          badge="تماس"
          title="با ما در تماس باشید"
          description="تیم ما آماده پاسخگویی به سوالات شماست"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              { label: "تلفن", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { label: "ایمیل", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { label: "آدرس", value: siteConfig.address },
              { label: "واتساپ", value: "پیام در واتساپ", href: siteConfig.social.whatsapp },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-surface p-6">
                <div className="text-sm font-medium text-primary">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="mt-1 block text-lg text-foreground hover:text-primary">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-lg text-foreground">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <form className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-xl font-bold text-foreground">ارسال پیام</h2>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted">
                  نام و نام خانوادگی
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-gold"
                  placeholder="نام شما"
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
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted">
                  تلفن
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-gold"
                  placeholder="۰۹۱۲..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted">
                  پیام
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-gold"
                  placeholder="پیام خود را بنویسید..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-l from-primary-light to-primary py-3 font-semibold text-white shadow-md shadow-primary/25 transition-all hover:shadow-primary/40"
              >
                ارسال پیام
              </button>
            </div>
            <p className="mt-4 text-xs text-muted">
              * این فرم در نسخه دمو است. در نسخه نهایی به API متصل می‌شود.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

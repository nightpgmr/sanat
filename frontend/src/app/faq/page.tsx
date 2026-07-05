import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/lib/data/faqs";
import { createMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/schema";

export const metadata = createMetadata({
  title: "سوالات متداول",
  description:
    "پاسخ سوالات رایج درباره مشاوره صنایع غذایی، اخذ مجوز سیب سلامت، فرمولاسیون، خرید عمده و صادرات.",
  path: "/faq/",
  keywords: ["سوالات متداول", "FAQ", "سیب سلامت", "مشاوره غذا"],
});

const categories = [...new Set(faqs.map((f) => f.category))];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb items={[{ label: "سوالات متداول" }]} />
          <SectionHeader
            badge="FAQ"
            title="سوالات متداول"
            description="پاسخ پرسش‌های رایج درباره خدمات و محصولات ما"
            centered
          />

          {categories.map((category) => (
            <section key={category} className="mb-10">
              <h2 className="mb-4 text-lg font-bold text-gold">{category}</h2>
              <div className="space-y-3">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq, i) => (
                    <details
                      key={i}
                      className="group rounded-xl border border-border bg-surface"
                    >
                      <summary className="cursor-pointer px-6 py-4 font-medium text-foreground">
                        {faq.question}
                      </summary>
                      <p className="border-t border-border px-6 py-4 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
              </div>
            </section>
          ))}

          <div className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <p className="text-muted">سوال دیگری دارید؟</p>
            <Button href="/contact/" className="mt-4">
              با ما تماس بگیرید
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

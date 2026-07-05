import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { StatsBar } from "@/components/ui/Stat";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "درباره ما",
  description:
    "صنات غذا — شرکت مشاوره و بازرگانی صنایع غذایی ایران. تخصص در فرمولاسیون، راه‌اندازی کارخانه، استانداردها و صادرات.",
  path: "/about/",
  keywords: ["درباره صنات غذا", "شرکت مشاوره غذا", "food industry Iran"],
});

export default function AboutPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Breadcrumb items={[{ label: "درباره ما" }]} />

        <SectionHeader
          badge="درباره ما"
          title="پیشرو در صنایع غذایی ایران"
          description="ما پلتفرمی جامع برای مشاوره، تولید و صادرات محصولات غذایی هستیم."
        />

        <div className="prose prose-invert max-w-none space-y-6 text-muted leading-relaxed">
          <p>
            <strong className="text-foreground">صنات غذا</strong> یک شرکت تازه‌تأسیس
            اما با تیمی باتجربه در حوزه مشاوره و بازرگانی صنایع غذایی است. مأموریت
            ما تبدیل شدن به پلتفرم شماره ۱ صنایع غذایی ایران و خاورمیانه است.
          </p>
          <p>
            دو بخش اصلی فعالیت ما شامل <strong className="text-foreground">خدمات مشاوره تخصصی</strong>{" "}
            (فرمولاسیون، راه‌اندازی کارخانه، HACCP، ISO 22000، اخذ مجوز) و{" "}
            <strong className="text-foreground">فروش و صادرات محصولات</strong>{" "}
            (زعفران، پسته، خرما، مواد اولیه) است.
          </p>
        </div>

        <div className="my-16">
          <StatsBar
            stats={[
              { value: "+۵۰", label: "متخصص" },
              { value: "+۵۰۰", label: "پروژه" },
              { value: "+۳۰", label: "کشور" },
              { value: "۲۴/۷", label: "پشتیبانی" },
            ]}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "چشم‌انداز",
              text: "بزرگترین پلتفرم آنلاین صنایع غذایی در ایران و خاورمیانه",
            },
            {
              title: "مأموریت",
              text: "توانمندسازی تولیدکنندگان و صادرکنندگان غذایی با دانش و فناوری",
            },
            {
              title: "ارزش‌ها",
              text: "کیفیت، شفافیت، نوآوری و تعهد به ایمنی مواد غذایی",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-bold text-gold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact/" size="lg">
            همکاری با ما
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { StatsBar } from "@/components/ui/Stat";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "صادرات مواد غذایی ایران",
  description:
    "صادرات زعفران، پسته، خرما و محصولات غذایی ایرانی. Private Label، OEM، Contract Manufacturing. Food Supplier Iran.",
  path: "/export/",
  keywords: [
    "Iran food export",
    "Buy Iranian Saffron",
    "Buy Iranian Pistachios",
    "Iranian Dates Supplier",
    "Food Supplier Iran",
    "Private Label Food",
    "OEM Food Manufacturing",
    "صادرات مواد غذایی",
  ],
});

const exportProducts = [
  { icon: "🌸", name: "زعفران", desc: "سرگل، پوشال، پودر — گواهی صادراتی" },
  { icon: "🥜", name: "پسته", desc: "اکبری، احمدآقایی، مغز — درجه صادراتی" },
  { icon: "🌴", name: "خرما", desc: "مضافتی، پیارم، کبکاب" },
  { icon: "☕", name: "قهوه", desc: "دانه، پودر، instant" },
  { icon: "🍪", name: "بیسکویت و شیرینی", desc: "Private Label و OEM" },
  { icon: "⚗️", name: "مواد اولیه", desc: "افزودنی، اسانس، فسفات" },
];

const services = [
  "Private Label Manufacturing",
  "OEM Food Production",
  "Contract Manufacturing",
  "Custom Formulation",
  "Export Documentation",
  "International Logistics",
  "HALAL Certification Support",
  "Quality Analysis & COA",
];

export default function ExportPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb items={[{ label: "صادرات" }]} />

        <section className="hero-gradient rounded-3xl border border-gold/20 p-8 sm:p-12">
          <SectionHeader
            badge="Export Marketplace"
            title="Iran Food Export Hub"
            description="Your trusted partner for premium Iranian food products — saffron, pistachios, dates, and more. B2B wholesale and international shipping."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/quote/" size="lg">
              Request Export Quote
            </Button>
            <Button href="/contact/" variant="outline" size="lg">
              Contact Export Team
            </Button>
          </div>
        </section>

        <div className="my-16">
          <StatsBar
            stats={[
              { value: "+۳۰", label: "کشور مقصد" },
              { value: "+۱۰۰", label: "محصول صادراتی" },
              { value: "ISO", label: "گواهی کیفیت" },
              { value: "HALAL", label: "گواهی حلال" },
            ]}
          />
        </div>

        <SectionHeader
          title="محصولات صادراتی"
          description="Premium Iranian food products for international buyers"
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exportProducts.map((p) => (
            <div
              key={p.name}
              className="card-hover rounded-2xl border border-border bg-surface p-6"
            >
              <span className="text-4xl">{p.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </div>

        <section className="mt-20">
          <SectionHeader
            title="خدمات صادراتی"
            description="End-to-end export services for food manufacturers and buyers"
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s}
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground"
              >
                ✓ {s}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-gold/20 bg-gradient-to-l from-gold/10 to-transparent p-12 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Ready to import from Iran?
          </h2>
          <p className="mt-4 text-muted">
            Get competitive wholesale prices, quality certificates, and reliable shipping.
          </p>
          <Button href="/quote/" size="lg" className="mt-8">
            Get Export Price List
          </Button>
        </section>
      </div>
    </div>
  );
}

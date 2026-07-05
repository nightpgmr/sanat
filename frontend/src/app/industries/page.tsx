import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "صنایع تحت پوشش",
  description:
    "مشاوره و تأمین برای صنایع نوشیدنی، لبنیات، گوشت، شیرینی، کنسرو، ادویه و سایر حوزه‌های صنایع غذایی.",
  path: "/industries/",
  keywords: ["صنایع غذایی", "food industry", "industries"],
});

const industries = [
  { icon: "☕", name: "نوشیدنی", desc: "قهوه، چای، آبمیوه، نوشابه" },
  { icon: "🥛", name: "لبنیات", desc: "شیر، پنیر، ماست، بستنی" },
  { icon: "🍖", name: "گوشت و پروtein", desc: "سوسیس، کالباس، گوشت فرآوری" },
  { icon: "🍪", name: "شیرینی و بیسکویت", desc: "کیک، کلوچه، بیسکویت" },
  { icon: "🥫", name: "کنسرو و کمپوت", desc: "کنسرو، ترشی، رب" },
  { icon: "🌶️", name: "ادویه و چاشنی", desc: "زعفران، ادویه، سس" },
  { icon: "🍞", name: "نان و آرد", desc: "نان صنعتی، آرد، غلات" },
  { icon: "🥗", name: "سالاد و آماده", desc: "غذای آماده، سالاد" },
];

export default function IndustriesPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb items={[{ label: "صنایع" }]} />
        <SectionHeader
          badge="صنایع"
          title="صنایع تحت پوشش"
          description="تخصص ما در مشاوره و تأمین برای طیف وسیعی از صنایع غذایی"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="card-hover rounded-2xl border border-border bg-surface p-6 text-center"
            >
              <span className="text-4xl">{ind.icon}</span>
              <h2 className="mt-4 text-lg font-bold text-foreground">{ind.name}</h2>
              <p className="mt-2 text-sm text-muted">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

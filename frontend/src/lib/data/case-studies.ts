export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  result: string;
  description: string;
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "coffee-factory",
    title: "راه‌اندازی کارخانه قهوه instant",
    client: "شرکت XYZ",
    industry: "نوشیدنی",
    result: "تولید ۵ تن در ماه ظرف ۶ ماه",
    description:
      "مشاوره کامل راه‌اندازی خط تولید قهوه instant شامل انتخاب ماشین‌آلات، فرمولاسیون و اخذ مجوز.",
    metrics: [
      { label: "زمان راه‌اندازی", value: "۶ ماه" },
      { label: "ظرفیت تولید", value: "۵ تن/ماه" },
      { label: "کاهش هزینه", value: "۲۵٪" },
    ],
  },
  {
    slug: "saffron-export",
    title: "صادرات زعفران به اروپا",
    client: "تولیدکننده زعفران",
    industry: "ادویه",
    result: "صادرات به ۸ کشور اروپایی",
    description:
      "مشاوره بسته‌بندی صادراتی، اخذ گواهی‌های بین‌المللی و اتصال به خریداران B2B.",
    metrics: [
      { label: "کشورهای مقصد", value: "۸" },
      { label: "افزایش فروش", value: "۱۵۰٪" },
      { label: "رضایت مشتری", value: "۹۸٪" },
    ],
  },
  {
    slug: "haccp-implementation",
    title: "پیاده‌سازی ISO 22000 در کارخانه بیسکویت",
    client: "کارخانه ABC",
    industry: "شیرینی و بیسکویت",
    result: "دریافت گواهی ISO 22000",
    description:
      "طراحی و پیاده‌سازی کامل سیستم مدیریت ایمنی مواد غذایی و ممیزی موفق.",
    metrics: [
      { label: "مدت پروژه", value: "۴ ماه" },
      { label: "ممیزی", value: "موفق" },
      { label: "آموزش پرسنل", value: "۵۰ نفر" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

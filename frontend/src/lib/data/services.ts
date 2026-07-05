export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  keywords: string[];
  features: string[];
}

export const services: Service[] = [
  {
    slug: "formulation",
    title: "فرمولاسیون و توسعه محصول غذایی",
    shortTitle: "فرمولاسیون",
    description:
      "طراحی و بهینه‌سازی فرمولاسیون محصولات غذایی با استانداردهای بین‌المللی. از ایده تا محصول نهایی.",
    icon: "🧪",
    keywords: ["فرمولاسیون", "product formulation", "توسعه محصول غذایی"],
    features: [
      "تحلیل بازار و طراحی محصول",
      "فرمولاسیون آزمایشگاهی",
      "تست حسی و پذیرش مصرف‌کننده",
      "بهینه‌سازی هزینه تولید",
      "مستندسازی فرمول",
    ],
  },
  {
    slug: "factory-setup",
    title: "راه‌اندازی کارخانه و خط تولید",
    shortTitle: "راه‌اندازی کارخانه",
    description:
      "مشاوره جامع راه‌اندازی کارخانه صنایع غذایی، طراحی خط تولید و انتخاب ماشین‌آلات.",
    icon: "🏭",
    keywords: ["راه اندازی خط تولید", "food factory setup", "کارخانه صنایع غذایی"],
    features: [
      "مطالعه امکان‌سنجی",
      "طراحی چیدمان کارخانه",
      "انتخاب و خرید ماشین‌آلات",
      "نصب و راه‌اندازی",
      "آموزش پرسنل",
    ],
  },
  {
    slug: "haccp-iso",
    title: "HACCP، ISO 22000 و GMP",
    shortTitle: "استانداردهای کیفیت",
    description:
      "پیاده‌سازی سیستم‌های HACCP، ISO 22000، GMP و مشاوره ایمنی مواد غذایی.",
    icon: "✅",
    keywords: ["HACCP consultant", "ISO 22000", "GMP", "ایمنی مواد غذایی"],
    features: [
      "ارزیابی وضعیت فعلی",
      "طراحی سیستم HACCP",
      "مستندسازی کامل",
      "آموزش کارکنان",
      "ممیزی داخلی",
    ],
  },
  {
    slug: "licenses",
    title: "اخذ مجوز و سیب سلامت",
    shortTitle: "مجوزها",
    description:
      "اخذ مجوز غذا، سیب سلامت، پروانه بهداشت و تمامی مجوزهای سازمان غذا و دارو.",
    icon: "📋",
    keywords: ["سیب سلامت", "مجوز صنایع غذایی", "اخذ مجوز غذا", "health license Iran"],
    features: [
      "مشاوره اخذ مجوز غذا",
      "ثبت در سامانه سیب سلامت",
      "پروانه بهداشت",
      "ثبت محصول",
      "پیگیری تا دریافت مجوز",
    ],
  },
  {
    slug: "packaging-labeling",
    title: "بسته‌بندی و برچسب‌گذاری",
    shortTitle: "بسته‌بندی",
    description:
      "طراحی بسته‌بندی، برچسب‌گذاری مطابق استاندارد و مشاوره مواد بسته‌بندی.",
    icon: "📦",
    keywords: ["food labeling", "بسته بندی غذا", "طراحی برچسب"],
    features: [
      "طراحی بسته‌بندی",
      "برچسب‌گذاری استاندارد",
      "انتخاب مواد بسته‌بندی",
      "مشاوره چاپ و تولید",
    ],
  },
  {
    slug: "import-export",
    title: "مشاوره واردات و صادرات",
    shortTitle: "صادرات",
    description:
      "مشاوره صادرات محصولات غذایی ایرانی، بازاریابی بین‌المللی و اخذ گواهی‌های صادراتی.",
    icon: "🌍",
    keywords: ["Iran food export", "صادرات مواد غذایی", "food supplier Iran"],
    features: [
      "مشاوره بازارهای هدف",
      "اخذ گواهی‌های صادراتی",
      "بسته‌بندی صادراتی",
      "لجستیک بین‌المللی",
      "بازاریابی B2B",
    ],
  },
  {
    slug: "optimization",
    title: "بهینه‌سازی تولید و هزینه",
    shortTitle: "بهینه‌سازی",
    description:
      "افزایش بهره‌وری خط تولید، کاهش ضایعات و بهینه‌سازی هزینه‌های تولید.",
    icon: "📈",
    keywords: ["production optimization", "cost optimization", "بهینه سازی تولید"],
    features: [
      "تحلیل فرآیند تولید",
      "کاهش ضایعات",
      "بهینه‌سازی فرمول",
      "افزایش ظرفیت تولید",
    ],
  },
  {
    slug: "business-consulting",
    title: "مشاوره کسب‌وکار غذایی",
    shortTitle: "مشاوره کسب‌وکار",
    description:
      "مشاوره استراتژیک برای راه‌اندازی و توسعه کسب‌وکار در صنعت غذا.",
    icon: "💼",
    keywords: ["food business consultant", "مشاوره صنایع غذایی", "food consultant"],
    features: [
      "طراحی مدل کسب‌وکار",
      "تحلیل بازار",
      "برنامه‌ریزی مالی",
      "استراتژی برند",
      "توسعه فروش",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

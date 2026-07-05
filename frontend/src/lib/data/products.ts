export interface ProductCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  products: Product[];
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  price?: string;
  unit?: string;
  badge?: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "coffee",
    title: "قهوه",
    description: "انواع قهوه ایرانی و وارداتی، دانه، پودر و instant",
    icon: "☕",
    products: [
      { slug: "arabica-beans", name: "دانه قهوه عربیکا", description: "دانه قهوه عربیکا درجه یک", price: "تماس بگیرید", unit: "کیلوگرم", badge: "پرفروش" },
      { slug: "robusta-beans", name: "دانه قهوه ربوستا", description: "دانه قهوه ربوستا برای espresso", price: "تماس بگیرید", unit: "کیلوگرم" },
      { slug: "instant-coffee", name: "قهوه instant", description: "قهوه فوری با کیفیت صادراتی", price: "تماس بگیرید", unit: "کیلوگرم" },
    ],
  },
  {
    slug: "saffron",
    title: "زعفران",
    description: "زعفران سرگل، پوشال و پودر با گواهی صادراتی",
    icon: "🌸",
    products: [
      { slug: "sargol", name: "زعفران سرگل", description: "زعفران سرگل درجه یک قائنات", price: "تماس بگیرید", unit: "گرم", badge: "صادراتی" },
      { slug: "pushal", name: "زعفران پوشال", description: "زعفران پوشال با رنگ‌دهی عالی", price: "تماس بگیرید", unit: "گرم" },
      { slug: "saffron-powder", name: "پودر زعفران", description: "پودر زعفران خالص", price: "تماس بگیرید", unit: "گرم" },
    ],
  },
  {
    slug: "pistachio",
    title: "پسته",
    description: "پسته اکبری، احمدآقایی و فندقی صادراتی",
    icon: "🥜",
    products: [
      { slug: "akbari", name: "پسته اکبری", description: "پسته اکبری درشت درجه یک", price: "تماس بگیرید", unit: "کیلوگرم", badge: "صادراتی" },
      { slug: "ahmad-aghaei", name: "پسته احمدآقایی", description: "پسته احمدآقایی با طعم عالی", price: "تماس بگیرید", unit: "کیلوگرم" },
      { slug: "kernel", name: "مغز پسته", description: "مغز پسته بدون پوست", price: "تماس بگیرید", unit: "کیلوگرم" },
    ],
  },
  {
    slug: "dates",
    title: "خرما",
    description: "خرمای مضافتی، پیارم و کبکاب",
    icon: "🌴",
    products: [
      { slug: "mazafati", name: "خرمای مضافتی", description: "خرمای مضافتی بم درجه یک", price: "تماس بگیرید", unit: "کیلوگرم", badge: "صادراتی" },
      { slug: "piarom", name: "خرمای پیارم", description: "خرمای پیارم حاجی آباد", price: "تماس بگیرید", unit: "کیلوگرم" },
    ],
  },
  {
    slug: "ingredients",
    title: "مواد اولیه و افزودنی",
    description: "فسفات، نیترات، اسانس، طعم‌دهنده و مواد اولیه صنعتی",
    icon: "⚗️",
    products: [
      { slug: "phosphates", name: "فسفات‌های غذایی", description: "STPP، SHMP و سایر فسفات‌ها", price: "تماس بگیرید", unit: "کیلوگرم" },
      { slug: "flavorings", name: "طعم‌دهنده و اسانس", description: "اسانس طبیعی و مصنوعی", price: "تماس بگیرید", unit: "کیلوگرم" },
      { slug: "additives", name: "افزودنی‌های غذایی", description: "پایدارکننده، رنگ و ...", price: "تماس بگیرید", unit: "کیلوگرم" },
    ],
  },
  {
    slug: "packaging",
    title: "مواد بسته‌بندی",
    description: "بسته‌بندی صنعتی، فویل، لفاف و ظروف",
    icon: "📦",
    products: [
      { slug: "flexible-pack", name: "بسته‌بندی انعطاف‌پذیر", description: "لفاف و سلفون غذایی", price: "تماس بگیرید", unit: "رول" },
      { slug: "containers", name: "ظروف بسته‌بندی", description: "ظروف پلاستیکی و فلزی", price: "تماس بگیرید", unit: "عدد" },
    ],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

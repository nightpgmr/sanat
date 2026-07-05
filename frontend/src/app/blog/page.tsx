import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPosts } from "@/lib/data/blog";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "وبلاگ و دانش صنایع غذایی",
  description:
    "مقالات تخصصی درباره HACCP، ISO 22000، فرمولاسیون، سیب سلامت، صادرات غذا و بهینه‌سازی تولید.",
  path: "/blog/",
  keywords: ["وبلاگ صنایع غذایی", "HACCP", "فرمولاسیون", "food industry blog"],
});

const categories = ["همه", "ایمنی غذا", "مجوزها", "فرمولاسیون", "صادرات"];

export default function BlogPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb items={[{ label: "وبلاگ" }]} />
        <SectionHeader
          badge="دانش"
          title="وبلاگ صنایع غذایی"
          description="آخرین مقالات، راهنماها و اخبار صنعت غذا"
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-muted hover:border-gold hover:text-gold"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="card-hover group rounded-2xl border border-border bg-surface p-8"
            >
              <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                {post.category}
              </span>
              <h2 className="mt-4 text-xl font-bold text-foreground group-hover:text-gold">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted">
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} مطالعه</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

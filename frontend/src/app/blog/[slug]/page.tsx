import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { blogPosts, getPostBySlug } from "@/lib/data/blog";
import { createMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { absoluteUrl } from "@/lib/config";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}/`,
    keywords: post.keywords,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            excerpt: post.excerpt,
            slug: post.slug,
            date: post.date,
            author: post.author,
          }),
          breadcrumbSchema([
            { name: "وبلاگ", url: absoluteUrl("/blog/") },
            { name: post.title, url: absoluteUrl(`/blog/${slug}/`) },
          ]),
        ]}
      />
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb
            items={[
              { label: "وبلاگ", href: "/blog/" },
              { label: post.title },
            ]}
          />

          <header className="mb-10">
            <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted">
              <span>{post.author}</span>
              <span>·</span>
              <time>{post.date}</time>
              <span>·</span>
              <span>{post.readTime} مطالعه</span>
            </div>
          </header>

          <div className="space-y-6 text-muted leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-lg font-bold text-foreground">نیاز به مشاوره دارید؟</h2>
            <p className="mt-2 text-sm text-muted">
              تیم متخصص ما آماده پاسخگویی است
            </p>
            <Button href="/quote/" className="mt-4">
              درخواست مشاوره رایگان
            </Button>
          </div>

          <div className="mt-12">
            <h2 className="text-lg font-semibold text-muted">مقالات مرتبط</h2>
            <div className="mt-4 space-y-3">
              {blogPosts
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}/`}
                    className="block rounded-lg border border-border px-4 py-3 text-sm transition-colors hover:border-gold hover:text-gold"
                  >
                    {p.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

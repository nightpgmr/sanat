# SEO Strategy — Sanat Food Platform

## Goal

Dominate Google for **thousands of keywords** in Persian and English across consulting services, product sales, and export marketplace.

## URL Structure

```
/                                    Homepage
/fa/services/                        Services hub (Persian)
/fa/services/formulation/            Service landing page
/fa/services/haccp-iso/              Service landing page
/fa/products/                        Products hub
/fa/products/saffron/                Category page
/fa/products/saffron/sargol/         Product page
/fa/export/                          Export marketplace
/fa/export/iranian-saffron/          Export landing page
/fa/blog/                            Blog hub
/fa/blog/haccp-guide/                Article
/fa/knowledge-base/                  Knowledge hub
/fa/case-studies/                    Case studies
/fa/faq/                             FAQ page
/fa/locations/tehran/                Location page
/en/...                              English mirror
/ar/...                              Arabic mirror
```

## Topic Clusters

### Cluster 1: Food Consulting
```
Hub: /services/
├── formulation/
├── factory-setup/
├── haccp-iso/
├── licenses/ (سیب سلامت)
├── packaging-labeling/
├── optimization/
└── business-consulting/
```

### Cluster 2: Product Sales
```
Hub: /products/
├── saffron/
├── pistachio/
├── dates/
├── coffee/
├── ingredients/
└── packaging/
```

### Cluster 3: Export Marketplace
```
Hub: /export/
├── iranian-saffron/
├── iranian-pistachios/
├── iran-food-export/
├── private-label/
└── oem-manufacturing/
```

## Programmatic SEO

Auto-generate landing pages for long-tail keywords:

| Template | Example URLs |
|----------|-------------|
| `{service} + {city}` | `/fa/services/formulation/tehran/` |
| `buy {product} + {country}` | `/en/export/buy-iranian-saffron/germany/` |
| `{certification} + consultant` | `/en/services/haccp-consultant/` |
| `{product} + wholesale` | `/fa/products/saffron/wholesale/` |

## Technical SEO Checklist

- [x] Semantic HTML5 (`<article>`, `<nav>`, `<section>`, `<header>`)
- [x] Schema.org JSON-LD (Organization, Service, Product, Article, FAQ, Breadcrumb)
- [x] Open Graph + Twitter Cards
- [x] Canonical URLs
- [x] hreflang tags (fa, en, ar)
- [x] XML Sitemap (auto-generated)
- [x] robots.txt
- [x] Static pre-rendering (SSG)
- [x] Image lazy loading
- [ ] Core Web Vitals monitoring (Phase 2)
- [ ] Internal linking automation (Phase 2)

## Content Strategy

| Content Type | Frequency | SEO Purpose |
|-------------|-----------|-------------|
| Blog articles | 4/week | Long-tail keywords, authority |
| Knowledge base | 2/week | How-to guides, featured snippets |
| Case studies | 2/month | Trust signals, conversion |
| FAQ pages | Ongoing | Featured snippets, PAA |
| Landing pages | Programmatic | Long-tail coverage |
| Export guides | 1/month | International buyers |

## Target Keywords (Sample)

### Persian
- مشاوره صنایع غذایی
- فرمولاسیون محصول غذایی
- راه اندازی خط تولید
- سیب سلامت
- مجوز صنایع غذایی
- HACCP مشاور
- صادرات زعفران

### English
- food consultant Iran
- food factory setup
- HACCP consultant
- buy Iranian saffron
- Iran food export
- food supplier Iran
- private label food manufacturing
- OEM food manufacturing

## AI-Ready SEO Architecture

- Structured data on every page type
- Clean URL hierarchy for LLM crawling
- FAQ schema for AI answer engines
- Knowledge base with clear Q&A format
- Product schema with rich attributes
- Multilingual content with hreflang

## Internal Linking Rules

1. Every service page links to 3+ related services
2. Every product page links to category + related products
3. Blog posts link to relevant services/products
4. Footer contains full site map links
5. Breadcrumbs on all inner pages
6. Hub pages link to all cluster pages

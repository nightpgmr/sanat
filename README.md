# Sanat Food Platform

**صنات غذا** — پلتفرم جامع مشاوره، تولید و صادرات صنایع غذایی ایران

[![Deploy to GitHub Pages](https://github.com/YOUR_USERNAME/sanat/actions/workflows/deploy.yml/badge.svg)](https://YOUR_USERNAME.github.io/sanat/)

## Demo (Static Persian RTL)

This repository includes a **production-quality static demo** deployable to GitHub Pages. It showcases the full UX, SEO architecture, and content structure in Persian (RTL).

### Live Demo

After deployment: `https://YOUR_USERNAME.github.io/sanat/`

### Local Development

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for GitHub Pages

```bash
cd frontend
# Set your GitHub repo name as base path
set NEXT_PUBLIC_BASE_PATH=/sanat
set NEXT_PUBLIC_SITE_URL=https://YOUR_USERNAME.github.io/sanat
npm run build
# Output: frontend/out/
```

### Deploy to GitHub Pages

The built site is published to the **repository root** (`index.html`, `_next/`, etc.).

1. Push to `main` — GitHub Actions rebuilds automatically
2. **Settings → Pages → Source:** `main` branch, **`/ (root)`** folder
3. Live at **https://nightpgmr.github.io/sanat/**

---

## Project Structure

```
sanat/
├── frontend/          # Next.js static demo (Persian RTL)
├── documentation/     # Architecture & strategy docs
├── index.html           # Built site (GitHub Pages)
├── _next/               # Built assets (GitHub Pages)
├── backend/           # (Phase 2) Django + DRF API
├── .github/workflows/ # CI/CD for GitHub Pages
└── README.md
```

## Demo Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Hero, services, products, export CTA |
| Services | `/services/` | 8 consulting services with detail pages |
| Products | `/products/` | 6 categories, B2B/B2C/Export |
| Export | `/export/` | International marketplace |
| Blog | `/blog/` | SEO content hub |
| Case Studies | `/case-studies/` | Success stories |
| FAQ | `/faq/` | FAQ with Schema.org |
| Contact | `/contact/` | Contact form |
| Quote | `/quote/` | Consultation / RFQ request |

## SEO Features (Demo)

- Schema.org: Organization, Service, Product, Article, FAQ, Breadcrumb
- Open Graph & Twitter Cards
- Automatic `sitemap.xml` and `robots.txt`
- Canonical URLs & hreflang placeholders
- Semantic HTML & RTL support
- Static pre-rendering for Core Web Vitals

## Full Platform Architecture

See [documentation/ARCHITECTURE.md](documentation/ARCHITECTURE.md) for the complete system design including:

- Django + Next.js full-stack architecture
- PostgreSQL database schema
- API design & authentication
- Multilingual strategy (fa/en/ar)
- Deployment & high availability
- Development roadmap

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Demo Frontend | Next.js 16, TypeScript, Tailwind CSS 4 |
| Full Frontend | Next.js (SSR/SSG/i18n) |
| Backend | Django + Django REST Framework |
| Database | PostgreSQL |
| Cache | Redis |
| Search | Meilisearch |
| Queue | Celery + Redis |
| Storage | S3-compatible |
| Auth | JWT + OAuth |
| Deploy | Docker, Nginx, GitHub Actions |

## License

Proprietary — © Sanat Food Platform

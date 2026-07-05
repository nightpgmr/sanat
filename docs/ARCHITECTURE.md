# Software Architecture — Sanat Food Platform

## Overview

Sanat Food is designed as a **modular, multilingual, SEO-first platform** for the Iranian food industry with international expansion capability.

```
┌─────────────────────────────────────────────────────────────────┐
│                        CDN (Cloudflare)                         │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                     Nginx (Load Balancer)                       │
└──────────────┬─────────────────────────────┬────────────────────┘
               │                             │
┌──────────────▼──────────────┐  ┌───────────▼───────────────────┐
│   Next.js Frontend          │  │   Django REST API             │
│   (SSR/SSG/i18n)            │  │   (Business Logic)            │
│   - Public pages            │  │   - Auth (JWT/OAuth)          │
│   - E-commerce UI           │  │   - CMS endpoints             │
│   - Admin dashboard         │  │   - Orders & payments         │
│   - Customer dashboard      │  │   - Search indexing           │
└──────────────┬──────────────┘  └───────────┬───────────────────┘
               │                             │
               └──────────────┬──────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
┌───────▼──────┐   ┌──────────▼────────┐   ┌───────▼───────┐
│ PostgreSQL   │   │ Redis             │   │ Meilisearch   │
│ (Primary DB) │   │ Cache + Sessions  │   │ Full-text     │
└──────────────┘   │ Celery Broker     │   └───────────────┘
                   └───────────────────┘
                              │
                   ┌──────────▼──────────┐
                   │ S3 Object Storage   │
                   │ (Media, Documents)  │
                   └─────────────────────┘
```

## Django Apps

| App | Responsibility |
|-----|---------------|
| `core` | Settings, middleware, base models, utilities |
| `accounts` | Users, roles, JWT auth, OAuth |
| `cms` | Pages, menus, banners, landing pages |
| `services` | Consulting services, industries |
| `products` | Catalog, variants, inventory, pricing tiers |
| `orders` | Cart, checkout, invoices, tracking |
| `blog` | Articles, categories, knowledge base |
| `seo` | Meta tags, sitemaps, redirects, schema |
| `i18n` | Translations, locale management |
| `forms` | Contact, quote, RFQ, vendor registration |
| `media` | File uploads, gallery, videos |
| `notifications` | Email, SMS, in-app alerts |
| `analytics` | Traffic, conversions, search queries |

## Frontend Structure (Next.js)

```
frontend/src/
├── app/
│   ├── [locale]/           # fa | en | ar routing
│   │   ├── (marketing)/    # Public pages
│   │   ├── (shop)/         # E-commerce
│   │   ├── (dashboard)/    # Customer portal
│   │   └── (admin)/        # Admin panel
│   └── api/                # BFF routes (optional)
├── components/
│   ├── layout/
│   ├── ui/
│   ├── seo/
│   ├── commerce/
│   └── cms/
├── lib/
│   ├── api/                # DRF client
│   ├── i18n/
│   └── seo/
└── hooks/
```

## Authentication Flow

```
User → Next.js Login Page → POST /api/v1/auth/login/
  → Django validates credentials
  → Returns JWT (access + refresh)
  → Stored in httpOnly cookie
  → Subsequent requests: Authorization: Bearer <token>
  → Refresh via POST /api/v1/auth/refresh/
  → OAuth: Google/LinkedIn via django-allauth
```

## Multilingual Strategy

| Layer | Approach |
|-------|----------|
| Routing | `/fa/`, `/en/`, `/ar/` prefix via Next.js i18n |
| Content | django-modeltranslation + CMS fields per locale |
| RTL | `dir="rtl"` for fa/ar, logical CSS properties |
| SEO | hreflang tags, locale-specific sitemaps |
| URLs | Slug per language (e.g. `/fa/services/formulation/`) |

## Deployment Architecture

```
GitHub → GitHub Actions → Docker Build → Registry
                              │
                    ┌─────────┴─────────┐
                    │   Production      │
                    │   Linux VPS/K8s   │
                    │   - Nginx         │
                    │   - Gunicorn      │
                    │   - Next.js       │
                    │   - Celery workers│
                    └───────────────────┘
```

### High Availability

- **Iran + International**: Dual CDN origins, DNS failover
- **Load balancing**: Nginx upstream with health checks
- **Backups**: Daily PostgreSQL pg_dump → S3, 30-day retention
- **Monitoring**: Prometheus + Grafana, Sentry for errors
- **Disaster recovery**: RTO 4h, RPO 24h

## Security Best Practices

- HTTPS everywhere (Let's Encrypt)
- JWT with short expiry + refresh rotation
- CSRF protection on forms
- Rate limiting (django-ratelimit)
- Input validation & SQL injection prevention (ORM)
- Content Security Policy headers
- Secrets via environment variables (never in repo)

## Performance Optimization

- Static generation for marketing/SEO pages
- ISR for product catalog
- Redis caching for API responses
- Image optimization (WebP/AVIF, lazy loading)
- Code splitting & tree shaking
- Meilisearch for sub-50ms search
- Core Web Vitals target: LCP < 2.5s, CLS < 0.1

## Future AI Integration

| Feature | Implementation |
|---------|---------------|
| AI Chatbot | RAG over knowledge base + product catalog |
| Smart Search | Semantic search via embeddings in Meilisearch |
| Content Generation | AI-assisted blog/landing page drafts in CMS |
| Formulation Assistant | LLM-powered recipe suggestions (R&D tool) |
| SEO Automation | Auto meta descriptions, keyword clustering |
| Lead Scoring | ML model on quote/form submissions |

## Current Demo Scope

The `frontend/` folder contains a **static Persian RTL demo** with:
- 34 pre-rendered pages
- Full SEO markup
- Premium dark/gold UI
- GitHub Pages deployment ready

Phase 2 adds Django backend, e-commerce, and multilingual support.

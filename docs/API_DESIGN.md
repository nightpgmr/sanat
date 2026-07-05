# API Design — Sanat Food Platform

Base URL: `https://api.sanatfood.ir/api/v1/`

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register/` | Register new user |
| POST | `/auth/login/` | Login → JWT tokens |
| POST | `/auth/refresh/` | Refresh access token |
| POST | `/auth/logout/` | Invalidate refresh token |
| GET | `/auth/me/` | Current user profile |

## Services (Consulting)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/services/` | List all services |
| GET | `/services/{slug}/` | Service detail |
| GET | `/services/{slug}/related/` | Related services |
| GET | `/industries/` | Industry list |

## Products (E-commerce)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products/` | List with filters |
| GET | `/products/{slug}/` | Product detail |
| GET | `/categories/` | Category tree |
| GET | `/categories/{slug}/products/` | Products in category |
| GET | `/brands/` | Brand list |
| GET | `/search/?q=` | Full-text search |

### Query Parameters (Products)

```
?category=saffron
&price_type=wholesale|retail|export
&in_stock=true
&is_exportable=true
&page=1&page_size=20
&ordering=-created_at
&locale=fa
```

## Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cart/` | Current cart |
| POST | `/cart/items/` | Add to cart |
| PATCH | `/cart/items/{id}/` | Update quantity |
| DELETE | `/cart/items/{id}/` | Remove item |
| POST | `/orders/checkout/` | Create order |
| GET | `/orders/` | Order history |
| GET | `/orders/{id}/` | Order detail + tracking |

## CMS & Content

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/pages/{slug}/` | CMS page |
| GET | `/blog/` | Blog posts |
| GET | `/blog/{slug}/` | Blog post detail |
| GET | `/case-studies/` | Case studies |
| GET | `/faqs/` | FAQ list |
| GET | `/testimonials/` | Testimonials |
| GET | `/banners/` | Active banners |
| GET | `/menus/{location}/` | Navigation menu |

## Forms

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/forms/contact/` | Contact form |
| POST | `/forms/quote/` | Quote / RFQ request |
| POST | `/forms/consultation/` | Book consultation |
| POST | `/forms/vendor-register/` | Vendor registration |

## SEO

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/seo/sitemap.xml` | Dynamic sitemap |
| GET | `/seo/meta/{path}/` | Page meta tags |
| GET | `/seo/redirects/` | URL redirects map |

## Admin (Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| CRUD | `/admin/products/` | Manage products |
| CRUD | `/admin/services/` | Manage services |
| CRUD | `/admin/orders/` | Manage orders |
| CRUD | `/admin/blog/` | Manage blog |
| CRUD | `/admin/users/` | Manage users |
| CRUD | `/admin/seo/` | SEO settings |
| CRUD | `/admin/translations/` | i18n content |

## Response Format

```json
{
  "data": { ... },
  "meta": {
    "page": 1,
    "page_size": 20,
    "total": 150
  }
}
```

## Error Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": { "email": ["This field is required."] }
  }
}
```

## Rate Limits

| Endpoint | Limit |
|----------|-------|
| Auth | 10/min |
| Search | 60/min |
| Forms | 5/min |
| General API | 100/min |

# Database Schema — Sanat Food Platform

## ER Diagram

```mermaid
erDiagram
    User ||--o{ Order : places
    User ||--o{ QuoteRequest : submits
    User {
        uuid id PK
        string email
        string phone
        string role
        string locale
        datetime created_at
    }

    Category ||--o{ Product : contains
    Category {
        uuid id PK
        string slug
        jsonb name
        jsonb description
        uuid parent_id FK
        int sort_order
    }

    Product ||--o{ ProductVariant : has
    Product ||--o{ ProductImage : has
    Product {
        uuid id PK
        string slug
        jsonb name
        jsonb description
        uuid category_id FK
        decimal price_retail
        decimal price_wholesale
        int moq
        bool is_exportable
        bool is_active
    }

    ProductVariant {
        uuid id PK
        uuid product_id FK
        string sku
        jsonb attributes
        decimal price
        int stock
    }

    Service ||--o{ ServiceFeature : has
    Service {
        uuid id PK
        string slug
        jsonb title
        jsonb description
        jsonb meta_title
        jsonb meta_description
        string icon
    }

    Order ||--|{ OrderItem : contains
    Order {
        uuid id PK
        uuid user_id FK
        string status
        decimal subtotal
        decimal tax
        decimal shipping
        decimal total
        string shipping_country
    }

    OrderItem {
        uuid id PK
        uuid order_id FK
        uuid product_variant_id FK
        int quantity
        decimal unit_price
    }

    BlogPost ||--o{ BlogPostTag : tagged
    BlogPost {
        uuid id PK
        string slug
        jsonb title
        jsonb content
        jsonb excerpt
        uuid category_id FK
        uuid author_id FK
        datetime published_at
    }

    Page {
        uuid id PK
        string slug
        jsonb title
        jsonb content
        jsonb meta
        string template
    }

    FAQ {
        uuid id PK
        jsonb question
        jsonb answer
        string category
        int sort_order
    }

    QuoteRequest {
        uuid id PK
        uuid user_id FK
        string request_type
        uuid service_id FK
        uuid product_id FK
        text message
        string status
    }

    Translation {
        uuid id PK
        string model
        uuid object_id
        string field
        string locale
        text value
    }
```

## Key Tables Summary

| Table | Rows (est. Y1) | Purpose |
|-------|----------------|---------|
| products | 500+ | Product catalog |
| product_variants | 2,000+ | SKUs, sizes, grades |
| services | 50+ | Consulting services |
| blog_posts | 200+ | SEO content hub |
| pages | 100+ | CMS landing pages |
| orders | 10,000+ | E-commerce transactions |
| users | 5,000+ | Customers + admins |
| translations | 50,000+ | Multilingual content |

## Indexing Strategy

```sql
-- SEO-critical indexes
CREATE INDEX idx_product_slug ON products(slug);
CREATE INDEX idx_service_slug ON services(slug);
CREATE INDEX idx_blog_slug ON blog_posts(slug);
CREATE INDEX idx_blog_published ON blog_posts(published_at DESC);

-- E-commerce indexes
CREATE INDEX idx_order_user ON orders(user_id, created_at DESC);
CREATE INDEX idx_product_category ON products(category_id, is_active);
CREATE INDEX idx_variant_sku ON product_variants(sku);

-- Full-text search (Meilisearch sync via Celery)
-- PostgreSQL fallback:
CREATE INDEX idx_product_search ON products USING gin(to_tsvector('simple', name::text));
```

## Pricing Tiers

| Tier | Field | Description |
|------|-------|-------------|
| Retail (B2C) | `price_retail` | Individual buyers |
| Wholesale (B2B) | `price_wholesale` | Bulk orders |
| Export | `price_export` | International buyers |
| MOQ | `moq` | Minimum order quantity |

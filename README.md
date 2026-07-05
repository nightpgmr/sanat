# ⚠️ GitHub Pages — read this first

Your site should be live at: **https://nightpgmr.github.io/sanat/**

## Fix in 30 seconds

Open: **https://github.com/nightpgmr/sanat/settings/pages**

Set exactly:

| Setting | Value |
|---------|-------|
| Source | Deploy from a branch |
| Branch | `gh-pages` |
| Folder | `/ (root)` |

Click **Save**, wait 2 minutes, refresh the site.

### Alternative (also works)

| Branch | Folder |
|--------|--------|
| `main` | `/docs` |

---

# Sanat Food Platform

**صنات غذا** — پلتفرم جامع مشاوره، تولید و صادرات صنایع غذایی ایران

> Demo website files are in `docs/` and at repo root. See [DEPLOY.md](DEPLOY.md).

## Local Development

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
sanat/
├── frontend/          # Next.js source code
├── documentation/     # Architecture docs
├── docs/              # Built site (GitHub Pages)
├── index.html         # Built site (GitHub Pages alt)
└── .github/workflows/ # Auto-deploy
```

See [documentation/ARCHITECTURE.md](documentation/ARCHITECTURE.md) for full platform design.

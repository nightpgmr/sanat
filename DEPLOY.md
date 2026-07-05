# Deploy to GitHub Pages

Live URL: **https://nightpgmr.github.io/sanat/**

## How it works

The built website files live at the **repository root** (`index.html`, `_next/`, `services/`, etc.).

GitHub Pages with **main branch / (root)** serves `index.html` instead of README.md.

## Settings

1. Open https://github.com/nightpgmr/sanat/settings/pages
2. **Source:** Deploy from a branch
3. **Branch:** `main` · **Folder:** `/ (root)`
4. Save

## Auto-deploy

Every push to `frontend/` triggers `.github/workflows/deploy.yml` which rebuilds and copies files to repo root.

Manual build:

```powershell
cd frontend
$env:NEXT_PUBLIC_BASE_PATH="/sanat"
$env:NEXT_PUBLIC_SITE_URL="https://nightpgmr.github.io/sanat"
npm run build
# Then copy frontend/out/* to repo root
```

Important: `.nojekyll` at repo root prevents Jekyll from breaking `_next/` assets.

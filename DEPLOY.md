# Deploy to GitHub Pages

Your site: **https://nightpgmr.github.io/sanat/**

## One-time fix (required)

GitHub Pages is currently serving the README from repo root. Change it once:

1. Open **https://github.com/nightpgmr/sanat/settings/pages**
2. **Build and deployment → Source:** Deploy from a branch
3. **Branch:** `main` · **Folder:** `/docs`
4. Click **Save**
5. Wait 1–2 minutes, then open https://nightpgmr.github.io/sanat/

Alternative: use branch **`gh-pages`** with folder **`/ (root)`** instead.

## How it works

- Push to `main` → GitHub Actions builds `frontend/` and publishes to `docs/`
- GitHub Pages serves the `docs/` folder at `https://nightpgmr.github.io/sanat/`

## Manual build

```powershell
cd frontend
$env:NEXT_PUBLIC_BASE_PATH="/sanat"
$env:NEXT_PUBLIC_SITE_URL="https://nightpgmr.github.io/sanat"
npm run build
Copy-Item -Path out\* -Destination ..\docs\ -Recurse -Force
```

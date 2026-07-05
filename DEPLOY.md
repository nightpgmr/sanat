# Deploy to GitHub Pages

Your site: **https://nightpgmr.github.io/sanat/**

## Fix: site shows README instead of the website?

GitHub Pages is serving the wrong source. Do this once:

1. Open https://github.com/nightpgmr/sanat/settings/pages
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. **Branch:** `gh-pages` · **Folder:** `/ (root)`
4. Click **Save**
5. Wait 1–2 minutes, then refresh https://nightpgmr.github.io/sanat/

After the first push to `main`, GitHub Actions creates the `gh-pages` branch automatically.

## How it works

- Push to `main` → GitHub Actions runs `.github/workflows/deploy.yml`
- Builds Next.js static export from `frontend/`
- Publishes `frontend/out/` to the `gh-pages` branch
- GitHub Pages serves that branch at `/sanat/`

## Manual build (optional)

```powershell
cd frontend
$env:NEXT_PUBLIC_BASE_PATH="/sanat"
$env:NEXT_PUBLIC_SITE_URL="https://nightpgmr.github.io/sanat"
npm run build
```

Output: `frontend/out/`

## Troubleshooting

| Problem | Fix |
|---------|-----|
| README shown instead of site | Pages source must be **`gh-pages`** branch, not `main` |
| 404 / blank page | Check **Actions** tab — workflow must succeed |
| CSS/JS missing | Repo name must be `sanat` (matches base path) |
| Workflow failed | Repo **Settings → Actions → General** → allow workflows |

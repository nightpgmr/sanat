# Deploy to GitHub Pages

## Step 1 — Create GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: **`sanat`** (or any name — the URL path will match the repo name)
3. Set to **Public**
4. Do **not** add README, .gitignore, or license (we already have them)
5. Click **Create repository**

## Step 2 — Push code

Replace `YOUR_USERNAME` with your GitHub username:

```bash
cd c:\Users\Faris\Projects\sanat

git init
git add .
git commit -m "Deploy Sanat Food static demo to GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sanat.git
git push -u origin main
```

## Step 3 — Enable GitHub Pages

1. Open your repo on GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment → Source**, select **GitHub Actions**
4. Wait 1–2 minutes for the workflow to finish
5. Open **Actions** tab to watch the deploy job

## Your live URL

```
https://YOUR_USERNAME.github.io/sanat/
```

If your repo has a different name, replace `sanat` with that name.

## Manual deploy (optional)

Build locally and push the `out` folder yourself:

```powershell
cd frontend
$env:NEXT_PUBLIC_BASE_PATH="/sanat"
$env:NEXT_PUBLIC_SITE_URL="https://YOUR_USERNAME.github.io/sanat"
npm run build
```

The static files will be in `frontend/out/`.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| 404 on refresh | Ensure `.nojekyll` exists in build output (workflow adds it) |
| CSS/JS not loading | Repo name in URL must match `NEXT_PUBLIC_BASE_PATH` |
| Workflow failed | Check **Actions** tab for error logs |
| Pages not enabled | Settings → Pages → Source = **GitHub Actions** |

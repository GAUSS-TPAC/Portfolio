# Portfolio — Alan Tchapda

[![Next.js](https://img.shields.io/badge/Next.js-14-000000)](https://nextjs.org)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000)

My personal portfolio: a fast, bilingual (FR/EN), light/dark single-page site built with Next.js App Router and TypeScript.

## Features

- **Bilingual** (French / English) with a language switcher, strings centralised in `src/i18n/translations.ts`.
- **Light / dark theme** toggle (`ThemeContext`).
- Sections: **Hero, About, Skills, Experience, Projects, Contact**, with scroll animations and project shots.
- **SEO ready**: sitemap and absolute Open Graph URLs (set `NEXT_PUBLIC_SITE_URL`).

## Run locally

```bash
git clone https://github.com/GAUSS-TPAC/Portfolio.git && cd Portfolio
npm install
npm run dev        # http://localhost:3000
```

## Configure

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public site URL, used for absolute Open Graph / sitemap links |

Edit your content in `src/i18n/translations.ts` (texts) and the section components in `src/components/`.

## Deploy

Optimised for [Vercel](https://vercel.com): import the repo, set `NEXT_PUBLIC_SITE_URL`, deploy. The `vercel.json` already sets the build and output.

---

Built by **Alan Tchapda** ([@GAUSS-TPAC](https://github.com/GAUSS-TPAC)).

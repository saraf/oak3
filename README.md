# e-Ayurveda — English Website

English-language Ayurveda education and wellness site, built with [Astro](https://astro.build).

## Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro        # Shared outer shell (sidebar + footer)
├── components/
│   ├── Sidebar.astro           # Navigation sidebar (active link highlighting)
│   ├── Banner.astro            # Page header banner
│   └── SectionHeader.astro    # Section title with Japanese subtitle
├── styles/
│   └── global.css              # Design tokens + shared styles
├── content/
│   ├── config.ts               # Content collection schemas
│   ├── articles/               # Blog posts (Markdown)
│   ├── news/                   # News items (Markdown)
│   └── seminars/               # Seminar data (JSON)
└── pages/
    ├── index.astro             # Redirects to /news
    ├── news.astro              # What's New
    ├── about.astro             # About Ayurveda + Three Doshas
    ├── courses.astro           # Course listings
    ├── seminars.astro          # Seminar schedule (from content collection)
    ├── consultation.astro      # Consultation + booking form
    ├── india.astro             # India Culture & Study Tours
    ├── contact.astro           # Contact form
    └── blog/
        ├── index.astro         # Blog listing (from content collection)
        └── [slug].astro        # Individual article pages
```

## Getting Started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Output to /dist
npm run preview  # Preview production build
```

## Adding Content

### New blog article
Create `src/content/articles/my-article.md`:
```markdown
---
title: "My Article Title"
date: "Mar 01, 2025"
category: "Seasonal Wellness"
excerpt: "A one-sentence summary."
symbol: "🌿"
bgGradient: "linear-gradient(135deg, #1c3526, #3d6b50)"
---

Article content in Markdown...
```

### New news item
Create `src/content/news/my-news.md`:
```markdown
---
date: "2025.03.15"
tag: "news"          # news | seminar | blog
title: "News headline here"
href: "/contact"
---
```

### New seminar
Create `src/content/seminars/my-seminar.json`:
```json
{
  "date": "Jun 15, 2025",
  "title": "Seminar Title",
  "format": "In-person · Osaka",
  "capacity": "12 seats",
  "status": "open"
}
```

## Deployment

### Netlify (recommended, free)
1. Push this repo to GitHub
2. Log into [netlify.com](https://netlify.com) → New site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add your domain in Site Settings → Domain Management

### Cloudflare Pages (free)
1. Push to GitHub
2. Cloudflare Dashboard → Pages → Connect to Git
3. Framework preset: **Astro**
4. Build command: `npm run build`
5. Output directory: `dist`

## Domain
Recommended: `eayurveda.co` (register at Namecheap ~$12/yr)

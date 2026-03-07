# KINORA — Landing Page

> *Identity, kept alive.*

A trust-first cultural education platform connecting migrant families with culturally aligned teachers. This repo contains the React landing page (MVP).

---

## Quick Start

### Prerequisites
- **Node.js** v18+ ([download](https://nodejs.org))
- **npm** v9+ (comes with Node)

### Install & run locally

```bash
# 1. Clone or unzip the project
cd kinora

# 2. Install dependencies
npm install

# 3. Copy env file and fill in values (optional for landing page)
cp .env.example .env

# 4. Start dev server
npm run dev
```

Your site will open at **http://localhost:3000**

Hot reload is enabled — save any file and the browser updates instantly.

---

## Project Structure

```
kinora/
├── public/
│   └── favicon.svg              # Kinora tree mark favicon
│
├── src/
│   ├── main.jsx                 # React entry point
│   ├── App.jsx                  # Root — owns dark mode state
│   ├── index.css                # Global styles, fonts, animations
│   ├── theme.js                 # LIGHT and DARK design token objects
│   │
│   ├── data/
│   │   ├── cultures.js          # All 33 supported cultures + tabs
│   │   └── constants.js         # Nav links, stats, teachers, testimonials,
│   │                            #   FAQ, video, pricing features, trust items
│   │
│   ├── hooks/
│   │   ├── useInView.js         # IntersectionObserver — triggers FadeIn
│   │   └── useScrolled.js       # Returns true when page scrolled past N px
│   │
│   ├── utils/
│   │   └── scroll.js            # scrollTo(id) — smooth scroll helper
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.jsx          # Fixed nav — desktop links + mobile drawer + dark toggle
│   │   │   └── Footer.jsx       # 4-column footer with scroll links
│   │   │
│   │   ├── ui/
│   │   │   ├── TreeIcon.jsx     # Kinora brand SVG mark
│   │   │   ├── Icons.jsx        # Star, Check, Play, Shield, Moon, Sun, Menu, X
│   │   │   ├── FadeIn.jsx       # Scroll-triggered fade-up wrapper
│   │   │   ├── Img.jsx          # Image with TreeIcon fallback on error
│   │   │   └── Button.jsx       # Primary + outline button variants
│   │   │
│   │   └── sections/            # One file per page section (top → bottom)
│   │       ├── Hero.jsx
│   │       ├── Stats.jsx
│   │       ├── Problem.jsx
│   │       ├── Video.jsx
│   │       ├── CultureSearch.jsx
│   │       ├── HowItWorks.jsx
│   │       ├── WhyKinora.jsx
│   │       ├── Teachers.jsx
│   │       ├── Testimonials.jsx
│   │       ├── Pricing.jsx
│   │       ├── Trust.jsx
│   │       ├── FAQ.jsx
│   │       └── ApplyCTA.jsx
│   │
│   └── pages/
│       └── LandingPage.jsx      # Assembles all sections; receives theme T as prop
│
├── index.html                   # Vite HTML entry (meta tags, OG tags)
├── vite.config.js               # Vite config — port 3000, sourcemaps
├── package.json
├── .env.example                 # Template for environment variables
└── .gitignore
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at localhost:3000 |
| `npm run build` | Build production bundle to `/dist` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across `/src` |

---

## Theming (Dark Mode)

All colours live in `src/theme.js` as two objects: `LIGHT` and `DARK`.

The active theme is selected in `App.jsx` and passed as the `T` prop to every component. To change a colour, edit `theme.js` — it updates everywhere.

**Brand tokens:**
| Token | Light | Dark |
|---|---|---|
| `accent` | `#7C4A1E` | `#C07840` |
| `bg` | `#FAF6F0` | `#16100A` |
| `card` | `#FFFFFF` | `#231810` |
| `text` | `#1C1208` | `#F0E4D0` |
| `muted` | `#8A7560` | `#9A8470` |

---

## Updating Content

All copy is separated from component logic:

| What to change | File |
|---|---|
| Hero headline / subtext | `src/components/sections/Hero.jsx` |
| Stats numbers | `src/data/constants.js` → `STATS` |
| Cultures list | `src/data/cultures.js` → `CULTURES` |
| Teacher profiles | `src/data/constants.js` → `TEACHERS` |
| Testimonials | `src/data/constants.js` → `TESTIMONIALS` |
| FAQ answers | `src/data/constants.js` → `FAQ` |
| Pricing features | `src/data/constants.js` → `PRICING_FEATURES` |
| Trust commitments | `src/data/constants.js` → `TRUST_COMMITMENTS` |
| Nav links | `src/data/constants.js` → `NAV_LINKS` |
| Images | `src/data/constants.js` → `IMG` (swap Unsplash URLs with your own) |
| Video | `src/data/constants.js` → `VIDEO` |

---

## Replacing Images

Images are currently Unsplash placeholders. Replace them with your own:

1. Add your images to `public/images/` (e.g. `public/images/hero.jpg`)
2. Update `src/data/constants.js` → `IMG`:

```js
export const IMG = {
  hero:     '/images/hero.jpg',
  teacherA: '/images/teacher-amara.jpg',
  // ...
}
```

---

## Deployment

### Option 1: Netlify (recommended — free tier)

```bash
npm run build
# Then drag the /dist folder to app.netlify.com/drop
```

Or connect your GitHub repo at **app.netlify.com** — auto-deploys on every push to `main`.

Build settings:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Option 2: Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite.

### Option 3: Manual / VPS

```bash
npm run build
# Upload /dist to your web server (Hostinger, Namecheap, etc.)
# Point your domain to the server root
```

### Option 4: GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/kinora",
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Then:
```bash
npm run deploy
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```bash
cp .env.example .env
```

Variables are prefixed `VITE_` to be exposed to the browser by Vite.

**Never commit `.env` to git.**

---

## Next Steps (Post-MVP)

The following are intentionally out of scope for the landing page but noted here for the development roadmap:

- [ ] **Application form** — replace `alert()` in `ApplyCTA.jsx` with a real form (Typeform, Tally, or custom)
- [ ] **Stripe integration** — subscription checkout from pricing card
- [ ] **Zoom SDK** — embedded session scheduling
- [ ] **Admin dashboard** — React app at `/admin`
- [ ] **React Router** — add routing when building multi-page app
- [ ] **Auth (parents/teachers)** — protected routes
- [ ] **Real images** — replace Unsplash URLs in `src/data/constants.js`
- [ ] **Analytics** — Plausible (privacy-first, recommended)
- [ ] **CMS** — consider Contentful or Sanity for managing teacher/culture data without code deploys

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | React 18 | |
| Build tool | Vite 5 | Fast HMR, ESM |
| Styling | Inline styles | No build step, portable, theme-token driven |
| Fonts | Google Fonts | Cormorant Garamond + DM Sans |
| Video | YouTube embed | `VIDEO` config in `constants.js` |
| Payments (future) | Stripe | |
| Hosting | Netlify / Vercel | |

---

*Built for Kinora Inc. © 2026. Maryland, USA.*

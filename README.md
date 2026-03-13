# NanoBana — Dual-Chamber Peptide Pen Website

Apple-grade marketing website for the NanoBana dual-chamber peptide pen. Built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom CSS |
| Animation | CSS keyframes + Framer Motion ready |
| Fonts | Cormorant Garamond (serif) + DM Sans (sans) via Google Fonts |
| Deployment | Vercel (recommended) |

---

## Project Structure

```
nanobana/
├── app/
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage (composes all sections)
│   ├── science/
│   │   └── page.tsx         # Science/FAQ page
│   ├── peptides/
│   │   └── page.tsx         # Peptide catalogue page
│   └── not-found.tsx        # Custom 404
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx        # Sticky nav with mobile menu + scroll effect
│   │   ├── Marquee.tsx       # Scrolling text strip
│   │   ├── Hero.tsx          # Split hero with pen illustration + callout badges
│   │   ├── StatStrip.tsx     # 4-column stat row
│   │   ├── ProblemSolution.tsx # Dark/light problem-solution split
│   │   ├── HowItWorks.tsx    # 4-step interactive tabbed section
│   │   ├── Product.tsx       # Pricing, specs table, cartridge grid
│   │   ├── Testimonials.tsx  # 3-column testimonial strip
│   │   ├── ForClinics.tsx    # B2B section with dark panel + accreditation
│   │   └── Footer.tsx        # 5-column footer with legal disclaimer
│   └── ui/
│       └── PenIllustration.tsx  # SVG dual-chamber pen illustration
├── public/                  # Static assets (add product photos here)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone or unzip the project
cd nanobana

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — full marketing page |
| `/science` | Science explainer + FAQ |
| `/peptides` | Peptide cartridge catalogue |

---

## Customisation Guide

### Brand colours
Edit `app/globals.css` — CSS variables at `:root`:

```css
:root {
  --color-cream: #F5F4EF;   /* Background */
  --color-ink: #0A0A08;     /* Primary text / CTA */
  --color-ink-muted: #5A5A52; /* Secondary text */
  --color-border: rgba(10, 10, 8, 0.12); /* Hairline borders */
}
```

### Fonts
Currently using Google Fonts (Cormorant Garamond + DM Sans). To use local fonts, update `app/layout.tsx` with `next/font/local`.

### Product data
- **Cartridges**: Edit the `cartridges` array in `components/sections/Product.tsx`
- **Full catalogue**: Edit the `peptides` array in `app/peptides/page.tsx`
- **Testimonials**: Edit the `testimonials` array in `components/sections/Testimonials.tsx`
- **Stats**: Edit the `stats` array in `components/sections/StatStrip.tsx`

### Pricing
Search for `£249` across the codebase to update the pen body price. Cartridge prices are in the arrays above.

### Contact email
Search for `clinics@nanobana.com` in `ForClinics.tsx` and update.

---

## Deployment on Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option B — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the GitHub repo
4. Vercel auto-configures everything — click Deploy

### Option C — Vercel via Rudrax / AWS

If you prefer AWS deployment via your existing Elastic Beanstalk infrastructure:

```bash
npm run build
npm run start
```

Or containerise with the included Dockerfile approach (add a Dockerfile targeting `node:18-alpine`, copy `.next/`, run `next start`).

---

## Adding a CMS (Sanity.io recommended)

```bash
npm install next-sanity @sanity/image-url
npx sanity init
```

Create schemas for: `peptide`, `testimonial`, `blogPost`. Replace static arrays with GROQ queries.

---

## Adding E-commerce (Shopify Storefront API)

```bash
npm install @shopify/storefront-kit-react
```

Replace static product cards with Shopify product queries. The `cartridges` and `peptides` arrays are designed to map directly to Shopify product nodes.

---

## Next Steps Roadmap

| Priority | Feature |
|---|---|
| P0 | Add real product photography / 3D renders of the pen |
| P0 | Connect waitlist form (Resend + Supabase or Formspree) |
| P1 | Add Shopify Storefront API for cart + checkout |
| P1 | Implement Sanity CMS for peptide catalogue management |
| P1 | Add Framer Motion scroll animations (currently CSS-only) |
| P2 | Add blog / resources section for SEO authority |
| P2 | Add analytics (GA4 + Hotjar) |
| P2 | Implement dark mode toggle |
| P3 | Add 3D pen viewer (Three.js / model-viewer) |
| P3 | Add interactive dual-chamber animation on hero |

---

## Legal Note

This website uses "for research use only" disclaimers throughout, consistent with UK/EU regulatory positioning for research peptide sales. Consult your legal counsel before launch regarding MHRA compliance, product labelling requirements, and any claims made on the site.

---

## Built by

RudraX Technologies Limited — rudrax.co.uk  
London, UK

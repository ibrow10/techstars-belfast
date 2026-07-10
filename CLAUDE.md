# Techstars Belfast Website

## Project Overview

Marketing website for Techstars Belfast - a founder community and pre-accelerator programme in Northern Ireland. The site needs to appeal to early-stage founders and communicate credibility through strong partner relationships (Coinbase, Stripe, ElevenLabs).

## Tech Stack

- **Framework:** Astro 4.x
- **Styling:** Vanilla CSS with CSS variables (no Tailwind)
- **Icons:** Lucide (loaded via CDN)
- **Fonts:** Courier Prime (mono/headings), Inter (body)
- **Deployment:** Target Vercel/Netlify/Cloudflare Pages

## Design System

The design DNA is established in `src/styles/global.css`. Light theme with a black nav bar (in keeping with techstars.com). Key principles:

### Colors
```css
--bg: #ffffff;            /* Primary background */
--bg-subtle: #f6f6f3;     /* Bands, strips, footer */
--ink: #111111;           /* Primary text, dark CTA bands */
--ink-soft: #44443f;      /* Secondary text */
--ink-muted: #76766e;     /* Subdued text */
--line: #e6e5df;          /* Borders, dividers */
--accent: #00994f;        /* Techstars green (deep, reads on white) */
--accent-bright: #04cf61; /* Brand green for dark surfaces (nav CTA) */
--accent-soft: #e6f4ec;   /* Green tint bands */
--nav-bg: #0d0d0d;        /* Black nav bar */
```

### Typography
- **Headings:** Inter, heavy (800), tight letter-spacing (-0.025em)
- **Body:** Inter, 1.65 line-height
- **Eyebrows/Tags:** Courier Prime, uppercase, small, letterspaced — the one nod to the old mono brand

### Component Patterns
- **Nav:** Sticky black bar, white links, bright-green pill Apply CTA, white/green stacked logo (`Stackedlogo.svg`)
- **Cards:** White, 1px border, 16px radius, hover lifts with soft shadow. Photo cards: full-bleed image top, 2rem inner padding
- **Sections:** `.section` (6rem) / `.section--tight` (4rem), `.divide` top borders, `.band` green-tint statement bands, dark `--ink` CTA bands
- **Photos:** Event photography in `public/images/photos/` (compressed from Ian's library). Hero images 21/9 rounded 20px, card images 3/2

### Aesthetic Direction
Clean, light, confident. Direct language, short headlines with a green accent word. The vibe is "builder-focused" not "investor deck."

## Project Structure

```
src/
├── components/
│   ├── Header.astro      # Fixed nav with logo, links
│   └── Footer.astro      # Links, partners, copyright
├── layouts/
│   └── BaseLayout.astro  # Wraps all pages (head, header, footer)
├── pages/
│   ├── index.astro       # Homepage (TO BUILD)
│   ├── events.astro      # Events listing (TO BUILD)
│   ├── programmes.astro  # Founder Labs, RAEng info (TO BUILD)
│   ├── partners.astro    # Partner showcase (TO BUILD)
│   └── about.astro       # Story, team (TO BUILD)
└── styles/
    └── global.css        # Design system, utilities
```

## Current Status

✅ All pages live on the light theme (Jul 2026 redesign): index, events, programmes (Founder Catalyst), sprints, partners, about, privacy, terms, thanks
✅ Black nav bar, light design system, photo library placed across pages
✅ Netlify newsletter form (`newsletter-waitlist`) on homepage, posts to /thanks

## Next Task: Homepage

Build `src/pages/index.astro` with these sections:

### 1. Hero (full viewport)
- **Background:** Video loop (user will provide `/images/hero.mp4`) with dark overlay
- **Content:** Bold headline, supporting text, primary CTA button
- **Layout:** Centered or left-aligned text over video
- **Note:** If no video exists yet, use a dark gradient placeholder

### 2. Partner Logos
- Horizontal row: Coinbase, Stripe, ElevenLabs logos
- Muted/grayscale with hover color reveal
- Simple "Backed by leading partners" or similar label

### 3. How We Help Founders
- 6-7 pillar cards in a grid (2-3 columns)
- Each card: icon, title, short description
- Content already exists in the reference file below

### 4. Upcoming Events Preview
- Show 2-3 upcoming events as cards
- Link to /events for full listing
- Use the EventCard component pattern from reference

### 5. Final CTA Block
- Full-width section with headline + button
- Drive to events or community signup

## Reference: Existing Events Page

The user's original events page (`/mnt/user-data/uploads/events.html`) contains:
- Event card component structure
- "How We Help Founders" pillar content (7 pillars)
- Visual styling patterns

Use this as reference for component structure and copy.

## Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server (localhost:4321)
npm run build  # Production build
```

## Content Notes

- **Tone:** Direct, founder-focused, no corporate speak
- **Headlines:** Uppercase, punchy
- **Body copy:** Clear, concise, benefit-driven
- **CTAs:** Action-oriented ("Join the community", "See upcoming events")

## Assets Needed

User has a strong image library. Place assets in `public/images/`:
- `hero.mp4` or `hero.webm` - Hero background video
- `logo-coinbase.svg` - Partner logo
- `logo-stripe.svg` - Partner logo  
- `logo-elevenlabs.svg` - Partner logo
- Additional founder/event photography as needed

## Key Relationships

- **Ormeau Labs:** Physical space partner in Belfast
- **QUB (Queen's University Belfast):** Academic partner
- **Techstars Global:** Parent network (but this is a Community Partnership, not a traditional accelerator)

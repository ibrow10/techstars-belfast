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

The design DNA is established in `src/styles/global.css`. Key principles:

### Colors
```css
--bg-color: #0f0f0f;        /* Primary background */
--bg-elevated: #161616;      /* Cards, elevated surfaces */
--accent-color: #00e676;     /* Techstars green - CTAs, highlights */
--secondary-accent: #6c5ce7; /* Purple - secondary elements */
--text-color: #f0f0f0;       /* Primary text */
--text-muted: #888;          /* Subdued text */
--border-color: #333;        /* Borders, dividers */
```

### Typography
- **Headings:** Courier Prime, uppercase, tight letter-spacing (-0.05em)
- **Body:** Inter, normal weight, 1.6 line-height
- **Tags/Labels:** Courier Prime, uppercase, small (0.7-0.8rem)

### Component Patterns
- **Cards:** Dark background (#161616), 1px border, 12px radius, hover lifts with green border
- **Buttons:** Inverted on hover with green box-shadow offset
- **Sections:** Generous padding (4-6rem vertical), border-bottom dividers

### Aesthetic Direction
Brutalist/tech aesthetic. Not corporate. Direct language. Dark mode only. The vibe is "builder-focused" not "investor deck."

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

✅ Project scaffolded  
✅ Design system ported from existing events page  
✅ Header component (fixed, with nav)  
✅ Footer component  
✅ Base layout  
⬜ Homepage  
⬜ Events page  
⬜ Programmes page  
⬜ Partners page  
⬜ About page  

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

# Personal website — Selim Saleh

A personal site that shows both sides of me: the engineer (projects, CV, research, work) and the person who writes, takes photos, makes films and is always consuming something new. It should feel like a person, not a template.

I (Selim) will describe the look and feel in `DESIGN.md`. **Do not choose a visual style before `DESIGN.md` is filled in.** Until then, build structure and content with neutral, unstyled-but-clean defaults, with all design tokens (colours, fonts, spacing, radius) in one theme file so the style can be swapped in one place.

## Audiences (in priority order)

1. Hiring managers and engineers (FDE, data/AI engineering roles): they must reach projects, CV and the paper in one click and understand them in 30 seconds.
2. Collaborators and the morehere. community: who I am, what I'm building.
3. Friends and strangers who like films, photos and writing.

## Sections (initial sitemap)

- `/` — Home: one-line intro, what I'm doing now, 3 featured projects, links to everything else
- `/projects` + `/projects/[slug]` — engineering projects as short case studies (problem → what I built → result → what I learned → links)
- `/cv` — work, education, publications, skills; a "Download PDF" button (PDF lives in `public/`)
- `/research` — the ASAIL 2026 paper, guided research, thesis (can be part of `/cv` if thin)
- `/writing` + `/writing/[slug]` — essays and notes (MDX), with RSS feed
- `/now` — what I'm reading, watching, listening to, playing, learning right now (a "now page"), updated by editing one file
- `/photography` — galleries/series with optimised images and a lightbox
- `/films` — films I've written or directed: poster/still, logline, role, year, embedded video (YouTube/Vimeo, never self-hosted video)
- `/about` — longer story, contact, links (GitHub, LinkedIn, Instagram, email)

## Stack

- Astro (static-first) + TypeScript (strict) + MDX; content collections with typed schemas (zod) for every section
- Images via `astro:assets` (responsive sizes, lazy loading, modern formats); originals kept outside the repo if the photo library grows (later: Cloudflare R2 or similar)
- Styling decided after `DESIGN.md` (Tailwind or plain CSS with tokens — choose based on the design brief)
- RSS for writing, sitemap, Open Graph images per page
- Deploy: Cloudflare Pages, Netlify or Vercel (free tier), from GitHub on every push; custom domain added later via config only
- No backend, no database, no tracking cookies. If analytics are wanted later: privacy-friendly and cookie-less.

## Content model (`src/content/` — starter files are in `content/` of this kit)

- `projects`: title, slug, summary (1 line), status (`shipped` | `in-progress` | `research`), year, role, stack[], links {repo, demo, paper, video}, featured (bool), cover image, body (case study)
- `writing`: title, date, summary, tags[], draft (bool), body
- `now`: one file with sections (reading, watching, listening, playing, learning, building) and an `updated` date
- `photography`: series title, date, location, cover, images[] {src, alt, caption}
- `films`: title, year, role (writer/director/…), logline, runtime, poster/still, video URL, credits, festival/screenings
- `cv`: structured data (work, education, publications, skills, languages) rendered on `/cv` from one source file

## Rules

1. **Privacy:** never publish my phone number, home address or personal email in plain text. Contact via a mailto with light obfuscation or a contact link; I'll confirm which email to show.
2. **Accessibility:** semantic HTML, keyboard navigation, visible focus, alt text required for every image (schema-enforced), sufficient contrast, respects `prefers-reduced-motion`.
3. **Performance:** Lighthouse ≥ 95 on all four scores; no heavy client-side JS unless a section truly needs it (Astro islands only).
4. **Content-first:** adding a photo series, film, essay or "now" update must be a single file edit + push. Document how in `README.md`.
5. **Honest copy:** project pages state what I built myself and what was AI-assisted where relevant; no inflated claims.
6. Ask before adding dependencies; keep the codebase small enough that I can explain all of it.
7. **Git:** no AI attribution anywhere. No `Co-Authored-By` lines, no "generated with" notes, and no assistant or session links in commit messages, PR titles, PR descriptions or merge commits. Commits are authored as Selim only.

## Milestones (commit after each)

1. Astro + TS scaffold, content collections with schemas, routes for every section with placeholder layouts, deployed preview
2. Content in: CV, projects (from `content/`), research, about
3. Design pass from `DESIGN.md`: tokens, typography, layout, home page
4. Writing (MDX + RSS), Now page
5. Photography galleries (optimised images, lightbox), Films page (embeds)
6. Polish: OG images, sitemap, 404, accessibility + Lighthouse audit, README "how to add content"
7. Custom domain (when bought)

## Working agreement

- Plan mode first for each milestone; show me the plan before writing code.
- After each milestone: 5 bullets on what changed + one thing to check in the browser on desktop and phone.

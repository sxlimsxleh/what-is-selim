# Design brief — Selim Saleh

_Draft v4, 16 Nov 2026, written with Claude from Selim's answers, his writing, and the natochi.cv reference. Items marked **OPEN** still need Selim's call._

## 1. Feeling
- **Three words:** nostalgic, quiet, hopeful. (Melancholy that still faces forward: "nostalgia is the evidence submitted in the courtroom of existence.")
- **After 10 seconds a visitor should remember:** a name in Arabic handwriting made of light, with everything else orbiting it, and handwriting everywhere.
- **Engineer vs artist:** the site should flex two things: technical ability and career (the journey, and the fact that it is hand-built), and taste (type, restraint, references). Priority order: about me, career, paper, thesis, projects, after hours.
- **The thread between both sides: evidence.** The work is about AI that shows its sources (grounded extraction, citation-faithful legal QA, data-quality checks); the writing is about nostalgia as evidence ("I was here. I loved. I was loved. I lived.").

## 2. Inspiration
- **natochi.cv:** the whole home page is one image, the sections are part of that image, it has print-like grain, one or two lines in a human voice, and a song. We take the principles, not the tree. (Screenshots in `design/inspo/`.)
- **Films:** Spirited Away, Perfect Days, Yi Yi, Eternity and a Day, Cinema Paradiso. Also David Lynch's sense of the familiar made slightly strange, and the warmth of retro tech.
- **Music:** LCD Soundsystem, "All My Friends": the same imperfect piano under everything.
- **Selim's own writing:** "Three Times Cinema Paradiso Found Me" and "the future is a terrible place to live" (Substack). Recurring images: a dark room and a glowing screen, the 20-minute walk imagining a corner café, memory as "the dust our footsteps leave behind", camcorder tapes from childhood, 2,700 km from home.
- **Never:** template portfolio look, gradients-and-glass "tech" style, stock hero photos, skill bars, cursor gimmicks, auto-playing sound, copying anyone's signature visual (natochi's tree, Lynch's curtains, Ghibli imagery).

## 3. Look
- **Concept: "the centre, and the journey out."** The home page is one continuous scroll made of points of light. It opens on a centre point: Selim's name in Arabic handwriting (سليم, Ruq'ah style) with five orbits around it, one per stop. After each stop you fall back into the centre and leave again for the next one. The café table is dropped.
- **Order (decided by Selim):**
  1. the centre (name, one line, the rotating "listening / watched / wrote" line)
  2. about me: Cairo → Munich map, education
  3. about me · career: **ex-IONITY** (wordmark in dots, charging stations across Europe, the data-quality framework)
  4. about me · career: **ex-Tactful** (wordmark in dots; messy client sources → NiFi + Airflow → reports and demos)
  5. centre → **the paper** (passages, the answer, attribution threads, re-ranking)
  6. centre → **thesis** (the points translate كيف حالك؟ into إزيك؟ on a loop)
  7. centre → **projects**: ONE section. A short note on what the projects are for (getting better at more tools, exploring more things), then small entries with links: procure-agent-lite, Ladewüste, morehere., hallucination-resistant RAG. Hovering an entry lights up its drawing.
  8. centre → **after hours** (films, photographs, writing, now)
  9. back at the centre: contact
- **Transitions:** every trip to or from the centre passes through one point of light: the scene falls into it, then opens out into the next. No loose clouds. Text fades in step with its picture.
- **No IONITY project chapter.** IONITY and Tactful are career beats inside about me.
- **Colour:** unchanged. Warm dark room `#100e11`, tungsten ink `#ece2c9`, dim `#9a9080`, camcorder orange `#ff8f3f`.
- **Typography: sketchy, not "developer tool".** Three roles: a hand-drawn display face for names and headings (slightly rotated, with a scribbled underline), a handwriting face for notes, labels and links, a typewriter face for body text (screenplay feel), and VT323 for the camcorder read-out. Candidate sets in the sketch's switcher (**OPEN, Selim to pick**):
  - **marker:** Rock Salt + Reenie Beanie + Special Elite
  - **scribble:** Rubik Scribble + Covered By Your Grace + Courier Prime
  - **tall:** Sue Ellen Francisco + Reenie Beanie + Courier Prime
  - Arabic: Aref Ruqaa. All fonts are open-licensed (SIL OFL) and would be self-hosted; adding them needs Selim's OK (dependency rule).
- **Layout:** no cards, panels or tick-mark navigation. The orbit labels are the navigation. Fixed chrome is only: name (back to the centre), camcorder read-out, and the "in a hurry?" line.
- **Motion:** scroll-driven; with `prefers-reduced-motion` scenes switch without flight and loops are still.
- **Texture:** film grain and a soft vignette.

## 4. Home page
- **Identity line (OPEN, draft):** "data & ai engineer. munich, by way of cairo."
- **For recruiters:** "in a hurry? cv · projects · paper · github · email" is always visible; orbit labels jump straight to any stop.
- **Signature element:** the rotating line under the name (song · last film · a line from Selim's writing), fed from the `now` file.
- **Open content questions:** IONITY end date (the CV file still says "present"); the real IONITY and Tactful logos as SVG; real station locations (open data) to replace the placeholder dots; links for the paper and three projects.

## 5. Sections
- **Top level:** projects · research · cv · about · **after hours** (a hub page: films, photographs, writing, now, each with its own detail pages)
- **Photography:** both. A series index as a contact sheet (small frames), then each series full-bleed, one image per screen.
- **Films:** stills first (a single frame plus the logline), then the embedded video.
- **Now:** reading, watching, listening, learning, building. Playing is optional.

## 6. Practical
- **Name:** selim saleh (lowercase in the interface, which matches the Substack voice)
- **Email to show:** selimmoftahsaleh@gmail.com, as a mailto assembled in JS (never plain text in the HTML)
- **Links:** GitHub (sxlimsxleh), Substack (selimsaleh), Letterboxd (seleemmofta7), LinkedIn (URL OPEN), Instagram (OPEN)
- **Domain:** OPEN (see note: a web address like selimsaleh.com, about €10–15/year, bought later)
- **Languages:** English first. Arabic later, with the right-to-left layout considered from the start.

## Technical notes for the build
- The home image is drawn with a small vanilla-JS canvas script (no libraries; about 6k points). **The links are real HTML `<a>` elements laid over the canvas**, so keyboard use, screen readers, search engines and Lighthouse all work. Without JS, the page shows a static drawing plus the links.
- Prototypes: `design/sketch/journey.html` (v3, current), `rabbithole.html` (v2), `home.html` (v1), `home-v0.html` (first table). Throwaways, not production code.
- Production: one canvas island on the home page only, vanilla JS (no three.js) unless point counts need WebGL; all chapter text is real HTML; inner pages (projects, cv, research, after hours) are plain, fast, static Astro pages in the same palette.

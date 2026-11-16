# Design brief — Selim Saleh

_Draft v3, 16 Nov 2026, written with Claude from Selim's answers, his writing, and the natochi.cv reference. Items marked **OPEN** still need Selim's call._

## 1. Feeling
- **Three words:** nostalgic, quiet, hopeful. (Melancholy that still faces forward: "nostalgia is the evidence submitted in the courtroom of existence.")
- **After 10 seconds a visitor should remember:** a café table at night drawn in points of light, which then falls apart and becomes the work, chapter by chapter.
- **Engineer vs artist:** both, in one journey. The table is the calm entrance; scrolling down the rabbit hole goes through the career and the work (most of the depth), and the artistic side lives in one place, **after hours**, which opens into its own pages.
- **The thread between both sides: evidence.** The work is about AI that shows its sources (grounded extraction, citation-faithful legal QA, data-quality checks); the writing is about nostalgia as evidence ("I was here. I loved. I was loved. I lived.").

## 2. Inspiration
- **natochi.cv:** the whole home page is one image, the sections are part of that image, it has print-like grain, one or two lines in a human voice, and a song. We take the principles, not the tree. (Screenshots in `design/inspo/`.)
- **Films:** Spirited Away, Perfect Days, Yi Yi, Eternity and a Day, Cinema Paradiso. Also David Lynch's sense of the familiar made slightly strange, and the warmth of retro tech.
- **Music:** LCD Soundsystem, "All My Friends": the same imperfect piano under everything.
- **Selim's own writing:** "Three Times Cinema Paradiso Found Me" and "the future is a terrible place to live" (Substack). Recurring images: a dark room and a glowing screen, the 20-minute walk imagining a corner café, memory as "the dust our footsteps leave behind", camcorder tapes from childhood, 2,700 km from home.
- **Never:** template portfolio look, gradients-and-glass "tech" style, stock hero photos, skill bars, cursor gimmicks, auto-playing sound, copying anyone's signature visual (natochi's tree, Lynch's curtains, Ghibli imagery).

## 3. Look
- **Concept: "the table, then the rabbit hole."** The home page opens on a café table at night, centred, drawn in points of light (v0 look). Its objects are shortcuts: laptop → projects, stapled paper → research, coffee cup → about, and a taped tin box → **after hours** (click to open: camera, film ticket, notebook and cassette spill out). Scrolling takes you down the rabbit hole: the same points dissolve and re-form into each chapter, with real HTML text beside them.
- **Chapters (depth 00–08):**
  - 00 the table
  - 01 hello: the points spell *selim saleh* + سليم صالح
  - 02 2,700 km: a dot-matrix map, a traveller crossing from Cairo to Munich, coordinates in mono
  - 03 ionity: a dataset grid with a validation scan line; checks light up (schema, nulls, types, …)
  - 04 procure-agent-lite: the pipeline (inbox → extract → ground → policy → approve → sap); documents flow and wait for the human
  - 05 the paper: passages and an answer; attribution threads and a re-ranking that reorders
  - 06 ladewüste: Germany as hexes; chargers drop and charging deserts shrink
  - 07 after hours: a film strip in a projector beam; links to films, photographs, writing, now
  - 08 back to the table: contact
- **What it flexes:** the technical side is the scenes themselves (a hand-written particle system, data-driven visuals of each real project); taste is the restraint, the palette, the type and the references.
- **Influences:** natochi.cv (one drawn image as the home page), logartis.info (a scroll journey through one world), wodniack.dev (technical HUD details, kinetic type, chapter structure). Principles only; no borrowed visuals.
- **Colour:** the v0 warm dark room: background `#100e11`, tungsten ink `#ece2c9`, dim `#9a9080`, camcorder stamp orange `#ff8f3f` (dates, timecode, highlights in the scenes), one quiet red `#c0392b`. Tokens in one theme file.
- **HUD:** name top-left; camcorder overlay top-right (▶ PLAY · timecode · date); a depth meter on the left that doubles as chapter navigation; "in a hurry? cv · projects · paper · github · email" always visible bottom-left.
- **Typography:** grotesk sans for the interface, a book serif for essays, mono for HUD and data labels. **OPEN:** exact typefaces (proposal: Inter or Geist, Newsreader, JetBrains Mono; self-hosted).
- **Motion:** scroll-scrubbed morphs, dust drift, slight projector flicker. With `prefers-reduced-motion`, scenes switch with no flight and overlays are still.
- **Texture:** film grain and a soft vignette.

## 4. Home page
- **Identity line (OPEN, draft):** "i build ai systems that show their evidence." (shown in chapter 01)
- **For recruiters:** everything in one click from any depth: the "in a hurry?" bar and the depth meter (03–06 are the work).
- **Signature element:** a subtitle line on the table (song · last film · a line from what Selim is reading or wrote), fed from the `now` file.

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
- Prototypes: `design/sketch/rabbithole.html` (v2, current), `home.html` (v1, work column, rejected), `home-v0.html` (first table). Throwaways, not production code.
- Production: one canvas island on the home page only, vanilla JS (no three.js) unless point counts need WebGL; all chapter text is real HTML; inner pages (projects, cv, research, after hours) are plain, fast, static Astro pages in the same palette.

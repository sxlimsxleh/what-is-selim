# Design brief — Selim Saleh

_Draft v2, 16 Nov 2026, written with Claude from Selim's answers, his writing, and the natochi.cv reference. Items marked **OPEN** still need Selim's call._

## 1. Feeling
- **Three words:** nostalgic, quiet, hopeful. (Melancholy that still faces forward: "nostalgia is the evidence submitted in the courtroom of existence.")
- **After 10 seconds a visitor should remember:** a café table at night, drawn in points of light, and that this person is both an engineer and someone who makes films, takes photographs and writes about time.
- **Engineer vs artist:** work-heavy. The home page leads with the work (one-liner, now, selected projects, CV); the artistic side is one object, a closed box on the table called **after hours**. Opening it reveals films, photographs, writing and now, and leads to a dedicated after-hours page.
- **The thread between both sides: evidence.** The work is about AI that shows its sources (grounded extraction, citation-faithful legal QA, data-quality checks); the writing is about nostalgia as evidence ("I was here. I loved. I was loved. I lived.").

## 2. Inspiration
- **natochi.cv:** the whole home page is one image, the sections are part of that image, it has print-like grain, one or two lines in a human voice, and a song. We take the principles, not the tree. (Screenshots in `design/inspo/`.)
- **Films:** Spirited Away, Perfect Days, Yi Yi, Eternity and a Day, Cinema Paradiso. Also David Lynch's sense of the familiar made slightly strange, and the warmth of retro tech.
- **Music:** LCD Soundsystem, "All My Friends": the same imperfect piano under everything.
- **Selim's own writing:** "Three Times Cinema Paradiso Found Me" and "the future is a terrible place to live" (Substack). Recurring images: a dark room and a glowing screen, the 20-minute walk imagining a corner café, memory as "the dust our footsteps leave behind", camcorder tapes from childhood, 2,700 km from home.
- **Never:** template portfolio look, gradients-and-glass "tech" style, stock hero photos, skill bars, cursor gimmicks, auto-playing sound, copying anyone's signature visual (natochi's tree, Lynch's curtains, Ghibli imagery).

## 3. Look
- **Concept: "the table."** Seen from above: a round café table under a lamp, drawn in points of light (dust in a projector beam / a constellation). Work objects lie on it: laptop → projects, a stapled paper with a small figure → research, coffee cup → about. Plus a taped-shut tin box → **after hours**. Click it: the lid lifts toward you and fades, and a camera (photographs), film ticket (films), notebook (writing) and cassette (now) spill out with their labels. Hovering or focusing an object pulls its points into focus while the rest dim. On first load the dust gathers into the table.
- **Home layout:** desktop is two columns, work text on the left, the table on the right (sticky). Mobile shows the work text first, then the table.
- **Colour (OPEN, choose in the sketch's palette switcher):** v1 moved away from the dark charcoal look of the reference. Three candidates, all tokens in one theme file:
  - **cyanotype:** Prussian blue `#12305a`, paper-white ink `#eef1ea`, warm stamp `#ffb15c`. The blueprint (engineer) meets the photographic print (artist).
  - **paper:** warm paper `#ebe4d4`, blue-black ink `#1c2540`, stamp `#c94a17`. A light theme, like a printed page.
  - **komorebi:** deep green `#1d2a20`, sunlit cream `#efe6c4`, amber `#f0b443`. Perfect Days light through leaves.
  - Option: cyanotype as default with paper as its light-mode twin.
- **Typography:** grotesk sans for the interface and labels; a book serif for essays (writing pages read like a printed page); mono for the camcorder overlay (timecode, dates, metadata). **OPEN:** exact typefaces. Proposal: Inter or Geist for sans, Newsreader or Source Serif for serif, JetBrains Mono for mono, all self-hosted, with no font CDN.
- **Layout:** the home page is one full-screen image, the inner pages are calm one-column text, and projects use a simple list (not a card grid).
- **Motion:** subtle. Dust drifts, the lamp flickers slightly like a projector, points gather on load, and subtitles fade. All of it switches off with `prefers-reduced-motion`.
- **Texture:** fine film grain over everything and a soft vignette.

## 4. Home page
- **Identity line (OPEN, draft):** "i build ai systems that show their evidence. after hours, i collect a different kind."
- **Above the fold:** name, one-liner, a "now" line (TUM thesis · IONITY · morehere.), selected work (procure-agent-lite, the ASAIL 2026 paper, Ladewüste, morehere.), then cv (pdf) · all projects · github · linkedin · email. The table sits beside it. The camcorder overlay (▶ PLAY · timecode · date) is top right.
- **Signature element:** a subtitle line at the bottom of the screen, like a film's subtitles, that rotates between three things: the song Selim is listening to, the last film he watched, and a line from what he's reading or writing. It's fed from the `now` file. On a later pass, one of Selim's own photographs develops on the table and changes on each visit.

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
- Prototypes: `design/sketch/home.html` (v1, current) and `design/sketch/home-v0.html` (first idea). Throwaways, not production code.

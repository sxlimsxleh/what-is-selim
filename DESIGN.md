# Design brief — Selim Saleh

_Draft v5, 16 Nov 2026, written with Claude from Selim's answers, his writing, and the natochi.cv reference. Items marked **OPEN** still need Selim's call._

## 1. Feeling
- **Three words:** nostalgic, quiet, hopeful. (Melancholy that still faces forward: "nostalgia is the evidence submitted in the courtroom of existence.")
- **After 10 seconds a visitor should remember:** a name in Arabic handwriting made of points of light on deep blue, with everything else growing off it.
- **Engineer vs artist:** the site should flex two things: technical ability and career (the journey, and the fact that it is hand-built), and taste (type, restraint, references). Priority order: about me, career, paper, thesis, projects, after hours.
- **The thread between both sides: evidence.** The work is about AI that shows its sources (grounded extraction, citation-faithful legal QA, data-quality checks); the writing is about nostalgia as evidence ("I was here. I loved. I was loved. I lived.").

## 2. Inspiration
- **natochi.cv:** the whole home page is one image, the sections are part of that image, it has print-like grain, one or two lines in a human voice, and a song. We take the principles, not the tree. (Screenshots in `design/inspo/`.)
- **Films:** Spirited Away, Perfect Days, Yi Yi, Eternity and a Day, Cinema Paradiso. Also David Lynch's sense of the familiar made slightly strange, and the warmth of retro tech.
- **Music:** LCD Soundsystem, "All My Friends": the same imperfect piano under everything.
- **Selim's own writing:** "Three Times Cinema Paradiso Found Me" and "the future is a terrible place to live" (Substack). Recurring images: a dark room and a glowing screen, the 20-minute walk imagining a corner café, memory as "the dust our footsteps leave behind", camcorder tapes from childhood, 2,700 km from home.
- **Never:** template portfolio look, gradients-and-glass "tech" style, stock hero photos, skill bars, cursor gimmicks, auto-playing sound, copying anyone's signature visual (natochi's tree, Lynch's curtains, Ghibli imagery).

## 3. Look
- **Reference decisions taken from natochi.cv:** one drawing is the whole page; tabs are small labels sitting on twigs that grow off the drawing; very little type, all lowercase and small; two or three colours; no headings, panels, badges or decoration; a back button and a music pill are the only controls.
- **Concept: the name.** The centre is سليم written in Ruq'ah handwriting, made of points, with a small note on a twig: "selim, in arabic". Each tab (me, the paper, thesis, projects, after hours) is a label on a twig growing off the letters. Under the name runs a trail of dust from "cairo" to "munich", 2,700 km. No orbits (they read as self-important).
- **Journey (scroll):** centre → me → ex-ionity → ex-tactful → centre → the paper → centre → thesis → centre → projects → centre → after hours → centre (say hello). Every trip to or from the centre passes through one point of light. Labels also jump straight to their stop.
- **Stops:**
  - me: Cairo → Munich dot map; a short line in Selim's own voice; education.
  - ex-ionity (Dec 2024 – Nov 2026): wordmark in dots, stations across Europe, one sentence, then the tool stack (python, pandas, pyarrow, parquet, aws athena, s3, glue, airflow, codeartifact). No list of checks.
  - ex-tactful (Nov 2022 – Jan 2024): wordmark in dots; client sources → nifi + airflow → reports and demos.
  - the paper: passages, answer, attribution threads; link straight to https://arxiv.org/abs/2606.03728.
  - thesis: "teaching a model to speak masry"; كيف حالك؟ rearranges into إزيك؟.
  - projects: one section, a note on why (getting better at more tools, exploring more things), then procure-agent-lite, Ladewüste, morehere. with links. No hallucination-resistant RAG.
  - after hours: films, photographs, writing (Substack), watching (Letterboxd).
- **Colour:** deep blue sheet `#13244a` (to `#0e1b3a` at the edges), dark grey frame `#17181b`, light grey ink `#d8dbe0`, mid grey `#8e96a6`. No accent colour; emphasis is brightness and underline only.
- **Type (OPEN, two options in the sketch):** "pen" = Reenie Beanie handwriting for labels + Fraunces for reading text; "plain" = one sans (Instrument Sans) for everything, closest to the reference. Arabic: Aref Ruqaa. All open-licensed, self-hosted; adding them needs Selim's OK.
- **Fixed elements:** name + one line ("data & ai engineer, munich. free from december 2026."), the "in a hurry?" links, a back-to-centre button, the tape.
- **The tape:** a small pill with Selim's favourite songs (next / play). Recommended build: each song opens on Spotify or YouTube, and an embedded player loads only after a click, so no third-party cookies load by default. **OPEN:** the song list.
- **Texture:** stipple and paper grain. Motion is scroll-driven and stops for `prefers-reduced-motion`.

## 4. Home page
- **Line under "me" (OPEN, Selim to pick or merge):** see the options in the conversation; the sketch uses his Substack line.
- **For recruiters:** "in a hurry? cv · projects · paper · github · email" always visible, plus "free from december 2026".
- **Still needed from Selim:** LinkedIn URL; the CV PDF (`public/Selim_Saleh_CV.pdf`, phone number removed); song list; IONITY and Tactful logo files; links for Ladewüste and morehere.; films and photographs.

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
- Prototypes: `design/sketch/journey.html` (v4, current), `journey-v3.html`, `rabbithole.html` (v2), `home.html` (v1), `home-v0.html` (first table). Throwaways, not production code.
- Production: one canvas island on the home page only, vanilla JS (no three.js) unless point counts need WebGL; all chapter text is real HTML; inner pages (projects, cv, research, after hours) are plain, fast, static Astro pages in the same palette.

# Design brief — Selim Saleh

_Draft v6, 16 Nov 2026, written with Claude from Selim's answers, his writing, and the natochi.cv reference. Items marked **OPEN** still need Selim's call._

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
- **Concept: the name.** The centre is سليم written in Ruq'ah handwriting, made of points, with a small note on a twig: "selim, in arabic". Each tab (me, the paper, thesis, projects, after hours) is a label on a twig growing off the letters. Under the name runs a trail of dust from "cairo" to "munich" (no distance shown here; the 2,700 km counter lives in the "me" animation). No orbits (they read as self-important).
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
- **Type:** all reading text in one sans (Instrument Sans). Titles, tabs and labels on the drawing use a second voice. **OPEN, Selim to pick** from the sketch switch (comparison sheet: `design/sketch/title-fonts.png`): italic (Instrument Serif italic, recommended), gloock, pen (Reenie Beanie), marker (Rock Salt), bold (same sans). Arabic: Aref Ruqaa. All open-licensed, self-hosted; adding them needs Selim's OK.
- **Lists:** anything that is a list reads as one, one item per line: tool stacks, education, projects, after hours, contact links, the song list.
- **Fixed elements:** name + one line ("data & ai engineer, munich. free from december 2026."), the "in a hurry?" links, a back-to-centre button, the tape.
- **The tape:** a pill with Selim's six songs; the title opens the full list, "»" skips, "▶" opens the song on Spotify. Songs: All My Friends (LCD Soundsystem), Weird Fishes (Radiohead), Turbines (Black Country, New Road), Long Season (Fishmans), Master of None (Beach House), Rinsed (Dean Blunt). Build: Spotify player loads only after a click, so nothing third-party loads by default; needs the six Spotify track links.
- **Texture:** stipple and paper grain. Motion is scroll-driven and stops for `prefers-reduced-motion`.

## 4. Home page
- **Text under "me" (Selim's words):** "for a living, i teach code, engineer data and train LLMs. i also watch/make movies, read books, blast music, and rant (sometimes complain) about them all. i left cairo with a carefully orchestrated plan. the plan changed. i kept the curiosity."
- **For recruiters:** "in a hurry? projects · paper · github · linkedin · email" always visible, plus "free from december 2026". The CV link returns when the PDF is added.
- **Still needed from Selim:** title font choice; the CV PDF later (`public/Selim_Saleh_CV.pdf`, phone number removed); Spotify links for the six songs; IONITY and Tactful logo files; links for Ladewüste and morehere.; films and photographs.

## 5. Sections
- **Top level:** projects · research · cv · about · **after hours** (a hub page: films, photographs, writing, now, each with its own detail pages)
- **Photography:** both. A series index as a contact sheet (small frames), then each series full-bleed, one image per screen.
- **Films:** stills first (a single frame plus the logline), then the embedded video.
- **Now:** reading, watching, listening, learning, building. Playing is optional.

## 6. Practical
- **Name:** selim saleh (lowercase in the interface, which matches the Substack voice)
- **Email to show:** selimmoftahsaleh@gmail.com, as a mailto assembled in JS (never plain text in the HTML)
- **Links:** GitHub (sxlimsxleh), LinkedIn (linkedin.com/in/selimsaleh), Substack (selimsaleh), Letterboxd (seleemmofta7), Instagram (OPEN)
- **Domain:** OPEN (see note: a web address like selimsaleh.com, about €10–15/year, bought later)
- **Languages:** English first. Arabic later, with the right-to-left layout considered from the start.

## Technical notes for the build
- The home image is drawn with a small vanilla-JS canvas script (no libraries; about 6k points). **The links are real HTML `<a>` elements laid over the canvas**, so keyboard use, screen readers, search engines and Lighthouse all work. Without JS, the page shows a static drawing plus the links.
- Prototypes: `design/sketch/journey.html` (v4, current), `journey-v3.html`, `rabbithole.html` (v2), `home.html` (v1), `home-v0.html` (first table). Throwaways, not production code.
- Production: one canvas island on the home page only, vanilla JS (no three.js) unless point counts need WebGL; all chapter text is real HTML; inner pages (projects, cv, research, after hours) are plain, fast, static Astro pages in the same palette.

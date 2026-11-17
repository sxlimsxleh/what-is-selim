# what-is-selim

Selim Saleh's personal site. Astro + TypeScript + MDX, fully static.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview    # serve dist/ locally
```

## Where things live

| What | File |
|---|---|
| Colours, fonts, spacing (all design tokens) | `src/styles/theme.css` |
| Name, links, email, songs, navigation | `src/lib/site.ts` |
| CV (renders /cv, /about, /research) | `src/content/cv.yaml` |
| Now page | `src/content/now.yaml` |
| Projects (one Markdown file each) | `src/content/projects/` |
| Writing (one file each; `external:` links out to Substack) | `src/content/writing/` |
| Films | `src/content/films/` |
| Photo series (a folder with photos + one `index.md`) | `src/content/photography/` |
| Content rules (what fields exist, what is required) | `src/content.config.ts` |
| Design brief and throwaway sketches | `DESIGN.md`, `design/` |

Each content folder has a `_template.md` to copy. Files starting with `_` are never published.
Every image needs alt text: the build fails without it.

A full "how to add content" guide comes in the polish milestone.

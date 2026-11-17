// Content collections: every section of the site is typed here.
// Files whose name starts with "_" (the templates) are never loaded.
import { defineCollection, type SchemaContext } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';

const md = (dir: string) => glob({ pattern: '**/[^_]*.{md,mdx}', base: `./src/content/${dir}` });
const url = z.url();

// An image with required alt text: the build fails if alt is missing or empty.
const picture = (image: SchemaContext['image']) =>
  z.object({ src: image(), alt: z.string().min(1, 'every image needs alt text'), caption: z.string().optional() });

const projects = defineCollection({
  loader: md('projects'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one line
      status: z.enum(['shipped', 'in-progress', 'research']),
      year: z.number().int(),
      role: z.string(),
      stack: z.array(z.string()).default([]),
      links: z
        .object({ repo: url, demo: url, paper: url, video: url, site: url, instagram: url })
        .partial()
        .default({}),
      featured: z.boolean().default(false),
      section: z.enum(['projects', 'research']).default('projects'), // research entries show on /research
      order: z.number().optional(), // lower comes first; ties sort by year
      cover: picture(image).optional(),
    }),
});

const writing = defineCollection({
  loader: md('writing'),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    external: url.optional(), // set for essays that live elsewhere (e.g. Substack); the site links out
  }),
});

const films = defineCollection({
  loader: md('films'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number().int(),
      role: z.array(z.string()).min(1), // writer, director, …
      logline: z.string(),
      runtime: z.string().optional(), // e.g. "12 min"
      still: picture(image),
      video: url.optional(), // YouTube or Vimeo, never self-hosted
      credits: z.string().optional(),
      screenings: z.array(z.string()).default([]),
    }),
});

const photography = defineCollection({
  loader: md('photography'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      location: z.string().optional(),
      cover: picture(image),
      images: z.array(picture(image)).min(1),
    }),
});

// One entry ("current") in now.yaml.
const item = z.object({ title: z.string(), by: z.string().optional(), note: z.string().optional(), url: url.optional() });
const now = defineCollection({
  loader: file('./src/content/now.yaml'),
  schema: z.object({
    updated: z.coerce.date(),
    building: z.array(item).default([]),
    reading: z.array(item).default([]),
    watching: z.array(item).default([]),
    listening: z.array(item).default([]),
    playing: z.array(item).default([]),
    learning: z.array(item).default([]),
  }),
});

// One entry ("selim") in cv.yaml. There is deliberately no field for phone, address or email.
const cv = defineCollection({
  loader: file('./src/content/cv.yaml'),
  schema: z.object({
    name: z.string(),
    headline: z.string(),
    location: z.string(),
    available: z.string().optional(),
    about: z.string(),
    work: z.array(
      z.object({ role: z.string(), org: z.string(), place: z.string(), start: z.string(), end: z.string(), points: z.array(z.string()).default([]) }),
    ),
    education: z.array(
      z.object({ degree: z.string(), school: z.string(), place: z.string().optional(), start: z.string(), end: z.string(), note: z.string().optional() }),
    ),
    publications: z.array(
      z.object({ title: z.string(), authors: z.array(z.string()), venue: z.string(), year: z.number().int(), url: url.optional() }),
    ),
    skills: z.array(z.object({ group: z.string(), items: z.array(z.string()) })),
    languages: z.array(z.object({ name: z.string(), level: z.string() })),
  }),
});

export const collections = { projects, writing, films, photography, now, cv };

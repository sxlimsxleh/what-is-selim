import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

const byOrder = (a: Project, b: Project) =>
  (a.data.order ?? 99) - (b.data.order ?? 99) || b.data.year - a.data.year || a.data.title.localeCompare(b.data.title);

export async function projects(section: 'projects' | 'research' = 'projects') {
  return (await getCollection('projects', (p) => p.data.section === section)).sort(byOrder);
}

export async function featured() {
  return (await getCollection('projects', (p) => p.data.featured)).sort(byOrder);
}

export async function writing() {
  return (await getCollection('writing', (w) => !w.data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function cv() {
  const e = await getEntry('cv', 'selim');
  if (!e) throw new Error('src/content/cv.yaml needs a "selim" entry');
  return e.data;
}

export async function now() {
  const e = await getEntry('now', 'current');
  if (!e) throw new Error('src/content/now.yaml needs a "current" entry');
  return e.data;
}

export const fmtDate = (d: Date) => d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }).toLowerCase();
export const fmtMonth = (d: Date) => d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short' }).toLowerCase();

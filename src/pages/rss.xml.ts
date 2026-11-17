import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { writing } from '../lib/content';
import { site } from '../lib/site';

export async function GET(context: APIContext) {
  const items = await writing();
  return rss({
    title: `${site.name}: writing`,
    description: 'Essays about time, cinema and moving away.',
    site: context.site!,
    items: items.map((w) => ({
      title: w.data.title,
      pubDate: w.data.date,
      description: w.data.summary,
      link: w.data.external ?? `/writing/${w.id}/`,
    })),
  });
}

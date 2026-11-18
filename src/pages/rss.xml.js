import rss from '@astrojs/rss';
import { SITE } from '../site.config';
import { getPosts } from '../lib/content';

export async function GET(context) {
  const posts = await getPosts();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: `${SITE.name}: writing`,
    description: SITE.description,
    site: new URL(`${base}/`, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${base}/blog/${post.id}/`,
    })),
  });
}

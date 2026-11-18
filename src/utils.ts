// Builds a link that still works when the site lives in a sub-folder,
// such as https://your-username.github.io/my-website/
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export function formatDate(date: Date, style: 'long' | 'month' = 'long'): string {
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: style === 'long' ? 'numeric' : undefined,
    timeZone: 'UTC', // dates in frontmatter are plain days, so don't shift them
  });
}

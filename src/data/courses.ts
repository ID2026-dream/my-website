// Loads the reading courses and their units in order.
import { getCollection, type CollectionEntry } from 'astro:content';

// Drafts are hidden on the live site. Build with SHOW_DRAFTS=true to preview them.
const showDrafts = process.env.SHOW_DRAFTS === 'true';

export type Course = CollectionEntry<'courses'>;
export type Unit = CollectionEntry<'units'> & { slug: string; number: number; label: string };

// '01-what-is-ai' -> 'what-is-ai'
const unitSlug = (file: string) => file.replace(/^\d+[-_]?/, '') || file;

export async function getCourses() {
  const [courses, units] = await Promise.all([getCollection('courses'), getCollection('units')]);
  return courses
    .filter((c) => showDrafts || !c.data.draft)
    .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title))
    .map((course) => {
      const list = units
        .filter((u) => u.id.startsWith(`${course.id}/`) && (showDrafts || !u.data.draft))
        .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }))
        .map((u, i): Unit => {
          const file = u.id.slice(course.id.length + 1);
          return { ...u, slug: unitSlug(file), number: i + 1, label: u.data.label ?? `Unit ${i + 1}` };
        });
      const readingCount = list.reduce((n, u) => n + u.data.readings.length, 0);
      return { course, units: list, readingCount };
    });
}

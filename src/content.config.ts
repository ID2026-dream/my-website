// Reading courses. Each course is a folder in src/content/courses:
//
//   src/content/courses/my-course/index.md      the course page
//   src/content/courses/my-course/01-intro.md   unit 1
//   src/content/courses/my-course/02-next.md    unit 2 ...
//
// See src/content/courses/README.md for how to add one.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const base = './src/content/courses';
// 'my-course/index.md' -> 'my-course', 'my-course/01-intro.md' -> 'my-course/01-intro'
const idFrom = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '').replace(/\/index$/, '');

const courses = defineCollection({
  loader: glob({ pattern: '*/index.md', base, generateId: idFrom }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    level: z.string().optional(), // e.g. 'Postgraduate', 'Self-paced'
    facts: z.array(z.string()).default([]), // short tags, e.g. '6 units', 'Level 9'
    icon: z.string().default('books'), // an icon name from src/components/icon-data.ts
    color: z.string().default('#0a6a83'),
    order: z.number().default(100), // lower numbers are listed first
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false), // drafts are left off the live site
  }),
});

const reading = z.object({
  title: z.string(),
  authors: z.string().optional(),
  source: z.string().optional(), // journal, book, publisher or website
  year: z.union([z.number(), z.string()]).optional(),
  url: z.string().url().optional(),
  note: z.string().optional(), // why to read it, or which pages
  optional: z.boolean().default(false),
});

const units = defineCollection({
  loader: glob({ pattern: ['*/*.md', '!*/index.md'], base, generateId: idFrom }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    label: z.string().optional(), // e.g. 'Week 3'; defaults to 'Unit 3'
    icon: z.string().optional(),
    readings: z.array(reading).default([]),
    readingsIntro: z.string().optional(), // e.g. 'Read after finishing the notes (about 30 minutes)'
    // Files kept in the course folder, such as slides or notes as PDFs
    downloads: z.array(z.object({ label: z.string(), file: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { courses, units };

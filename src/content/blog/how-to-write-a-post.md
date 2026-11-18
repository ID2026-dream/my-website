---
title: How to add a post to this site
description: A quick guide to writing posts in Markdown, which also shows how each kind of formatting looks.
pubDate: 2026-11-17
draft: false
---

Every post is a Markdown file in `src/content/blog/`. The file name becomes the address, so `my-first-trip.md` is published at `/blog/my-first-trip/`.

## The bit at the top

Each file starts with a short block of settings, called frontmatter:

```yaml
---
title: My first trip
description: One sentence that shows up in lists and search results.
pubDate: 2026-12-01
draft: true
---
```

Set `draft: true` while you're still writing. Drafts show up when you run `npm run dev`, but they're left out when the site is published.

## Formatting

Write normally, and use Markdown for the rest. Wrap a word in underscores for _emphasis_ or double asterisks for **strong emphasis**. Links look like [this one to the Astro docs](https://docs.astro.build).

> A blockquote is good for a line from someone else, or an idea you want to stand apart.

Lists work too:

1. Write the post
2. Commit it with Git
3. Push, and the site updates by itself

### Images

Save the image in `src/content/blog/` next to your post, then refer to it like this: `![A description of the photo](./photo.jpg)`. Astro resizes and compresses it for you. Always write a real description; it's what screen readers announce.

---

That's everything you need. Delete this post when you no longer need the reminder.

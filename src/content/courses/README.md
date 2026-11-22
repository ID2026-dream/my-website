# Reading courses

Each folder in here is one reading course. It appears at
`/courses/<folder-name>/` on the website, and in the Teaching page and the
site menu.

## Add a course on github.com

1. Open the `src/content/courses` folder in your repository.
2. Choose **Add file → Create new file** and type the name
   `my-course/index.md` (the slash makes the folder). Use lower case and
   hyphens for the folder name: it becomes the web address.
3. Copy the contents of `example-course/index.md`, change the title, summary
   and introduction, and set `draft: false`. Commit.
4. Add one file per unit in the same folder, named `01-first-topic.md`,
   `02-second-topic.md` and so on. Copy the layout from the example units.
5. The site rebuilds by itself after each commit. The course is live a minute
   or two later.

## Keep a course hidden while you write it

Leave `draft: true` in `index.md` (or in a unit) and it stays off the live
site. Change it to `draft: false` when it is ready.

## Icons

Use any of these names for `icon`: quantum, network, sensor, shield, pulse,
wave, person, briefcase, trophy, flask, book, cap, megaphone, building,
people, lock, sun, bolt, globe, nodes.

## Slides, notes and other files

Upload PDFs (or .pptx, .docx, .zip, .ipynb, .py, .csv files) into the course
folder, then list them at the top of a unit:

```yaml
downloads:
  - label: Detailed notes (28 pages)
    file: Unit01-Categories-Notes.pdf
  - label: Slides (47 pages)
    file: Unit01-Categories-Slides.pdf
```

They appear as buttons under "Unit materials". If a file name is misspelt, the
site build stops with a message naming the missing file, so nothing broken
goes live. `category-theory-for-networks` is a complete example.

## Images

Upload images into the course folder and link to them from a unit with
`![What the image shows](./my-image.png)`.

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

Icons come from the Phosphor set (https://phosphoricons.com). Use any of
these names for `icon`:

anchor, arrow-square-out, arrows-left-right, arrows-merge, arrows-split, atom, bezier-curve, book-open-text, books, brain, briefcase, broadcast, buildings, cell-tower, chalkboard-teacher, chart-line-up, circles-four, circles-three, circles-three-plus, circuitry, compass, cube, eye, flask, flow-arrow, function, gear-six, git-fork, globe-hemisphere-west, globe-simple, graduation-cap, graph, handshake, heartbeat, hexagon, house, identification-badge, identification-card, infinity, intersect, leaf, lightbulb-filament, lightning, link, lock-key, megaphone, microscope, path, pencil-simple-line, pipe, plant, polygon, robot, share-network, shield-check, sigma, solar-panel, sparkle, spiral, sun, target, tractor, tree-structure, trophy, user-circle, user-square, users-three, vector-two, wave-sine, waveform, waves, wind.

To use a Phosphor icon that is not in this list, ask for it to be added to
`src/components/icon-data.ts`. An unknown name shows the book icon.

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

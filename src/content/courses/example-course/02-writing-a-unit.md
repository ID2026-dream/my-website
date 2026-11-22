---
title: Writing a unit
summary: The fields you can set at the top of each unit file.
label: Week 2
icon: pencil-simple-line
readings: []
---

Every unit file starts with a block between two `---` lines. Only `title` is required.

| Field | What it does |
| --- | --- |
| `title` | The unit's name |
| `summary` | One line shown under the title and on the course page |
| `label` | Replaces "Unit 2" with your own label, such as "Week 2" |
| `icon` | An icon name, such as `atom`, `graph`, `waves` or `book-open-text` (the full list is in the courses README) |
| `readings` | The list of readings, each with a `title` and optional `authors`, `source`, `year`, `url`, `note` and `optional` |
| `readingsIntro` | A line shown above the readings, such as "Read after finishing the notes" |
| `downloads` | Files in the course folder to offer as buttons, each with a `label` and a `file` name |
| `draft` | Set to `true` to hide the unit while you write it |

Units appear in the order of their file names, so start each name with a number: `01-`, `02-`, `03-`.

# My website

A personal site with a home page, a list of projects, a blog and an about page. Built with [Astro](https://astro.build) and published free on GitHub Pages.

## Run it on your computer

You need [Node.js](https://nodejs.org) version 22.23 or newer and [Git](https://git-scm.com).

```sh
npm install      # first time only
npm run dev      # starts the site at http://localhost:4321
```

The page reloads as you save files. Stop it with `Ctrl+C`.

## Make it yours

| What                          | Where                                    |
| ----------------------------- | ---------------------------------------- |
| Your name, intro, email, links | `src/site.config.ts`                     |
| Projects                      | `src/content/projects/` (one `.md` file each) |
| Blog posts                    | `src/content/blog/` (one `.md` file each)     |
| About page                    | `src/pages/about.md`                     |
| Colours and fonts             | the top of `src/styles/global.css`       |
| Favicon                       | `public/favicon.svg`                     |

The example projects and posts are placeholders. Replace or delete them before you share the site. The post _How to add a post to this site_ explains the Markdown format.

## Put it on GitHub

1. Sign in to GitHub and [create a new repository](https://github.com/new). Name it `my-website` (or anything you like). Leave it **empty**: don't add a README, .gitignore or licence, because this folder already has them.
2. In a terminal, inside this folder, connect it to your new repository and push:

   ```sh
   git remote add origin https://github.com/YOUR-USERNAME/my-website.git
   git push -u origin main
   ```

3. In the repository on GitHub, go to **Settings > Pages** and set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for the "Deploy to GitHub Pages" run to finish (about a minute). Your site is then live at `https://YOUR-USERNAME.github.io/my-website/`.

From now on, every push to `main` rebuilds and republishes the site.

**Want the site at `https://YOUR-USERNAME.github.io/` with no folder at the end?** Name the repository exactly `YOUR-USERNAME.github.io` instead. Nothing else needs to change.

**Using your own domain?** Add it under **Settings > Pages > Custom domain**. The workflow picks up the new address on the next push.

## Everyday Git

```sh
git status                      # see what changed
git add .                       # stage everything
git commit -m "Add post about X" # save a snapshot
git push                        # publish
```

The first commits in this repository were made by Claude when it set up the project. Your own commits will use the name and email in your Git settings (`git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"`).

## Commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Run the site locally with live reload         |
| `npm run build`   | Build the finished site into `dist/`          |
| `npm run preview` | Preview the built site before you push        |

## How it's organised

```text
.github/workflows/deploy.yml   publishes to GitHub Pages on every push
public/                        files copied as-is (favicon)
src/
  components/                  header, footer, project and post lists
  content/blog/                blog posts (Markdown)
  content/projects/            projects (Markdown)
  layouts/                     page shells shared by every page
  pages/                       one file per page; the file path is the URL
  styles/global.css            colours, fonts and shared styles
  site.config.ts               your name, intro and links
astro.config.mjs               Astro settings
```

# Crestwood Painting Website — Handover Guide

**Site:** https://crestwoodpainting.com
**Written for:** someone taking over the website who may not be technical.

This guide never contains passwords, codes or keys. It tells you *which* account does what and *where* the login is kept. Anything marked **⚠ Owner to confirm** is something that cannot be seen from the website files and needs the current owner to fill in before handover.

## How to use this guide

- **Part A (sections 1–10)** is for an **Editor + light admin**: someone who updates pages and blog posts, keeps accounts in order, and does basic troubleshooting.
- **Part B (section 11)** is for a **Full owner**, or a developer they hire.
- If something is broken right now, go straight to [Troubleshooting](#10-troubleshooting-and-who-to-call).

## Contents

1. [What this is, in plain words](#1-what-this-is-in-plain-words)
2. [Big-picture map](#2-big-picture-map)
3. [Security and safety](#3-security-and-safety)
4. [Account and access checklist](#4-account-and-access-checklist)
5. [How the files are organized](#5-how-the-files-are-organized)
6. [Everyday tasks, step by step](#6-everyday-tasks-step-by-step)
7. [What happens automatically](#7-what-happens-automatically)
8. [Setting up a new computer](#8-setting-up-a-new-computer)
9. [Git, simplified](#9-git-simplified)
10. [Troubleshooting and who to call](#10-troubleshooting-and-who-to-call)
11. [Part B: for the full owner](#11-part-b-for-the-full-owner)
12. [Glossary and the "if something breaks" one-pager](#12-glossary-and-the-if-something-breaks-one-pager)
13. [Open items for the current owner to confirm](#13-open-items-for-the-current-owner-to-confirm)

---

## 1. What this is, in plain words

The website is **not** a database-driven site like WordPress. There is no admin dashboard with a "Publish" button. Instead:

- Every page and blog post is a **plain text file** (written in a simple format called Markdown), plus photos.
- A free tool called **Hugo** reads all those files and **builds** the finished website, a bundle of ordinary web pages.
- A hosting service called **Netlify** publishes that bundle to the internet.
- A service called **GitHub** stores all the files and **every past version** of them.

A way to picture it:

| Piece | Think of it as |
|---|---|
| GitHub | The **filing cabinet**. Keeps every file and every past version. |
| Hugo | The **printing press**. Turns the files into finished pages. |
| Netlify | The **newsstand**. Displays the finished pages to the public at your web address. |
| Domain registrar | The **street sign**. Points `crestwoodpainting.com` at the newsstand. |

**Why it is built this way:** it is fast, cheap to host, very secure (there is no login page on the public site for hackers to attack), and every change can be undone.

**The catch:** changes are made by editing files and "saving" them to GitHub, not by clicking around on the live site. Section 6 walks through this.

---

## 2. Big-picture map

```
  You edit a file                     (on your computer, or in GitHub's web editor)
        │
        ▼
  GitHub  ── stores the change on the "mk" branch (the live version)
        │
        │  GitHub tells Netlify "something changed"
        ▼
  Netlify ── runs Hugo, which builds the finished website  (about 1–2 minutes)
        │
        ▼
  crestwoodpainting.com  ── updated for the public
```

### Who does what

| Service | What it does for the site |
|---|---|
| **GitHub** (repository `boetiusj/hugo`) | Stores all site files and their full history. Also runs one small daily robot job (see section 7). |
| **Hugo** (v0.147.3 "extended") | The program that builds the site. It runs on Netlify automatically; you only install it on your own computer if you want to preview changes. |
| **Netlify** | Builds and hosts the site, provides the secure padlock (HTTPS), and receives the **contact-form** messages. |
| **Domain registrar / DNS** | Owns the name `crestwoodpainting.com` and points it at Netlify. ⚠ Owner to confirm which company. |
| **YouCanBook.me** | The scheduling calendar shown after someone enters their zip code on the booking page. |
| **PayPal** | The payment button on the Payments page. |
| **Google Tag Manager / Analytics** | Visitor statistics (container `GTM-WB46J8DN`). Only runs on the live site, not on previews. |
| **Google Search Console** | Shows how the site appears in Google search; where sitemaps and indexing problems are reported. |
| **Google Business Profile / Places API** | The business listing and star rating. A daily job copies the current rating and review count onto the website. |
| **Google Maps** | The map on the Project Map page. |

---

## 3. Security and safety

**What already protects the site**

- **No admin login on the public site.** Visitors only receive finished pages, so there is nothing on the site itself to hack into. The real "keys" are your *accounts* (GitHub, Netlify, domain, Google).
- **HTTPS (the padlock)** is provided by Netlify. Old `http://` and `www.` addresses are automatically redirected to `https://crestwoodpainting.com`.
- **Everything is reversible.** GitHub keeps every version. A bad change can be undone (see section 6).
- **Test builds.** Netlify can build a private preview of a change before it goes live (section 6).
- **Secrets are kept out of the files.** The Google keys used by the daily review job are stored in GitHub's private "Secrets" area, not in the website files.

**What you must protect**

1. **Turn on two-factor authentication (2FA)** on GitHub, Netlify, the domain registrar, and the Google account. Losing access to the registrar or the Google account is the hardest problem to recover from.
2. **Keep all logins and recovery codes in a password manager.** ⚠ Owner to confirm which one, and who has the master login.
3. **Do not share the owner's login**; add people as named users or collaborators instead, so access can be removed later.
4. **Never paste keys or passwords into website files or chat.** If one is ever pasted into the files by accident, treat it as exposed and replace it.
5. **Know the renewal dates.** An expired domain takes the site offline regardless of everything else. Put the renewal date on a calendar.

**If an account is compromised:** change its password, revoke active sessions, rotate any keys it held, and review recent activity (GitHub "commits" history; Netlify "Deploys" list). Any wrong change can be rolled back.

---

## 4. Account and access checklist

Fill in the blanks (in a private copy, **not** with passwords) when handing over. Anything marked "⚠" cannot be seen from the website files.

| Service | Purpose | Who owns/administers it | Where the login is kept | 2FA on? | Renewal/billing |
|---|---|---|---|---|---|
| GitHub (`boetiusj/hugo`) | Files & history | ⚠ | ⚠ | ⚠ | Free/paid? ⚠ |
| Netlify | Build & hosting, forms | ⚠ | ⚠ | ⚠ | ⚠ |
| Domain registrar | The address | ⚠ | ⚠ | ⚠ | **Renewal date:** ⚠ |
| DNS (may be same as registrar or Netlify) | Points domain at site | ⚠ | ⚠ | ⚠ | n/a |
| Google account (Search Console, Tag Manager, Analytics, Business Profile) | Stats & search | ⚠ | ⚠ | ⚠ | n/a |
| Google Cloud (Places API key) | Daily review badge | ⚠ | ⚠ | ⚠ | Billing alerts? ⚠ |
| YouCanBook.me | Estimate scheduling | ⚠ | ⚠ | ⚠ | ⚠ |
| PayPal (business) | Payments button | ⚠ | ⚠ | ⚠ | n/a |
| Email `admin@crestwoodpainting.com` | Where notices and form alerts go | ⚠ | ⚠ | ⚠ | ⚠ |

**Access levels you may want to give people:**

- *Editor:* can change GitHub files. Does not need Netlify or the registrar.
- *Admin:* GitHub write access plus Netlify team membership, to see deploys and form submissions.
- *Owner:* all of the above plus the registrar and Google accounts.

---

## 5. How the files are organized

The "filing cabinet" (the repository) contains these main places:

| If you want to change… | Look in… |
|---|---|
| A service or info page (Interior, Cabinets, Contact, FAQ, city pages like "Painter in Leawood") | `content/pages/` |
| A blog article | `content/blog/` |
| The top menu | `data/nav.yaml` |
| The list of services shown in grids on the home page and bottom of pages | `data/services.yaml` |
| Customer reviews shown on the home page | `data/reviews.yaml` |
| Phone number, email, social media links, logo | `config/_default/params.toml` |
| Photos | `assets/images/` (sorted by subject: `exterior/`, `interior/`, `cabinets/`, …) |
| Old web addresses that should forward to new ones | `static/_redirects` (and the `aliases` line at the top of a page) |
| Page layout and design (advanced) | `layouts/` and `assets/scss/` |
| Notes and plans | `CLAUDE.md`, `AUDIT.md`, `revisions.md`, `seo-plan-…md`, `git-fast.md`, `README.md` |

**Anatomy of a page file.** Each page starts with a block between `---` lines (the "front matter"), followed by the text:

```
---
title: "Interior Painting in Kansas City"
slug: "interior-painter-kansas-city"
description: "The text Google shows under the page title."
image: "/images/interior/some-photo.webp"
---

The body text of the page goes here. **Bold**, *italic*, and [links](/contact/) are easy.
```

- `slug` is the page's web address, so **don't change it casually**; changing it breaks existing links and Google rankings. If you must, add the old address under `aliases:` so it forwards.
- `description` is the snippet shown in Google results.
- `index: false` hides a page from Google.
- A page can contain **FAQs** inside its front matter (see `content/pages/frequently-asked-questions.md` for an example to copy).

**Daily-change warning:** a robot adds a small commit to `mk` every day (section 7). Always "pull" the latest before editing on your own computer.

---

## 6. Everyday tasks, step by step

### The two ways to edit

- **Easiest (any computer, no installation):** edit directly on GitHub.com. Open the file, click the pencil ✏️, make the change, then "Commit changes". For the live site, commit to the `mk` branch.
- **Safer for bigger changes:** edit on your computer, preview it, then upload (section 8).

> **Tip:** for anything beyond a typo, use the preview step below first.

### Edit the text of an existing page

1. On GitHub, open `content/pages/` and click the page.
2. Click the pencil ✏️.
3. Change the text below the second `---` line. Leave the top block alone unless you mean to change it.
4. Click **Commit changes**. For a cautious route, choose "Create a new branch" instead. Netlify will then build a **private preview** you can check before it goes live.
5. Wait 1–3 minutes, then check the live page. Use a private/incognito window to avoid seeing an old saved copy.

### Add a blog post

1. In `content/blog/`, add a new file, e.g. `my-new-article.md`.
2. Copy the front matter from an existing post and change the title, date, summary, description, image, categories, and keywords.
3. Write the article below the front matter. Commit.
4. Related-post suggestions are picked automatically from the keywords and categories.

### Add or replace a photo

1. Upload the image to the right folder in `assets/images/` (use the web-friendly **.webp** format when possible, and keep file sizes small).
2. Point to it from the page's `image:` line, or in the text with `![Describe the photo](/images/folder/photo.webp)`.
3. Always write a short description (alt text) for accessibility and SEO.
4. Unused photos are parked in the `file - …` subfolders. Nothing there appears on the site.

### Add a new service, or change the menu

1. Create the new page in `content/pages/` (copy a similar one).
2. Add a block to `data/services.yaml` so it appears in the service grids:
   ```
   - id: service-id
     title: Service Name
     url: /service-name/
     blurb: Short description.
   ```
3. To change the menu, edit `data/nav.yaml`. Keep the indentation exact (2 spaces per level). A wrong space can break the build.

### Preview before publishing

- **Without installing anything:** save your change on a **new branch** in GitHub. Netlify automatically builds a private preview link (shown in Netlify's "Deploys" list, and on a Pull Request).
- **On your computer:** run `hugo server -D` and open the address it shows (usually http://localhost:1313). See section 8.

### Publish

- Saving to the `mk` branch **is** publishing. Netlify rebuilds the site by itself.

### Undo a mistake

1. On GitHub, open the **Commits** list for `mk` and find the bad change.
2. Click it, then use **Revert**. This creates a new "undo" change; nothing is lost.
3. Or, in **Netlify → Deploys**, find the last good deploy and choose **Publish deploy** to put that version back instantly while you sort out the cause.

### Confirm the live site updated

- Netlify → **Deploys**: the newest should say "Published" (green). "Failed" (red) means the site stayed on the previous good version. Click it to see the reason (see section 10).
- View the page in a private window.

---

## 7. What happens automatically

| What | When | Where it runs | What it does |
|---|---|---|---|
| **Site rebuild** | Every time a change is saved to `mk` | Netlify | Runs Hugo, publishes the result. It also runs a check that the breadcrumb data for Google is present. |
| **Preview builds** | When a branch or pull request is created | Netlify | Builds a private copy for testing. |
| **Google review badge refresh** | Daily around 05:17 UTC (≈ 11–midnight US Central) | GitHub ("Refresh Google Reviews") | Fetches the current star rating and review count, saves them to `data/googleReviews.json`, commits the change to `mk`, and triggers a Netlify rebuild. Can also be run by hand from GitHub → Actions. |
| **Contact-form messages** | When a visitor submits | Netlify Forms | Stored in Netlify and (if set up) emailed. ⚠ Owner to confirm where notifications go. |

**Intentional quirks (not bugs):**

- The main branch is called **`mk`**, not `main` or `master`.
- **Minification is turned off on purpose** (it was corrupting the hidden data that Google reads).
- Pages under `/ai/` are experiments. They are hidden from Google and point to the main version.
- Visitor tracking (Google Tag Manager) only runs on the real site, not in previews or on your computer.
- The booking page address is now `/estimate-scheduler/`. The old `/book-us/` address forwards there.

---

## 8. Setting up a new computer

### Which route do I need?

| Goal | Route |
|---|---|
| Fix a typo, edit text, add a blog post | **Route 1: browser only.** No installation. Works on any computer, including a Chromebook or tablet. |
| Preview the site, edit many files, work offline | **Route 2: install locally.** |

### Route 1: browser only (any device)

1. Create or use a GitHub account and ask the owner to add you as a **collaborator** on the repository `boetiusj/hugo`. ⚠ Owner to confirm.
2. Go to the repository and edit files as described in section 6.
3. *Optional:* press the `.` (period) key on the repository page to open GitHub's built-in editor, a VS Code-style editor right in the browser.
4. Use Netlify's branch previews to check your work.

### Route 2: install locally

You need four things on your computer:

| Tool | Why | Notes |
|---|---|---|
| **Git** | Downloads/uploads the files | Free |
| **Hugo (extended edition), version 0.147.3** | Builds the preview | Use the "extended" edition and **this version**. Newer versions can change behavior. |
| **A text editor**, e.g. **VS Code** | Edit files comfortably | Free |
| **A GitHub login** | To download and save changes | |

Then, in every case: **download ("clone") the files**, **run the preview**, **open it in a browser**.

#### Windows

1. Install **Git for Windows** (git-scm.com) and **VS Code** (code.visualstudio.com).
2. Install Hugo. Easiest: open PowerShell and run `winget install Hugo.Hugo.Extended`. Or download the "extended" Windows `.zip` for **v0.147.3** from the Hugo releases page on GitHub, unzip it, and add it to your PATH.
3. Close and reopen PowerShell, then check: `hugo version`. It should say `extended` and `0.147.3` (a slightly newer version will usually still preview fine; see section 11 for pinning it).
4. Download the files: `git clone https://github.com/boetiusj/hugo.git`, then `cd hugo`, then `git switch mk`.
5. Preview: `hugo server -D`, then open http://localhost:1313.

#### macOS

1. Install Homebrew (brew.sh), then: `brew install git hugo`. (Homebrew's Hugo is the extended edition.)
2. Install VS Code. Then follow steps 4–5 above in Terminal.

#### Linux (Debian/Ubuntu and similar)

1. `sudo apt install git`.
2. Install Hugo **extended**. The `apt` copy is often too old, so download the `hugo_extended_0.147.3_linux-amd64.deb` file from Hugo's GitHub releases page and install it with `sudo dpkg -i <filename>.deb`.
3. Install VS Code from code.visualstudio.com (the `.deb` package), then follow steps 4–5 above in a terminal.

#### Chromebook

- **Simplest:** use **Route 1** (browser only).
- **Full setup:** turn on the **Linux development environment** (Settings → Advanced → Developers → Linux → Turn on). That gives you a Debian terminal. Then follow the **Linux** steps above. If the Chromebook uses an ARM processor, download the `arm64` Hugo file instead of `amd64`.
- Preview: Chrome OS forwards `localhost:1313` from the Linux container to Chrome automatically.

### "Does it work?" check

After `hugo server -D`, you should see "Web Server is available at http://localhost:1313". Open it and you should see the site homepage. Edit a page, save, and the browser refreshes by itself. Press `Ctrl+C` in the terminal to stop.

### Sending your changes live from a local copy

```
git pull                     (get the latest, including the daily review-badge update)
   ... make your edits, preview them ...
git add -A
git commit -m "Short description of what you changed"
git push
```

If you are on `mk`, this goes live. See section 9 for the safer branch method.

---

## 9. Git, simplified

| Word | What it means |
|---|---|
| **Repository ("repo")** | The project folder plus its complete history. |
| **Clone** | Download a copy of the repo to your computer. |
| **Commit** | Save a snapshot of your changes with a short note. |
| **Push** | Upload your commits to GitHub. |
| **Pull** | Download other people's/robots' newest changes. |
| **Branch** | A separate workspace so you can try changes without touching the live site. |
| **`mk`** | The live branch. Anything pushed here goes on the public site. |
| **Pull request (PR)** | A request to merge your branch into `mk`, with a preview and a chance to review. |
| **Revert** | Undo a commit by adding a new commit that reverses it. |

**Safe routine for a non-trivial change**

1. `git switch mk` then `git pull --ff-only` (start from the latest).
2. `git switch -c fix/short-name` (make your own branch).
3. Make the change, preview it, `git add -A`, `git commit -m "…"`.
4. `git push -u origin fix/short-name`. Netlify builds a private preview.
5. If it looks right, merge it into `mk` (via a Pull Request on GitHub, or follow the longer steps in `git-fast.md`).
6. Delete the branch.

---

## 10. Troubleshooting and who to call

| Symptom | Likely cause | What to try |
|---|---|---|
| Change doesn't show on the live site | Still building; or your browser saved an old copy | Check Netlify → Deploys for "Published". Reload in a private window. |
| Deploy is red / "Failed" | A typo in a file (often the top `---` block or menu spacing) | Open the failed deploy, read the error line near the bottom, fix that file. The old site stays live meanwhile. If stuck, **revert** your last commit. |
| A page disappeared or shows "Page not found" | Its `slug` was changed, or `draft: true` is set | Check the file's top block; add the old address under `aliases:`. |
| A picture is missing | Wrong file path or name (capitals matter) | Compare the path in the page to the real file name in `assets/images/`. |
| Menu not updating | Spacing error in `nav.yaml` | Check the 2-space indentation. |
| The review stars/count look stale | Daily job failed (e.g., Google key problem) | GitHub → Actions → "Refresh Google Reviews". Read the red step. Most likely the Google key or billing needs attention. |
| Contact form messages aren't arriving | Netlify Forms notification setting, or spam filtering | Netlify → Forms → check submissions and notifications. |
| Booking calendar doesn't appear | YouCanBook.me issue, or zip code outside service area (by design) | Test with a valid zip code; check the YouCanBook.me account. |
| Whole site down / "domain" error | Domain expired or DNS changed | Check the registrar and Netlify → Domain settings **first**. |
| Local preview won't start | Wrong Hugo version or not the "extended" edition | Run `hugo version`; install v0.147.3 extended. |

**When to hire a developer:** layout or design changes, schema markup problems, Hugo upgrades, anything involving `layouts/`, `netlify.toml`, or DNS. Give them this guide, `CLAUDE.md` and read-only/collaborator access, never your personal passwords.

**Who to call** ⚠ Owner to confirm: current developer/contact: ____; domain registrar support: ____; Netlify support: support.netlify.com; GitHub support: support.github.com.

---

## 11. Part B: for the full owner

*(Technical overview for taking over the engineering side. `CLAUDE.md` has the full detail.)*

**Stack:** Hugo 0.147.3 extended, Bootstrap-based theme (originally Themefisher Megakit), custom SCSS compiled through Hugo Pipes, jQuery/Bootstrap JS. Netlify build: `hugo --gc -b $URL` plus a breadcrumb verification grep (see `netlify.toml`). The Hugo version is pinned in `netlify.toml` per context, so pin your local version to match.

**Branching and deploy:** `mk` is the production branch and deploys on push. Other branches/PRs produce deploy previews (`--buildFuture`). The workflow is rebase-based (`git-fast.md`): feature branch → rebase on `origin/mk` → fast-forward merge → delete branch. The review-refresh bot pushes directly to `mk`, so **always `git pull --ff-only` first**.

**Content model:** sections `pages` (permalinks `/:slug/`), `blog` (root-level slugs, categories only), and `ai` (`/ai/:slug/`, noindex, canonical to the non-ai URL). FAQs live in page front matter and render via `layouts/partials/faqs.html`. Service grids appear on `pages` unless blocked or `show_service_links: false`.

**Data-driven components:** `data/nav.yaml`, `data/services.yaml`, `data/reviews.yaml`, `data/googleReviews.json` (bot-maintained).

**Structured data (JSON-LD):** separate partials (breadcrumb, knowledge panel, service, page, image), each tagged with a `data-partial` attribute. Minification is disabled in Netlify contexts because it corrupted JSON-LD.

**Redirects:** `static/_redirects` (canonical host and scheme normalization, page moves) plus per-page `aliases`.

**SEO tooling:** `static/robots.txt`, `static/llms.txt`, sitemap with `sitemap.xsl`. Plans/snapshots: `seo-plan-10-14-26.md`, `seo-snapshot-10-22-26.md`, `AUDIT.md`.

**Secrets (GitHub → Settings → Secrets → Actions):** `GOOGLE_PLACE_ID`, `GOOGLE_API_KEY`, `NETLIFY_BUILD_HOOK_URL`. Rotate the key in Google Cloud and update the secret if it is ever exposed. Restrict the key to the Places API.

**Forms:** contact shortcodes use Netlify Forms (`netlify` attribute). Booking uses an embedded YouCanBook.me iframe; payments use a PayPal hosted button/link.

**Open backlog** (see `revisions.md`): Google Maps performance, hCaptcha on forms, privacy-friendlier analytics, interior service pages (basements, bedrooms, lofts/condos, offices), top-of-page button on long pages.

**Upgrading Hugo:** change `HUGO_VERSION` in `netlify.toml`, build locally with the same version, test a branch preview, then merge.

---

## 12. Glossary and the "if something breaks" one-pager

### Glossary

- **Build:** Hugo turning the text files into the finished website.
- **Deploy:** Netlify publishing a build.
- **Front matter:** the block between `---` lines at the top of a page holding its title, address, and settings.
- **Markdown:** a simple way of writing formatted text (`**bold**`, `# Heading`, `[link](/page/)`).
- **Slug:** the last part of a page's web address.
- **Alias:** an old address that forwards to a new one.
- **Schema / JSON-LD:** hidden data that tells Google what a page is about (business, service, breadcrumbs).
- **DNS:** the internet's address book that connects a domain name to the host.
- **2FA:** a second login step, such as a phone code.
- **Netlify Forms:** Netlify's built-in handling of contact-form submissions.

### If something breaks: one-pager

1. **Is the site down for everyone?** Check the domain and DNS (registrar, then Netlify → Domain settings).
2. **Did it break right after a change?** Netlify → Deploys → publish the last green deploy; then fix or revert the change on GitHub.
3. **Is it just one thing?** Check the table in section 10.
4. **Can't fix it in 30 minutes?** Revert to the last good version and call a developer.
5. **Suspect a hacked account?** Change passwords, revoke sessions, and rotate keys. Then review recent GitHub commits and Netlify deploys.

---

## 13. Open items for the current owner to confirm

- [ ] Domain registrar and DNS host, account owner, and renewal date
- [ ] Password manager used, and who holds the master login/recovery codes
- [ ] Netlify account owner, plan, and where form notifications go
- [ ] GitHub account/organization owner; who else has admin access
- [ ] Google account(s) owning Search Console, Tag Manager/Analytics, Business Profile, and the Places API key/billing
- [ ] YouCanBook.me and PayPal account owners
- [ ] Who receives mail at `admin@crestwoodpainting.com`
- [ ] Trusted developer/contact for emergencies
- [ ] Whether Netlify's "build hook" and GitHub secrets are all current
- [ ] Confirm `CLAUDE.md` mentions of `/book-us/` are updated to `/estimate-scheduler/`

# Cleanup Audit — Unused, Redundant, Outdated

Date: 2026-07-18 · Branch: `audit/cleanup` (sandbox copy at `/home/mike/hugo-sandbox`; original repo untouched)

**Method.** Deterministic baseline build (Hugo 0.147.3 extended, matches Netlify pin; two consecutive builds byte-identical, so all later diffs are pure signal). Reference analysis over content, layouts, data, config, SCSS/JS, and the built output; no dynamic partial-name calls exist in the codebase, so zero-reference results are authoritative. Every "zero refs" claim below was double-checked against dynamic reference paths (printf-built SVG names, frontmatter params, data files, CSS `url()`, case-insensitive basenames, built-output presence). Live-site spot checks via HTTPS where noted.

**Scope decisions (yours).** All four areas audited. Excluded from any action: `file - *` parked archives (279 files, 514M), the `/ai/` section, outdated *content* (flag + suggest only).

---

## A — Safe to remove (zero references, verified)

### A1. Plugin libraries never loaded — 3.56M
Only jquery and bootstrap are loaded (102 pages each, via `scripts/index.html`). These ship to every deploy unused:
- `static/plugins/fontawesome/` (3.0M) — no reference anywhere
- `static/plugins/themify/` (468K) — no reference anywhere
- `static/plugins/slick/` (88K) — never loaded; see A2
- `static/plugins/google-map/` (8K) — loader gated on `.Params.googleMaps`, which **no page sets** (map.md sets `googleMap`, no `s`, which nothing reads; the page's actual map is a My Maps iframe needing no JS). Removing the loader block also removes a hardcoded Google API key from `scripts/index.html`.

### A2. Dead slick carousel cluster
- `static/script.js` lines 5–13: `.slick()` init inside an existence guard that always fails (plugin never loaded) — silent dead code
- `.slick-*` rules in `assets/scss/templates/_review.scss` (line 27 area)

### A3. Web fonts never used — 220K
- `static/fonts/` — all 18 woff2 files referenced only by `assets/scss/archive_fonts.scss`, which is imported nowhere. Active font stack is system-ui (`templates/_system-ui-fonts.scss`). Remove fonts + `archive_fonts.scss`.

### A4. Shortcodes with zero uses (5 of 18)
`line_break`, `paypal`, `sub`, `text`, `youtube-enhanced` — no `{{</* */>}}` / `{{%/* */%}}` form anywhere in content or layouts (incl. FAQ frontmatter rendered via RenderString).

### A5. Partials with zero callers (7 of 59)
- `page-ld.html` **and** `page-ld-fixed.html` — superseded; head.html actually calls `page-ld-REALLY-fixed.html` (suggest renaming it to `page-ld.html` in the same batch, one-line head.html edit)
- `image.html` — predecessor of `template-image.html` (7 callers); still contains a debug `warnf`
- `blog/comments.html` — comments disabled in params.toml too
- `blog/pager.html`
- `blog/excerpt-meta.html` — references nonexistent `images/svg/some-path.svg`
- `scripts/google_analytics.html` — analytics runs via GTM partials (`gtm_head`/`gtm_body`, env-gated); with it goes the now-unread `googleAnalytics = "G-Y229K0TNJR"` in config.toml

### A6. SCSS never imported (import graph is main.scss-only, verified)
- `assets/scss/_color.scss`
- `assets/scss/templates/_color-year.scss`
- `assets/scss/templates/_feature.scss`
- (`archive_fonts.scss` counted in A3)

### A7. Dead config params
- `blogPageTitleBkgnd` (params.toml) — zero template reads
- `googleMap: true` in `content/pages/map.md` — nothing reads it (see A1)

### A8. Unreferenced images — assets (action: **park** into `file - *` per your convention)
- `assets/images/bg/` — the **entire directory** (6 files, ~1.9M): bg-canada-snow-mist.webp, clapbd-bg.webp, cn-mist-trees.webp, green-brick.jpg, January.jpg, cnlake.webp. CSS backgrounds use static-root files instead.
- `assets/images/arts-crafts-house.webp` (9K)
- False positives cleared and **kept**: social/menu SVGs (inlined via `resources.Get` + printf), painters-whites.jpg, fuhgeddaboudit.jpg (case-insensitive refs found), other/logo-crestwood.webp (params.toml logo).

### A9. Unreferenced static files (static/ = copied verbatim; removal changes URLs, so these were checked hardest)
- `static/images/bg/` and `static/images/exterior/` — **empty directories**
- 15 old-generation SVGs in `static/images/svg/`: bkgnd-horiz-stripes, bkgnd-racquet_club_bricks, chevron-down-solid, dot-matrix-tile-88px (now inline data-URIs in `_section-backgrounds.scss`), facebook-logo-meta-2-svgrepo-com, hamburger-menu-svgrepo-com, hamburger, icon-shine, instagram-logo-facebook-2-svgrepo-com, instagram, pencil-alt, time, twitter, x-facebook-f, xx-fb (superseded by `assets/images/svg/*-crp.svg` + hamburger-menu.svg)
- Excluded from this list: `angle-up-solid.svg` (reserved for the planned top-of-page button, revisions.md) and `cwp-logo-email.png` (see B4)

---

## B — Confirm first (judgment calls)

1. **`test-mk/`** (11 files, 164K) — working notes: homepage/color/service-area design docs (Dec 2025–Jan 2026), strategy notes, blog prompt, architectural-styles draft, and `famil_tree` (personal genealogy, committed to the business repo May 2026). Recommend: move the folder out of the repo (Drive fits your organization scheme); git history retains everything regardless. `architectural-styles.md` may still be wanted (revisions.md lists "New page Architectural Styles" as open).
2. **`static/_redirects.off`** — 34 source paths not in the active `_redirects`. Spot-check: most are covered by Hugo aliases today (200s), but **`/colors-interior` 404s live** — one lost redirect, possibly more among the 34. Recommend: I test all 34 live, fold still-needed ones into `_redirects`, then delete the .off file.
3. **Node stubs** — `package.json` (no deps, no real scripts), `package-lock.json`, `node_modules/` (empty), `.node-version`. Netlify build is pure Hugo (netlify.toml); the reviews workflow runs on GitHub's runner. Recommend removal after a one-time check of the workflow file.
4. **Keep-with-caution statics** — `cwp-logo-email.png` (name implies email-signature hotlinking; URL must not change → **keep**), `logo-cwp.jpg` (67K, old logo, zero refs — same hotlink question, your call), `static/images/cnlake.webp` (753K, zero refs), `static/images/logo-crestwood.webp` (byte-duplicate URL of the live `/images/other/logo-crestwood.webp`).
5. **Root oddities** — `hugo.log` (accidental capture of `hugo help`, Aug 2025): delete. `.maps` (two map-embed snippets; the second is the embed project-map already uses): fold into revisions.md or delete. `scripts/sort-images.py`: one-off migration tool for the image reorg; references `DELETE-IMAGES/`/`MOVE-IMAGES/` dirs that no longer exist: delete or archive.
6. **Stale audit docs** — `unreferenced-images.md` (counts predate the reorg; superseded by this audit), `image-paths.md` (partial snapshot): delete both.
7. **`hugo.code-workspace`** misplaced inside `assets/scss/`: move to repo root or delete.
8. **`/pages/` auto-index** — Hugo publishes a bare section listing at `/pages/` (live, HTTP 200, indexable, not in sitemap). Recommend suppressing (a `content/pages/_index.md` with build options) or noindexing.

---

## C — Bugs & outdated content (flag + suggested fix; no action without your OK)

### Site-health bugs (found while auditing; high value, small fixes)
1. **config.toml TOML scoping bug → junk `/true/` page + RSS never disabled.** `disableKinds = ['RSS']` and `enableRobotsTXT = true` sit *below* `[taxonomies]`, so TOML parses them as taxonomy definitions. Hugo therefore creates a taxonomy whose plural is literally "true" → **`crestwoodpainting.com/true/` is live, indexable, duplicate-listing junk**, and RSS files generate everywhere (`/index.xml` live 200) despite the config's intent. Fix: move `disableKinds` above `[taxonomies]`; drop `enableRobotsTXT` (static robots.txt already serves, keeping behavior identical).
2. **Homepage LCP preload 404s.** `hero_bg: /images/hero/home.webp` (content/_index.md) — no `hero/` dir exists anywhere; live URL 404s. The hero actually renders `/images/january.webp`. Every homepage visit preloads a 404 while the real LCP image goes unpreloaded. Fix: point `hero_bg` at the real file (or preload `$hero.image` in head.html).
3. **Broken CSS background.** `_backgrounds.scss:2` → `url("../images/tulips2.webp")` — file doesn't exist (live 404). Fix: correct path or remove the rule.
4. **Doubled category links.** ≥3 blog posts (best-bedroom-colors, best-front-door-colors-for-your-home, builders-paint-is-crummy) emit hrefs to `/categories/categories/<term>/` → 404. Fix at the template/content link source.
5. **Nav Contact goes through a redirect hop.** `data/nav.yaml` links `/contact/`, an alias stub that meta-refreshes to `/contact-us/`. Fix: link `/contact-us/` directly.
6. **Old Google Maps API key ships in HTML.** map.md contains a commented-out block (old Upwork code) with an API key; HTML comments reach production. Fix: delete the comment block. (Second exposed key in scripts/index.html dies with A1.)
7. **`/ai/` canonicals point at 404s** (flag only — /ai/ excluded by your decision): the four variants map to pre-overhaul slugs (`/interior-painting/`, `/exterior-painting/`, `/painter-in-leawood-ks/`, `/painter-in-lees-summit-mo/`) that no longer exist.

### Orphan pages (no inbound links — most are intentional form-flow targets; listed for awareness)
Form/flow (keep): `/booking-thanks/`, `/regrets/`, `/regrets-wild/`, `/call-center-regrets/`, `/rrp-thank-you/`, `/thanks-for-your-payment/`, `/wild/` (wildcard scheduler), `/contact-us/` reachable only via the `/contact/` alias (see C5). Junk (fix via C1/B8): `/true/`, `/pages/`.

### Outdated-content flags (per your policy: no edits; suggested remedy per item)
- `blog/color-year.md` — "color of the year" content anchored to **2008**; refresh or retire
- `blog/exterior-painting-cost.md` — prices $4,500/$7,000/$15,000/$35,000; verify against 2026 pricing
- `blog/how-much-does-it-cost-to-paint-a-house-in-kansas-city.md` — cost anchor page; verify figures
- `pages/compare-painting-bids.md` — $10,000/$12,000 example bids
- `pages/daunting-colors.md` — 2002 reference + $15,000/$550/$400 figures
- `pages/commercial-painting-exterior.md` — $1,200 figure
- `blog/top-5-uninsured-contractor-questions.md` — $1,000 figure
- `pages/popcorn-ceiling-removal.md`, `pages/12-top-painter-questions.md` — minor $ mentions
- `blog/lead-paint-certification.md` — 2011 RRP framing; rule still current but copy reads dated
- External links: all 19 alive except `jacksongov.org` HHW page (403 to bots — verify by hand in a browser; linked from dispose-old-paint and proper-paint-storage)
- Fine as-is: "since 2007" mentions, reviews.md year archive, phone number consistent everywhere (816-805-4515)

---

## D — Doc updates (after A/B land)
- **CLAUDE.md**: remove the five deleted shortcodes from the list; drop slick/fontawesome/google-map mentions; logo lives at `assets/images/other/` not `static/images/`; analytics = GTM-WB46J8DN via gtm partials (config `googleAnalytics` gone); note `/true/` fix
- **revisions.md**: strike shipped items (wildcard booking page exists); optionally note this audit
- Delete superseded `unreferenced-images.md` / `image-paths.md` (B6)

---

## Proposed batches (each: apply → `HUGO_ENV=production hugo --gc` → recursive diff vs baseline shows only intended deltas → breadcrumb grep → commit)

| Batch | Contents | Effect |
|---|---|---|
| 1. Bug fixes | C1 config scoping, C2 hero preload, C3 tulips2, C4 category links, C5 nav contact, C6 map comment | kills /true/ + stray RSS, fixes 4 live 404 classes |
| 2. Dead code | A1–A7 (+ rename page-ld-REALLY-fixed → page-ld) | −3.8M per deploy, −35 files |
| 3. Images | A8 park to `file - *`, A9 static removals, B4 decisions | repo hygiene, URLs preserved for keepers |
| 4. Root files | B1–B3, B5–B8 per your per-item calls | root directory back to essentials |
| 5. Docs | D | docs match reality |

Outdated-content items (C flags) stay parked until you pick per-item: refresh / retire / leave.

**Excluded throughout:** `file - *` archives, `/ai/` pages, `public/`+`resources/` (generated), `.github/` reviews automation (active — runs daily, updates `data/googleReviews.json`), git history (2.1G `.git` — separate conversation if you ever want it slimmed).

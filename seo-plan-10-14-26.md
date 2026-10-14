# SEO Plan — crestwoodpainting.com (2026-10-14)

Basis: repo, local `public/` build, schema partials. No Search Console / GA / rank data was available, so priorities are inferred from the code. Item P0-1 would change the order of everything else.

## Current state

Technical base is sound: canonicals in place, clean sitemap (69 URLs, noindex pages excluded), well-structured schema (ProfessionalService, breadcrumb, service, aggregate rating), static site, 10 city pages and several service pages.

Weaknesses are content, local signals and measurement.

## Shortcomings, prioritized

### P0: fix first (high impact, low effort)

1. **No performance feedback loop.** Nothing in the repo shows Search Console or GBP insights in use. Verify Search Console, submit sitemap, pull 90 days of queries/pages, identify which city and service pages get impressions.
2. **City pages are thin and templated.** The ten `painter-in-*` pages are ~800–1000 words with near-identical structure, 33–60 character descriptions, and titles that are just "Painter in Leawood". They need local proof: neighborhoods, architectural eras, real jobs, local reviews, location-captioned photos. Highest-value fix.
3. **Meta descriptions weak or missing.** ~25 pages under 70 characters (wood-rot 22, touch-up-paint 34, tips-for-painting-trim 35, exterior-painting-cost 40, ...). Several have none (parkville, prairie-village, best-front-door-colors, color-tips-exterior-paint, ...). `_index.md` list pages have none and fall back to the placeholder "Default site description for SEO purposes." in `layouts/partials/head.html`. Remove or improve the fallback (`.Summary` / `.Params.summary`); never ship placeholder text.
4. **Homepage title is slogan + phone number.** "No Drips, No Drama | Book estimates online or 816-805-4515" has no keyword or geography. Move to e.g. "House Painters in Kansas City | Interior & Exterior | Crestwood Painting"; keep the slogan in the H1/hero. Description also lacks location/service terms.
5. **Google Business Profile not reflected on site.** Verify categories, service areas matching city pages, services list, monthly photos, steady review velocity (173 reviews at 4.7), review-request flow after jobs.

### P1: next 30–60 days

6. **Blog is effectively dormant.** 36 posts, ~4 since 2021 (3 dated 2026-01-02); ~20 from 2012–2014 never refreshed. Refresh cost posts first (exterior-painting-cost, how-much-does-it-cost-to-paint-a-house). Add a KC interior cost post. Show updated dates.
7. **Service architecture gaps.** Missing/stubbed: deck/fence staining (in schema `knowsAbout`, no page), basement / bedroom / condo-loft / office-interior pages (in revisions.md for years), per-service cost pages. wallpaper-removal-kansas-city is 167 words.
8. **Internal linking is nav-driven.** Add contextual links city ↔ service ↔ blog; cost posts → `/estimate-scheduler/`. Verify blog posts have `keywords` (related-posts threshold 30 depends on it).
9. **Schema completeness.** ProfessionalService lacks `address` locality/region, `hasMap`, `openingHoursSpecification`, GBP `sameAs`. Reviews page is 23,450 words; paginate or split by service/city. FAQ rich results no longer shown for commercial sites; FAQ content still useful for snippets/AI answers.
10. **`/ai/` section.** 9 noindexed variants canonicalized to main pages. Verify not in sitemap or internally linked; decide whether to keep, fold winners into main pages, or delete.

### P2: ongoing / polish

11. **Core Web Vitals.** Maps embed (facade / click-to-load), Bootstrap + jQuery weight, LCP image sizing. Run PageSpeed on home, a city page, reviews.
12. **Off-site authority.** Citation consistency (Yelp, BBB, Angi, Nextdoor, Houzz, chambers), links from PCA and Waldo Area Business Association, local sponsorships/press.
13. **Housekeeping.** Files with non-YAML front matter (interior-vs-exterior-paint-whats-the-difference, why-painters-wear-white, 12-top-painter-questions, booking-thanks, regrets, regrets-wild, frequently-asked-questions) — confirm titles/descriptions/indexing render. Confirm stray `public/true/` isn't published. Trim descriptions over ~160 chars (who.md is 228).

## Sequence

| When | Work |
|---|---|
| Week 1 | Search Console review, homepage title/description, fix description fallback, write descriptions for ~25 weak pages |
| Weeks 2–4 | Rewrite 10 city pages (local specifics, titles, descriptions). Start: Leawood, Overland Park, Lee's Summit, Mission Hills |
| Weeks 4–8 | Refresh cost posts, add missing service pages and per-service cost pages, cross-link |
| Ongoing | 1 post/month, GBP photos and reviews, schema additions, CWV, citations |

## Measurement

Impressions and clicks per city page; count of "painter + [city]" queries in top 10; GBP calls and direction requests; estimate-form conversions (GTM already installed).

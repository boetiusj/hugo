# Search Console Snapshot: 2026-10-22

Source: `data/seo/10-22-26/` (domain property `sc-domain:crestwoodpainting.com`, Web search, **last 3 months**, not 16). Queries.csv is capped at 1,000 rows; Google hides rare queries, so query-level clicks (66) are far below page-level clicks (332).

## Totals

| Metric | Value |
|---|---|
| Clicks | ~332 |
| Impressions | ~658,000 |
| CTR | ~0.05% |
| US share of clicks | 297 (89%) |
| Mobile / Desktop / Tablet clicks | 183 / 143 / 4 |
| Mobile / Desktop avg. position | 35.7 / 52.3 |

Search appearance: "Product snippets" 4,817 impressions, 6 clicks (see Notes).

## Headline findings

1. **Visibility exists but is on pages 3–6.** Generic "painter near me" style queries (307 queries, ~286,000 impressions) average position **45** and produced **5 clicks**. These are mostly local-pack/GBP-driven searches, and the website only rarely competes there.
2. **Informational blog posts drive most clicks.** Over half of all clicks (~190 of 332) come from six blog posts, plus 35 branded clicks. Service and city pages earn almost nothing.
3. **Kansas City-modified queries are the real opportunity.** 162 queries, ~23,000 impressions, avg. position **20.6**, only 7 clicks. Several sit on page 1 with zero or one click (house painters kansas city, 8.4; exterior house painting in kansas city, 8.8; painters kansas city, 9.6).
4. **City pages are not getting demand yet.** All 10 combined have ~5,300 impressions and **0 clicks**. Demand per city is small (100–900 impressions each). Rewriting them is still worthwhile but is not the biggest lever.
5. **High-volume service pages rank poorly.** cabinet-painting: 28,057 impressions, position 42.7, 2 clicks. interior-painting-kansas-city: 8,994 impressions, position 34, 4 clicks. exterior-painting-kansas-city: 5,519 impressions, position 30, 6 clicks.
6. **Homepage: 563,771 impressions, position 47, 89 clicks (0.02% CTR).** Nearly all impressions are non-converting generic queries.

## Pages: top by clicks

| Page | Clicks | Impr. | CTR | Pos. |
|---|---|---|---|---|
| / | 89 | 563,771 | 0.02% | 47.4 |
| /top-3-things-to-not-caulk/ | 79 | 3,760 | 2.1% | 6.2 |
| /vinyl-window-trim-color/ | 33 | 1,950 | 1.69% | 8.7 |
| /nail-pops-what-to-know/ | 31 | 12,522 | 0.25% | 6.6 |
| /why-do-painters-backroll/ | 17 | 5,550 | 0.31% | 8.6 |
| /painting-cedar-shake-shingles/ | 17 | 1,576 | 1.08% | 14.7 |
| /trim-joint-gaps/ | 7 | 918 | 0.76% | 7.7 |
| /essential-elements-of-a-painting-agreement/ | 7 | 583 | 1.2% | 8.5 |
| /exterior-painting-kansas-city/ | 6 | 5,519 | 0.11% | 29.9 |
| /wallpaper-removal/ | 6 | 4,944 | 0.12% | 27.3 |

## City pages (all 0 clicks)

| Page | Impr. | Pos. |
|---|---|---|
| painter-in-liberty | 938 | 18.9 |
| painter-in-prairie-village | 904 | 19.2 |
| painter-in-overland-park | 719 | 39.5 |
| painter-in-leawood | 580 | 15.3 |
| painter-in-lees-summit | 562 | 26.6 |
| painter-in-mission-hills | 451 | 28.9 |
| painter-in-belton | 342 (1 click) | 10.4 |
| painter-in-westwood | 288 | 29.4 |
| painter-in-loch-lloyd | 260 | 34.8 |
| painter-in-parkville | 104 | 24.0 |

## Quick wins: page 1–2 queries with ≥150 impressions and ~0 clicks

| Query | Impr. | Pos. |
|---|---|---|
| pop on siding | 8,801 | 5.8 |
| exterior paint crestmont | 1,105 | 5.7 |
| exterior paint merriwood | 989 | 7.3 |
| interior painting kansas city mo | 866 | 16.2 |
| interior painting contractor kansas city mo | 774 | 18.6 |
| exterior house painting in kansas city | 662 | 8.8 |
| exterior house painters kansas city | 604 | 19.7 |
| kansas city painters | 482 | 14.0 |
| house painters kansas city | 412 | 8.4 |
| kansas city painting contractor | 392 | 20.0 |
| what is back rolling paint | 394 | 9.0 |
| overland park painters | 239 | 6.6 |

("pop on siding", "exterior paint crestmont" and "exterior paint merriwood": unverified. Nothing in `content/`, `data/` or `layouts/` mentions crestmont or merriwood. In Search Console, open each query and check its Pages tab to see which URL ranks before deciding what they are.)

## Query groups

| Group | Queries | Clicks | Impr. | Avg. pos. |
|---|---|---|---|---|
| "near me" / "my area" | 307 | 5 | 285,869 | 45.3 |
| Kansas City-modified | 162 | 7 | 23,261 | 20.6 |
| Cabinet | 43 | 2 | 26,954 | 42.3 |
| Wallpaper | 31 | 4 | 4,391 | 28.5 |
| Question-form | 22 | 4 | 1,935 | 22.5 |
| Branded ("crestwood painting") | n/a | 35 | 100 | 4.2 |

## Notes

- **Fragment URLs in the index:** `/#submenu-contact`, `/#submenu-painting-services`, `/#submenu-why-us` each show 702 impressions. Nav anchors are being reported as URLs; harmless but worth confirming they aren't linked in a way that creates crawlable duplicates.
- **Old or variant URLs still appearing:** `/wallpaper-removal/` (the file is `wallpaper-removal-kansas-city.md`), `/top-3-things-to-not-caulk` without trailing slash, `/top-3-things-to-NOT-caulk/`, `/top-3-things-to-dont-caulk`, `www.` variant. Confirm these redirect to the canonical URL.
- **Product snippets (4,817 impressions):** Check which pages produce them and whether the markup is intended. Likely review/offer markup on service pages.
- **Non-US clicks (~35):** Canada, Pakistan, Nigeria, UK, Australia. Mostly blog traffic. Not a concern.
- **Data limitation:** only 3 months of data were exported. Re-export 16 months for seasonality and for a before/after baseline.

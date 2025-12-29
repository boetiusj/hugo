# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site for Crestwood Painting (crestwoodpainting.com), a painting contractor business in Kansas City. The site includes service pages, blog content, booking forms, and structured data for SEO.

## Key Architectural Decisions

### Why Data-Driven Components
Navigation (`data/nav.yaml`) and services (`data/services.yaml`) are separated from templates to allow content updates without touching layout code. This makes it easier to add/remove services and update menus without risk of breaking templates.

### Why Separate Schema Partials
Each type of structured data (breadcrumb, service, image, knowledge panel) is isolated in its own partial. This:
- Makes schema debugging easier (each partial has `data-partial` attribute)
- Allows selective inclusion based on page type
- Prevents schema bloat on pages that don't need all markup types

### Why /ai/ Section with Canonicalization
The `/ai/` content section allows testing AI-generated content variants while:
- Preventing duplicate content penalties (noindex on /ai/ pages)
- Preserving SEO equity (canonical points to main version)
- Allowing side-by-side comparison of content approaches

### Why Minification Disabled
Netlify build contexts have `--minify` removed because minification was introducing character escaping issues in JSON-LD schema markup. Hugo Pipes still minifies CSS. Trade-off: slightly larger HTML for correct schema markup.

### Why Service Links Conditional Logic
Service grids appear automatically on service pages to cross-promote, but are explicitly blocked on transactional pages (booking, contact, payments) where the user has a specific goal and additional links would be distracting.

### Why FAQs in Frontmatter
Rather than separate FAQ files, FAQs are embedded in page frontmatter because:
- FAQs are specific to each page's context (not reused across pages)
- Keeps all page content in one place
- Allows markdown in answers via `RenderString`
- Each FAQ gets a unique anchor ID for deep linking

## Build & Development Commands

### Local Development
```bash
# Start Hugo development server with drafts
hugo server -D

# Build for production (same as Netlify uses)
hugo --gc -b https://crestwoodpainting.com/

# Build with minification (for testing)
hugo --gc --minify --baseURL="/"
```

### Deployment
- **Main branch**: `mk` (not main/master)
- Deployed via Netlify automatically on push to `mk` branch
- Hugo version: 0.147.3 extended (specified in netlify.toml)
- Build output: `public/` directory
- Build includes verification: greps for breadcrumb schema in output

### Git Workflow
This project uses a rebase-based feature branch workflow (see `git-fast.md` for full details):

1. **Start from mk**: `git switch mk && git pull --ff-only`
2. **Create feature branch**: `git switch -c fix/short-name`
3. **Work and commit**: Make changes, test with `hugo --gc --minify`
4. **Rebase before merge**: `git fetch origin && git rebase origin/mk`
5. **Fast-forward merge to mk**: Prefer `--ff-only`, fallback to `--no-ff`
6. **Clean up branch**: Delete local and remote feature branch

**Key conventions**:
- Always rebase feature branches on latest `mk` before merging
- Use `--force-with-lease` when pushing after rebase
- Test build (`hugo --gc --minify`) before committing
- Keep mk in sync: `git pull --ff-only` and `git push`

## Content Architecture

### Content Sections
1. **Pages** (`content/pages/`) - Main service and informational pages
   - Permalink structure: `/:slug/`
   - Service pages include conditional service link grids (unless blocked or disabled)
   - **Frontmatter options**:
     - `slug` - Locks the canonical URL path
     - `aliases` - Array of old URLs to redirect from (e.g., `/faqs`, `/FAQs/`)
     - `index: false` - Prevents search engine indexing
     - `show_service_links: false` - Disables service grid on specific pages
     - `nofooter: true` - Hides footer
     - `image` - Featured image path (displays at top of page)

2. **Blog** (`content/blog/`) - Articles and tips
   - Permalink structure: `/:slug/` (root-level, same as pages)
   - Categories used (tags disabled in config)
   - Related posts auto-generated using keywords, categories, and date weights

3. **AI** (`content/ai/`) - AI-generated content variants
   - Permalink structure: `/ai/:slug/`
   - Automatically noindexed with canonical pointing to non-ai version (`/slug/`)
   - Prevents duplicate content issues while allowing testing of AI content

### Homepage Structure
The homepage (`layouts/index.html`) is composed of partials in `layouts/partials/home/`:
- `hero.html` - Hero section with main CTA
- `intro.html` - Introduction section
- `about.html` - About company
- `stats.html` - Statistics/numbers
- `services.html` - Services grid (pulls from `data/services.yaml`)
- `cta.html` - Primary call-to-action
- `blocks/reviews.html` - Customer reviews (pulls from `data/reviews.yaml`)
- `articles.html` - Recent blog posts
- `cta2.html` - Secondary call-to-action

### FAQs Implementation
FAQs are embedded in page frontmatter, not separate files:
```yaml
faqs:
  - question: "Question text here?"
    id: "unique-anchor-id"
    answer: |
      Multi-line answer with **markdown** support.
      Can use shortcodes via RenderString.
```
- Rendered by `layouts/partials/faqs.html` partial
- Each FAQ gets an `id` for deep linking (e.g., `/faqs/#oil`)
- Answers support full markdown including shortcodes
- Used in pages like `content/pages/frequently-asked-questions.md`

### Structured Data (Schema.org)
The site extensively uses JSON-LD structured data for SEO, implemented as partials in `layouts/partials/`:
- `schema-breadcrumb-ld.html` - Breadcrumb navigation
- `knowledge-panel-ld.html` - Business knowledge graph
- `service-ld.html` - Service-specific markup
- `page-ld.html` - General page markup
- `image-ld.html` - Image metadata

**Important**: Recent work tracked minification issues with schema markup. The build command includes a grep check for breadcrumb schema in the build artifact to verify it processes correctly.

### Data-Driven Components
Site navigation and service lists are managed via YAML in `data/`:
- `nav.yaml` - Main navigation menu structure (dropdowns under "Why Us?", "Painting Services", "Contact")
- `services.yaml` - Service grid items with IDs, titles, URLs, and blurbs
- `reviews.yaml` - Customer reviews display data
- `googleReviews.json` - Google review integration

## Layout Structure

### Base Templates
- `layouts/_default/baseof.html` - Base template with:
  - GTM head and body tags
  - Navigation partial
  - Main content block
  - Inline JavaScript for mobile dropdown menu behavior (closes other dropdowns when one opens)
  - Conditional footer (hidden if `nofooter: true` in frontmatter)
  - Scripts partial at bottom

- `layouts/_default/single.html` - Single page template with:
  - Plain HTML breadcrumbs (microdata is in separate LD+JSON schema)
  - Featured image display (if specified in frontmatter)
  - Conditional service links grid with logic:
    - Shows for `pages` section by default
    - Respects `show_service_links` param (explicit true/false)
    - Blocked pages list: `book-us`, `contact`, `privacy-policy`, `payments`, `payment-thank-you`, `estimate-thanks`, `awo-thanks`

- `layouts/_default/list.html` - List/archive pages
- `layouts/blog/single.html` - Blog-specific single page layout
- `layouts/blog/list.html` - Blog listing page

### Partials Organization
- `layouts/partials/head.html` - SEO metadata, all LD+JSON schema inclusions, stylesheets
  - Handles `/ai/` page canonicalization (maps `/ai/slug/` → `/slug/`)
  - Robots meta tag logic for noindex scenarios
- `layouts/partials/nav/` - Navigation components
- `layouts/partials/blocks/` - Reusable page blocks (page-title, reviews)
- `layouts/partials/blog/` - Blog-specific components (author, comments, sidebar)
- `layouts/partials/scripts/` - Google Analytics and other scripts
- `layouts/partials/func/` - Utility functions

### Shortcodes
Available in content markdown (`layouts/shortcodes/`):
- `{{</* book-form */>}}` - Main booking form with:
  - Zip code validation (5 or 9 digit format)
  - Job type radio buttons (interior, cabinets, exterior, commercial/office)
  - Embeds YouCanBook.me iframe with `noframe=true` parameter
  - Form submits to `/book-us/` and shows scheduling iframe after validation

- `{{</* book-form-calls */>}}` - Variant for call center bookings (different regrets URL)
- `{{</* book-form-wild */>}}` - Wildcard booking variant
- `{{</* contact */>}}` - General contact form (used on contact and regrets pages)
- `{{</* contact-regrets */>}}` - Contact form variant for regrets pages
- `{{</* gallery */>}}...{{</* /gallery */>}}` - Inline image gallery (wraps markdown list items)
- `{{</* youtube "url" */>}}` - YouTube embed
- `{{</* youtube-enhanced "url" */>}}` - Enhanced YouTube embed variant
- `{{</* text "content" */>}}` or `{{</* text */>}}...{{</* /text */>}}` - Contrast-enhanced text styling
- `{{</* figure1st */>}}`, `{{</* figure-blog */>}}` - Specialized image displays for different contexts
- `{{</* sub "text" */>}}` - Subscript text
- `{{</* line_break */>}}` - Manual line break
- `{{</* knowledge */>}}`, `{{</* knowledge-strip */>}}` - Knowledge panel elements
- `{{</* link */>}}` - Custom link handling
- `{{</* paypal */>}}`, `{{</* paypal-form */>}}` - PayPal payment integration

## Styling & Assets

### CSS Pipeline
Stylesheets processed via Hugo Pipes in `head.html`:
1. Bootstrap from `assets/bootstrap/bootstrap.min.css`
2. Custom SCSS from `assets/scss/main.scss` (Sass compiled, minified)
3. Concatenated to `styles.min.css` with fingerprinting

### JavaScript
- `assets/js/` - Custom JavaScript source files:
  - `index.js` - Main application JavaScript
  - `functions.js` - Utility functions
  - `variables.js` - JavaScript variables and configuration
- `static/script.js` - Additional static JavaScript
- `static/plugins/` - Third-party libraries:
  - jQuery
  - Bootstrap JS
  - Slick carousel
  - Google Maps integration (`google-map/map.js`)
- Loaded via `layouts/partials/scripts/index.html`

### Static Assets
- `static/images/` - All images including logo, project photos, SVG icons
  - Logo is WebP format (`logo-crestwood.webp`)
  - Schema OG image at `/images/schema-ogimage.jpg`
- `static/plugins/` - Third-party JavaScript and CSS libraries
- `static/fonts/` - Web fonts

### Module Mounts
Config mounts both `assets/` and `static/` to Hugo's assets pipeline:
```toml
[[module.mounts]]
source = 'assets'
target = 'assets'
[[module.mounts]]
source = 'static'
target = 'assets'
```

## Configuration Files

### Main Config (`config/_default/`)
- `config.toml` - Site configuration including:
  - Site title, baseURL
  - Permalink patterns for pages, blog, ai sections
  - Taxonomies (categories enabled, tags disabled)
  - Related content configuration (threshold: 30, indices: keywords weight 100, categories weight 80, date weight 10)
  - Module mounts for assets and static directories
  - RSS disabled, robots.txt enabled
  - Timeout set to 100s for large builds
  - Google Analytics ID: G-Y229K0TNJR

- `params.toml` - Site parameters:
  - Contact info (email, phone)
  - Logo path and OG image
  - Blog settings (sidebar, latest posts count)
  - Social media profiles (Instagram, Facebook, X/Twitter)
  - Copyright text with year placeholder
  - License URLs
  - Comments disabled

- `markup.toml` - Goldmark markdown renderer configuration with image render hooks enabled

### Netlify Config (`netlify.toml`)
Key settings:
- Build command includes breadcrumb grep validation
- Context-specific builds (production, deploy-preview, branch-deploy)
- Cache-Control headers:
  - Forever caching for `/assets/*` (fingerprinted)
  - Revalidate for HTML/sitemap/robots
- Hugo version locked to 0.147.3

## SEO & Indexing Strategy

### Canonicalization
- Standard pages: Hugo's default canonical
- `/ai/*` pages: Custom canonical maps to non-ai version
- Paginated lists: Noindex, no canonical

### Robots Directives
- `/ai/*` pages: Noindex, follow
- Paginated pages: Noindex, follow
- Pages with `index: false` param: Noindex, follow

### Analytics
- Google Analytics 4: G-Y229K0TNJR
- GTM integration via partials

## Common Development Patterns

### Adding a New Service Page
1. Create markdown in `content/pages/service-name.md`
2. Add frontmatter:
   ```yaml
   ---
   title: "Service Name"
   slug: "service-name"
   description: "SEO description"
   image: "/images/service-hero.jpg"
   keywords: "keyword1, keyword2"
   index: true
   ---
   ```
3. Add entry to `data/services.yaml` to appear in service grids:
   ```yaml
   - id: service-id
     title: Service Name
     url: /service-name/
     blurb: Short description.
   ```
4. Service links will auto-populate at bottom of page unless:
   - Page is in blocked list (book-us, contact, privacy-policy, etc.)
   - Frontmatter has `show_service_links: false`

### Adding Blog Content
1. Create markdown in `content/blog/article-name.md`
2. Frontmatter example:
   ```yaml
   ---
   title: "Article Title"
   date: 2024-01-15
   summary: "Brief description for cards and SEO"
   description: "SEO meta description"
   image: "/images/article-hero.jpg"
   categories: ["Painting-Tips", "Color-Choices"]
   keywords: "keyword1, keyword2"
   ---
   ```
3. Related posts auto-generated based on:
   - Keywords (weight: 100)
   - Categories (weight: 80)
   - Date proximity (weight: 10)
   - Threshold: 30 points minimum

### Modifying Navigation
Edit `data/nav.yaml` with structure:
```yaml
- name: "Main Item"
  url: "#"  # Use "#" for dropdowns
  submenu:
    - name: "Sub Item"
      url: "/page-url/"
```

### Adding URL Aliases (Redirects)
For pages that moved or have multiple legacy URLs:
```yaml
---
title: "Page Title"
slug: "new-url"
aliases:
  - /old-url/
  - /another-old-url/
  - /OldURL/  # Case-sensitive variants
---
```

### Working with FAQs
Add FAQs directly to page frontmatter:
```yaml
---
title: "FAQ Page"
faqs:
  - question: "What is the question?"
    id: "unique-id"
    answer: |
      Multi-line answer here.
      Supports **markdown**.
---

{{< partial "faqs.html" . >}}
```

### Schema Markup Debugging
- Build command outputs breadcrumb grep check: `grep -n 'data-partial="schema-breadcrumb-ld"' public/blog/index.html`
- Schema partials emit `data-partial` attributes for identification in HTML
- Check minification settings if JSON-LD has malformed output (currently disabled in netlify.toml)
- Use browser's structured data testing tool or view-source to verify JSON-LD

## Site-Specific Notes

### Form Handling
- **Booking forms** submit to `/book-us/` with client-side validation:
  - Zip code pattern: `^[0-9]{5}([- /]?[0-9]{4})?$` (5 or 9 digits)
  - Job type selection required (interior, cabinets, exterior, commercial/office)
  - After submission, embeds YouCanBook.me iframe with `noframe=true&skipHeaderFooter=true`
- **Form variants**:
  - `book-form` - Standard booking (regrets URL: `/regrets/`)
  - `book-form-calls` - Call center variant (regrets URL: `/call-center-regrets/`)
  - `book-form-wild` - Wildcard bookings (has additional job type option)
- **Contact forms** - Used on `/contact/` and regrets pages
- **Future enhancement**: hCaptcha integration (noted in revisions.md)

### Image Handling
- **Render hooks**: Custom implementations in `layouts/_default/_markup/` for images and links
- **Template-image partial**: Standardized image processing with:
  - `Destination` - Image path
  - `alt` - Alt text
  - `class` - CSS classes
  - `eager` - Loading attribute (true for above-fold images)
- **Hero preload**: `hero-preload.html` partial for critical LCP images
- **Formats**: WebP preferred (e.g., logo at `logo-crestwood.webp`)
- **Image display**: Featured images in frontmatter automatically display at top of single pages

### Mobile Navigation
- Custom JavaScript in `baseof.html` handles mobile dropdown behavior
- Closes other open dropdowns when a new one is clicked
- Uses Bootstrap's dropdown functionality with custom enhancements

### Service Area Logic
The zip code form on booking pages validates service area client-side before showing scheduler.

### Theme Origin
Originally based on **Themefisher Megakit Bootstrap** theme, now heavily customized with:
- Custom schema markup system
- Data-driven navigation and services
- Multi-section content structure
- Custom shortcodes for business needs

## Troubleshooting

### Schema Markup Issues
**Problem**: JSON-LD not appearing correctly in build output
- **Check**: Build command grep output for breadcrumb verification
- **Cause**: Minification was adding extra characters to JSON-LD
- **Solution**: `--minify` flag removed from netlify.toml build contexts
- **Verify**: View page source and check `<script type="application/ld+json">` tags

### Related Posts Not Showing
**Problem**: Related posts not appearing on blog pages
- **Check**: Keywords in frontmatter (weight: 100, highest impact)
- **Check**: Categories array in frontmatter (weight: 80)
- **Check**: Threshold setting (30 points minimum in config.toml)
- **Fix**: Add more specific keywords or reduce threshold

### Service Links Not Appearing
**Problem**: Service grid not showing at bottom of page
- **Check**: Page is in `content/pages/` section (required)
- **Check**: Page filename not in blocked list (book-us, contact, privacy-policy, etc.)
- **Check**: Frontmatter doesn't have `show_service_links: false`
- **Check**: `data/services.yaml` is properly formatted

### Navigation Not Updating
**Problem**: Changes to menu not reflecting on site
- **File**: Edit `data/nav.yaml` (not config files)
- **Format**: Ensure YAML indentation is correct (2 spaces)
- **Reload**: May need to restart `hugo server` to pick up data file changes

## Known Issues & Active Work
(from recent commits and revisions.md)

**Current Issues**:
- Schema breadcrumb minification tracking - `--minify` removed from all netlify.toml contexts to prevent character escaping issues
- Character escaping in JSON-LD schemas under investigation
- Call center process doc link removed from content per request (Dec 2024)

**Future Enhancements** (from revisions.md):
- Google Maps optimization for Core Web Vitals
- hCaptcha integration for form submissions
- Consider Matomo or Umami as Google Analytics alternative
- Self-hosted Maptiler instead of Google Maps
- Additional content pages for interior service types (basements, bedrooms, cabinets, lofts/condos, offices)
- Top-of-page button at bottom of long pages

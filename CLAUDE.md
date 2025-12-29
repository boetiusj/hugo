# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site for Crestwood Painting (crestwoodpainting.com), a painting contractor business in Kansas City. The site includes service pages, blog content, booking forms, and structured data for SEO.

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
   - Service pages include conditional service link grids

2. **Blog** (`content/blog/`) - Articles and tips
   - Permalink structure: `/:slug/` (root-level)
   - Categories used (tags disabled in config)

3. **AI** (`content/ai/`) - AI-generated content variants
   - Permalink structure: `/ai/:slug/`
   - Automatically noindexed with canonical pointing to non-ai version (`/slug/`)

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
- `layouts/_default/baseof.html` - Base template with GTM, nav, footer, and mobile dropdown toggle script
- `layouts/_default/single.html` - Single page template with:
  - Plain HTML breadcrumbs (microdata is in separate LD+JSON)
  - Conditional service links grid (controlled by section and `show_service_links` param)
  - Blocked pages list (book-us, contact, privacy-policy, etc.)

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
- `{{</* book-form */>}}` - Booking form with zip code validation and iframe embed to YouCanBook.me
- `{{</* book-form-calls */>}}` - Variant for call center bookings
- `{{</* contact */>}}` - General contact form
- `{{</* gallery */>}}` - Inline image gallery
- `{{</* youtube "url" */>}}` - YouTube embed
- `{{</* text "content" */>}}` - Contrast-enhanced text
- `{{</* figure1st */>}}`, `{{</* figure-blog */>}}` - Specialized image displays

## Styling & Assets

### CSS Pipeline
Stylesheets processed via Hugo Pipes in `head.html`:
1. Bootstrap from `assets/bootstrap/bootstrap.min.css`
2. Custom SCSS from `assets/scss/main.scss` (Sass compiled, minified)
3. Concatenated to `styles.min.css` with fingerprinting

### Static Assets
- `static/images/` - All images including logo, project photos, SVG icons
- `static/plugins/` - jQuery, Bootstrap JS, Slick carousel, Font Awesome, Themify icons
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
- `config.toml` - Site title, baseURL, permalinks, taxonomies, related content indices
- `params.toml` - Contact info, logo paths, social media links, comment settings
- `markup.toml` - Goldmark renderer configuration with image render hooks enabled

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
2. Add frontmatter with `image`, `title`, `summary`
3. Add entry to `data/services.yaml` if it should appear in service grids
4. Service links will auto-populate unless page is in blocked list or `show_service_links: false`

### Adding Blog Content
1. Create markdown in `content/blog/article-name.md`
2. Frontmatter should include:
   - `image` - Main image for card display
   - `title`, `date`, `summary`
   - `categories` - Array of category strings
3. Related posts auto-generated based on keywords, categories, date

### Modifying Navigation
Edit `data/nav.yaml` - supports nested submenus with `name`, `url`, and optional `submenu` array

### Schema Markup Debugging
- Build command outputs breadcrumb grep check
- Schema partials emit `data-partial` attributes for identification
- Check minification settings if JSON-LD has malformed output

## Site-Specific Notes

### Form Handling
- Booking forms submit to `/book-us/` with zip code validation
- Forms embed YouCanBook.me iframes with `noframe` parameter
- Different form variants for call center vs regular bookings
- No hCaptcha currently implemented (noted in revisions.md as future enhancement)

### Image Handling
- Custom render hooks in `layouts/_default/_markup/`
- Template-image partial provides standardized image processing
- Hero images have dedicated preload partial
- WebP format used for logo

### Theme Origin
Originally based on Themefisher Megakit Bootstrap theme, heavily customized.

## Known Issues & Active Work
(from recent commits and revisions.md)
- Schema breadcrumb minification tracking (netlify.toml has --minify removed from all contexts)
- Character escaping in JSON-LD schemas under investigation
- Call center process doc link removed from content per request

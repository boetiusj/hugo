# Site-Wide Color Implementation Strategy
## How to Update Everything at Once (No Page-by-Page Tweaking)

---

## The Good News

**If your site uses:**
- ✅ Centralized CSS files (main.css, style.css)
- ✅ Hugo layouts/templates (which you do)
- ✅ Consistent class names across pages

**Then you change colors ONCE and they apply everywhere automatically.**

---

## What Changes Globally vs. What Needs Individual Attention

### ✅ Changes ONCE, Applies Everywhere:

**1. Base Colors (via CSS variables or global stylesheet)**
```css
/* Update in ONE place: */
:root {
  --accent: #E76F51; /* Changed from red */
  --navy: #232B4A;
  --gray-100: #F8F9FA;
  /* etc. */
}

/* This automatically updates: */
- All buttons using var(--accent)
- All links using var(--accent)
- All section backgrounds using var(--gray-100)
- All headings using var(--navy)
```

**Impact:** ✅ Every page instantly updated

**2. Typography Colors**
```css
/* Change once: */
h1, h2, h3 { color: var(--navy); }
p { color: #555555; }
a { color: var(--accent); }

/* Affects: */
- All blog posts
- All service pages
- All city pages
- All FAQ pages
```

**Impact:** ✅ Site-wide consistency

**3. Component Styles**
```css
/* Change once: */
.btn-primary { background: var(--accent); }
.card { border: 1px solid var(--gray-300); }
.testimonial { background: var(--gray-100); }

/* Affects: */
- Every button across the site
- Every card component
- Every testimonial
```

**Impact:** ✅ All instances updated

---

### ⚠️ Might Need Individual Attention:

**1. Inline Styles (if you have them)**
```html
<!-- BAD - needs manual update on each page: -->
<div style="background: #FF0000;">...</div>

<!-- GOOD - updates automatically: -->
<div class="accent-bg">...</div>
```

**2. Hard-Coded Colors in Templates**
```html
<!-- BAD - in each template file: -->
<section style="background: #f0f0f0;">

<!-- GOOD - class-based: -->
<section class="bg-gray">
```

**3. SVG Icons with Hard-Coded Fill Colors**
```svg
<!-- Might need updating in each SVG: -->
<svg><path fill="#FF0000"/></svg>

<!-- Better: Use currentColor -->
<svg><path fill="currentColor"/></svg>
```

**4. Images with Colored Elements**
- Hero images (if they have color overlays)
- Graphics with your old accent color
- Logo variations

---

## Implementation Strategy: The Smart Way

### Step 1: Audit Your CSS Architecture

**Check how your site is structured:**

```
Do you have:
├── A main CSS file (main.css, style.css)?  ✅ Good
├── CSS variables defined?                  ✅ Even better
├── Multiple CSS files per page?            ⚠️ More work
└── Inline styles in templates?             ❌ Most work
```

**For Hugo sites (which you have):**
```
layouts/
├── _default/
│   ├── baseof.html         ← Base template (CSS loaded here)
│   ├── single.html         ← Blog post template
│   └── list.html           ← Archive template
├── partials/
│   ├── head.html           ← CSS linked here
│   ├── header.html
│   └── footer.html
└── index.html              ← Homepage

assets/
└── scss/
    ├── main.scss           ← Main stylesheet
    ├── _variables.scss     ← Color variables HERE
    ├── _buttons.scss
    └── _cards.scss
```

**Key insight:** If colors are in `_variables.scss`, you change them ONCE.

---

### Step 2: Implement CSS Variables (If You Don't Have Them)

**Before (hard-coded colors everywhere):**
```css
/* In buttons.css */
.btn-primary { background: #FF0000; }

/* In cards.css */
.card-accent { border-color: #FF0000; }

/* In links.css */
a:hover { color: #FF0000; }
```
**Problem:** Need to find/replace in multiple files

**After (CSS variables):**
```css
/* In _variables.scss or top of main.css */
:root {
  --accent: #E76F51;
  --accent-dark: #D95F41;
  --navy: #232B4A;
  --gray-100: #F8F9FA;
  --gray-200: #F5F7F9;
  --text-primary: #232B4A;
  --text-secondary: #555555;
}

/* In buttons.css */
.btn-primary { background: var(--accent); }

/* In cards.css */
.card-accent { border-color: var(--accent); }

/* In links.css */
a:hover { color: var(--accent); }
```
**Benefit:** Change `--accent` once, entire site updates

---

### Step 3: One-Time Find and Replace

**Use your code editor's global find/replace:**

**Find:** `#FF0000` (or whatever your current red is)
**Replace:** `var(--accent)`

**Find:** `#232B4A`
**Replace:** `var(--navy)`

**But ONLY in CSS files, not in:**
- HTML templates (unless inline styles)
- Image files
- Content markdown files

**Tools:**
- VS Code: `Ctrl+Shift+H` (global find/replace)
- Sublime: `Ctrl+Shift+F`
- Command line: `grep -r "#FF0000" assets/` to find all instances

---

### Step 4: Update Hugo Templates (Once Per Template Type)

**Instead of page-by-page, you update templates:**

**Blog Post Template** (`layouts/_default/single.html`):
```html
<!-- Change this ONCE, affects all blog posts: -->
<article class="blog-post">
  <header class="post-header bg-gray-100">
    <!-- All posts get gray background -->
  </header>
  
  <div class="post-content">
    <!-- Content here -->
  </div>
</article>
```

**Service Page Template** (`layouts/services/single.html`):
```html
<!-- Change this ONCE, affects all service pages: -->
<div class="service-page">
  <section class="hero" style="background: var(--gray-100);">
    <!-- All service pages get same background -->
  </section>
</div>
```

**City Page Template** (`layouts/cities/single.html`):
```html
<!-- Change this ONCE, affects all city pages: -->
<div class="city-page">
  <!-- Consistent styling for all 10+ city pages -->
</div>
```

**How many templates to update?**
- Homepage: 1 file
- Blog posts: 1 template (applies to all posts)
- Service pages: 1 template (applies to all services)
- City pages: 1 template (applies to all cities)
- About/FAQ/Contact: Maybe 3-5 individual pages

**Total:** ~10 files to update, not 50+ pages individually

---

## Hugo-Specific: Section-Based Background Colors

**You can set backgrounds by section type automatically:**

```css
/* In your main CSS */

/* Homepage gets special treatment */
.home .hero {
  background: var(--off-white);
}

/* All blog posts get same structure */
.blog-post {
  background: white;
}

.blog-post header {
  background: var(--gray-100);
  padding: 60px 20px;
}

/* All service pages */
.service-page .hero {
  background: var(--gray-100);
}

/* All city pages */
.city-page .intro {
  background: var(--off-white);
}
```

**Hugo body classes (in baseof.html):**
```html
<body class="{{ if .IsHome }}home{{ else if eq .Section "blog" }}blog{{ else }}{{ .Section }}{{ end }}">
  <!-- Body classes automatically added -->
</body>
```

**Result:** Each section type gets correct colors automatically.

---

## Specific Page Types & How They Update

### 1. **Homepage**
- **Template:** `layouts/index.html`
- **Update:** Once
- **Affects:** 1 page

### 2. **Blog Posts** (Example: "Best Front Door Colors")
- **Template:** `layouts/_default/single.html` or `layouts/blog/single.html`
- **Update:** Once
- **Affects:** ALL blog posts automatically (10, 50, 100+ posts)

### 3. **Blog Archive/List**
- **Template:** `layouts/_default/list.html`
- **Update:** Once
- **Affects:** All category pages, tag pages, main blog listing

### 4. **Service Pages** (Interior, Exterior, Cabinet, Office)
- **Template:** `layouts/services/single.html` (if it exists)
- **Update:** Once
- **Affects:** All 4+ service pages

### 5. **City Pages** (Lee's Summit, Leawood, Prairie Village, etc.)
- **Template:** `layouts/cities/single.html` or similar
- **Update:** Once
- **Affects:** All 10+ city pages

### 6. **Static Pages** (About, Contact, FAQ)
- **Template:** Might be individual files
- **Update:** 3-5 files
- **Affects:** Just those pages

### 7. **Footer**
- **Partial:** `layouts/partials/footer.html`
- **Update:** Once
- **Affects:** Every page on site (footer appears everywhere)

---

## The Reality Check

### What You'll Actually Need to Touch:

**Core CSS/SCSS Files:** 1-3 files
```
assets/scss/
├── _variables.scss    ← Change colors here (ONCE)
├── main.scss          ← Maybe some adjustments
└── _components.scss   ← Button/card styles
```

**Hugo Templates:** ~10 files
```
layouts/
├── index.html              ← Homepage
├── _default/
│   ├── baseof.html        ← Base template
│   ├── single.html        ← Generic single page
│   └── list.html          ← Archive/list pages
├── partials/
│   ├── header.html        ← Header
│   ├── footer.html        ← Footer
│   └── hero.html          ← Hero section (if partial)
├── blog/
│   └── single.html        ← Blog post template
└── services/
    └── single.html         ← Service page template
```

**Individual Content Pages:** 0 files
(Unless they have custom inline styles, which they shouldn't)

**Total Estimate:** 10-15 files to update, NOT 50+ pages

---

## Strategy: The 3-Phase Rollout

### Phase 1: CSS Variables (Foundation)
**Time:** 1-2 hours
**Files:** 1-2

1. Create/update `:root` variables in main CSS
2. Change `--accent` from red to coral
3. Add new gray scale variables

**Result:** If your site already uses variables, you're 80% done.

### Phase 2: Template Updates (Structure)
**Time:** 2-3 hours
**Files:** ~10

1. Update section backgrounds in templates
2. Adjust hero images/overlays
3. Update component classes

**Result:** All pages using templates automatically get new colors.

### Phase 3: Spot Fixes (Edge Cases)
**Time:** 1-2 hours
**Files:** 5-10

1. Fix any inline styles
2. Update SVG icons if needed
3. Replace images with old accent color
4. Test and adjust

**Result:** Everything polished and consistent.

**Total Time:** 4-7 hours (not days)

---

## Quick Audit: What to Check

**Run these searches in your codebase:**

### 1. Find Hard-Coded Colors:
```bash
# Search for hex colors in CSS
grep -r "#[0-9A-Fa-f]\{6\}" assets/

# Search for inline styles in templates
grep -r "style=" layouts/
```

### 2. Check for CSS Variables:
```bash
# See if you already use variables
grep -r "var(--" assets/

# If yes ✅ → Easy update
# If no ❌ → Need to implement first
```

### 3. Count Template Files:
```bash
ls layouts/**/*.html | wc -l

# Fewer than 20? ✅ Manageable
# More than 50? ⚠️ Might have duplication
```

---

## The Answer to Your Question

### "Will I be faced with one-by-one tweaking?"

**Short answer: NO** (if your site is structured properly)

**You'll update:**
1. CSS variables (1 file) → affects entire site
2. ~10 template files → affects all pages using those templates
3. ~5 individual pages (About, Contact, etc.)

**You WON'T update:**
- Each blog post individually
- Each city page individually
- Each service page individually

**Because they all inherit from templates.**

---

## Hugo Makes This Easy

**Hugo's template inheritance means:**

```
baseof.html (base template)
    ↓
Contains: <head> with CSS, header, footer
    ↓
Affects: EVERY page on site
    ↓
Change CSS in <head> once → entire site updates
```

**Your blog posts don't have their own CSS.**
**They inherit from the template.**
**Change template = change all posts.**

---

## Implementation Checklist

**Before you start:**
- [ ] Backup your site (git commit or full backup)
- [ ] Document current color values
- [ ] Test on staging/local first

**Phase 1: Foundation (1-2 hours)**
- [ ] Add CSS variables to main stylesheet
- [ ] Update `--accent` to #E76F51
- [ ] Update button styles to use variables
- [ ] Update link styles to use variables

**Phase 2: Templates (2-3 hours)**
- [ ] Update `baseof.html` (base template)
- [ ] Update homepage (`index.html`)
- [ ] Update blog template (`layouts/blog/single.html`)
- [ ] Update service template (if exists)
- [ ] Update city template (if exists)
- [ ] Update header/footer partials
- [ ] Set section background colors

**Phase 3: Testing (1 hour)**
- [ ] Test homepage
- [ ] Test 2-3 blog posts
- [ ] Test 2-3 service pages
- [ ] Test 2-3 city pages
- [ ] Test on mobile
- [ ] Check contrast ratios

**Phase 4: Cleanup (1 hour)**
- [ ] Fix any edge cases
- [ ] Update images if needed
- [ ] Remove old/unused CSS
- [ ] Deploy

**Total: 4-7 hours** for entire site, not weeks of page-by-page work.

---

## Tools to Help

**1. VS Code Multi-Cursor Edit**
- Select all instances of a color
- Edit them all at once
- `Ctrl+D` to select next instance

**2. Regex Find/Replace**
```regex
Find: #[Ff]{2}0000
Replace: var(--accent)
```

**3. Hugo Server Watch Mode**
```bash
hugo server -D
```
Changes rebuild automatically, see updates live.

---

## Final Recommendation

**DO:**
1. ✅ Implement CSS variables first
2. ✅ Update templates (not individual pages)
3. ✅ Test on 2-3 pages per section
4. ✅ Use git to track changes

**DON'T:**
1. ❌ Edit individual blog post markdown files
2. ❌ Add inline styles to pages
3. ❌ Create page-specific CSS files

**Result:** Update 10-15 files, affect 50+ pages.

---

## Example: Blog Posts

**You have 20 blog posts.**

**Bad approach (page-by-page):**
- Edit post 1 markdown ❌
- Edit post 2 markdown ❌
- Edit post 3 markdown ❌
... (20 times)
**Time:** Many hours

**Good approach (template once):**
- Edit `layouts/blog/single.html` once ✅
**Time:** 10 minutes
**Result:** All 20 posts updated automatically

---

## You're In Good Shape

**Hugo sites are designed for exactly this:**
- Centralized styling via CSS
- Template inheritance
- Section-based layouts
- Consistent structure

**Your color update will cascade down automatically.**

No page-by-page tweaking needed! 🎉

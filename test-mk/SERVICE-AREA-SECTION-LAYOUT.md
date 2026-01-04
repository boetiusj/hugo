# Service Area Section: Detailed Layout & Specification

## Section Placement on Homepage

**Recommended position:** After testimonials, before blog section

**Why here:**
- ✅ User has seen services, reviews, credibility
- ✅ Natural "where do you work?" question point
- ✅ Before blog = still above fold on most screens
- ✅ Captures "I'm interested, but do you serve my area?" moment

---

## Layout Option 1: Two-Column Geographic Split (RECOMMENDED)

### Visual Structure:
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  SERVING GREATER KANSAS CITY METRO                     │
│  Professional painting services throughout the KC       │
│  metro area. 30-mile radius from our Waldo base.       │
│                                                         │
│  ┌────────────────────┬────────────────────────────┐   │
│  │   MISSOURI         │      KANSAS                │   │
│  │                    │                            │   │
│  │  • Kansas City     │  • Overland Park           │   │
│  │  • Waldo           │  • Leawood                 │   │
│  │  • Brookside       │  • Prairie Village         │   │
│  │  • Plaza/Midtown   │  • Mission Hills           │   │
│  │  • Lee's Summit    │  • Shawnee                 │   │
│  │  • Liberty         │  • Lenexa                  │   │
│  │  • Blue Springs    │  • Olathe                  │   │
│  │  • Independence    │  • Westwood                │   │
│  └────────────────────┴────────────────────────────┘   │
│                                                         │
│  [View Our Service Map] [See All Cities]               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### HTML Structure:

```html
<section class="service-area" id="service-area">
  <div class="container">
    
    <!-- Section Header -->
    <div class="section-header">
      <h2>Serving Greater Kansas City Metro</h2>
      <p class="intro">
        Professional painting services throughout the Kansas City metropolitan area. 
        Our team serves a 30-mile radius from our Waldo headquarters, covering communities 
        across both Missouri and Kansas.
      </p>
    </div>

    <!-- Geographic Grid -->
    <div class="service-area-grid">
      
      <!-- Missouri Column -->
      <div class="state-column">
        <h3>
          <span class="state-name">Missouri</span>
        </h3>
        <ul class="city-list">
          <li><a href="/painter-in-kansas-city/">Kansas City</a></li>
          <li><a href="/painter-in-waldo/">Waldo</a></li>
          <li><a href="/painter-in-brookside/">Brookside</a></li>
          <li><a href="/painter-in-plaza/">Plaza / Midtown</a></li>
          <li><a href="/painter-in-lees-summit/">Lee's Summit</a></li>
          <li><a href="/painter-in-liberty/">Liberty</a></li>
          <li><a href="/painter-in-blue-springs/">Blue Springs</a></li>
          <li><a href="/painter-in-independence/">Independence</a></li>
        </ul>
      </div>

      <!-- Kansas Column -->
      <div class="state-column">
        <h3>
          <span class="state-name">Kansas</span>
        </h3>
        <ul class="city-list">
          <li><a href="/painter-in-overland-park/">Overland Park</a></li>
          <li><a href="/painter-in-leawood/">Leawood</a></li>
          <li><a href="/painter-in-prairie-village/">Prairie Village</a></li>
          <li><a href="/painter-in-mission-hills/">Mission Hills</a></li>
          <li><a href="/painter-in-shawnee/">Shawnee</a></li>
          <li><a href="/painter-in-lenexa/">Lenexa</a></li>
          <li><a href="/painter-in-olathe/">Olathe</a></li>
          <li><a href="/painter-in-westwood/">Westwood</a></li>
        </ul>
      </div>

    </div>

    <!-- CTAs -->
    <div class="service-area-cta">
      <a href="/map/" class="btn-secondary">View Our Service Map</a>
      <p class="service-note">
        Don't see your city? We serve all communities within 30 miles of Waldo. 
        <a href="/contact/">Contact us</a> to confirm availability.
      </p>
    </div>

  </div>
</section>
```

### CSS (Basic Styling):

```css
.service-area {
  background: #f8f9fa;
  padding: 60px 20px;
  margin: 60px 0;
}

.service-area .section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
}

.service-area h2 {
  font-size: 32px;
  margin-bottom: 15px;
  color: #232B4A;
}

.service-area .intro {
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

.service-area-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 900px;
  margin: 0 auto 40px;
}

.state-column h3 {
  font-size: 20px;
  font-weight: 600;
  color: #232B4A;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
}

.state-name {
  display: block;
}

.city-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.city-list li {
  margin-bottom: 12px;
}

.city-list li a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}

.city-list li a:hover {
  background: #232B4A;
  color: white;
}

.service-area-cta {
  text-align: center;
  margin-top: 40px;
}

.service-note {
  margin-top: 20px;
  font-size: 14px;
  color: #666;
}

/* Mobile */
@media (max-width: 768px) {
  .service-area-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
```

---

## Layout Option 2: Card-Based Layout

### Visual Structure:
```
┌─────────────────────────────────────────────┐
│  SERVING GREATER KANSAS CITY METRO          │
│                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ WALDO    │ │BROOKSIDE │ │  PLAZA   │   │
│  │ [icon]   │ │ [icon]   │ │  [icon]  │   │
│  │ Learn    │ │ Learn    │ │  Learn   │   │
│  │ More →   │ │ More →   │ │  More →  │   │
│  └──────────┘ └──────────┘ └──────────┘   │
│                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ LEAWOOD  │ │ OVERLAND │ │  PRAIR   │   │
│  │          │ │  PARK    │ │  VIL     │   │
│  └──────────┘ └──────────┘ └──────────┘   │
│                                             │
│  [View All Cities We Serve]                │
└─────────────────────────────────────────────┘
```

### HTML Structure:

```html
<section class="service-area-cards">
  <div class="container">
    <div class="section-header">
      <h2>Serving Greater Kansas City Metro</h2>
      <p>Professional painting services in your neighborhood. Click to learn about our work in your area.</p>
    </div>

    <div class="city-cards-grid">
      
      <a href="/painter-in-waldo/" class="city-card">
        <div class="card-icon">🏠</div>
        <h3>Waldo</h3>
        <p>Our home base. Serving Waldo since 2007.</p>
        <span class="card-link">Learn More →</span>
      </a>

      <a href="/painter-in-brookside/" class="city-card">
        <div class="card-icon">🏠</div>
        <h3>Brookside</h3>
        <p>Historic homes and modern updates.</p>
        <span class="card-link">Learn More →</span>
      </a>

      <a href="/painter-in-plaza/" class="city-card">
        <div class="card-icon">🏢</div>
        <h3>Plaza / Midtown</h3>
        <p>Homes, condos, and offices.</p>
        <span class="card-link">Learn More →</span>
      </a>

      <a href="/painter-in-leawood/" class="city-card">
        <div class="card-icon">🏠</div>
        <h3>Leawood</h3>
        <p>Premium painting for premium homes.</p>
        <span class="card-link">Learn More →</span>
      </a>

      <a href="/painter-in-overland-park/" class="city-card">
        <div class="card-icon">🏠</div>
        <h3>Overland Park</h3>
        <p>Kansas City's largest suburb.</p>
        <span class="card-link">Learn More →</span>
      </a>

      <a href="/painter-in-prairie-village/" class="city-card">
        <div class="card-icon">🏠</div>
        <h3>Prairie Village</h3>
        <p>Beautiful homes, expert painters.</p>
        <span class="card-link">Learn More →</span>
      </a>

    </div>

    <div class="all-cities-cta">
      <a href="/service-areas/" class="btn-secondary">View All 20+ Cities We Serve</a>
    </div>
  </div>
</section>
```

---

## Layout Option 3: Map-Centric (Most Visual)

### Visual Structure:
```
┌─────────────────────────────────────────────┐
│  WHERE WE WORK                              │
│                                             │
│  ┌─────────────────┐                       │
│  │                 │  • 30-mile radius     │
│  │   [MAP IMAGE]   │  • Both MO and KS     │
│  │                 │  • 20+ communities    │
│  │   KC METRO      │  • Free estimates     │
│  └─────────────────┘                       │
│                                             │
│  Primary Areas:                            │
│  MO: Waldo • Brookside • Plaza • Lee's...  │
│  KS: Leawood • OP • Prairie Village...     │
│                                             │
│  [See Full Service Area List]              │
└─────────────────────────────────────────────┘
```

### HTML Structure:

```html
<section class="service-area-map">
  <div class="container">
    <h2>Where We Work</h2>
    
    <div class="map-content">
      <div class="map-visual">
        <img src="/images/kc-service-map.png" alt="Crestwood Painting service area map covering Kansas City metro">
        <a href="/map/" class="map-overlay-link">View Interactive Map →</a>
      </div>

      <div class="map-details">
        <h3>Serving the Entire Kansas City Metro</h3>
        <ul class="service-highlights">
          <li>✓ 30-mile radius from Waldo</li>
          <li>✓ Missouri and Kansas communities</li>
          <li>✓ 20+ cities and neighborhoods</li>
          <li>✓ Free estimates throughout service area</li>
        </ul>

        <div class="quick-city-list">
          <h4>Primary Service Areas:</h4>
          <p>
            <strong>Missouri:</strong> Waldo, Brookside, Plaza, Midtown, Lee's Summit, 
            Liberty, Independence, Blue Springs
          </p>
          <p>
            <strong>Kansas:</strong> Leawood, Overland Park, Prairie Village, 
            Mission Hills, Shawnee, Lenexa, Olathe
          </p>
        </div>

        <a href="/service-areas/" class="btn-primary">See Full Service Area List</a>
      </div>
    </div>
  </div>
</section>
```

---

## RECOMMENDED: Hybrid Approach (Best for SEO + UX)

Combines the strengths of all three:

```html
<section class="service-area-hybrid" id="service-area">
  <div class="container">
    
    <!-- Header -->
    <div class="section-header">
      <h2>Serving Greater Kansas City Metro</h2>
      <p class="lead">
        Professional residential and commercial painting services throughout the Kansas City 
        metropolitan area. We serve a 30-mile radius from our Waldo headquarters, covering 
        communities across both Missouri and Kansas.
      </p>
    </div>

    <!-- Featured Cities (Top 6 with cards) -->
    <div class="featured-cities">
      <h3 class="subsection-title">Our Most Active Areas</h3>
      
      <div class="featured-grid">
        <a href="/painter-in-waldo/" class="featured-card">
          <h4>Waldo</h4>
          <p>Our home base since 2007</p>
        </a>
        <a href="/painter-in-brookside/" class="featured-card">
          <h4>Brookside</h4>
          <p>Historic homes & craftsman styles</p>
        </a>
        <a href="/painter-in-leawood/" class="featured-card">
          <h4>Leawood</h4>
          <p>Premium homes, expert service</p>
        </a>
        <a href="/painter-in-overland-park/" class="featured-card">
          <h4>Overland Park</h4>
          <p>Kansas City's largest suburb</p>
        </a>
        <a href="/painter-in-prairie-village/" class="featured-card">
          <h4>Prairie Village</h4>
          <p>Charming homes & neighborhoods</p>
        </a>
        <a href="/painter-in-mission-hills/" class="featured-card">
          <h4>Mission Hills</h4>
          <p>Luxury homes, meticulous work</p>
        </a>
      </div>
    </div>

    <!-- Complete City Lists -->
    <div class="complete-service-area">
      <h3 class="subsection-title">Complete Service Area</h3>
      
      <div class="state-columns">
        <!-- Missouri -->
        <div class="state-column">
          <h4>Missouri Communities</h4>
          <ul class="compact-city-list">
            <li><a href="/painter-in-kansas-city/">Kansas City</a></li>
            <li><a href="/painter-in-waldo/">Waldo</a></li>
            <li><a href="/painter-in-brookside/">Brookside</a></li>
            <li><a href="/painter-in-plaza/">Plaza</a></li>
            <li><a href="/painter-in-midtown/">Midtown</a></li>
            <li><a href="/painter-in-westport/">Westport</a></li>
            <li><a href="/painter-in-hyde-park/">Hyde Park</a></li>
            <li><a href="/painter-in-lees-summit/">Lee's Summit</a></li>
            <li><a href="/painter-in-liberty/">Liberty</a></li>
            <li><a href="/painter-in-independence/">Independence</a></li>
            <li><a href="/painter-in-blue-springs/">Blue Springs</a></li>
            <li><a href="/painter-in-raytown/">Raytown</a></li>
          </ul>
        </div>

        <!-- Kansas -->
        <div class="state-column">
          <h4>Kansas Communities</h4>
          <ul class="compact-city-list">
            <li><a href="/painter-in-overland-park/">Overland Park</a></li>
            <li><a href="/painter-in-leawood/">Leawood</a></li>
            <li><a href="/painter-in-prairie-village/">Prairie Village</a></li>
            <li><a href="/painter-in-mission-hills/">Mission Hills</a></li>
            <li><a href="/painter-in-westwood/">Westwood</a></li>
            <li><a href="/painter-in-shawnee/">Shawnee</a></li>
            <li><a href="/painter-in-lenexa/">Lenexa</a></li>
            <li><a href="/painter-in-olathe/">Olathe</a></li>
            <li><a href="/painter-in-merriam/">Merriam</a></li>
            <li><a href="/painter-in-roeland-park/">Roeland Park</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom CTA & Map Link -->
    <div class="service-area-footer">
      <p class="service-radius">
        We provide free estimates throughout our 30-mile service area. 
        Same-day scheduling available for most appointments.
      </p>
      <div class="footer-ctas">
        <a href="/map/" class="btn-secondary">View Service Map</a>
        <a href="/estimate-scheduler/" class="btn-primary">Schedule Free Estimate</a>
      </div>
      <p class="coverage-note">
        Don't see your city listed? <a href="/contact/">Contact us</a> to confirm 
        we serve your area — we cover all communities within 30 miles of Waldo.
      </p>
    </div>

  </div>
</section>
```

### CSS for Hybrid:

```css
.service-area-hybrid {
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
  padding: 80px 20px;
  margin: 60px 0;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
}

.section-header h2 {
  font-size: 36px;
  color: #232B4A;
  margin-bottom: 15px;
}

.section-header .lead {
  font-size: 18px;
  line-height: 1.7;
  color: #555;
}

/* Featured Cities Cards */
.featured-cities {
  margin-bottom: 60px;
}

.subsection-title {
  text-align: center;
  font-size: 24px;
  color: #232B4A;
  margin-bottom: 30px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.featured-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
}

.featured-card:hover {
  border-color: #232B4A;
  box-shadow: 0 4px 12px rgba(35, 43, 74, 0.1);
  transform: translateY(-2px);
}

.featured-card h4 {
  font-size: 20px;
  color: #232B4A;
  margin-bottom: 8px;
}

.featured-card p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* Complete Service Area Lists */
.complete-service-area {
  background: white;
  border-radius: 8px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.state-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.state-column h4 {
  font-size: 18px;
  color: #232B4A;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
}

.compact-city-list {
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 2;
  column-gap: 20px;
}

.compact-city-list li {
  margin-bottom: 10px;
  break-inside: avoid;
}

.compact-city-list a {
  color: #333;
  text-decoration: none;
  font-size: 15px;
  display: inline-block;
  padding: 4px 0;
  transition: color 0.2s;
}

.compact-city-list a:hover {
  color: #232B4A;
  text-decoration: underline;
}

/* Footer */
.service-area-footer {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.service-radius {
  font-size: 16px;
  color: #555;
  margin-bottom: 25px;
}

.footer-ctas {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}

.coverage-note {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
  
  .state-columns {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .compact-city-list {
    columns: 1;
  }
  
  .footer-ctas {
    flex-direction: column;
  }
}
```

---

## Why the Hybrid Approach is Best

**For LLMs:**
- ✅ Featured cards = 6 priority cities with context
- ✅ Complete lists = all 22+ cities with links
- ✅ Geographic organization (MO vs KS)
- ✅ Radius mentioned multiple times (30 miles)
- ✅ Rich semantic structure

**For Users:**
- ✅ Visual hierarchy (top cities first)
- ✅ Complete coverage shown
- ✅ Easy to scan
- ✅ Multiple CTAs (map, estimate, contact)

**For SEO:**
- ✅ Every city name is a link (internal linking)
- ✅ Geographic keywords throughout
- ✅ Structured by state (clear organization)
- ✅ Context with each featured city
- ✅ Schema-friendly markup

---

## Content Recommendations

### Intro Text (Critical for LLMs):
```
Professional residential and commercial painting services throughout the Kansas City 
metropolitan area. We serve a 30-mile radius from our Waldo headquarters, covering 
communities across both Missouri and Kansas.
```

**Why this exact wording:**
- "30-mile radius" = specific, citable
- "Waldo headquarters" = establishes base location
- "Missouri and Kansas" = both states explicit
- "residential and commercial" = service types

### Featured City Descriptions:

Keep them SHORT (5-8 words) but descriptive:
- Waldo: "Our home base since 2007"
- Brookside: "Historic homes & craftsman styles"
- Leawood: "Premium homes, expert service"
- Overland Park: "Kansas City's largest suburb"
- Prairie Village: "Charming homes & tree-lined streets"
- Mission Hills: "Luxury homes, meticulous attention"
- Plaza/Midtown: "Urban living, professional service"
- Lee's Summit: "Growing community, quality work"

---

## Schema Markup Addition

Add this structured data to the section:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "House Painting",
  "provider": {
    "@id": "https://crestwoodpainting.com/#organization"
  },
  "areaServed": [
    {"@type": "City", "name": "Waldo", "addressRegion": "MO"},
    {"@type": "City", "name": "Brookside", "addressRegion": "MO"},
    {"@type": "City", "name": "Leawood", "addressRegion": "KS"},
    {"@type": "City", "name": "Overland Park", "addressRegion": "KS"},
    {"@type": "City", "name": "Prairie Village", "addressRegion": "KS"},
    {"@type": "City", "name": "Mission Hills", "addressRegion": "KS"}
  ]
}
</script>
```

---

## Final Recommendation

**Use the Hybrid Approach with:**
- 6 featured city cards (visual, prominent)
- Complete city lists in 2 columns (MO/KS)
- 22+ total cities linked
- Clear CTAs (map, estimate, contact)
- 30-mile radius mentioned 2x
- Both states explicitly named

**This gives you:**
- Maximum LLM coverage (all cities named + linked)
- Great UX (visual hierarchy, easy scanning)
- Strong SEO (internal links, geographic keywords)
- Flexible (easy to add/remove cities)

Would you like me to adjust the number of featured cities or modify the layout further?

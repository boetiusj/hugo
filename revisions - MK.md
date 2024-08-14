#### Revisions

Aug '24
- Convert frontmatter images to markdown on all blog pages and 404 page -- shortcode? [see here](https://discourse.gohugo.io/t/how-to-use-front-matter-variable-inside-content/32730) - see Hugo shortcode  and figure.
- Add pager in single.html
- [This has breakpoints](https://www.brycewray.com/posts/2022/06/responsive-optimized-images-hugo/)
- [This finally did it](https://discourse.gohugo.io/t/conversion-to-webp/50347)
- [Updated img render hook](https://www.brycewray.com/posts/2022/06/responsive-optimized-images-hugo/)
- [Built-in render-hook code](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_default/_markup/render-image.html)
July '24
- [Schema update](https://tekki-tipps.de/en/hugo-schemas-seo/)

Dec 1, '23

- [Orig. Theme](https://github.com/themefisher/megakit-bootstrap): Themefisher Megakit Bootstrap
- [Hugo best practices ](https://github.com/spech66/hugo-best-practices)
- [Responsive breakpoints](https://www.responsivebreakpoints.com/)
- [Eric Murphy](https://ericmurphy.xyz/blog/), [Youtube](https://www.youtube.com/@EricMurphyxyz/search?query=hugo)
- [G Bard](https://bard.google.com/chat)
- [Loop through content](https://www.markusantonwolf.com/blog/loop-through-sorted-content-in-hugo/)
- [render-Ryan Fleck](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/)
- [render Pixelswap](https://pixelswap.fr/entry/how-to-optimize-image-rendering-with-hugo/)
- [render Stereobooster](https://stereobooster.com/posts/hugo-ideal-image/)
- [render Bryce Wray](https://www.brycewray.com/posts/2023/04/better-code-image-processing-hugo/)


## Performance

### Images

Images - I'd like to take advantage of Hugo's image processing through _render-image.html. Images should be served according to device (setsrc?), height and width shown in html. Below are resources I've looked into but I don't have the skill or knowledge to pull it off.
  - [This addresses image path](https://www.veriphor.com/articles/link-and-image-render-hooks/) - very comprehensive, but is this necessary if we move images to assets/images/?
  - Good option: ["Perfect image rendering in Hugo"](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/), uses srcset, lazyloading, LQIP blurry. 
  - [Another option](https://christianoliff.com/blog/markdown-render-hooks-in-hugo/), basic H and W.
  - [Bryce Wray shortcode](https://www.brycewray.com/posts/2022/06/responsive-optimized-images-hugo/)
  - Acceptable, H and W only: [automatic-size-attributes](https://werat.dev/blog/automatic-image-size-attributes-in-hugo/)
  - [I tried this render-image.html](_default/_markup/render-image.html) to no avail.
  - [Image optimization, banner image in head](https://devtidbits.com/2022/08/13/image-optimization-in-hugo/)
  - Assume it's necessary / good practice to move images from static to assets/images/ - yes?
  - [Gallery examples](https://www.liwen.id.au/heg/), [code here](https://github.com/liwenyip/hugo-easy-gallery/)
  - [nowrap Codepen](https://codepen.io/team/css-tricks/pen/bEajLE/1ea1ef35d942d0041b0467b4d39888d3)
   ---
3. Remove plugins and related css etc. files
  - ~~animate-css ~~
  - ~~counterup ~~
  - ~~fontawesome~~
  - ~~magnific-popup ~~
  - ~~slick ~~
  - ~~themify~~
  7. Other Qs
   - index.html:
     - Is this file necessary? ALL of it?
     - Why review text at Line 89?
     - Is there a better way to handle review text?
   - Why 2 Aliases? What are Aliases, where are they and what do they do? ![pic](https://github.com/boetiusj/hugo-dev/blob/main/static/images/Aliases.png).
   8. [Page Speed Performance - goal is >90](https://pagespeed.web.dev/analysis/https-www-crestwoodpainting-com-interior-painter-kansas-city/73ivwaj12v?form_factor=mobile)
   - 3rd party code
   - render blocking, LCP, unused css
   - Unused javascript

9. On /wild/ page, book-form.html defaults to Regrets page, should go to wildcard booking page just like call-center booking page goes to call-center.
10. Booking form returns City State Zip to youcanbook.me on 3 separate rows. Can you make all one row: City, Sate Zip?
So - City [comma space] State [space] Zip [new line]
Looks like this is happening at line 21 of index.js, use zip "64113" for testing.
![YCB Screenshot](https://github.com/boetiusj/hugo-dev/blob/main/static/images/screenshot-YCB-passthrough.png)
---   
- [render-image.html](https://werat.dev/blog/automatic-image-size-attributes-in-hugo/) --> this file does not show image h and w. This would be fine if it would work.
- [BIG-render-image.html](https://christianoliff.com/blog/markdown-render-hooks-in-hugo/) -->  image h and w but distorts image - lazy load conflict? (lazy load specified in this file and also in other css)
- [Possible source](https://stereobooster.com/posts/hugo-ideal-image/)
- [Joe Mooring again](https://discourse.gohugo.io/t/pass-attributes-to-image-render-hook/36899/2)
- [Resize images shortcode](https://www.angela1c.com/posts/2021/04/resizing-images-using-shortcodes/)
### Other
- blog page list, linked to main nav
- blog categories: Color-Choices, How-To-Hire-Painter, Painting-Tips, Painting-Challenges, General, Home-Maintenance-Tips, Painting-Reviews, Green / Eco, 
- blog tags: better-business-bureau, interior-painting, painting-insurance, cleaning, interior-painting, prep-work, nail-pops, prep, estimates, online-reviews, painters, aluminum-siding, contrasting-colors, exterior-painting, shingles, shutters, vinyl-siding, exterior-painting, re-siding, caulk, interior-painting, prep, trim, wood, painting-insurance, contrasting-colors, exterior-painting, trim
- move images from Static to Assets/images
- [!!image manipulation!!](https://www.youtube.com/watch?v=6qy4Aht1xsE)
- [External links in a new tab](https://digitaldrummerj.me/hugo-links-to-other-pages/)
- [Delete Fontawesome](https://www.youtube.com/watch?v=or7amkb0Pk8), [replace icon html and css](https://icon-sets.iconify.design/bi/instagram/) - hamburger menu, footer socials,
- Wildcard booking page
- 
### Links
- Pages linked in Interiors (basements, bedrooms, cabinets, weirdest, lofts/condos, office interiors)
- Pages linked in Exteriors (front doors, office exteriors)
## G services
- [System fonts](https://www.youtube.com/watch?v=K_QRFhpsTsc&list=PLnur5_dvCveGQtaSkjP0i-Fege25r5dHs) replace Google fonts
- [hCaptcha](https://www.hcaptcha.com/) added to form submission
- Captcha for forms AND YCB?
- [Google Analytics](umami.is) --> umami
  - [Use lite GA code](https://www.jotform.com/blog/leverage-browser-caching-98814/)
- [Maptiler](maptiler.com) instead of GMaps?

## nuts & bolts
- [ ] ~~Update Hugo to latest version~~
- [ ] front matter, add gallery: true to pages with gallery?
- [ ] [unlisted content](https://bphogan.com/2020/08/11/2020-08-11-creating-unlisted-content-in-hugo/) - queries and pagination
- [ ] default front matter for blog and pages
- [ ] ~~New tags? (paint, color, products, tools & equip, cabinets, interior, exterior, common misconceptions (caulk all the same, paint and primer in one, ceiling paint as primer, all paint is the same, cheap is as good as expensive)~~

## Content

- [ ] Blog priorities: Lead Cert., Color of the Year, Caulk,
- [ ] Pages priorities: Who & Why (images), Interiors (images), Cabinet (images), Office (images), 
- [ ] Rewrite blog pages, based on FAQs
- [ ] Blog page for each Interior bullet (Cost of interior painting)
- [ ] Galleries? Interior, Ext, Office, cabinets
- [ ] Top pf page button at bottom
- [ ] Common misconceptions (caulk all the same, paint and primer in one, ceiling paint as primer, all paint is the same, cheap is as good as expensive)
- [ ] 

## Appearance

- [ ] hero image to replace About section? (Kansas City mural?)
- [ ] reduce review font size on mobile?
- [ ] [blog tags like here](https://digitaldrummerj.me/hugo-view-post-grouped-by-category/)
- [ ] [Mobile menu fixed](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fixed_menu) in place on scroll
- [ ] ?? Phone link under booking button
- [ ] body links bolder and underlined in red, should not affect header or footer links
- [ ] mobile Hero image: shrink to see more of the image (should be fixed with better render-image.html)
- [ ] Blog: [Google Search](https://digitaldrummerj.me/hugo-Integrate-google-search/) - OR - remove search
- [ ] Blog image for each post, links to post
- [ ] Blog share.html - update with svg, add Instagram, delete(?) Twitter
- [ ] [Image divs](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_images_side_by_side). [Responsive image gallery, W3](https://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery_responsive). [Image gallery, Hugo git](https://github.com/rootwork/hugo-module-gallery-grid)
  - [ ] Who: PCA, Lead Safe
  - [ ] Footer: PCA, Lead Safe, SW, BM, PPG?
- [ ] 404 Page
  - image from frontmatter image: "-"
  - mobile view single column
  - [good resource](<https://digitaldrummerj.me/hugo-create-404-page/)
- YouCanBook.me: booking form hidden fields - inline (City, St 12345) rather than current new line each field?
- Payments: new Paypal button, Zeele or Melio?

___
## MK

- [ ] ~~[unlisted content how to](https://bphogan.com/2020/08/11/2020-08-11-creating-unlisted-content-in-hugo/)~~
## Items

1. CSS:
   - [ ] ~~logo margin, shrink top and bottom (my change from 1.5px to .5px doesn't show)~~
2. 
   - [ ] ~~Home Section Intro: linked photos replace fontawesome (Interior, Exterior, Offices)~~
   - [!! CSS Tricks images](https://css-tricks.com/adaptive-photo-layout-with-flexbox/)
   - [Flexbox ninja button icons](https://flexbox.ninja/demos/buttons-with-icons/)
   - [Social icons codepen](https://codepen.io/macloo/pen/RZGmvX)
7. Pages
    - ~~filter pages with frontmatter, no show index: false, [unlisgted content](https://bphogan.com/2020/08/11/2020-08-11-creating-unlisted-content-in-hugo/)~~
    - ~~[sitemap, robots.txt](https://mertbakir.gitlab.io/hugo/sitemap-robots/) - No index by google? Does this hide from google site search?~~
8. hugo-dev/index.html: how much of this is necessary? Isn't review text in other file?
11. 404 page:
    - ~~list blog pages index: true, each with small (80px?) img and page Title (no date). [range where](https://discourse.gohugo.io/t/using-range-where-with-front-matter-values/18575) info here~~

---

Round 1 (Feb 6, '23)

1. Create work environment in Git - https://github.com/boetiusj/hugo-dev
  All files - Hugo, theme and data - stored on Git
2. Replicate my existing site (crestwoodpainting.com) in Hugo
Files are here: <https://drive.google.com/drive/folders/1yZI2-neeic5eqPe5vvZ93Sjc3jv4EKft?usp=sharing>
Markdown homepage, footer, etc. here: <https://drive.google.com/drive/folders/1-4Wkqa-WduF9LRAISI0Ujpy_48hQwdu4?usp=share_link>
Completed Feb 10, '23

Round 2
1. Setup the pages - no sidebar
2. Remove the items we discussed from the blog

  Remove Author, tags, dates, comments
  Move blog image to replace template image
3. Make the navigation (top & footer) editable via yaml. No need to touch the html
  Top
    Add Logo, top left
    Remove theme header social links, phone, email
  Footer - add logo to replace theme "Crestwood Painting"
  Menu working and set up as current
4. Schema (added as partial?), files in Drive
  Company schema - Home page and pages that are not webpage or blog pages (Contact, about, etc.)
  Webpage and blog schema
5. Setup analytics and SEO stuff in template
  Google analytics,
  FB, etc. code (in header partial?)
6. Ensure all the links on the pages and blog posts work
7. Create css file for revisions (so that my revisions trump theme css)
8. Advise on hosting options.
9. Implement host
10. Set up SSL


Round 3
Implement existing calendar booking button functionality. There are two site pages for customer bookings:
     Direct - <http://crestwoodpainting.com/book-us>/
     Call Center - <http://crestwoodpainting.com/call-center>/
Code differes slightly for each.
Existing PHP and JSON files here: <https://drive.google.com/drive/folders/1-ym1hPr2ECyUDeOvifeJk6fQGTt637Pq?usp=share_link>

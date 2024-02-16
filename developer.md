# Developer

![image](https://github.com/boetiusj/hugo-dev/assets/12978690/54a12c23-c8f9-4e92-bf7c-cdb00d78d76d)# Overdue

crestwoodpainting.com
<https://github.com/boetiusj/hugo-dev>

1. Home page does not load _index.md - it worked fine over many tweaks and now does not. What did I break?
2. Font-awesome - Replace fontawesome and themify files with svg, color dark gray. SVG files are in images/svg.
   - Menu - hamburger, chevrons facebook, twitter, instagram
   - Socials - blog footer, main footer
   - Same css
3. Main menu fixed, no scrolling away.
4. Links in the body need an underline, red primary color. BUT, *not* for links in the header, footer, etc.
5. New shortcode gallery for two images on one row, shrink to fit. Example on /who/ - the 2 logo images currently stack on mobile and should display side by side.
6. 404 page
   - List only pages where frontmatter index: true
   - Show image with title - 2 columns (1 column mobile)
   - Images should be a thumbnail (80px x 80px?) - not all pages currently have an image, I will add later as needed.
   - Git Pull request "Fix 404 page images" may help. (I did not Pull this yet as I wanted the images fixed first.)
   - This page list will also be used as blog list (/blog/)
7. Disable Search widget from blog sidebar. Comment the code and let me know where that change was made, I may reverse that.
8. Images - update render-image.html to process images. Current render-image doesn't see images.
   - 1600px wide, include H and W, other processing options allowed
   - srcset, several breakpoints so images are served at the right resolution
   - Convert to webp if jpg, leave as-is if avif
   - Necessary to move images to /assets/?
   - Resources I've found:
     - [This addresses image path](https://www.veriphor.com/articles/link-and-image-render-hooks/), it's very comprehensive and may be overkill if all images are in /assets/
     - ["Perfect image rendering in Hugo"](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/) - uses srcset, lazyloading, LQIP blurry.
     [Responsive images shortcode](https://www.brycewray.com/posts/2022/06/responsive-optimized-images-hugo/)
   - Current render-image.html, appears path doesn't work

```markdown
         {{- $image := .Page.Resources.GetMatch (printf "%s" (.Destination | safeURL)) -}}
         <img
            src="{{ .Destination | safeURL }}" alt="{{ .Text }}"
            {{ with $image }}
            width="{{ $image.Width }}" height="{{ $image.Height }}"
            {{ end }}
            />
---
8. On /wild/ page, book-form.html defaults to Regrets page, should go to wildcard booking page just like call-center booking page goes to call-center.
9. Booking form returns City State Zip to youcanbook.me on 3 separate rows. Can you make all one row: City, Sate Zip?
So, all on one line - City [comma space] State [space] Zip [new line]
Looks like this is happening at line 21 of index.js, use zip "64113" for testing.
![YCB Screenshot](https://github.com/boetiusj/hugo-dev/blob/main/static/images/screenshot-YCB-passthrough.png)
10. Address major Lighthouse delays.

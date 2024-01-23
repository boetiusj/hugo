# Images and Lighthouse

1. Configure Home page Hero without Slider js. No slider needed, only one hero image.
2. Remove themify and font-awesome etc. files, use svg for hamburger and social icons, color dark gray. SVG files are in images/svg.
3. Remove plugins and related css etc. files
  - ~~~ animate-css ~~~
  - ~~~ counterup ~~~
  - fontawesome
  - ~~~ magnific-popup ~~~
  - ~~~ slick ~~~
  - themify
4. Main menu fixed, no scrolling away.
5. Links in the body need an underline, how about red primary color. BUT, *not* for links in the header, footer, etc.
6. New shortcode gallery for two images on one row, shrink to fit. Example on /who/ - the 2 logo images currently stack on mobile and should display side by side.
7. 404 page
   - List only pages where frontmatter index: true
   - Show image with title - 2 columns (1 column mobile)
   - Images should be a thumbnail (80px x 80px?) - not all pages currently have an image, I will add later as needed.
   - Git Pull request "Fix 404 page images" may help
   - This page list will also be used as blog list (/blog/)

8. [Page Speed Performance - goal is >90](https://pagespeed.web.dev/analysis/https-www-crestwoodpainting-com-interior-painter-kansas-city/73ivwaj12v?form_factor=mobile)
   - 3rd party code
   - render blocking, LCP, unused css
   - Unused javascript

# Overdue

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

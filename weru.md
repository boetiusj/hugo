# Images and Lighthouse

1. \_index.md does not work. There is a conflict, I have explored endlessly
2. 
3. Shortcode gallery for two images on one row, shrink to fit. Example on /who/ - the 2 logo images currently stack on mobile and should display side by side.
4. 404 page should show frontmatter image: "-" for each link (not all pages currently have an image).
   - 404.html shows only the default image not frontmatter image: "-".
      ```
           {- $image := default "/images/blog/bt-3.jpg" **.Params.image** }```
   - Will 2. above fix this?  
5. Configure Home page Hero without Slider js. No slider needed, only one hero image.
6. [Page Speed Performance - goal is >90](https://pagespeed.web.dev/analysis/https-www-crestwoodpainting-com-interior-painter-kansas-city/73ivwaj12v?form_factor=mobile)
   - 3rd party code
   - render blocking, LCP, unused css
   - Unused javascript
7. Other Qs
   - index.html:
     - Is this file necessary? ALL of it?
     - Why review text at Line 89?
     - Is there a better way to handle review text?
   - Why 2 Aliases? What are Aliases, where are they and what do they do? ![pic](https://github.com/boetiusj/hugo-dev/blob/main/static/images/Aliases.png).
8. Remove themify and font-awesome etc. files, use svg for hamburger and social icons, color dark gray. SVG files are in images/svg.
9. On /wild/ page, book-form.html defaults to Regrets page, should go to wildcard booking page just like call-center booking page goes to call-center.
10. Booking form returns City State Zip to youcanbook.me on 3 separate rows. Can you make all one row: City, Sate Zip?
So - City [comma space] State [space] Zip [new line]
Looks like this is happening at line 21 of index.js
![YCB Screenshot](https://github.com/boetiusj/hugo-dev/blob/main/static/images/screenshot-YCB-passthrough.png)
11. I'm on a chromebook running Linux, total Linux noob - can I move the current Hugo folder (hugo-dev) /Linux files/hugo/hugo-dev up under Linux Files? Can I rename the new folder as I wish without upsetting anything? ![linux](https://github.com/boetiusj/hugo-dev/blob/main/static/images/screenshot-linux-folders.png)
12. Links in the body need an underline - too hard to see as they are now. How about same theme red primary color. BUT, *not* for links in the header, footer, etc.
13. Main menu fixed, no scrolling away.

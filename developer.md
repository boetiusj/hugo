# Developer

[crestwoodpainting.com](https://crestwoodpainting.com),
<https://github.com/boetiusj/hugo-dev>

1.  Hero image loads slowly, poor Lighthouse score. Only one hero (front page) on the site.
    - Please change hero to normal image per this - [You can use normal image tags in combination with the CSS object-fit:cover to make normal images behave as background images](https://www.corewebvitals.io/pagespeed/optimize-images-for-core-web-vitals).
    - Delete or revise unneeded hero image css
    - Hero section CTA button should be below "Homes & Offices" (in addition to the Nav button). See hero.html
2.  Responsive Images - images in /assets/ (Home page images are in /static/)
    - New image-render.html?
    - H and W for each image
    - sized according to device
    - Convert to webp
    - Doesn't change SVGs
3.  Render blocking - load critical css in head, other css file per usual.
4.  Remove unused CSS - [PurgeCSS](https://purgecss.com/guides/hugo.html) removes unused css with hugo pipes. This from [Hugo discourse](https://discourse.gohugo.io/t/hugo-guide-added-to-the-purgecss-docs/39422/6) might also help.

5.  Appointment booking - customers use the form at [/book-us/](https://crestwoodpainting.com/book-us/) to enter their Zip code. The booking form returns a _three line list_: - City - State - Zip
    I would like this list _inline_: City, State Zip - Try it: use "64113" as the Zip, choose a random date and time - Do this IF the change can be made here: /assets/js/index.js at line 21
    So, inline - City [comma space] State [space] Zip [new line]
    Here's the image: ![Booking Form pre-populated](assets/images/other/City_State_Zip.png)

Blog page - should have Prev Next in bottom empty block. blog/pager.html

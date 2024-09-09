# Developer

[crestwoodpainting.com](https://crestwoodpainting.com), Hugo v0.133.0 extended, <https://github.com/boetiusj/hugo-dev>

1. Responsive Images, sized for device. Images are in /assets/ (Home page images are in /static/)
    - I am expecting that render-image.html will add something like "width=33" to the <img> - is this accurate of me?
    - Set Width and Height for each image
    - Convert images to webp
    - Doesn't interfere with SVGs
2a. Hero section - image loads slowly and so gives poor Lighthouse score. Only one hero background image on the site - static/images/january.webp.
    - Please modify (hero.html) so the hero image is a normal image per this - [You can use normal image tags in combination with the CSS object-fit:cover to make normal images behave as background images](https://www.corewebvitals.io/pagespeed/optimize-images-for-core-web-vitals).
    - Delete or revise hero image css as needed
2b. Front page images - revise /layouts/home templates so imagaes are processed by render-image
3. CSS - I'd like to eliminate render blocking resources and reduce mobile load time. Remove unused CSS, serve critical CSS in head, minify.
    - Critical CSS - [inlining css](https://www.rockyourcode.com/inline-critical-css-with-hugo-pipes/). This [critical path generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/) may be helpful.
    - Remove unused CSS
        - [PurgeCSS Hugo guide](https://purgecss.com/guides/hugo.html) removes unused css with hugo pipes. [Hugo discourse has more PurgeCSS info](https://discourse.gohugo.io/t/hugo-guide-added-to-the-purgecss-docs/39422/6). 
        - [PostCSS pipes](https://www.rockyourcode.com/create-a-postcss-pipe-with-hugo/). 
        - [More PostCSS pipes](https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss)
4. Appointment booking - customers use the form at [/book-us/](https://crestwoodpainting.com/book-us/) to enter their Zip code. The booking form returns a _three line list_ (image below):
    - Like this
        - City
        - State
        - Zip

    - I would like this list _inline_: "City, State Zip". So: City [comma space] State [space] Zip [new line]
    - I assume it's this file, line 21 or 33: /assets/js/index.js
    - Try it: use "64113" as the Zip, choose a random date and time
    - Here's the image: <img src="https://github.com/boetiusj/hugo/blob/mk/assets/images/other/City_State_Zip.png" width="100">
5. Blog page - should have "Prev Next" in bottom empty block - [see here, scroll to the bottom](https://crestwoodpainting.com/lead-paint-certification/). blog/pager.html
6. Is this js needed on every page?
    - maps scripts only needed on /map page, correct? Looks like these two are served on every page:
        ``` 
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU" defer> 
 
        <script src=https://crestwoodpainting.com/plugins/google-map/map.js defer></script>
        ```
    - index.js is only (I think) used on /book-us/ and /call-center/ pages.
        ``` 
        <script src=https://crestwoodpainting.com/script.js></script>
        ```

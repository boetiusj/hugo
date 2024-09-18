# Developer
Tidy up package-lock.json, package.json, postcss.config.js
Maps?
Self host Matomo?


[crestwoodpainting.com](https://crestwoodpainting.com), Hugo v0.133.0 extended, <https://github.com/boetiusj/hugo-dev>

My goal is primarily to improve Lighthouse Performance on mobile (>90). I have reduced image sizes, converted to webp and still Lighthouse complains.

1. Responsive Images, sized for device. Images are in /assets/ (Home page images are in /static/)
    - Set explicit width and height
    - Images reduced to max width 1200
    - Convert images to webp
    - Doesn't interfere with SVGs
    - [render-image.html experiments](/summary-render-image-files.md), all tests done at /interior-painter-kansas-city/
    - I am expecting that if render-image.html specifies it, I will see something like "width=33" when I inspect the <img> - is that accurate?
1a. !!! New information, what are your thoughts on this approach? [This looks like images load twice, one very small (offscreen?), the other large](https://www.corewebvitals.io/pagespeed/background-images-are-evil). [Screenshot here](/home/mike/hugo/images-load-twice.png)
2. Hero section - image loads slowly and so gives poor Lighthouse score. Only one hero background image on the site - static/images/january.webp.
    - Please modify (hero.html) so the [hero image is a normal image](https://www.corewebvitals.io/pagespeed/optimize-images-for-core-web-vitals) unless there is a better way to handle the hero.

            "If you are using background images you need to reconsider. Background images cannot be lazy loaded and you cannot control the decoding property and you cannot set the fetchpriority. Background images are usually not responsive which will probably cost you a lot of bandwidth. But most important background images are usually discovered after the browser has downloaded the CSS files. This is almost never the right time to trigger an image download!

            You can use normal image tags in combination with the CSS object-fit:cover to make normal images behave as background images!"

    - Delete or revise hero image css as needed
3. Home page images - revise /layouts/home templates so images are processed as regular images. Those images now appear to only work from /static/
4. CSS - I'd like to eliminate render blocking resources and reduce mobile load time. Remove unused CSS, serve critical CSS in head, minify.
    - Critical CSS - [inlining css](https://www.rockyourcode.com/inline-critical-css-with-hugo-pipes/). This [critical path generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/) may be helpful.
    - Remove unused CSS
        - [PurgeCSS Hugo guide](https://purgecss.com/guides/hugo.html) removes unused css with hugo pipes. [Hugo discourse has more PurgeCSS info](https://discourse.gohugo.io/t/hugo-guide-added-to-the-purgecss-docs/39422/6). 
        - [PostCSS pipes](https://www.rockyourcode.com/create-a-postcss-pipe-with-hugo/). 
        - [More PostCSS pipes](https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss)
5. Appointment booking - customers use the form at [/book-us/](https://crestwoodpainting.com/book-us/) to enter their Zip code. The booking form returns a _three line list_ (image below):
    - Like this:
        - City
        - State
        - Zip
    - I would like this list _inline_: "City, State Zip". So: City [comma space] State [space] Zip [new line]
    - I assume it's this file, line 21 or 33: /assets/js/index.js
    - Try it: use "64113" as the Zip, choose a random date and time
    - Here's the image: <img src="https://github.com/boetiusj/hugo/blob/mk/assets/images/other/City_State_Zip.png" width="100">
6. Blog page - should have "Prev Next" in bottom empty block - [see here, scroll to the bottom](https://crestwoodpainting.com/lead-paint-certification/). blog/pager.html
7. Is this js needed on every page?
    - maps scripts only needed on /map page, correct? Looks like these two are served on every page:
        ``` 
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU" defer> 
 
        <script src=https://crestwoodpainting.com/plugins/google-map/map.js defer></script>
        ```
    - index.js is only (I think) used on /book-us/ and /call-center/ pages.
        ``` 
        <script src=https://crestwoodpainting.com/script.js></script>
        ```
8. Annoying mystery: some of the css is lost on our Windows machine, all fine on android phones and my Chromebook. What's going on?
    - Front page headline block is not transparent, obscures part of hero image
    - Front page Intro section h4 text (Interior, Exterior, Offices) is blue
    - links are underlined in blue, should be red

[crestwoodpainting.com](https://crestwoodpainting.com), Hugo v0.133.0 extended, <https://github.com/boetiusj/hugo-dev>

Full overview here: <https://github.com/boetiusj/hugo/blob/mk/developer.md>
1. Responsive Images - webp, width and height, won't distort SVGs
2. Hero section - convert background image to regular image
3. Home page images - move to markdown
4. CSS - critical CSS, purgeCSS
5. Appointment booking tweak
6. Blog page - Previous / Next link are missing
7. js serve to all pages?
8. Windows mystery

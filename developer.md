# Developer

[crestwoodpainting.com](https://crestwoodpainting.com),
Hugo v0.133.0 extended
<https://github.com/boetiusj/hugo-dev>

1.  Responsive Images, sized for device. Images are in /assets/ (Home page images are in /static/)
    - New image-render.html?
    - Set Width and Height for each image
    - sized according to device
    - Convert to webp
    - Doesn't interfere with SVGs
    - [This might help](https://www.brycewray.com/posts/2022/06/responsive-optimized-images-hugo/)    
2.  Hero section - image loads slowly and so gives poor Lighthouse score. Only two hero background images (cta.html, hero.html) on the site.
    - Please change hero image to normal image per this - [You can use normal image tags in combination with the CSS object-fit:cover to make normal images behave as background images](https://www.corewebvitals.io/pagespeed/optimize-images-for-core-web-vitals).
    - image here: static/images/january.webp
    - Delete or revise unneeded hero image css
3.  CSS
    - Critical CSS - load in Head style. Other css file per usual. Minify. This [critical path generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/) may be helpful.
    - Remove unused CSS (head.html?)
        - [Netlify option?](https://www.netlify.com/integrations/community-built/inline-critical-css-build-plugin/)
        - [PurgeCSS Hugo guide](https://purgecss.com/guides/hugo.html) removes unused css with hugo pipes. [Hugo discourse has more PurgeCSS info](https://discourse.gohugo.io/t/hugo-guide-added-to-the-purgecss-docs/39422/6). [Pretty thorough explanation here](https://www.rockyourcode.com/create-a-postcss-pipe-with-hugo/). [This is about in,ining css](https://www.rockyourcode.com/inline-critical-css-with-hugo-pipes/)
        - [PostCSS from Hugo](https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss)
4.  Appointment booking - customers use the form at [/book-us/](https://crestwoodpainting.com/book-us/) to enter their Zip code. The booking form returns a _three line list_ (image below):
        - City
        - State
        - Zip
    - I would like this list _inline_: "City, State Zip". So: City [comma space] State [space] Zip [new line]
    - I assume it's this file, line 21 or 33: /assets/js/index.js
    - Try it: use "64113" as the Zip, choose a random date and time
    - Here's the image:
    <img src="https://github.com/boetiusj/hugo/blob/mk/assets/images/other/City_State_Zip.png" width="100">
5.  Blog page - should have Prev Next in bottom empty block. blog/pager.html
6.  Google Maps: https://www.corewebvitals.io/pagespeed/google-maps-100-percent-pagespeed
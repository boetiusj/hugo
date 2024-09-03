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
4.  [hugo/index.html](/hugo/index.html) - this is a mystery file.
        - OK to remove commented links in /hugo/index.html?
        - [Is this css file redundant?](https://crestwoodpainting.netlify.app/css/styles.f7d452b4a4379f3306365811bc01e459731cbb294b74574f761439852baadb39cdd26a0a409b17e5b75ee1b0a33a586ccf4eb05d91fa2431667704a84d80c085.css) (/public/index.html) Can it be deleted?
        - The above stylesheet is _both_ <link rel=preload> and <link rel=stylesheet>. Does preloading the whole file do any good? And then load the whole file anyway? Is either necessary with purging above?
        - Reviews - start at line 89 and go the ln 394
        - The footer 
5.  Appointment booking - customers use the form at [/book-us/](https://crestwoodpainting.com/book-us/) to enter their Zip code. The booking form returns a _three line list_ (image below):
        - City
        - State
        - Zip
    - I would like this list _inline_: "City, State Zip". So: City [comma space] State [space] Zip [new line]
    - I assume it's this file, line 21 or 33: /assets/js/index.js
    - Try it: use "64113" as the Zip, choose a random date and time
    - Here's the image:
    <img src="https://github.com/boetiusj/hugo/blob/mk/assets/images/other/City_State_Zip.png" width="100">
6.  Blog page - should have Prev Next in bottom empty block. blog/pager.html
7.  [This file](public/painter-in-olathe/index.html) shows in VSCode Source Control right after every build - public/painter-in-olathe/index.html  Why does this happen? OK to Delete?

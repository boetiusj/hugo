## Images and Lighthouse

1. 18 Jan 24: Looks like this may have been a cache problem, now appears to be displaying properly. ~~_index.md is acting up. The current version worked (all sections, all links, all images) earlier yesterday but then it didn't, very frustrating. I have been through _index.md line by line and each of the layouts/partials/home templates. What am I missing?~~
2. Images - I'd like to take advantage of Hugo's image processing through _render-image.html. Images should be served according to device (setsrc?), height and width shown in html. Below are resources I've looked into but I don't have the skill or knowledge to pull it off.
   - [This addresses image path](https://www.veriphor.com/articles/link-and-image-render-hooks/) - very comprehensive, but is this necessary if we move images to assets/images/?
   - Good option: ["Perfect image rendering in Hugo"](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/)
   - [Another option](https://christianoliff.com/blog/markdown-render-hooks-in-hugo/)
   - Acceptable: [automatic-size-attributes](https://werat.dev/blog/automatic-image-size-attributes-in-hugo/)
   - [I tried this render-image.html](_default/_markup/render-image.html) to no avail.
   - Assume it's necessary / good practice to move images from static to assets/images/ - yes?
3.  Shortcode gallery for two images on one row, shrink to fit. Example on /who/ - the 2 logo images currently stack on mobile and should display side by side.
4. 404 page should show frontmatter image: "-" for each link (not all pages currently have an image).
   - 404.html shows only the default image not frontmatter image: "-".
     ```
     {- $image := default "/images/blog/bt-3.jpg" **.Params.image** }}
     ```
   - Will 2. above fix this?  
5.  Configure Home page Hero without Slider js. No slider needed, only one hero image.
6.  [Page Speed Performance - goal is >90](https://pagespeed.web.dev/analysis/https-www-crestwoodpainting-com-interior-painter-kansas-city/73ivwaj12v?form_factor=mobile)
     - 3rd party code
     - render blocking, LCP, unused css
     - Unused javascript
7. Other Qs
   - index.html:
     - Is this file necessary? ALL of it?
     - Why review text at Line 89?
     - Is there a better way to handle review text?
   - Why 2 Aliases? What are Aliases, where are they and what do they do? ![](https://github.com/boetiusj/hugo-dev/blob/main/static/images/Aliases.png). 


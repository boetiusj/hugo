## Images and other Qs

1. _index.md is acting up. The current version worked (all sections, all links, all images) earlier today but then it didn't, very frustrating. I have been through _index.md line by line and each of the layouts/partials/home templates. What am I missing?
2. Images - I'd like to take advantage of Hugo's image processing through _render-image.html. Images should be served according to device (setsrc?), height and width shown in html. Below are resources I've looked into but I don't have the skill or knowledge to pull it off.
   - [Image path problems](https://www.veriphor.com/articles/link-and-image-render-hooks/) - this looks like a thorough solution before getting into render-image.html but it may not be necessary in my case.
   - Good option: ["Perfect image rendering in Hugo"](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/)
   - [Another option](https://christianoliff.com/blog/markdown-render-hooks-in-hugo/)
   - Acceptable: [automatic-size-attributes](https://werat.dev/blog/automatic-image-size-attributes-in-hugo/)
   - [I tried this render-image.html](_default/_markup/render-image.html) to no avail.
   - Assume it's necessary to move images from static to assets/images/ - yes?
3.  Shortcode gallery for two images on one row, shrink to fit (example on /who/ - 2 logo images currently stack on mobile)
4. 404 page should show frontmatter image: "-" for each link
   - 404.html shows the default image but won't show frontmatter image: "-" from different pages.
     ```
     {- $image := default "/images/blog/bt-3.jpg" **.Params.image** }}
     ```
6.  Configure Home page Hero without Slider js. No slider needed, only one hero image.
7.  [Fix Page Speed Performance errors](https://pagespeed.web.dev/analysis/https-www-crestwoodpainting-com-interior-painter-kansas-city/73ivwaj12v?form_factor=mobile)
   - 3rd party code
   - render blocking, LCP, unused css
   - Unused javascript
8. Other Qs
   - index.html:
     - Is this file necessary? ALL of it?
     - Why review text at Line 89?
     - Is there a better way to handle review text?
   - Why 2 Aliases? ![](https://github.com/boetiusj/hugo-dev/blob/main/static/images/Aliases.png)


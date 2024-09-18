# Revisions

Aug '24
- 6.  Google Maps: https://www.corewebvitals.io/pagespeed/google-maps-100-percent-pagespeed
- [srcset & sizes](https://medium.com/@woutervanderzee/responsive-images-with-srcset-and-sizes-fc434845e948)
- footer logos - PCA, Waldo, inPaint, bloggerlocal, summitsafety
- Critical path css interfere with fingerprinting? Redundant?
- index.html - [purifycss](https://purifycss.online/) shows this is not used. What is purpose of "crestwoodpainting.netlify.app/css/styles.f7d452b...etc"
- [Critical path generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/)
- [Fonts](https://rednafi.com/misc/self_hosted_google_fonts_in_hugo/#fn:5) - self hosted
- extract (NitroPack?) and inline [critical css](https://web.dev/articles/extract-critical-css). Can this be done through [Netlify?](https://www.netlify.com/integrations/community-built/inline-critical-css-build-plugin/). [This GitHub](https://github.com/imsus/ultimate-hugo) Netlify template looks good. [This article](https://ruddra.com/hugo-get-perfect-pagespeed-score/) covers perfect PageSpeed scores. [This extracts critical css](https://www.corewebvitals.io/tools/critical-css-generator).
- !![Image loading](https://www.corewebvitals.io/pagespeed/optimize-images-for-core-web-vitals) - good overview.
- [Hero Image](https://www.corewebvitals.io/pagespeed/optimize-images-for-core-web-vitals) "You can use normal image tags in combination with the CSS object-fit:cover to make normal images behave as background images!"
- [Fix G Maps score penalty](https://www.corewebvitals.io/pagespeed/google-maps-100-percent-pagespeed)
- render-image (images currently in assets/images):
  - work w/ svg
  - need Width and Height
  - deliver different sizes
  - desireable to convert to webp,
  - compatible w/ latest stock version of render-image
- [Schema update, address and other pages](https://www.schemaapp.com/schema-markup/how-to-do-schema-markup-for-local-business/)
- [Schema public access?](https://stackoverflow.com/questions/56926034/schema-org-for-service-based-businesses-without-an-address) - "publicAccess": false
- [Self host G Fonts](https://www.corewebvitals.io/pagespeed/self-host-google-fonts)
- ?? Convert frontmatter images to markdown on all blog pages and 404 page -- shortcode? [see here](https://discourse.gohugo.io/t/how-to-use-front-matter-variable-inside-content/32730) - see Hugo shortcode and figure.
- [This has breakpoints](https://www.brycewray.com/posts/2022/06/responsive-optimized-images-hugo/)
- [This finally did it](https://discourse.gohugo.io/t/conversion-to-webp/50347)
- [Built-in render-hook code](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_default/_markup/render-image.html)
  July '24
- [Schema update](https://tekki-tipps.de/en/hugo-schemas-seo/)

Dec 1, '23

- [Orig. Theme](https://github.com/themefisher/megakit-bootstrap): Themefisher Megakit Bootstrap
- [Hugo best practices ](https://github.com/spech66/hugo-best-practices)
- [Responsive breakpoints](https://www.responsivebreakpoints.com/)
- [Eric Murphy](https://ericmurphy.xyz/blog/), [Youtube](https://www.youtube.com/@EricMurphyxyz/search?query=hugo)
- [Loop through content](https://www.markusantonwolf.com/blog/loop-through-sorted-content-in-hugo/)
- [render-Ryan Fleck](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/)
- [render Pixelswap](https://pixelswap.fr/entry/how-to-optimize-image-rendering-with-hugo/)
- [render Stereobooster](https://stereobooster.com/posts/hugo-ideal-image/)
- [render Bryce Wray](https://www.brycewray.com/posts/2023/04/better-code-image-processing-hugo/)

### Images

Images - should be served according to device, should include H and W. Should allow for SVGs.

- Good option: ["Perfect image rendering in Hugo"](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/), uses srcset, lazyloading, LQIP blurry.
- [Another option](https://christianoliff.com/blog/markdown-render-hooks-in-hugo/), basic H and W.
- [Bryce Wray shortcode](https://www.brycewray.com/posts/2022/06/responsive-optimized-images-hugo/)
- Acceptable, H and W only: [automatic-size-attributes](https://werat.dev/blog/automatic-image-size-attributes-in-hugo/)
- [I tried this render-image.html](_default/_markup/render-image.html) to no avail.
- [Image optimization, banner image in head](https://devtidbits.com/2022/08/13/image-optimization-in-hugo/)
- Assume it's necessary / good practice to move images from static to assets/images/ - yes?
- [Gallery examples](https://www.liwen.id.au/heg/), [code here](https://github.com/liwenyip/hugo-easy-gallery/)
- ## [nowrap Codepen](https://codepen.io/team/css-tricks/pen/bEajLE/1ea1ef35d942d0041b0467b4d39888d3)

7. Other Qs - index.html - Is this file necessary? ALL of it?
8. On /wild/ page, book-form.html defaults to Regrets page, should go to wildcard booking page just like call-center booking page goes to call-center.
9. Booking form returns City State Zip to youcanbook.me on 3 separate rows. Can you make all one row: City, Sate Zip?
   So - City [comma space] State [space] Zip [new line]
   Looks like this is happening at line 21 of index.js, use zip "64113" for testing.
   ![YCB Screenshot](https://github.com/boetiusj/hugo-dev/blob/main/static/images/screenshot-YCB-passthrough.png)

---

- [render-image.html](https://werat.dev/blog/automatic-image-size-attributes-in-hugo/) --> this file does not show image h and w. This would be fine if it would work.
- [BIG-render-image.html](https://christianoliff.com/blog/markdown-render-hooks-in-hugo/) --> image h and w but distorts image - lazy load conflict? (lazy load specified in this file and also in other css)
- [Possible source](https://stereobooster.com/posts/hugo-ideal-image/)
- [Joe Mooring again](https://discourse.gohugo.io/t/pass-attributes-to-image-render-hook/36899/2)
- [Resize images shortcode](https://www.angela1c.com/posts/2021/04/resizing-images-using-shortcodes/)

### Other

- blog categories: Color-Choices, How-To-Hire-Painter, Painting-Tips, Painting-Challenges, General, Home-Maintenance-Tips, Painting-Reviews, Green / Eco,
- blog tags: better-business-bureau, interior-painting, painting-insurance, cleaning, interior-painting, prep-work, nail-pops, prep, estimates, online-reviews, painters, aluminum-siding, contrasting-colors, exterior-painting, shingles, shutters, vinyl-siding, exterior-painting, re-siding, caulk, interior-painting, prep, trim, wood, painting-insurance, contrasting-colors, exterior-painting, trim
- Wildcard booking page

### Linked Pages

- Pages linked in Interiors (basements, bedrooms, cabinets, weirdest, lofts/condos, office interiors)
- Pages linked in Exteriors (front doors, office exteriors)

## G services

- [System fonts](https://www.youtube.com/watch?v=K_QRFhpsTsc&list=PLnur5_dvCveGQtaSkjP0i-Fege25r5dHs) replace Google fonts
- [hCaptcha](https://www.hcaptcha.com/) added to form submission
- [Google Analytics alternative](umami.is) --> umami
- [Maptiler](maptiler.com) instead of GMaps?

## Content

- [ ] Blog priorities: Lead Cert., Color of the Year, Caulk,
- [ ] Pages priorities: Who & Why (images), Interiors (images), Cabinet (images), Office (images),
- [ ] Rewrite blog pages, based on FAQs
- [ ] Blog page for each Interior bullet (Cost of interior painting)
- [ ] Galleries? Interior, Ext, Office, cabinets
- [ ] Top pf page button at bottom
- [ ] Common misconceptions (caulk all the same, paint and primer in one, ceiling paint as primer, all paint is the same, cheap is as good as expensive)

## Appearance

- [ ] Rework tags and categories
- [ ] [Image divs](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_images_side_by_side). [Responsive image gallery, W3](https://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery_responsive). [Image gallery, Hugo git](https://github.com/rootwork/hugo-module-gallery-grid)
  - [ ] Footer: PCA, Lead Safe, Waldo

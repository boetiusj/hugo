Dec 1, '23
Orig. Theme: Themefisher Megakit Bootstrap (https://github.com/themefisher/megakit-bootstrap)

## _render-image.html
- [render-image.html](https://werat.dev/blog/automatic-image-size-attributes-in-hugo/) --> this file does not show image h and w. This would be fine if it would work.
- BIG-render-image.html --> [this file shows](https://christianoliff.com/blog/markdown-render-hooks-in-hugo/) image h and w but distorts image - lazy load conflict? (specified in this file and also in other css)

## MK 
- [ ] default front matter for blog and pages
- [ ] image for each blog post
- [ ] [unlisted content how to](https://bphogan.com/2020/08/11/2020-08-11-creating-unlisted-content-in-hugo/)
- [ ] hero image to replace About section? (Kansas City mural?)
- [ ] reduce review font size on mobile

## Items
1. CSS:
   - [ ] body links bolder and underlined in red, should not affect header or footer links
   - [ ] logo margin, shrink top and bottom (my change from 1.5px to .5px doesn't show) `.nav.navbar-expand-lg.px-0.py-4{
  padding-bottom: .5rem!important;
  padding-top: .5rem!important;}`
   - [ ] mobile Hero image: shrink to see more of the image
2. [Image divs](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_images_side_by_side). [Responsive image gallery, W3](https://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery_responsive). [Image gallery, Hugo git](https://github.com/rootwork/hugo-module-gallery-grid)
   - [ ] Who: PCA, Lead Safe
   - [ ] Footer: PCA, Lead Safe, SW, BM, PPG?
   - [ ] Home Section Intro: linked photos replace fontawesome (Interior, Exterior, Offices)
5. 
6. ?? Phone link under booking button
7. Pages
 - filter pages with frontmatter, no show index: false
 - 
8. hugo-dev/index.html: how much of this is necessary? Isn't review text in other file?
9. Blog image links to post
10. Blog: Google Search - OR - remove search
11. 404 page: list blog pages [index: true], each with small (80px?) img and page Title (no date)
   ```
   <section class="container list">
    <ul>
      {{- range where .Site.RegularPages "Section" "posts" }}
      <li>
        <span class="date">{{ .Date | time.Format (.Site.Params.dateFormat | default "January 2, 2006" ) }}</span>
        <span class="title"><a href="{{ .Params.externalLink | default .RelPermalink }}">{{ .Title }}</a></span>
      </li>
      {{- end }}
    </ul>
   </section>
   ```


    
- - - - - - - - - - - - - - - - - - - - - - - - 
Round 1 (Feb 6, '23)
1. Create work environment in Git - https://github.com/boetiusj/hugo-dev
  All files - Hugo, theme and data - stored on Git
2. Replicate my existing site (crestwoodpainting.com) in Hugo
Files are here: https://drive.google.com/drive/folders/1yZI2-neeic5eqPe5vvZ93Sjc3jv4EKft?usp=sharing
Markdown homepage, footer, etc. here: https://drive.google.com/drive/folders/1-4Wkqa-WduF9LRAISI0Ujpy_48hQwdu4?usp=share_link
Completed Feb 10, '23

Round 2
1. Setup the pages - no sidebar
2. Remove the items we discussed from the blog

  Remove Author, tags, dates, comments
  Move blog image to replace template image
3. Make the navigation (top & footer) editable via yaml. No need to touch the html
  Top
    Add Logo, top left
    Remove theme header social links, phone, email
  Footer - add logo to replace theme "Crestwood Painting"
  Menu working and set up as current
4. Schema (added as partial?), files in Drive
  Company schema - Home page and pages that are not webpage or blog pages (Contact, about, etc.)
  Webpage and blog schema
5. Setup analytics and SEO stuff in template
  Google analytics,
  FB, etc. code (in header partial?)
6. Ensure all the links on the pages and blog posts work
7. Create css file for revisions (so that my revisions trump theme css)
8. Advise on hosting options.
9. Implement host
10. Set up SSL


Round 3
Implement existing calendar booking button functionality. There are two site pages for customer bookings:
     Direct - http://crestwoodpainting.com/book-us/
     Call Center - http://crestwoodpainting.com/call-center/
Code differes slightly for each.
Existing PHP and JSON files here: https://drive.google.com/drive/folders/1-ym1hPr2ECyUDeOvifeJk6fQGTt637Pq?usp=share_link

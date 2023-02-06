---
title: "Notes - Site"
date: "2018-04-28"
categories:
  - "general"
---

Book-us page, before Zip filtering:

<p><iframe style="width: 100%; height: 1000px; border: 0px; background-color: transparent;" src="https://crestwoodpainting.youcanbook.me/?noframe=true&amp;skipHeaderFooter=true" width="300" height="150" frameborder="0"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce\_SELRES\_start"></span></iframe></p>

YCB css for Zip filter:

.item:nth-of-type(7) { margin-left: 26.6% !important; } .item:nth-of-type(7) .itemContent, .item:nth-of-type(8) .itemContent, .item:nth-of-type(9) .itemContent { width: 100%; margin-left: 0 !important; margin-right: 0px !important; } .item:nth-of-type(7) .itemLabel, .item:nth-of-type(8) .itemLabel,.item:nth-of-type(9) .itemLabel { width: 0; padding: 0; margin: 0; } .item:nth-of-type(7):after { position: absolute; content: ","; font-size: 18px; right: -5px; top: 8px; } .bookingForm .item:nth-of-type(7) { margin-right: 4px!important; } .item:nth-of-type(7), .item:nth-of-type(8), .item:nth-of-type(9) { display: inline-flex; width: unset !important; position: relative; margin-left: 0%; } input#field2, input#field3, input#field6 { text-transform: capitalize; }

@media (max-width:800px) { .item:nth-of-type(7) { margin: 0 0 0 0% !important; }

.item:nth-of-type(7), .item:nth-of-type(8), .item:nth-of-type(9) { margin-right: 0 !important; } }

\* \* \* \* \* \* \* \* \* \*

SiteOrigin CSS - easier editing of css

JCH Optimize Pro - optimize css, js files - used by Fiverr freelancer

**Insert Headers and Footers**

\* \* \* \* \* \* \* \* \* \* revised Front Page: 10/18 Jon, Upwork

#### Painting Offices & Fine Homes

No Drips

![painter](images/Green-transparent.png)

No Drama

#### That's Our Promise

[Book an Estimate Now](https://crestwoodpainting.youcanbook.me/)

Note: We'll show up on time & do what we say.

\* \* \* \* \* \* \* \* \* \* revised Footer, YCB center align

[Book an Estimate Now](https://cwp_embed.youcanbook.me/)

- Easy - not salesy
- 30 min. or less
- Clear communication
- Background-checked employees

\[A meeting is required. Please no investment properties.\]

* * *

\* \* \* \* \* \* \* \* \* \* \* \* \* \* \* revised CSS, Front Page, 10/18 Jon Upwork

/\* Genesis Breakpoints: - Max-width: 1280px - Max-width: 1200px - Max-width: 1023px - Max-width: 800px - Max-width: 480px \*/

/\* DEBUG \*/ #front-page-1 .header-container, .header-container div { /outline: 1px solid gainsboro; }

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/ /\* SITE HEADER \*/ /\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

.site-header { background: whitesmoke !important; }

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/ /\* MOBILE MENU \*/ /\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

.mobile-menu{ padding-top: 0; /\* override \*/ }

.mobile-menu-icon::before { font: normal 36px/1 "dashicons"; }

.genesis-nav-menu a { font-size: 24px !important; }

.mobile-menu .menu-item-has-children:before { background: transparent; font-size: 24px; }

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/ /\* FRONT PAGE 1 - Header \*/ /\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

#front-page-1 .image-section { background: none !important; height: 100% !important; }

#front-page-1 h4.header-text { padding-top: 30px; }

#front-page-1 h4.header-subtext { line-height: 25px; }

#front-page-1 body { font-family: 'Mukta', sans-serif; font-size: 100%; text-align: center; }

#front-page-1 .header-container { display: flex; color: gray; justify-content: center; /\* flex-start, flex-end, center, space-between, space-around, space-evenly \*/ align-items: center; /\* flex-start, flex-end, center, baseline, stretch \*/ align-self: ; /\* flex-start, flex-end, center, baseline, stretch \*/ align-content: ; /\* flex-start, flex-end, center, space-between, space-around, space-evenly, stretch \*/ margin-top: 30px; }

#front-page-1 .header-item { flex-grow: 1; /\* default \*/ flex-shrink: 1; /\* default \*/ flex-basis: content; font-family: 'Ek Mukta', sans-serif; font-size: 8vw; color: gray; line-height: .8em; white-space: nowrap; }

#front-page-1 .header-item-middle { flex-grow: 0; /padding-left: 30px; }

#front-page-1 .header-item img { display: block; width: 100%; max-width: 50px; /\*actual image width\*/ min-width: 25px; height: auto; /\* maintain aspect ratio\*/ margin: auto; /\*optional centering of image\*/ }

#front-page-1 .header-item-left { text-align: right; padding-right: 10px; }

#front-page-1 .header-item-right { text-align: left; padding-left: 5px; }

#front-page-1 .header-child { text-align: center; }

#front-page-1 .header-child-left { float: right; }

#front-page-1 .header-child-right { float: left; }

@media (min-width: 900px) { #front-page-1 .header-item { font-size: 75px; } }

@media (max-width: 411px) { .mobile-menu { padding-top: 0; /\* override \*/ } }

@media (min-width: 412px) { #front-page-1 .header-item-left { padding-right: 20px; } #front-page-1 .header-item-right { padding-left: 10px; } }

@media (min-width: 768px) { #front-page-1 .header-item-left { padding-right: 30px; } #front-page-1 .header-item-right { padding-left: 20px; } }

.genesis-nav-menu .sub-menu a { background: #eee !important; }

.sub-menu .menu-item { /padding-left: 30px; }

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/ /\* FRONT PAGE 3 - Exterior/Interior \*/ /\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

@media (max-width: 411px) { #front-page-3 .image-section { height: 0 !important; padding-bottom: 30px; border-bottom: 1px solid gainsboro; width: 90%; margin: auto; } }

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/ /\* FRONT PAGE 4 - Common Painting Concerns \*/ /\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

@media (max-width: 411px) { #front-page-4 .widget-area section { padding-top: 0 !important; padding-bottom: 0 !important; margin-bottom: 0 !important; } }

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/ /\* FRONT PAGE 5 - Our Story \*/ /\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

@media (max-width: 411px) { #front-page-5 .image-section { height: 0 !important; padding-bottom: 30px; } }

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/ /\* FRONT PAGE 6 - Reviews & Testimonials \*/ /\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

#front-page-6 h4 { padding: 15px 0; }

#front-page-6 .widget-area section { padding-top: 0 !important; padding-bottom: 0 !important; margin-bottom: 0 !important; }

@media (min-width: 412px) { .widget-title { margin-bottom: 60px !important; }

#front-page-6 section:nth-child(1) { font-size: 36px !important; line-height: 36px; margin-bottom: 30px !important; } }

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/ /\* FOOTER 1 - Schedule an Estimate \*/ /\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

.footer-widgets .button { background-color: white !important; border-color: white !important; color: #22a1c4 !important; /border: 0 !important; }

.footer-widgets .footer-list { width: 300px; margin: auto; white-space: nowrap; }

.footer-widgets ul { margin-left: 15px !important; margin-right: 0 !important; padding-left: 10px !important; padding-right: 0 !important; }

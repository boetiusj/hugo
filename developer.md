# Developer

[crestwoodpainting.com](https://crestwoodpainting.com),
<https://github.com/boetiusj/hugo-dev>

1.  Hero image loads slowly, poor Lighthouse score. Only one hero (front page) on the site.
    - Please change hero to normal image per this - [You can use normal image tags in combination with the CSS object-fit:cover to make normal images behave as background images](https://www.corewebvitals.io/pagespeed/optimize-images-for-core-web-vitals).
    - Remove hero image
2.  Responsive Images - images in /assets/, Home page images in /static/

    - 1600px wide, include H and W, other processing options allowed
    - srcset, several breakpoints so images are served at the right resolution
    - Convert to webp if jpg, leave as-is if avif
    - Necessary to move images to /assets/?
    - Resources I've found:
      - [This addresses image path](https://www.veriphor.com/articles/link-and-image-render-hooks/), it's very comprehensive and may be overkill if all images are in /assets/
      - ["Perfect image rendering in Hugo"](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/) - uses srcset, lazyloading, LQIP blurry.
        [Responsive images shortcode](https://www.brycewray.com/posts/2022/06/responsive-optimized-images-hugo/)
    - Current render-image.html, appears path doesn't work

          ```
          {{- $image := .Page.Resources.GetMatch (printf "%s" (.Destination | safeURL)) -}}
          <img
            src="{{ .Destination | safeURL }}" alt="{{ .Text }}"
            {{ with $image }}
            width="{{ $image.Width }}" height="{{ $image.Height }}"
            {{ end }}
            />
          ```

3.  Booking form returns City State Zip to youcanbook.me on 3 separate rows. Can you make all one row: City, Sate Zip?
    So, all on one line - City [comma space] State [space] Zip [new line]
    Looks like this is happening at line 21 of index.js, use zip "64113" for testing.

```

```

## Home page 

loads Blog header with no Home page items. Possible Alias conflict? (commit 3dbc49e) Blog page Touch-up-paint.md frontmatter canonical was "https://crestwoodpainting.com/" with nothing alse.

## Image path problems

I want to have H and W for every image.
1. Working render-image.html (_default/_markup/render-image.html)
  - Preferred option: ["Perfect image rendering in Hugo"](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/)
  - [Next best option](https://christianoliff.com/blog/markdown-render-hooks-in-hugo/)
  - Acceptable: [automatic-size-attributes](https://werat.dev/blog/automatic-image-size-attributes-in-hugo/)
2. 404 page images taken from frontmatter image = "/x". 
 - 404.html takes default but won't show frontmatter image. {{- $image := default "/images/blog/bt-3.jpg" .Params.image }}

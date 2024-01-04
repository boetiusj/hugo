## Image path problems
I'm stuck, please explain what I'm missing.  
I want to have H and W for every image.
1. Working render-image.html (_default/_markup/render-image.html)
  - Preferred option: ["Perfect image rendering in Hugo"](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/)
  - [Next best option](https://christianoliff.com/blog/markdown-render-hooks-in-hugo/)
  - Acceptable: [automatic-size-attributes](https://werat.dev/blog/automatic-image-size-attributes-in-hugo/)
2. 404 page
 - images taken from frontmatter image = "/x"?
 - 404.html takes default but won't show frontmatter image from different pages. {{- $image := default "/images/blog/bt-3.jpg" .Params.image }}

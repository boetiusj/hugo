## Image path problems
I'm stuck, please explain what I'm missing - the trouble seems to be mostly path. 
I'd like to have H and W for every image, ideally with the fancy image options.
1. Working render-image.html (_default/_markup/render-image.html)
  - Best option: ["Perfect image rendering in Hugo"](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/)
  - [2nd best option](https://christianoliff.com/blog/markdown-render-hooks-in-hugo/)
  - Acceptable: [automatic-size-attributes](https://werat.dev/blog/automatic-image-size-attributes-in-hugo/)
2. 404 page
 - images taken from frontmatter image = "/x"?
 - 404.html takes default but won't show frontmatter image from different pages. {{- $image := default "/images/blog/bt-3.jpg" .Params.image }}
3. Other Qs
   - index.html:
     - is this file necessary
     - what does it do
     - better way to handle review text?

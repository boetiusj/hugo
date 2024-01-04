## Path and other Qs
I'm stuck, please explain what I'm missing - the trouble seems to be mostly path. 

1. [path problems first](https://www.veriphor.com/articles/link-and-image-render-hooks/) - this looks like it will completely solve path problems. 
   - OK if I move all images from static to assets? To better take advantage of variables.
3. render-image.html (_default/_markup/render-image.html). I'd like to have H and W for every image.
   - Best option: ["Perfect image rendering in Hugo"](https://ryanfleck.ca/2023/perfected-image-rendering-in-hugo/)
   - [2nd best option](https://christianoliff.com/blog/markdown-render-hooks-in-hugo/)
   - Acceptable: [automatic-size-attributes](https://werat.dev/blog/automatic-image-size-attributes-in-hugo/)
4. 404 page
   - images taken from frontmatter image = "/x"?
   - 404.html shows the default image but won't show frontmatter image from different pages. {{- $image := default "/images/blog/bt-3.jpg" **.Params.image** }}
5. Other Qs
   - index.html:
     - Is this file necessary? ALL of it?
     - Why review text at Line 89?
     - Is there a better way to handle review text?
   - Why 2 Aliases? ![](https://github.com/boetiusj/hugo-dev/blob/main/static/images/Aliases.png)

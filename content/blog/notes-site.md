---
title: "Notes - Site"
url: "notes-site"
date: "2014-04-28"
image: "/images/Rose-bushes.jpg"
categories:
  - "general"
---
___
Figure shortcode
{{< figure src="/images/placehold160x90.svg" title="Test title" caption="Caption, no width" alt="alt text doesn't appear" >}}

{{< figure src="/images/placehold160x90.svg" caption="No Title, Caption only, width 200" alt="alt text doesn't appear" width="200">}}

{{< text true >}}
Test: < text true shortcode >
{{< /text >}}

<html>  
<head><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script></head>
<body>       
<audio id="player" autoplay controls><source src="0.mp3" type="audio/mp3"></audio>
</body>
<script>
    var x = 0;
    var music = document.getElementById("player");
    $("#player").bind("ended", function(){
    x=x+1;
    music.src = x%4 + ".mp3";
    music.load();
    music.play();       
    });
    </script>
</html>

# Render-image files

### 1. [Current Hugo v0.133.0 render-image.html](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_default/_markup/render-image.html)
Lighthouse Performance score 70 - /interior-painter-kansas-city/
```
{{- $src := $u.String -}}
{{- if not $u.IsAbs -}}
  {{- $path := strings.TrimPrefix "./" $u.Path }}
  {{- with or (.PageInner.Resources.Get $path) (resources.Get $path) -}}
    {{- $src = .RelPermalink -}}
    {{- with $u.RawQuery -}}
      {{- $src = printf "%s?%s" $src . -}}
    {{- end -}}
    {{- with $u.Fragment -}}
      {{- $src = printf "%s#%s" $src . -}}
    {{- end -}}
  {{- end -}}
{{- end -}}
{{- $attributes := merge .Attributes (dict "alt" .Text "src" $src "title" (.Title | transform.HTMLEscape)) -}}
<img
  {{- range $k, $v := $attributes -}}
    {{- if $v -}}
      {{- printf " %s=%q" $k $v | safeHTMLAttr -}}
    {{- end -}}
  {{- end -}}>
{{- /**/ -}}
```

### 2. [This adds webp processing](https://discourse.gohugo.io/t/conversion-to-webp/50347/3).
Incognito Lighthouse Performance score 73. The first image is 109kb, 382x287 and has 6610ms delay? This strikes me as odd.
```
{{- $u := urls.Parse .Destination -}}
{{- $src := $u.String -}}
{{- if not $u.IsAbs -}}
  {{- $path := strings.TrimPrefix "./" $u.Path }}
  {{- with or (.PageInner.Resources.Get $path) (resources.Get $path) -}}
    {{- with .Process "webp" -}}
      {{- $src = .RelPermalink -}}
      {{- with $u.RawQuery -}}
        {{- $src = printf "%s?%s" $src . -}}
      {{- end -}}
      {{- with $u.Fragment -}}
        {{- $src = printf "%s#%s" $src . -}}
      {{- end -}}
    {{- end -}}
  {{- end -}}
{{- end -}}
{{- $attributes := merge .Attributes (dict "alt" .Text "src" $src "title" (.Title | transform.HTMLEscape)) -}}
<img
  {{- range $k, $v := $attributes -}}
    {{- if $v -}}
      {{- printf " %s=%q" $k $v | safeHTMLAttr -}}
    {{- end -}}
  {{- end -}}>
{{- /**/ -}}
```

### 3. Same as just above but should process webp and add width, does neither.
Incognito Lighthouse Performance score 69
```
{{- $u := urls.Parse .Destination -}}
{{- $src := $u.String -}}
{{- if not $u.IsAbs -}}
  {{- $path := strings.TrimPrefix "./" $u.Path }}
  {{- with or (.PageInner.Resources.Get $path) (resources.Get $path) -}}
    {{- with .Process "webp" -}}
      {{- $src = .RelPermalink -}}
      {{- with $u.RawQuery -}}
        {{- $src = printf "%s?%s" $src . -}}
      {{- end -}}
      {{- with $u.Fragment -}}
        {{- $src = printf "%s#%s" $src . -}}
      {{- end -}}
    {{- end -}}
  {{- end -}}
{{- end -}}

{{- $params := $u.Query -}}
{{- $width := default "" ($params.Get "width" | strings.TrimSuffix "px") }}

{{- $attributes := merge .Attributes
    (dict "alt" .Text "src" $src "title" (.Title | transform.HTMLEscape))
    (dict "width" $width) -}}

<img
    {{- range $k, $v := $attributes -}}
      {{- if $v -}}
        {{- printf " %s=%q" $k $v | safeHTMLAttr -}}
      {{- end -}}
    {{- end -}}/>
```

### 4. 6 image sizes, larger 1600 and 1200 sizes are jpg, smaller sized in webp, have very long img properties, shows W and H at large intrinsic sizes. 
Incognito Lightouse Performance 63 - /interior-painter-kansas-city/
```    
  {{/* If the file exists and the filename isn't blank, */}}
  {{ if (and (fileExists (print "/assets" .Destination)) (not (eq .Destination ""))) }}
  {{/* Grab the image and ensure it has a width property, */}}
    {{ $image := resources.Get .Destination }}
    {{/* The reference to the fallback/fallback image */}}
    {{ $fallback := $image }}
    {{/* We build our src-set step by step. */}}
    {{ $src_set := "" }}
    {{ if (eq $image.MediaType.Type "image/avif") }}
      <!-- AVIF not supported by Hugo -->
      <img 
        class="rcf-image external-image unoptimized max-w-100 h-auto" 
        src="{{ .Destination | safeURL }}" 
        {{- if .Text -}} alt="{{ .Text }}" {{ end }}
        {{- if .Title -}} title="{{ .Title }}" {{ end }}
        loading="lazy" 
      />
      {{/* else if (eq $image.MediaType.Type "image/gif") */}}
      {{/*  In case the image is a gif image  */}}
      <img 
        class="rcf-image external-image unoptimized max-w-100 h-auto" 
        src="{{ .Destination | safeURL }}" 
        {{- if .Text -}} alt="{{ .Text }}" {{ end }}
        {{- if .Title -}} title="{{ .Title }}" {{ end }}
        loading="lazy" 
      />
    {{ else }}
      <!-- ADD IMAGES TO SRC-SET -->
      {{ if ge $image.Width "1600" }}
        {{ $resized := $image.Resize "1600x wepb" }}
        {{ $src_set = (print $src_set $resized.RelPermalink " 1600w, ") }}
      {{ end }}
      {{ if ge $image.Width "1400" }}
        {{ $resized := $image.Resize "1400x wepb" }}
        {{ $src_set = (print $src_set $resized.RelPermalink " 1400w, ") }}
      {{ end }}
      {{ if ge $image.Width "1200" }}
        {{ $resized := $image.Resize "1200x wepb" }}
        {{ $src_set = (print $src_set $resized.RelPermalink " 1200w, ") }}
      {{ end }}
      {{ if ge $image.Width "992" }}
        {{ $resized := $image.Resize "992x webp" }}
        {{ $src_set = (print $src_set $resized.RelPermalink " 992w, ") }}
      {{ end }}
      {{ if ge $image.Width "768" }}
        {{ $resized := $image.Resize "786x webp" }}
        {{ $src_set = (print $src_set $resized.RelPermalink " 786w, ") }}
      {{ end }}
      {{ if ge $image.Width "576" }}
        {{ $resized := $image.Resize "576x webp" }}
        {{ $src_set = (print $src_set $resized.RelPermalink " 576w, ") }}
      {{ end }}
      {{ $fallback := $image.Process "webp" }}
      {{ $alt := .PlainText | safeHTML }}
        <!-- If no JS, present a normal src/srcset pairing -->
        <!--  + the show-if-js class will be hidden (see head) -->
        <noscript>
          <img
            class="rcf-image max-w-100 h-auto"
            {{ printf "srcset=%q" $src_set | safeHTMLAttr }}
            src="{{ $fallback.RelPermalink }}"
            {{- if .Text -}} alt="{{ .Text }}" {{ end }}
            {{- if .Title -}} title="{{ .Title }}" {{ end }}
            loading="lazy"
          />
        </noscript>
        <!-- Otherwise the properly-->
        <img
          class="rcf-image lazyload show-if-js max-w-100 h-auto"
          {{ printf "data-srcset=%q" $src_set | safeHTMLAttr }}
          data-src="{{ $image.RelPermalink }}"
          src="{{ $fallback.Permalink }}"
          data-sizes="auto"
          width="{{ $image.Width }}"
          height="{{ $image.Height }}"
          {{- if .Text -}} alt="{{ .Text }}" {{ end }}
          {{- if .Title -}} title="{{ .Title }}" {{ end }}
          loading="lazy"
        />
      {{ end }}
    {{ else }}
      <!-- In case the image is not found on the filesystem for some reason... -->
      <img 
        class="rcf-image external-image unoptimized max-w-100 h-auto" 
        src="{{ .Destination | safeURL }}" 
        {{- if .Text -}} alt="{{ .Text }}" {{ end }}
        {{- if .Title -}} title="{{ .Title }}" {{ end }}
        loading="lazy" 
      />
  {{ end }}
```

### 5. Extra credit - [This allows specifying width in markdown](https://huanlin.cc/blog/2024/07/10/hugo-image-render-hook-width-param/)

# Hugo

## Common Links

- {{< sub "[(see more reviews here)](/reviews/)" >}}
- {{< figure src="/images/Parkville-300x199.jpg" width="200" alt="Alt text" class="left" >}}
- ![Gravel Calls](gravel-calls.jpeg)
    {width="200" alt="Gravel Calls" class="center"}
- [12 Questions to Ask _Before_ You Hire a Painter](/12-questions-ask-painter/ "12 Questions to Ask Before You Hire a Painter")
- [Project Map](/map "Project Map")
- [Reviews page](/reviews/ "Online Reviews – Painters in Kansas City")

## Blog articles

```markdown
---
...
image: "/images/Rose-bushes.jpg" <!-- main image, shows on the card -->
...
---
```

## Shortcodes

### Youtube

```markdown
{{< youtube "youtube embed url" >}}
```

### Text

This will produce text with a degree of contrast

```markdown
{{< text >}}
<!-- markdown text --> Text true.
{{< /text>}}
```

Some text.

```markdown
{{< text true >}}
<!-- markdown text --> Text true example.
{{< /text>}}
```

### Booking form

```markdown
{{< book-form >}}
```

### Contact form

General contact form. Currently in these pages

1. Contact
2. Regrets & Call center regrets

```markdown
{{< contact >}}
```

### Gallery

This a bare bones gallery that will keep images defined in markdown list inline.

```markdown
{{< gallery >}}
- image one
- image two
...
{{< /gallery >}}
```

Currently it's implemented on the regrets page

### FAQs

In the frontmatter of a page, add the faqs like in [this page](./content/pages/faqs.md)

```markdown
faqs:
  - question: Oil or Latex?
    answer: |
      Short answer - latex.
```

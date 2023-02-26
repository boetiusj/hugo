# Hugo

Roadmap has been moved [to own file](./roadmap.md)

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
<!-- markdown text -->
{{< /text>}}
```

![](/screenshots/SCR-20230226-mrn.png)

```markdown
{{< text true >}}
<!-- markdown text -->
{{< /text>}}
```

![](/screenshots/SCR-20230226-mru.png)

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
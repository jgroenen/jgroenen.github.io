---
title: Zo maak ik presentaties
teaser: Een presentatie is hier gewoon een Markdown-bestand. Jekyll maakt er slides van, reveal.js laat ze zien, in de stijl van deze site.
date: 2026-10-14
tags: ['open source']
---
# Zo maak ik presentaties

Markdown, Jekyll en reveal.js

---

## Eén bestand per presentatie

In `_presentaties/`, met een streep tussen de slides:

```
## Een slide

Tekst

---

## De volgende slide
```

---

## Zelfde stijl als de site

- Papier en een witte kaart
- Atkinson Hyperlegible
- Rood als enige accent

> Niets beweegt uit zichzelf.

---

## Handig tijdens het presenteren

- `F`: schermvullend
- `S`: sprekersnotities
- `Esc`: overzicht van alle slides
- `?print-pdf` achter de link: afdrukken als PDF

<aside class="notes">Sprekersnotities zet je in een aside met class notes.</aside>

---

## Staat de presentatie elders?

Zet `extern:` met de link in de front matter. Dan verwijst het overzicht er direct naar.

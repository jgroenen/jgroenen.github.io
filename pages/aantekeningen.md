---
layout: default
permalink: aantekeningen/
title: Mijn Aantekeningen
---
<section class="section">
    <h1>{{ page.title }}</h1>
    {% assign collection = site.aantekeningen|sort|reverse %}
    {% include cards.html collection=collection %}
</section>
---
layout: default
permalink: aantekeningen/
title: Mijn Aantekeningen
---
<section class="card-section right-card">
    <h1 style="padding: 24px 24px 12px">{{ page.title }}</h1>
    {% assign collection = site.aantekeningen|sort|reverse %}
    {% include cards.html collection=collection %}
</section>
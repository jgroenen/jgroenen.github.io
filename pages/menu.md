---
layout: menu
permalink: menu/
title: Menu
---
<section class="card-section right-card">
    <h1 style="padding: 24px 24px 12px">{{ page.title }}</h1>
    {% include cards.html collection=site.kaarten %}
</section>
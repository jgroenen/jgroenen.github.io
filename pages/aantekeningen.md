---
layout: default
permalink: aantekeningen/
title: Aantekeningen
---
{% assign collection = site.aantekeningen|sort|reverse %}
{% include cards.html collection=collection %}
---
layout: post
tags: ['onstopbare brainstormer', 'clean coding']
title: "Een app om de toekomst te voorspellen"
image: https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1d03d073302311.5c05615823c4c.jpg
caption: <a href="https://www.behance.net/gallery/73302311/Modern-Tarot-Cards">“Modern Tarot Cards”</a> by Neil V Fernando is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=ccsearch&amp;atype=rich">CC BY-NC-ND 4.0</a>
teaser: 'Een tijd geleden kreeg ik het verzoek om een Tarot app te schrijven. In eerste instantie moest ik even nadenken; ik geloof namelijk niet in dit soort zaken. [discussie: moest ik deze klus daarom afwijzen?] Uiteindelijk heb ik het appje gemaakt, en daarbij kwam er een interessante afweging voorbij.'
---
<strong>{{ page.teaser }}</strong>

## Implementatie

De functionele specificatie was als volgt: de gebruiker krijgt een geschudde pak Tarot kaarten als rij voorgeschoteld — met de rug omhoog. Vervolgens kiest de gebruiker drie kaarten. Deze worden in volgorde van selectie getoond, met per kaart wat uitleg erbij, en een telefoonnummer dat gebeld kan worden voor meer duiding door een medium.

<img src="{{ page.image}}">
<figcaption>{{ page.caption }}</figcaption>

Ik heb dit geïmplementeerd als een array van alle kaart objecten, die ik vervolgens randomiseer. Daar loop ik doorheen en maak voor ieder object een html element aan. Als je klikt op dat element, dan wordt die kaart in de selectie opgenomen, en uiteindelijk getoond.

Op die manier probeer ik zo dicht mogelijk bij de werkelijkheid te blijven: de keuze van de gebruiker vindt plaats na het husselen van de kaarten, als de volgorde al vast ligt.

<img src="/img/posts/tarot-kaarten.png">

Een eenvoudiger manier zou zijn geweest: toon een rij “ruggen”, selecteer er drie (zonder dat dit iets betekent), en toon gewoon 3 willekeurige kaarten bij het “omdraaien”. Op die manier zou de keuze van de gebruiker echter geen invloed hebben op de selectie. De gebruikerservaring zou identiek zijn geweest, maar toch heb ik daar niet voor gekozen, omdat ik in mijn optiek daarmee de gebruiker voor de gek had gehouden…

Ik ben benieuwd hoe anderen daarover denken? Heeft iemand vergelijkbare ervaringen?

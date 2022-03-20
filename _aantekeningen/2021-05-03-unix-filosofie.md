---
tags: ['software design', 'open source', 'inspiratie']
title: "De Unix filosofie"
image: https://upload.wikimedia.org/wikipedia/commons/8/87/Contemporary_wabi-sabi_tea_bowl.jpg
caption: Een theekopje (zie ook <a href="https://en.wikipedia.org/wiki/Shibui">https://en.wikipedia.org/wiki/Shibui</a>).
teaser: 'Het ontwerpen van software kent, net als alle andere dingen die door mensen verzonnen en gemaakt worden, esthetische stromingen. Een van die filosofiën is de Unix filosofie. Daarbij staat simpliciteit van toepassingen centraal.'
---
<strong>{{ page.teaser }}</strong>

Op de [Wikipedia pagina over Unix Filosofie](https://en.wikipedia.org/wiki/Unix_philosophy) wordt de oorspronkelijke filosofie als volgt omschreven:

  1. Zorg ervoor dat ieder programma één ding goed doet. Heb je iets anders nodig, bouw dan iets nieuws in plaats van oude programma's compliceren met nieuwe features.
  2. Ga ervan uit dat de output van je programma input wordt van een ander, nog onbekend programma. Stop de output niet vol met overbodige informatie. Voorkom moeilijke input met strenge kolom-eisen of binaire formaten. Verplicht geen interactieve input.
  3. Ontwerp en maak software, zelfs operating systems, die snel kunnen worden uitgeprobeerd; liefst binnen een paar weken. Gooi onhandige stukjes gewoon weg en bouw ze opnieuw.
  4. Gebruik programmaatjes in plaats van ongeschoolde ondersteuning om het programmeren makkelijker te maken, zelfs als je daarvoor even moet uitwijken om ze te maken, en ga ervan uit dat je sommige van deze tooltjes daarna gewoon weer gaat weggooien.

![]({{ page.image }})

<figcaption>{{page.caption}}</figcaption>

Een mooiere formulering, die leest als een stukje poezie, komt van Mike Gancarz:

  1. Klein is prachtig.
  2. Zorg dat elk programma één ding goed doet.
  3. Bouw zo snel mogelijk een prototype.
  4. Kies voor herbruikbaarheid boven efficientie.
  5. Sla data op in platte tekst.
  6. Gebruik de hefboomwerking van software in je voordeel.
  7. Gebruik shell scripts om hefboomwerking en herbruikbaarheid te vergroten.
  8. Vermijd gebruikersinterfaces die constant aandacht vragen.
  9. Maak van ieder programma een filter.

Ik gebruik deze filosofie ook bij het maken van digitale tools die mensen ondersteunen op de werkvloer, maar nog altijd zie ik daar vaak de neiging tot "feature proliferation": het toevoegen van telkens maar weer extra functionaliteit aan applicaties waar alles in zit en alles mee moet, met alle gevolgen van dien.
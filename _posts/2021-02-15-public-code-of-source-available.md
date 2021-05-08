---
layout: post
tags: ['#publictech', '#opensource']
title: "Public Code of Source Available"
image: https://www.jgroenen.nl/img/posts/360-degree-feedback.png
caption: 
teaser: 'Onder de noemer open source wordt er gestreden voor het vrijgeven van software die door de overheid gebruikt wordt of gemaakt is. Dit gebruik maken en maken van zijn echter twee erg verschillende cases, waarbij open source ook niet per se de juiste noemer is.'
---
<strong>{{ page.teaser }}</strong>

## Update 16 maart 2021

Tijdens de Conferentie NL Digitaal gingen Boris van Hoytema (Foundation for Public Code), Ivonne Janssen-Dings (Provincie Zuid-Holland en Code for NL) en Koos Steenbergen (Ministerie van BZK) hierover met elkaar (en de online deelnemers) [in gesprek](https://opensource.pleio.nl/news/view/7155b323-98f4-4ca0-9777-7a53ffbf2d16/help-open-source-software-wordt-verplicht-wat-nu).

## Free and Open Source Software (FOSS)

Van vrije software en opensourcesoftware is sprake als de broncode is vrijgegeven onder een licentie die toestaat dat eenieder:

- de software mag gebruiken waarvoor dan ook (_freedom 0_)
- de broncode van de software mag bestuderen en aanpassen (_freedom 1_)
- kopiën van de broncode mag verspreiden (_freedom 2_)
- kopiën van de broncode _met aanpassingen_ mag verspreiden (_freedom 3_)

In het geval van software die door de overheid gebruikt wordt of gemaakt is zie je dat de accenten bij de discussie over "open source" vaak op verschillende plaatsen worden gelegd.

## Vrije software of opensourcesoftware

Bovenstaande gooit open source en vrije software op één hoop en in de praktijk betreft het ook nagenoeg dezelfde dingen. Maar de purist zal stellen dat het in de Open Source beweging draait om pragmatisme: [de open source beweging richt zich op het ontwikkelproces](https://www.gnu.org/philosophy/open-source-misses-the-point.html), waarbij het doel is om software "beter" te maken. De  Vrije Software beweging daarentegen richt zich op het sociaal-ethische aspect van eerlijke verdienmodellen. Dit verschil in focus zie je ook terug in de discussies binnen de overheid over het hoe en wat van "open source".

## CoronaMelder: transparantie en open overheid

De recent door VWS ontwikkelde applicatie "CoronaMelder" is zoals ze dat zelf zeggen "in alle openheid gemaakt". Ondersteund door Code for NL is al vanaf het begin van het project veel code onder open source licentie vrijgegeven, en zijn discussie en bijdragen van buiten het projectteam actief aangemoedigd en meegenomen.

Vanuit het oogpunt van "vrije software", is het echter een vreemde eend, want alleen al _freedom 0_ slaat niet echt ergens op vanuit een coder-gebruikersperspectief. De applicatie is volledig gebouwd rondom het Google-Apple framework voor het vaststellen van nabijheid met bluetooth, en dat framework kan alleen door overheden worden gebruikt en in maar één app per land. De vrijheden zijn daarmee alleen zinvol voor het delen van de software door de Nederlandse overheid met andere overheden.

Wat wel nadrukkelijk de bedoeling is, is dat de broncode bestudeerd en aangepast mag worden, om op die manier volledig transparant te maken wat de app precies wel en niet doet. Dit om te zorgen dat de samenleving de applicatie niet wantrouwt. Vooral _freedom 2_ en dan dus ook vooral het _bestuderen_ deel daarvan is daarom belangrijk. Maar daarvoor hoeft de code niet "free" of "open source" te zijn; daarvoor is het alleen nodig om de broncode beschikbaar te stellen (onder voorwaarden, soms aangeduid met _source available_).

Dit laatste is ook het primaire argument bij discussies rondom het zogenaamde _algoritmeregister_, waarin de inzet van algoritmes door de overheid zou moeten worden vastgelegd. Daarbij is het idee om transparant te maken welke besluiten worden genomen door en op basis algoritmes en computermodellen. In ultieme vorm is het ook daar belangrijk om de broncode beschikbaar te maken voor bestudering.

## Public Money, Public Code

Een heel andere stroming is _Public Money, Public Code_. Aanhangers daarvan stellen juist dat broncode die gemaakt of besteld is door de overheid moet worden vrijgegeven voor hergebruik, omdat de samenleving ervoor betaald heeft. Dit argument heeft uiteindelijk weinig met transparantie van de overheid te maken, en meer met een redenering die stelt dat investeringen door de overheid veel beter tot hun recht komen als de resultaten daarvan ook beschikbaar worden voor burgers en bedrijven om daarop voort te borduren.

Daarbij vallen nog wel wat kanttekeningen te maken over de voorwaarden waaronder dat dan zou moeten. Afhankelijk van onder welke open source licentie de broncode vrij wordt gegeven, is het namelijk wel of niet mogelijk om de code te verwerken in closed source softwareproducten. Mijn stelling zou zijn dat de licentie dit moet toestaan. Immers, als de code wordt vrijgegeven omdat de samenleving heeft betaald, dan is het misschien niet eerlijk als de overheid vervolgens bedrijven met een closed source business model (dat zijn de meeste) benadeelt. Daarnaast gaat dit argument ook enigszins uit van de markt als motor voor innovatie, en dan is het logischer om verschillende business modellen toe te staan.

## Open samenwerking in een ecosysteem

Een meer pragmatisch argument voor (een bepaald smaakje) "open source" bij de overheid is dat het open samenwerking vergemakkelijkt. Niet alleen tussen overheden, zoals dat nu tussen gemeenten al mondjesmaat gebeurt, maar ook bijvoorbeeld tussen overheid en markt en tussen burgers en overheid. In een optimaal open source ecosysteem worden ICT projecten niet door één partij aangenomen en uitgevoerd, maar is er een veelheid aan ontwikkel en implementatieteams die met elkaar samenwerken aan dezelfde (netjes opgedeelde) broncode, zodat kennis en expertise breed geborgd is, er veel controle is op de kwaliteit en voortgang van de code base, en het eenvoudig(er) is voor nieuwe partijen om mee te gaan doen.

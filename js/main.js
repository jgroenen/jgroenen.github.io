import Tagger from './modules/Tagger.mjs';
import EasterEgg from './modules/EasterEgg.mjs';
import Archetyper from './modules/Archetyper.mjs';

var kaarten = await fetch ('/js/data/kaarten.json').then(rs => rs.json()).then(kaarten => kaarten.kaarten);
var tagger = new Tagger();
tagger.underline(kaarten);

console.log(kaarten);

var archetypes = await fetch('/js/data/archetypes.json').then(rs => rs.json());
var archetyper = new Archetyper();

var colors = [];

for (let index in archetypes) {
    archetyper.colorize(archetypes[index]);
    colors.push(archetypes[index].kleur); // collect the archetype colors for the easterEgg
}

var imageElement = document.getElementById("photo");
if (imageElement) {
    var easterEgg = new EasterEgg(imageElement, colors);
    document.getElementById("photo").onclick = easterEgg.start;
}

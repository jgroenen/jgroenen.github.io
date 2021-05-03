(function () {
    var archetypes = {
        "creator": {
            "naam": "maker (70%)",
            "wil": "innovatie",
            "toon": "inspirerend, gewaagd, aanstootgevend",
            "strategie": [
                "mensen inspireren hun verbeelding te gebruiken",
                "aanmoedigen om originaliteit na te jagen"
            ],
            "kleur": "#d664be",
            "tags": [
                "software design",
                "onstopbare brainstormer",
                "strategic design",
                "alles is inpiratie"
            ]
        },
        "everyman": {
            "naam": "gewone man (30%)",
            "wil": "saamhorigheid",
            "toon": "vriendelijk, bescheiden, authentiek",
            "strategie": [
                "het uitlijnen van waarden",
                "het maken van een verwelkomende gemeenschap"
            ],
            "kleur": "#ff8600",
            "tags": [
                "open samenwerking",
                "communities of practice",
                "co-creatie",
                "community",
                "#publictech"
            ]
        }
    };

    // MESSAGE
    for (let archetype in archetypes) {
        let info = archetypes[archetype];
        console.log(`%c${archetype}, ${info.naam}, wil ${info.wil} door ${info.strategie.join(" en ")}`, `background: ${info.kleur}; color: #fff`);

        // UNDERLINE TAGS IN TEXT
        var text = document.body.innerHTML;
        for (let index in info.tags) {
            let tag = info.tags[index];
            console.log(`%c highlighting ${tag}`, `background: ${info.kleur}; color: #fff`);
            text = text.replace(tag, `<span style='border-bottom: 2px dashed ${info.kleur}'>${tag}</span>`);
        }
        document.body.innerHTML = text;

        // COLOR TAGS
        var tags = document.getElementsByClassName('tag');
        for (let tag of tags) {
            if (info.tags.indexOf(tag.innerHTML.toLowerCase()) !== -1) {
                tag.style.backgroundColor = info.kleur;
            }
        }
    }
})();

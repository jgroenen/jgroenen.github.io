(function () {
    var request = new XMLHttpRequest();
    request.open('GET', '/js/archetypes.json', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var archetypes = JSON.parse(request.responseText);
            for (let archetype in archetypes) {
                let archetypeInfo = archetypes[archetype];
                console.log(`%c${archetype}, ${archetypeInfo.naam}, wil ${archetypeInfo.wil} door ${archetypeInfo.strategie.join(" en ")}. Is ${archetypeInfo.toon}.`, `background: ${archetypeInfo.kleur}; color: #fff`);
                underlineTagsInText(archetypeInfo);
                colorTags(archetypeInfo);
            }
        } else {
            console.log('unable to load archetypes json file');
        }
    };

    request.onerror = function() {
        console.log('there was an error loading archetypes json file');
    };

    request.send();

    function underlineTagsInText(archetypeInfo) {
        var text = document.body.innerHTML;
        var style = `
            background: ${archetypeInfo.kleur};
            color: white;
            padding: 1px 2px;
            border-radius: 1px;
            font-weight: 100;
        `;
        for (let index in archetypeInfo.tags) {
            let tag = archetypeInfo.tags[index];
            let tagReplace = tag.replace(/\s/g, '&nbsp;');
            console.log(`%c highlighting ${tag}`, `background: ${archetypeInfo.kleur}; color: #fff`);
            text = text.replace(new RegExp(tag, "g"), `<span style='${style}'>${tagReplace}</span>`);
        }
        document.body.innerHTML = text;
    }

    function colorTags(archetypeInfo) {
        var tags = document.getElementsByClassName('tag');
        for (let tag of tags) {
            if (archetypeInfo.tags.indexOf(tag.innerHTML.toLowerCase()) !== -1) {
                tag.style.backgroundColor = archetypeInfo.kleur;
            }
        }
    }
})();

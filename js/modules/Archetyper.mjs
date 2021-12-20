export default function () {

    function colorize(archetype) {
        console.log(`%c${archetype.type}, ${archetype.naam}, wil ${archetype.wil} door ${archetype.strategie.join(" en ")}. Is ${archetype.toon}.`, `background: ${archetype.kleur}; color: #fff`);
        for (let tagElement of document.querySelectorAll('.inline-tag')) {
            var innerHTML = tagElement.innerHTML.toLowerCase().replace(/&nbsp;/g, ' ');
            if (archetype.tags.indexOf(innerHTML) !== -1) {
                tagElement.style.backgroundColor = archetype.kleur;
            }
        }
    }

    return {
        colorize
    };
};

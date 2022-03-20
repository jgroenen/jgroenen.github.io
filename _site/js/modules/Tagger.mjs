export default function () {
    function underline(tags, color) {
        var texts = document.getElementsByTagName("p");
        for (let i in texts) {
            var text = texts[i].innerHTML;
            if (!text) break;
            for (let tag in tags) {
                let tagFindExp = new RegExp(`(\\s|\^|\\()${tag.toLowerCase()}(\\W{2}|\\.\\s|\\s{1})`, "ig");
                let tagReplaceExp = tag.toLowerCase().replace(/\s/g, '&nbsp;');
                tagReplaceExp = `$1<a href="${tags[tag]}" class="inline-tag">${tagReplaceExp}</a>$2`;
                if (text.search(tagFindExp) !== -1) {
                    //console.log(`tagging ${tag}`);
                    text = text.replace(tagFindExp, tagReplaceExp);
                }
            }
            texts[i].innerHTML = text;
        }
    }

    return {
        underline
    };
};

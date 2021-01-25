(function () {
    var tagColors = {
        "open samenwerking": "#F0A202",
        "communities of practice": "#ED254E",
        "#publictech": "#266B96",
        "onstopbare brainstormer": "#ff4000",
        "strategic design": "#9BC995",
        "clean coding": "#00CFC1",
        "alles is inspiratie": "#000000"
    };

    // UNDERLINE TAGS IN TEXT
    var text = document.body.innerHTML;
    for (let tag in tagColors) {
        console.log("%c highlighting " + tag, 'background: ' + tagColors[tag] + '; color: #fff');
        text = text.replace(tag, "<span style='border-bottom: 2px dashed " + tagColors[tag] + "'>" + tag + "</span>");
    }
    document.body.innerHTML = text;

    // COLOR TAGS
    var tags = document.getElementsByClassName('tag');
    for (let tag of tags) {
        if (tagColors[tag.innerHTML.toLowerCase()]) {
            tag.style.backgroundColor = tagColors[tag.innerHTML.toLowerCase()];
        }
    }
})();

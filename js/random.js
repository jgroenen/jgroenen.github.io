var ideeen = await fetch ('/js/data/ideeen.json').then(rs => rs.json()).then(ideeen => ideeen.ideeen);
var id;

function next() {
    id = Math.floor(Math.random() * ideeen.length);
    var idee = ideeen[id];
    document.getElementsByClassName("card")[0].innerHTML = `<h2 style="text-align: center"><a href="https://www.google.com/search?q=${idee}">${idee}</a></h2>`;
}

document.getElementById("next").onclick = next;

next();
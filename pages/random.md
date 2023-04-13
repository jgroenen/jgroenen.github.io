---
layout: default
permalink: random/
---
<script type="module">
    var ideeen = await fetch ('/js/data/ideeen.json').then(rs => rs.json()).then(ideeen => ideeen.ideeen);
    var id;

    function next() {
        id = Math.floor(Math.random() * ideeen.length);
        var idee = ideeen[id];
        document.getElementById("card").innerHTML = `Idee <b>${id + 1}</b>:<br><br>${idee}`;
    }

    document.getElementById("nextButton").addEventListener('click', next);

    next();
</script>
<div class="content">
    <p><span id="card"></span><br><br></p>
    <p><button id="nextButton">Next</button></p>
</div>
<style>
    .content {
        padding: 10px;
    }
    .content p {
        text-align: center;
        max-width: 20em;
        margin: auto;
    }
    #nextButton {
        font-size: 1em;
        padding: 10px;
        border: 2px solid black;
        margin: auto;
    }
</style>
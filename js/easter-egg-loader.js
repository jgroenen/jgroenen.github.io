(function () {
    var easterEggs = [
        GameOfLife,
        Boids,
        CellularAutomaton,
        PythagorasTree,
        SortingAlgorithms
    ];

    function EasterEggLoader(imageElement) {
        var canvas = document.createElement("canvas");
        canvas.width = imageElement.width / 2;
        canvas.height = imageElement.height / 2;
        canvas.style.cssText += "; position: absolute; left: 0";

        var easterEgg = new (easterEggs[Math.floor(Math.random() * easterEggs.length)])(canvas);

        var link = document.createElement("a");
        link.href = easterEgg.getLink();
        link.target = "_blank";
        imageElement.replaceWith(link);
        link.appendChild(imageElement);
        link.appendChild(canvas);

        easterEgg.runAnimation(50);
    }

    var easterEggLoader;

    document.getElementById("photo").onclick = function () {
        if (typeof easterEggLoader === "undefined")
            easterEggLoader = new EasterEggLoader(this);
    }

    document.onscroll = function () {
        if (typeof easterEggLoader === "undefined")
            easterEggLoader = new EasterEggLoader(document.getElementById("photo"));
    }
})();
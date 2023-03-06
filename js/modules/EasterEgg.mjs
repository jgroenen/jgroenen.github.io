export default function (imageElement, colors) {
    var canvas = document.createElement("canvas");
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    canvas.style.cssText += "; position: absolute; left: 0; top: 0; width: 100%; height: 100%";

    var easterEgg;
    var started = false;

    (async function () {
        var easterEggClasses = [ // FIXME load from json file
            "GameOfLife",
            "Boids",
            "CellularAutomaton",
            "PythagorasTree",
            "SortingAlgorithms"
        ];
        var easterEggClassName = easterEggClasses[Math.floor(Math.random() * easterEggClasses.length)];
        var EasterEggClass = await import(`./algorithms/${easterEggClassName}.mjs`).then(module => module.default);
        easterEgg = new (EasterEggClass)(canvas, colors);
    })();

    function start() {
        if (started || !easterEgg) return;
        started = true;
        //var link = document.createElement("a");
        //link.href = easterEgg.getLink();
        //link.target = "_blank";
        //imageElement.replaceWith(link);
        //link.appendChild(imageElement);
        //link.appendChild(canvas);
        document.body.appendChild(canvas);
        document.body.style.overflow = "hidden";
        easterEgg.runAnimation(50);
    }

    return {
        start
    }
}

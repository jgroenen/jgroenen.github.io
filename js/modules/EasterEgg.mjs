export default function (canvas, colors) {
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
        easterEgg.runAnimation(40);
    }

    function isRunning() {
        return started;
    }

    return {
        start,
        isRunning
    }
}

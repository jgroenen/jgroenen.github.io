export default function (canvas, colors) {
    var link = "https://en.wikipedia.org/wiki/Cellular_automaton";
    var ctx = canvas.getContext("2d");
    var copyCanvas = document.createElement('canvas');
    copyCanvas.width = canvas.width;
    copyCanvas.height = canvas.height;

    //var rule = Math.floor(Math.random() * 0b11111111);
    var interestingRules = [
        90, 30, 45, 73, 75, 86, 150
    ];
    var rule = interestingRules[Math.floor(Math.random() * interestingRules.length)];

    console.log(`Cellular Automata rule ${rule}: ${link}`);

    function createGridline() {
        var gridline = [];
        for (var i = 0; i < canvas.height; ++i) {
            gridline[i] = 0;
        }
        gridline[Math.floor(canvas.width / 2)] = 1;
        return gridline;
    }

    function update(gridline) {
        var updatedGridline = [];
        for (var i = 0; i < gridline.length; ++i) {
            updatedGridline[i] = +!!(0x1 << (
                gridline[(gridline.length + i - 1) % gridline.length] * 4 +
                gridline[i] * 2 +
                gridline[(i + 1) % gridline.length]
            ) & rule);
        }
        return updatedGridline;
    }

    function draw(gridline) {
        for (var i = 0; i < gridline.length; ++i) {
            if (gridline[i]) ctx.fillStyle = colors[1];
            else ctx.fillStyle = colors[0] + "99";
            ctx.fillRect(i, 0, 1, 1);
        }
    }

    function getLink() {
        return link;
    }

    function runAnimation(interval) {
        var gridline = createGridline();
        setInterval(function () {
            //var previousGridline = gridline;
            gridline = update(gridline);
            copyCanvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
            copyCanvas.getContext("2d").drawImage(canvas, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(copyCanvas, 0, 1);
            draw(gridline);
        }, interval);
    }

    return {
        getLink,
        runAnimation
    };
}
function GameOfLife(canvas) {
    var link = "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life";
    var ctx = canvas.getContext("2d");

    function generateInitialGeneration() {
        initialGeneration = [];
        for (var i = 0; i < canvas.height; ++i) {
            initialGeneration[i] = [];
            for (var j = 0; j < canvas.width; ++j) {
                initialGeneration[i][j] = Math.random() < 0.5;
            }
        }
        return initialGeneration;
    }

    function nbhCount(currentGeneration, i, j) {
        return currentGeneration[(canvas.height + i - 1) % canvas.height][(canvas.width + j - 1) % canvas.width] +
            currentGeneration[(canvas.height + i - 1) % canvas.height][j] +
            currentGeneration[(canvas.height + i - 1) % canvas.height][(j + 1) % canvas.width] +
            currentGeneration[i][(canvas.width + j - 1) % canvas.width] +
            currentGeneration[i][(j + 1) % canvas.width] +
            currentGeneration[(i + 1) % canvas.height][(canvas.width + j - 1) % canvas.width] +
            currentGeneration[(i + 1) % canvas.height][j] +
            currentGeneration[(i + 1) % canvas.height][(j + 1) % canvas.width];
    }

    function calculateNextGeneration(currentGeneration) {
        var nextGeneration = [];
        for (var i = 0; i < canvas.height; ++i) {
            nextGeneration[i] = [];
            for (var j = 0; j < canvas.width; ++j) {
                let x = nbhCount(currentGeneration, i, j);
                if (currentGeneration[i][j] && x < 2 || x > 3) nextGeneration[i][j] = 0;
                else if (!currentGeneration[i][j] && x === 3) nextGeneration[i][j] = 1;
                else nextGeneration[i][j] = currentGeneration[i][j];
            }
        }
        return nextGeneration;
    }

    function draw(currentGeneration, fillStyle) {
        for (var i = 0; i < canvas.height; ++i) {
            for (var j = 0; j < canvas.width; ++j) {
                if (currentGeneration[i][j]) ctx.fillStyle = fillStyle;
                else ctx.fillStyle = "#00000033";
                ctx.fillRect(i, j, 1, 1);
            }
        }         
    }

    function getLink() {
        return link;
    }

    function runAnimation(interval) {
        var currentGeneration = generateInitialGeneration();
        setInterval(function () {
            previousGeneration = currentGeneration;
            currentGeneration = calculateNextGeneration(currentGeneration);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(previousGeneration, "#0086ff99");
            draw(currentGeneration, "#ff8600");
        }, interval);
    }

    return {
        getLink,
        runAnimation
    };
}
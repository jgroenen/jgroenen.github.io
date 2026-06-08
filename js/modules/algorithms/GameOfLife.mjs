export default function (canvas, colors) {
    var link = "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life";
    var ctx = canvas.getContext("2d");

    //console.log(`Conway's Game of Life: ${link}`);

    function generateInitialGeneration() {
        var initialGeneration = [];
        for (var i = 0; i < canvas.height; ++i) {
            initialGeneration[i] = [];
            for (var j = 0; j < canvas.width; ++j) {
                initialGeneration[i][j] = Math.random() < 0.1;
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

    function draw(currentGeneration) {
        let imageData = ctx.createImageData(canvas.width, canvas.height);
        let data = imageData.data;
        for (let i = 0; i < canvas.height; ++i) {
            for (let j = 0; j < canvas.width; ++j) {
                let index = (i * canvas.width + j) * 4; // rgba channels
                let color = colors[currentGeneration[i][j] ? 1 : 0];
                data[index] = parseInt(color.substring(1, 3), 16);
                data[index + 1] = parseInt(color.substring(3, 5), 16);
                data[index + 2] = parseInt(color.substring(5, 7), 16);
                data[index + 3] = 255;
            }
        }
        ctx.putImageData(imageData, 0, 0);
    }

    function getLink() {
        return link;
    }

    function runAnimation(interval) {
        var currentGeneration = generateInitialGeneration();
        function animate() {
            currentGeneration = calculateNextGeneration(currentGeneration);
            draw(currentGeneration);
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }

    return {
        getLink,
        runAnimation
    };
}
(function () {
    function ImageAnimation(imageElement) {
        var canvas = document.createElement("canvas");
        canvas.className = imageElement.className;
        canvas.width = imageElement.width;
        canvas.height = imageElement.height;
        canvas.style.cssText = imageElement.style.cssText;

        imageElement.replaceWith(canvas);

        var GoL = [];
        for (var i = 0; i < canvas.height; ++i) {
            GoL[i] = [];
            for (var j = 0; j < canvas.width; ++j) {
                GoL[i][j] = Math.random() < 0.5;
            }
        }

        draw();
        setInterval(function () {
           update();
           draw();
        }, 150);

        function nbhCount(i, j) {
            return GoL[(canvas.height + i - 1) % canvas.height][(canvas.width + j - 1) % canvas.width] +
                GoL[(canvas.height + i - 1) % canvas.height][j] +
                GoL[(canvas.height + i - 1) % canvas.height][(j + 1) % canvas.width] +
                GoL[i][(canvas.width + j - 1) % canvas.width] +
                GoL[i][(j + 1) % canvas.width] +
                GoL[(i + 1) % canvas.height][(canvas.width + j - 1) % canvas.width] +
                GoL[(i + 1) % canvas.height][j] +
                GoL[(i + 1) % canvas.height][(j + 1) % canvas.width];
        }

        function update() {
            var GoL2 = [];
            for (var i = 0; i < canvas.height; ++i) {
                GoL2[i] = [];
                for (var j = 0; j < canvas.width; ++j) {
                    let x = nbhCount(i, j);
                    if (GoL[i][j] && x < 2 || x > 3) GoL2[i][j] = 0;
                    else if (!GoL[i][j] && x === 3) GoL2[i][j] = 1;
                    else GoL2[i][j] = GoL[i][j];
                }
            }
            GoL = GoL2;
        }

        function draw() {
            var ctx = canvas.getContext("2d");
            ctx.drawImage(imageElement,
                0,
                0
            );
            
            for (var i = 0; i < canvas.height; ++i) {
                for (var j = 0; j < canvas.width; ++j) {
                    if (GoL[i][j]) ctx.fillStyle = "#ff8600";
                    else ctx.fillStyle = "#00000033";
                    ctx.fillRect(i, j, 1, 1);
                }
            }         
        }
    }

    document.getElementById("photo").onclick = function () {
        new ImageAnimation(this);
    }
})();
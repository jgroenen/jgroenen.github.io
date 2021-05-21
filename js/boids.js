function Boids(canvas) {
    var link = "https://en.wikipedia.org/wiki/Boids";
    var ctx = canvas.getContext("2d");
    var flockSize = 50;

    function createFlock() {
        flock = [];
        for (var i = 0; i < flockSize; ++i) {
            flock[i] = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: -3 + Math.random() * 6,
                vy: -3 + Math.random() * 6,
                p: Math.floor(Math.random() * flockSize)
            };
        }
        return flock;
    }

    function update(flock) {
        var updatedFlock = [];
        for (var i = 0; i < flock.length; ++i) {
            let particle = flock[i];
            updatedFlock[i] = {
                x: (canvas.width + particle.x + particle.vx) % canvas.width,
                y: (canvas.height + particle.y + particle.vy) % canvas.height,
                vx: 0.8 * particle.vx + 0.1 * flock[particle.p].vx + 0.1 * (-3 + Math.floor(Math.random() * 6)),
                vy: 0.8 * particle.vy + 0.1 * flock[particle.p].vy + 0.1 * (-3 + Math.floor(Math.random() * 6)),
                p: flock[i].p
            };
        }
        return updatedFlock;
    }

    function draw(flock, fillStyle) {
        ctx.fillStyle = fillStyle;
        for (var i = 0; i < flock.length; ++i) {
            ctx.fillRect(Math.round(flock[i].x), Math.round(flock[i].y), 1, 1);
        }
    }

    function getLink() {
        return link;
    }

    function runAnimation(interval) {
        var flock = createFlock();
        setInterval(function () {
            previousFlock = flock;
            flock = update(flock);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(previousFlock, "#0086ff99");
            draw(flock, "#ff8600");
        }, interval);
    }

    return {
        getLink,
        runAnimation
    };
}
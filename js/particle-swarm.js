function ParticleSwarm(canvas) {
    var link = "https://en.wikipedia.org/wiki/Boids";
    var ctx = canvas.getContext("2d");
    var size = 50;

    function generateSwarm() {
        swarm = [];
        for (var i = 0; i < size; ++i) {
            swarm[i] = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: -3 + Math.random() * 6,
                vy: -3 + Math.random() * 6,
                p: Math.floor(Math.random() * size)
            };
        }
        return swarm;
    }

    function update(swarm) {
        var updatedSwarm = [];
        for (var i = 0; i < swarm.length; ++i) {
            let particle = swarm[i];
            updatedSwarm[i] = {
                x: (canvas.width + particle.x + particle.vx) % canvas.width,
                y: (canvas.height + particle.y + particle.vy) % canvas.height,
                vx: 0.8 * particle.vx + 0.1 * swarm[particle.p].vx + 0.1 * (-3 + Math.floor(Math.random() * 6)),
                vy: 0.8 * particle.vy + 0.1 * swarm[particle.p].vy + 0.1 * (-3 + Math.floor(Math.random() * 6)),
                p: swarm[i].p
            };
        }
        return updatedSwarm;
    }

    function draw(swarm, fillStyle) {
        ctx.fillStyle = fillStyle;
        for (var i = 0; i < swarm.length; ++i) {
            ctx.fillRect(Math.round(swarm[i].x), Math.round(swarm[i].y), 1, 1);
        }
    }

    function getLink() {
        return link;
    }

    function runAnimation(interval) {
        var swarm = generateSwarm();
        setInterval(function () {
            previousSwarm = swarm;
            swarm = update(swarm);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(previousSwarm, "#0086ff99");
            draw(swarm, "#ff8600");
        }, interval);
    }

    return {
        getLink,
        runAnimation
    };
}
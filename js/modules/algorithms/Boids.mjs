export default function (canvas, colors) {
    var link = "https://en.wikipedia.org/wiki/Boids";
    var ctx = canvas.getContext("2d");
    var flockSize = 20;
    var maxSpeed = 10;
    var flock;

    console.log(`Boids: ${link}`);

    function Boid(position, velocity, canvas, leader) {
        var inertia = Math.random();
        var cohesion = Math.random();
        var alignment = Math.random();
        var freedom = Math.random();

        function getPosition() {
            return position;
        }

        function getVelocity() {
            return velocity;
        }

        function getSpeed() {
            return Math.sqrt(
                velocity.x * velocity.x +
                velocity.y * velocity.y
            );
        }

        function updatePosition() {
            position.x = (canvas.width + position.x + velocity.x) % canvas.width;
            position.y = (canvas.height + position.y + velocity.y) % canvas.height;
        }

        function updateVelocity(averagePosition, averageVelocity) {
            velocity.x = inertia * velocity.x +
                         +!leader * alignment * averageVelocity.x +
                         +!leader * cohesion * (averagePosition.x - position.x) +
                         freedom * (Math.random() * 2 * maxSpeed - maxSpeed);
            velocity.y = inertia * velocity.y +
                         +!leader * alignment * averageVelocity.y +
                         +!leader * cohesion * (averagePosition.y - position.y) +
                         freedom * (Math.random() * 2 * maxSpeed - maxSpeed);
            // TODO separation
            // maximize speed
            if (getSpeed() > maxSpeed) {
                velocity.x = velocity.x / getSpeed() * maxSpeed;
                velocity.y = velocity.y / getSpeed() * maxSpeed;
            }
        }

        function update(averagePosition, averageVelocity) {
            updatePosition();
            updateVelocity(averagePosition, averageVelocity);
        }

        return {
            getPosition,
            getVelocity,
            update
        };
    }

    function createFlock() {
        flock = [];
        for (var i = 0; i < flockSize; ++i) {
            let position = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height
            };
            let velocity = {x: 0, y: 0};
            flock.push(new Boid(position, velocity, canvas, !i));
        }
        return flock;
    }

    function update(flock) {
        let averagePosition = {x: 0, y: 0};
        let averageVelocity = {x: 0, y: 0};
        for (var i = 0; i < flock.length; ++i) {
            let boid = flock[i];
            averagePosition.x += boid.getPosition().x;
            averagePosition.y += boid.getPosition().y;
            averageVelocity.x += boid.getVelocity().x;
            averageVelocity.y += boid.getVelocity().y;
        }
        averagePosition.x /= flock.length;
        averagePosition.y /= flock.length;
        averageVelocity.x /= flock.length;
        averageVelocity.y /= flock.length;

        for (var i = 0; i < flock.length; ++i) {
            flock[i].update(averagePosition, averageVelocity);
        }
        return flock;
    }

    function draw(flock, fillStyle) {
        ctx.fillStyle = fillStyle;
        for (var i = 0; i < flock.length; ++i) {
            ctx.fillRect(Math.round(flock[i].getPosition().x), Math.round(flock[i].getPosition().y), 1, 1);
        }
    }

    function getLink() {
        return link;
    }

    function runAnimation(interval) {
        var flock = createFlock();
        setInterval(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = colors[0] + "99";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            draw(flock, colors[0]);
            flock = update(flock);
            draw(flock, colors[1]);
        }, interval);
    }

    return {
        getLink,
        runAnimation
    };
}
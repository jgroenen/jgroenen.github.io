export default function (canvas, colors) {
    var link = "https://en.wikipedia.org/wiki/Pythagoras_tree_(fractal)";
    var ctx = canvas.getContext("2d");

    //console.log(`Pythagoras Tree: ${link}`);

    function Edge(startPoint, radAngle, length, depth) {
        var endPoint = {
            x: Math.round(startPoint.x + Math.cos(radAngle) * length),
            y: Math.round(startPoint.y - Math.sin(radAngle) * length)
        };

        function getStartPoint() {
            return startPoint;
        }

        function getEndPoint() {
            return endPoint;
        }

        function getDepth() {
            return depth;
        }

        function getLength() {
            return length;
        }

        function getRadAngle() {
            return radAngle;
        }

        return {
            getStartPoint,
            getEndPoint,
            getDepth,
            getLength,
            getRadAngle
        };
    }

    function calculateNewEdges(edge) {
        if (edge.getDepth() > 10) return [];
        return [
            new Edge(
                edge.getEndPoint(),
                edge.getRadAngle() - Math.PI / 4,
                edge.getLength() / Math.SQRT2,
                edge.getDepth() + 1),
            new Edge(
                edge.getEndPoint(),
                edge.getRadAngle() + Math.PI / 4,
                edge.getLength() / Math.SQRT2,
                edge.getDepth() + 1)
        ];
    }

    function draw(edge, strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(edge.getStartPoint().x, edge.getStartPoint().y);
        ctx.lineTo(edge.getEndPoint().x, edge.getEndPoint().y);
        ctx.stroke();
    }

    function getLink() {
        return link;
    }

    function runAnimation(interval) {
        var edges = [
            new Edge(
                {x: canvas.width / 2, y: canvas.height},
                Math.PI / 2,
                canvas.height / 4,
                0)
        ];
        ctx.fillStyle = colors[0] + "99";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        var handle = setInterval(function () {
            let edge = edges.shift();
            if (!edge) {
                clearInterval(handle);
            } else {
                edges = edges.concat(calculateNewEdges(edge));
                draw(edge, colors[1]);
            }
        }, interval);
    }

    return {
        getLink,
        runAnimation
    };
}
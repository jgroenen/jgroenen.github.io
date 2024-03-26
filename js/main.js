import EasterEgg from './modules/EasterEgg.mjs';

var imageElement = document.getElementsByClassName("profile-image")[0];
var canvasElement = document.getElementsByTagName("canvas")[0];
if (canvasElement) {
    var easterEgg = new EasterEgg(canvasElement, ['#000000', '#00FF00']);
    imageElement.addEventListener('click', function () {
        if (easterEgg.isRunning()) return;
        var ctx = canvasElement.getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        canvasElement.style.height = canvasElement.height + 'px';
        easterEgg.start();
    });
}

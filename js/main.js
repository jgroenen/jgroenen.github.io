import EasterEgg from './modules/EasterEgg.mjs';

var imageElement = document.getElementsByClassName("profile-image")[0];
var canvasElement = document.getElementsByTagName("canvas")[0];
if (canvasElement) {
    var easterEgg = new EasterEgg(canvasElement, ['#fb5632', '#061569']);
    imageElement.addEventListener('click', function () {
        document.getElementsByClassName("banner-image")[0].style.display = "none";
        document.getElementById("easterEgg").style.display = "block";
        if (easterEgg.isRunning()) return;
        var ctx = canvasElement.getContext("2d");
        ctx.fillStyle = "#fb5632";
        ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        easterEgg.start();
    });
}
